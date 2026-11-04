import { motion } from "framer-motion";
import { FaHouse } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-base-100 px-4 text-base-content">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -left-24 top-20 size-80 animate-blob rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-20 size-80 animate-blob rounded-full bg-sage-400/20 blur-3xl [animation-delay:4s]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <motion.p
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl"
        >
          📚
        </motion.p>
        <h1 className="font-display mt-6 text-7xl font-bold md:text-9xl">
          4<span className="text-gradient">0</span>4
        </h1>
        <h2 className="font-display mt-4 text-2xl font-bold md:text-3xl">
          This page is off the shelf
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-base-content/60">
          {error?.statusText || error?.message || "The page you're looking for was borrowed and never returned."}
        </p>
        <Link to="/" className="btn-brand mt-8 rounded-2xl px-8">
          <FaHouse /> Back to the library
        </Link>
      </motion.div>
    </div>
  );
}
