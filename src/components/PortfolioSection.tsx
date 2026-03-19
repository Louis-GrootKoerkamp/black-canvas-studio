import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const allTattoos = [
  "/gallery/tattoo_1.jpg",
  "/gallery/tattoo_2.jpg",
  "/gallery/tattoo_3.jpg",
  "/gallery/tattoo_4.jpg",
];

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Marquee row component
  const MarqueeRow = ({ images, reverse = false, duration = "40s" }: { images: string[], reverse?: boolean, duration?: string }) => {
    return (
      <div 
        className="flex w-full overflow-hidden shrink-0 items-center justify-start [mask-image:linear-gradient(to_right,transparent,var(--background)_15%,var(--background)_85%,transparent)] select-none gap-6 py-4"
        style={{ "--gap": "1.5rem" } as React.CSSProperties}
      >
        <div 
          className={`flex shrink-0 justify-around gap-[var(--gap)] min-w-full animate-marquee ${reverse ? '[animation-direction:reverse]' : ''}`}
          style={{ "--duration": duration } as React.CSSProperties}
        >
          {images.map((src, i) => (
            <div 
              key={`marquee-item-1-${i}`} 
              className="relative aspect-[3/4] w-[280px] sm:w-[320px] md:w-[400px] shrink-0 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Tattoo Work ${i + 1}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
        <div 
          aria-hidden="true" 
          className={`flex shrink-0 justify-around gap-[var(--gap)] min-w-full animate-marquee ${reverse ? '[animation-direction:reverse]' : ''}`}
          style={{ "--duration": duration } as React.CSSProperties}
        >
          {images.map((src, i) => (
            <div 
              key={`marquee-item-2-${i}`} 
              className="relative aspect-[3/4] w-[280px] sm:w-[320px] md:w-[400px] shrink-0 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Tattoo Work ${i + 1}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-cta text-muted-foreground mb-4 font-mono tracking-widest uppercase text-sm">Portfolio</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display text-foreground leading-[1.1]">The Work</h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right pb-2">
            A selection of recent pieces ranging from fine line to dark realism. 
            Each piece is custom designed for the client.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col gap-6 -mx-4 sm:-mx-6 lg:mx-0 py-6">
        <MarqueeRow images={allTattoos} duration="60s" />
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-all duration-300 hover:rotate-90 z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={selectedImage}
              alt="Tattoo detail"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
