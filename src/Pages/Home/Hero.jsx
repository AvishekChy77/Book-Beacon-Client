import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaBookOpen, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

// small, CDN-optimised images (~100KB each instead of 1-2MB originals)
const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=60`;

const slides = [
  {
    image: IMG("photo-1507842217343-583bb7270b66"),
    caption: "Shelves full of possibility",
  },
  {
    image: IMG("photo-1512820790803-83ca734da794"),
    caption: "Find your next favourite",
  },
  {
    image: IMG("photo-1521587760476-6c12a4b040da"),
    caption: "A quiet corner to read",
  },
  {
    image: IMG("photo-1519682337058-a94d519337bc"),
    caption: "Stories for every mood",
  },
];

const words = ["Adventure", "Mystery", "Knowledge", "Wonder", "Romance"];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    const s = setInterval(() => setSlide((p) => (p + 1) % slides.length), 4500);
    const w = setInterval(() => setWord((p) => (p + 1) % words.length), 2600);
    // warm the browser cache so crossfades never show an empty frame
    slides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
    return () => {
      clearInterval(s);
      clearInterval(w);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* backdrop decorations */}
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -left-32 top-10 -z-10 size-96 animate-blob rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 size-96 animate-blob rounded-full bg-sage-400/20 blur-3xl [animation-delay:4s]" />
      <div className="absolute left-1/2 top-1/3 -z-10 size-64 animate-blob rounded-full bg-gold-400/10 blur-3xl [animation-delay:8s]" />

      <div className="container mx-auto grid items-center gap-12 px-4 py-16 md:py-20 lg:grid-cols-2 lg:py-24">
        {/* copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <FaBookOpen /> A modern library, open 24/7
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl xl:text-6xl"
          >
            Every Page Holds
            <br />
            a New{" "}
            <span className="relative inline-block min-w-[5ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[word]}
                  initial={{ opacity: 0, y: 18, rotateX: 60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -18, rotateX: -60 }}
                  transition={{ duration: 0.4 }}
                  className="text-gradient inline-block"
                >
                  {words[word]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-base-content/60 md:text-lg"
          >
            BookBeacon is your guiding light in the world of books. Browse a
            growing collection across every genre, borrow in one click and
            return on your schedule — reading has never been this easy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link to="/allBooks" className="btn-brand rounded-2xl px-7">
              Explore the Library <FaArrowRight />
            </Link>
            <Link
              to="/request"
              className="btn btn-outline rounded-2xl border-base-content/20 px-7 hover:border-brand-700 hover:bg-brand-700/10 hover:text-brand-700 dark:hover:border-brand-300 dark:hover:text-brand-300"
            >
              Request a Book
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["F", "A", "N", "S"].map((ch, i) => (
                <div
                  key={i}
                  className="grid size-10 place-items-center rounded-full border-2 border-base-100 bg-gradient-to-br from-brand-600 to-sage-500 text-sm font-bold text-white"
                >
                  {ch}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="flex items-center gap-1 font-bold">
                4.8 <FaStar className="text-gold-500" /> from readers
              </p>
              <p className="text-base-content/50">Trusted by a growing community</p>
            </div>
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* rotating frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift md:rotate-2">
            <AnimatePresence>
              <motion.img
                key={slide}
                src={slides[slide].image}
                alt={slides[slide].caption}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
            <AnimatePresence mode="wait">
              <motion.p
                key={slide}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display absolute bottom-6 left-6 right-6 text-xl font-bold text-white md:text-2xl"
              >
                {slides[slide].caption}
              </motion.p>
            </AnimatePresence>

            {/* slide dots */}
            <div className="absolute right-5 top-5 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === slide ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 hidden items-center gap-3 rounded-2xl p-4 shadow-soft sm:flex"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-brand-700/10 text-xl text-brand-700 dark:text-brand-300">
              📚
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none">1,000+</p>
              <p className="text-xs text-base-content/60">Books to explore</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute -bottom-6 -right-2 hidden items-center gap-3 rounded-2xl p-4 shadow-soft sm:flex md:-right-6"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-sage-400/20 text-xl">
              🔖
            </span>
            <div>
              <p className="text-lg font-extrabold leading-none">Borrow free</p>
              <p className="text-xs text-base-content/60">Return anytime</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
