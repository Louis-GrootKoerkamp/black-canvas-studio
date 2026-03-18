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
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 md:pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-cta text-muted-foreground mb-4">
            Permanent Realism
          </p>
          <h1 className="text-display text-foreground mb-6">
            by Lego
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
