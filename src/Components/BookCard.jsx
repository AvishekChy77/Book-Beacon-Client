import { motion } from "framer-motion";
import { FaHeart, FaPen, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useWishlist from "../Hooks/useWishlist";
import BookRating from "../Pages/CategoryCollection/BookRating";
import BookCover from "./BookCover";
import { fadeUp } from "./Motion";

/**
 * Shared book card.
 * variant="grid" (default) — cover on top; variant="row" — cover on the left
 */
const BookCard = ({ book, showUpdate = false, variant = "grid" }) => {
  const { _id, authorName, image, name, category, rating, quantity } = book || {};
  const { has, toggle } = useWishlist();
  const saved = has(_id);
  const available = Number(quantity) > 0;

  const Heart = (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggle(_id);
      }}
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      className={`absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
        saved
          ? "bg-rose-500/90 text-white"
          : "bg-black/30 text-white hover:bg-rose-500/90"
      }`}
    >
      {saved ? <FaHeart /> : <FaRegHeart />}
    </button>
  );

  const Availability = (
    <span
      className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur ${
        available ? "bg-emerald-500/90 text-white" : "bg-rose-500/90 text-white"
      }`}
    >
      {available ? `${quantity} in stock` : "Out of stock"}
    </span>
  );

  if (variant === "row") {
    return (
      <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="group">
        <Link
          to={`/book/${_id}`}
          className="surface flex overflow-hidden p-0 hover:shadow-lift"
        >
          <div className="relative w-36 shrink-0 overflow-hidden sm:w-40">
            {Availability}
            <BookCover
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative flex flex-1 flex-col p-5">
            {Heart}
            <span className="chip w-fit">{category}</span>
            <h3 className="font-display mt-2 line-clamp-2 text-lg font-bold leading-snug">
              {name}
            </h3>
            <p className="mt-1 text-sm text-base-content/60">by {authorName}</p>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="text-gold-500">
                <BookRating rating={rating} />
              </span>
              <span className="text-xs font-semibold text-brand-700 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 dark:text-brand-300">
                View details →
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="group h-full">
      <div className="surface flex h-full flex-col overflow-hidden p-0 hover:shadow-lift">
        <Link to={`/book/${_id}`} className="relative block overflow-hidden">
          {Availability}
          {Heart}
          <div className="h-60 overflow-hidden bg-base-300/40">
            <BookCover
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <span className="chip w-fit">{category}</span>
          <Link to={`/book/${_id}`}>
            <h3 className="font-display mt-2 line-clamp-2 text-lg font-bold leading-snug transition-colors hover:text-brand-700 dark:hover:text-brand-300">
              {name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-base-content/60">by {authorName}</p>
          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="text-gold-500">
              <BookRating rating={rating} />
            </span>
            {showUpdate ? (
              <Link
                to={`/UpdateBook/${_id}`}
                className="btn btn-outline btn-sm gap-1.5 rounded-xl border-brand-700/40 text-brand-700 hover:border-brand-700 hover:bg-brand-700 hover:text-white dark:border-brand-300/40 dark:text-brand-300"
              >
                <FaPen className="text-xs" /> Update
              </Link>
            ) : (
              <Link
                to={`/book/${_id}`}
                className="btn btn-sm rounded-xl border-none bg-brand-700/10 text-brand-700 hover:bg-brand-700 hover:text-white dark:bg-brand-300/10 dark:text-brand-300 dark:hover:bg-brand-400 dark:hover:text-brand-950"
              >
                Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
