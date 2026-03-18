import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-display text-foreground mb-6">
            Ready for your next tattoo?
          </h2>
          <p className="text-body text-muted-foreground mb-10 max-w-lg mx-auto">
            Ink is a commitment. Let's make sure your next piece is something extraordinary.
          </p>
          <Button variant="hero" asChild>
            <a href="#booking">Book Your Session</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
