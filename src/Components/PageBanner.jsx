import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** Shared gradient header used at the top of inner pages */
const PageBanner = ({ eyebrow, title, subtitle, crumbs = [] }) => {
  return (
    <div className="relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-950 via-brand-800 to-brand-700 px-6 py-14 text-center text-white md:py-16">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-20 -top-20 size-64 rounded-full bg-sage-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-brand-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {eyebrow && (
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sage-200 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display mt-4 text-3xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 md:text-base">
            {subtitle}
          </p>
        )}
        {crumbs.length > 0 && (
          <nav className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-white/60">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span>/</span>
                <span className="text-sage-300">{c}</span>
              </span>
            ))}
          </nav>
        )}
      </motion.div>
    </div>
  );
};

export default PageBanner;
