import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, RotateCcw, Bot, ShieldCheck, AlertCircle, FileText, Download, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  'Can I download your resume?',
  'Who is Jhei?',
  'What is your primary tech stack?',
  'Where are you based and how do I contact you?',
];

export default function JheiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi there! 👋 I'm **Jhei**, Jheizon's portfolio AI assistant. Ask me anything about his skills, projects, experience, or how to get in touch!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    if (messageContent.length > 350) {
      setErrorMessage('Please keep your message under 350 characters.');
      return;
    }

    setErrorMessage(null);
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: messageContent,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          history: updatedMessages
            .filter((m) => m.id !== 'welcome')
            .slice(-4)
            .map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to get response');
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        text: "Hi!👋 What would you like to know about Jheizon?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setErrorMessage(null);
  };

  // Robust Markdown parser for bold, lists, links, and line breaks
  const renderFormattedText = (text: string) => {
    const formatInline = (str: string) => {
      // Split by markdown link pattern [label](url)
      const linkParts = str.split(/(\[[^\]]+\]\([^)]+\))/g);
      return linkParts.map((lPart, lIdx) => {
        const linkMatch = lPart.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const url = linkMatch[2];
          const label = linkMatch[1];
          const isPdfDocument = url.endsWith('.pdf') || url.includes('Resume.pdf');

          if (isPdfDocument) {
            return (
              <div
                key={`file-card-${lIdx}`}
                className="my-3 rounded-xl border border-white/15 bg-zinc-950/80 p-3.5 shadow-xl backdrop-blur-md not-prose"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400 border border-red-500/25">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-semibold text-white tracking-tight truncate">
                          Dela_Cruz_Resume.pdf
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-0.5">
                          <ShieldCheck className="w-2.5 h-2.5" /> Verified Document
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">PDF • Official Resume • 182 KB</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 pt-2.5 border-t border-white/10">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-200 hover:text-white border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    <span>View PDF</span>
                  </a>
                  <a
                    href={url}
                    download="Dela_Cruz_Jheizon_Brhylle_Resume.pdf"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium shadow-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            );
          }

          return (
            <a
              key={`link-${lIdx}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors font-medium break-all"
            >
              {label}
            </a>
          );
        }

        // Format bold **text**
        return lPart.split(/(\*\*.*?\*\*)/g).map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={`b-${pIdx}`} className="font-semibold text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });
      });
    };

    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={idx} className="h-1.5" />;
      }

      // If the line contains the PDF resume link, render dedicated file card directly
      const pdfMatch = trimmed.match(/\[([^\]]+)\]\(([^)]+\.pdf)\)/i);
      if (pdfMatch) {
        const url = pdfMatch[2];
        return (
          <div
            key={`file-card-${idx}`}
            className="my-3 rounded-xl border border-white/15 bg-zinc-950/90 p-3.5 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400 border border-red-500/25">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-semibold text-white tracking-tight truncate">
                      Dela_Cruz_Resume.pdf
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5" /> Verified Document
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-0.5">PDF • Official Resume • 182 KB</p>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 pt-2.5 border-t border-white/10">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-200 hover:text-white border border-white/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                <span>View PDF</span>
              </a>
              <a
                href={url}
                download="Dela_Cruz_Jheizon_Brhylle_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs text-white font-medium shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        );
      }

      const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
      const content = isBullet ? trimmed.replace(/^[-•*]\s+/, '') : line;

      if (isBullet) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1 pl-1">
            <span className="text-emerald-400 mt-1 text-xs leading-none">•</span>
            <span className="flex-1 text-zinc-200">{formatInline(content)}</span>
          </div>
        );
      }

      return (
        <div key={idx} className={idx > 0 ? 'mt-2 text-zinc-200 leading-relaxed' : 'text-zinc-200 leading-relaxed'}>
          {formatInline(content)}
        </div>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative group"
            >
              {/* Online Pulse Indicator */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-zinc-950"></span>
              </span>

              <button
                id="jhei-chat-toggle-btn"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-900/90 text-white border border-white/20 shadow-xl backdrop-blur-lg hover:border-emerald-400/50 hover:bg-zinc-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                aria-label="Open Jhei AI Assistant"
              >
                <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium tracking-wide">Ask Jhei</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col rounded-2xl bg-zinc-950/95 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-white/10 bg-zinc-900/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-900"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-semibold text-white tracking-tight">Jhei</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      AI
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">Portfolio Assistant</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-zinc-400">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Security Guardrail Badge Banner */}
            <div className="px-3.5 py-1.5 bg-zinc-900/40 border-b border-white/5 flex items-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">Grounded knowledge with security & PII guardrails</span>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${msg.role === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-zinc-900/80 text-zinc-200 border border-white/10 rounded-bl-none'
                      }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="bg-zinc-900/80 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Chips */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-white/5 bg-zinc-950/40">
                {STARTER_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 border-t border-white/10 bg-zinc-900/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative flex items-center"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  maxLength={350}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about skills, experience, or contact..."
                  className="w-full bg-zinc-900/90 border border-white/10 rounded-xl pl-3.5 pr-20 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 transition-colors"
                  disabled={isLoading}
                />
                <div className="absolute right-2 flex items-center gap-1.5">
                  <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
                    {input.length}/350
                  </span>
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-40 disabled:hover:bg-emerald-600 transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
