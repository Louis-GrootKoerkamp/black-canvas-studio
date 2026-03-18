import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import tattoo1 from "@/assets/tattoo-1.jpg";
import tattoo2 from "@/assets/tattoo-2.jpg";
import tattoo3 from "@/assets/tattoo-3.jpg";
import tattoo4 from "@/assets/tattoo-4.jpg";
import tattoo5 from "@/assets/tattoo-5.jpg";
import tattoo6 from "@/assets/tattoo-6.jpg";
import tattoo7 from "@/assets/tattoo-7.jpg";
import tattoo8 from "@/assets/tattoo-8.jpg";

type Category = "all" | "realism" | "blackgrey" | "custom";

interface TattooItem {
  src: string;
  label: string;
  index: string;
  category: Category[];
  tall?: boolean;
}

const tattoos: TattooItem[] = [
  { src: tattoo1, label: "Realism", index: "01", category: ["realism", "blackgrey"], tall: true },
  { src: tattoo2, label: "Portrait", index: "02", category: ["realism", "blackgrey"] },
  { src: tattoo3, label: "Realism", index: "03", category: ["realism", "custom"], tall: true },
  { src: tattoo4, label: "Custom", index: "04", category: ["custom", "blackgrey"] },
  { src: tattoo5, label: "Black & Grey", index: "05", category: ["realism", "blackgrey"], tall: true },
  { src: tattoo6, label: "Realism", index: "06", category: ["realism", "blackgrey"] },
  { src: tattoo7, label: "Custom", index: "07", category: ["custom", "realism"], tall: true },
  { src: tattoo8, label: "Black & Grey", index: "08", category: ["blackgrey", "custom"] },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Work", value: "all" },
  { label: "Realism", value: "realism" },
  { label: "Black & Grey", value: "blackgrey" },
  { label: "Custom", value: "custom" },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredTattoos = activeFilter === "all"
    ? tattoos
    : tattoos.filter((t) => t.category.includes(activeFilter));

  return (
    <section id="portfolio" className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-cta text-muted-foreground mb-4">Portfolio</p>
          <h2 className="text-section text-foreground">The Work</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`text-cta px-4 py-2 transition-all duration-300 border ${
                activeFilter === filter.value
                  ? "border-foreground/30 text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredTattoos.map((tattoo, i) => (
            <motion.div
              key={tattoo.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(tattoo.src)}
            >
              <img
                src={tattoo.src}
                alt={`Tattoo ${tattoo.label}`}
                className="w-full object-cover grayscale-hover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-cta text-foreground/70 text-[10px]">
                  [ {tattoo.index} / {tattoo.label.toUpperCase()} ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Tattoo detail"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
