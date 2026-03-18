import { motion } from "framer-motion";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <img
              src={artistPortrait}
              alt="Stubborn Tattoo Studio Artist"
              className="w-full object-cover grayscale"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-cta text-muted-foreground mb-4">The Artist</p>
            <h2 className="text-section text-foreground mb-8">
              I don't just tattoo. I translate your narrative into anatomy.
            </h2>
            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Welcome to Stubborn Tattoo Studio. We've been tattooing since 2015, specializing in hyper-realistic black and grey work. Every piece we create is a collaboration — your story, our craft, permanently fused.
              </p>
              <p>
                Based at Stubborn Tattoo Studio in Utrecht, I approach each project with obsessive attention to detail. From the initial consultation to the final needle stroke, I'm committed to creating work that transcends skin.
              </p>
              <p>
                My philosophy is simple: ink is a commitment. Respect the process, trust the craft, and the result will speak for itself. I work exclusively by appointment to give every client the focused attention they deserve.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
