const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-lg text-foreground">Lego</p>
        <p className="text-cta text-muted-foreground/50">
          © {new Date().getFullYear()} Lego Tattoos. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
