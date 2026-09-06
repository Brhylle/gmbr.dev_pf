import type { APIRoute } from 'astro';
import { validateUserInput, checkRateLimit, queryGemini } from '../../lib/ai/guardrails';

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    // 1. IP identification for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      clientAddress ||
      'anonymous';

    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      return new Response(
        JSON.stringify({
          error: 'You have reached the rate limit (10 messages per minute). Please wait a moment before sending another inquiry.',
        }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // 2. Body parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON payload.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { message, history } = body || {};

    // 3. Input validation & sanitization
    const validation = validateUserInput(message);
    if (!validation.valid || !validation.cleanMessage) {
      return new Response(
        JSON.stringify({ error: validation.error || 'Invalid message.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Query Google Gemini
    const safeHistory = Array.isArray(history) ? history : [];
    const answer = await queryGemini(validation.cleanMessage, safeHistory);

    return new Response(
      JSON.stringify({ answer }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in /api/chat:', error);

    // Provide friendly, descriptive response based on error type
    let errorMessage = error?.message || 'An error occurred while processing your request. Please try again later.';
    if (error?.message?.includes('GEMINI_API_KEY') || error?.message?.includes('.env')) {
      errorMessage = 'The chat assistant is temporarily offline (API key setup required in .env).';
    } else if (error?.message?.includes('401') || error?.message?.includes('UNAUTHENTICATED') || error?.message?.includes('invalid authentication')) {
      errorMessage = 'Invalid Gemini API key. Google AI Studio keys start with "AIzaSy...". Please verify your key at https://aistudio.google.com/app/apikey.';
    } else if (error?.message?.includes('429') || error?.message?.includes('quota')) {
      errorMessage = 'Free tier quota reached for the moment. Please try again shortly!';
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
