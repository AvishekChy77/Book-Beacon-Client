import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../Components/Motion";

const icons = {
  Fiction: "🎭",
  "Mystery & Thriller": "🕵️",
  "Non-Fiction": "🧠",
  "Science Fiction & Fantasy": "🚀",
};

// The image URLs stored in the category collection point to an expired image
// host, so each genre gets a curated CDN-optimized image instead.
const IMG = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=60`;
const images = {
  Fiction: IMG("photo-1474932430478-367dbb6832c1"),
  "Mystery & Thriller": IMG("photo-1509248961158-e54f6934749c"),
  "Non-Fiction": IMG("photo-1456513080510-7bf3a84b82f8"),
  "Science Fiction & Fantasy": IMG("photo-1419242902214-272b3f66ee7a"),
};

const Category = ({ category }) => {
  const { _id, category: name } = category;
  const image = images[name] || category.image;

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group h-full">
      <Link
        to={`/category/${_id}`}
        className="relative block h-72 overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-lift"
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-transparent" />

        <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-2xl bg-white/20 text-2xl backdrop-blur transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          {icons[name] || "📖"}
        </span>

        <div className="absolute inset-x-5 bottom-5">
          <h3 className="font-display text-xl font-bold text-white">{name}</h3>
          <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-sage-300 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            Explore collection <FaArrowRight />
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Category;
