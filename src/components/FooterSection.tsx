export default function FooterSection() {
  return (
    <footer className="border-t border-foreground/10 pt-8 pb-8 text-center text-sm text-muted-foreground">
        <p className="capitalize">&copy; {new Date().getFullYear()} All rights reserved. GMBR Creatives.</p>
    </footer>
  );
}