import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Thomas V.",
    text: "Lego is a master of contrast. The depth and detail in my portrait sleeve is absolutely unreal. Worth every minute of the wait.",
    verified: true,
  },
  {
    name: "Sarah M.",
    text: "From the first consultation to the final session, the experience was nothing short of premium. Lego truly listens and delivers beyond expectations.",
    verified: true,
  },
  {
    name: "Mark D.",
    text: "I've been tattooed by many artists, but Lego's realism work is on another level. The attention to shading and anatomical accuracy is insane.",
    verified: true,
  },
  {
    name: "Jessica K.",
    text: "The studio atmosphere, the professionalism, and most importantly — the art. My tattoo looks like a photograph on skin. Incredible.",
    verified: true,
  },
  {
    name: "Daniel R.",
    text: "Traveled from Germany specifically for Lego's work. The result exceeded every expectation. A true artist in every sense of the word.",
    verified: true,
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-spacing px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-cta text-muted-foreground mb-4">Reviews</p>
          <h2 className="text-section text-foreground">What Clients Say</h2>
        </motion.div>

        {/* Horizontal scroll strip */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[320px] max-w-[380px] flex-shrink-0 border-l border-border pl-6 py-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="text-body text-foreground">{review.name}</p>
                {review.verified && (
                  <p className="text-cta text-muted-foreground/50 text-[10px] mt-1">
                    Verified Client
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
