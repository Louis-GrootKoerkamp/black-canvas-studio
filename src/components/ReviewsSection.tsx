import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Benedikt Stroher",
    text: "Awesome place to get your tattoo. Lego is an insane artist and creates incredible realism tattoos. He works with you to get you what you want and then makes sure you have ink you can be proud of for the rest of your life. Lego is an absolute professional and was very kind. Can’t wait to come back for another piece.",
    verified: true,
  },
  {
    name: "Alex G.",
    text: "Amazing studio! I came here to get tattooed by John, one of Lego's good friends and had a great time at the shop. Lego is an excellent host, took great care of me, and made me feel at home. ... I'd go back in a heartbeat. Thank you for your hospitality Lego!",
    verified: true,
  },
  {
    name: "Jamie Saunders",
    text: "I recently had the pleasure of getting a tattoo from LEGO and I couldn’t be happier with the results. He was very professional and made me feel comfortable throughout the entire process. His attention to detail and high-quality work really impressed me.",
    verified: true,
  },
  {
    name: "Rens Rutten",
    text: "Had a really great experience, nice studio and super relaxed atmosphere, that also the artist is creating. Had a lot of nice talks and laughs, and even more the result of the tattoo is amazing, couldn’t imagine it any better. It’s just really a piece of art!",
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
