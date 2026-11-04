import { motion } from "framer-motion";
import { fadeUp } from "./Motion";

const SectionHeading = ({ eyebrow, title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <motion.span variants={fadeUp} className="chip uppercase tracking-widest">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.6, delay: 0.2 } },
        }}
        className={`mt-4 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-brand-700 to-sage-400 ${
          center ? "mx-auto origin-center" : ""
        }`}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 max-w-2xl text-sm leading-relaxed text-base-content/60 md:text-base ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
