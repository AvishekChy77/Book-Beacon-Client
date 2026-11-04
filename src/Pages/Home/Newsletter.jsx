import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Section } from "../../Components/Motion";

const Newsletter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("You're on the list! Happy reading 📚");
    e.target.reset();
  };

  return (
    <Section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 px-6 py-16 text-center text-white md:px-16"
      >
        <div className="bg-grid absolute inset-0 opacity-20" />
        <span className="absolute -left-10 top-6 animate-float-slow text-6xl opacity-20">📖</span>
        <span className="absolute right-8 top-10 animate-float text-5xl opacity-20">✨</span>
        <span className="absolute bottom-8 left-1/4 animate-float text-4xl opacity-20 [animation-delay:2s]">
          🔖
        </span>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sage-200">
            Stay in the loop
          </span>
          <h2 className="font-display mt-5 text-3xl font-bold md:text-4xl">
            New Arrivals, Straight to Your Inbox
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            Join the BookBeacon newsletter for fresh titles, staff picks and
            reading challenges. No spam — just stories.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="input w-full rounded-2xl border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-sage-300 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn rounded-2xl border-none bg-sage-400 px-7 text-brand-950 hover:bg-sage-300"
            >
              Subscribe <FaPaperPlane />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
};

export default Newsletter;
