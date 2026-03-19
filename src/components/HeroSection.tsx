import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tattoo artistry in progress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Liquid Glass Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="liquid-orb bg-white/10 w-[30rem] md:w-[40rem] h-[30rem] md:h-[40rem] -top-[10%] -left-[10%] animate-float" style={{ animationDelay: "0s" }} />
          <div className="liquid-orb bg-slate-300/10 w-[25rem] md:w-[35rem] h-[25rem] md:h-[35rem] top-[20%] right-[0%] animate-float" style={{ animationDelay: "2s", animationDuration: "8s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-12 md:pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12"
        >
          <p className="text-cta text-muted-foreground mb-4">
            Realistic Black &amp; Grey Tattoos
          </p>
          <h1 className="text-display text-foreground mb-6">
            Stubborn Tattoo Studio
          </h1>
          <p className="text-body text-muted-foreground mb-10 max-w-md mx-auto">
            Realistic black &amp; grey tattoos. Each piece is a one-of-one collaboration between artist and canvas.
          </p>
          <Button variant="hero" asChild>
            <a href="#booking">Request a Session</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
