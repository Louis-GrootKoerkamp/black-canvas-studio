import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const placements = [
  "Arm", "Forearm", "Upper Arm", "Shoulder",
  "Back", "Chest", "Ribs", "Leg",
  "Calf", "Thigh", "Hand", "Other",
];

const BookingSection = () => {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    idea: "",
    placement: "",
    size: 15,
  });

  const updateField = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const slideVariants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  };

  if (submitted) {
    return (
      <section id="booking" className="section-spacing px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="w-16 h-16 text-foreground mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-section text-foreground mb-4">Narrative Received</h2>
            <p className="text-body text-muted-foreground mb-8">
              Stubborn Tattoo Studio will review your request and respond within 48 hours. In the meantime, feel free to browse more work or follow on Instagram.
            </p>
            <div className="surface-elevated p-6 text-left space-y-3">
              <p className="text-cta text-muted-foreground mb-4">What Happens Next</p>
              <div className="flex gap-4 items-start">
                <span className="text-cta text-muted-foreground">01</span>
                <p className="text-body text-muted-foreground">Review — Lego reviews your idea and references</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-cta text-muted-foreground">02</span>
                <p className="text-body text-muted-foreground">Consultation — A follow-up to discuss details and pricing</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-cta text-muted-foreground">03</span>
                <p className="text-body text-muted-foreground">Session — Your appointment is scheduled and confirmed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-spacing px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-cta text-muted-foreground mb-4">Book</p>
          <h2 className="text-section text-foreground">Initialize Your Consultation</h2>
        </motion.div>

        {/* Progress */}
        <div className="flex gap-2 mb-10">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-[2px] flex-1 transition-colors duration-500 ${
                i <= step ? "bg-foreground" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Steps */}
        <div className="surface-elevated p-6 md:p-10 min-h-[320px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <p className="text-cta text-muted-foreground">Step 01 — Your Details</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full bg-transparent border-b border-border text-foreground text-body py-3 focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full bg-transparent border-b border-border text-foreground text-body py-3 focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full bg-transparent border-b border-border text-foreground text-body py-3 focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <p className="text-cta text-muted-foreground">Step 02 — The Vision</p>
                <textarea
                  placeholder="Describe your tattoo idea..."
                  value={form.idea}
                  onChange={(e) => updateField("idea", e.target.value)}
                  rows={5}
                  className="w-full bg-transparent border-b border-border text-foreground text-body py-3 focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50 resize-none"
                />
                <div>
                  <p className="text-body text-muted-foreground mb-3">Reference Images</p>
                  <div className="border border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-foreground/20 transition-colors">
                    <p className="text-body text-muted-foreground/50">
                      Drag & drop or click to upload
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <p className="text-cta text-muted-foreground">Step 03 — Placement & Size</p>
                <div>
                  <p className="text-body text-muted-foreground mb-3">Body Placement</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {placements.map((p) => (
                      <button
                        key={p}
                        onClick={() => updateField("placement", p)}
                        className={`text-cta text-[10px] py-2 px-3 border transition-all duration-300 ${
                          form.placement === p
                            ? "border-foreground/40 text-foreground"
                            : "border-border text-muted-foreground hover:border-foreground/20"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-body text-muted-foreground mb-3">
                    Size: <span className="text-foreground">{form.size} cm</span>
                  </p>
                  <input
                    type="range"
                    min={5}
                    max={60}
                    value={form.size}
                    onChange={(e) => updateField("size", Number(e.target.value))}
                    className="w-full accent-foreground"
                  />
                  <div className="flex justify-between text-cta text-muted-foreground/40 mt-1">
                    <span>5 cm</span>
                    <span>60 cm</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {step > 0 ? (
            <Button variant="steel" onClick={prevStep}>
              Back
            </Button>
          ) : (
            <div />
          )}
          {step < 2 ? (
            <Button variant="hero" onClick={nextStep}>
              Continue
            </Button>
          ) : (
            <Button variant="hero" onClick={handleSubmit}>
              Request a Session
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
