import { useQuery } from "@tanstack/react-query";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["home-stats"],
    queryFn: async () => {
      const [books, categories] = await Promise.all([
        axiosPublic.get("/books"),
        axiosPublic.get("/category"),
      ]);
      return { books: books.data?.length || 0, categories: categories.data?.length || 0 };
    },
  });

  const stats = [
    { icon: "📚", value: data?.books || 120, label: "Books in collection", suffix: "+" },
    { icon: "🗂️", value: data?.categories || 4, label: "Curated categories" },
    { icon: "👥", value: 2500, label: "Happy readers", suffix: "+" },
    { icon: "🕑", value: 24, label: "Hours open, every day", suffix: "/7" },
  ];

  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative -mt-2 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-950 via-brand-800 to-brand-700 px-6 py-10 shadow-lift md:px-10"
      >
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ icon, value, label, suffix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl">{icon}</span>
              <p className="font-display mt-2 text-3xl font-bold text-white md:text-4xl">
                <CountUp to={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-xs font-medium text-white/60 md:text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
