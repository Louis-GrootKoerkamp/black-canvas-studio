import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cta text-muted-foreground mb-4">Contact</p>
            <h2 className="text-section text-foreground mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <a
                href="mailto:info@legotattoos.com"
                className="flex items-center gap-4 text-body text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail size={18} className="text-accent group-hover:text-foreground transition-colors" />
                info@legotattoos.com
              </a>
              <a
                href="https://www.instagram.com/legotattoos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-body text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Instagram size={18} className="text-accent group-hover:text-foreground transition-colors" />
                @legotattoos
              </a>
              <a
                href="https://www.facebook.com/legotattoos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-body text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Facebook size={18} className="text-accent group-hover:text-foreground transition-colors" />
                Lego Tattoos
              </a>
              <div className="flex items-start gap-4 text-body text-muted-foreground">
                <MapPin size={18} className="text-accent mt-0.5" />
                <div>
                  <p>Stubborn Tattoo Studio</p>
                  <p>Utrecht, Netherlands</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="steel" asChild>
                <a
                  href="https://www.google.com/maps/place/Stubborn+Tattoo+Studio/@52.0990846,5.044666,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden surface-elevated"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.8!2d5.044666!3d52.0990846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f4eafbc179f%3A0x7b9c2a89ea0a352d!2sStubborn%20Tattoo%20Studio!5e0!3m2!1sen!2snl!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(1) invert(1) contrast(0.8) opacity(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stubborn Tattoo Studio Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
