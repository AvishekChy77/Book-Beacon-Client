import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBookOpen,
  FaCalendarCheck,
  FaHeart,
  FaLayerGroup,
  FaRegHeart,
  FaUserPen,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading";
import { PageTransition } from "../../Components/Motion";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useWishlist from "../../Hooks/useWishlist";
import BookRating from "../CategoryCollection/BookRating";

const BookDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { has, toggle } = useWishlist();
  const [quant, setQuant] = useState();
  const [count, setCount] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["book-details", id, user?.email],
    queryFn: async () => {
      const [resBorrowed, resBook] = await Promise.all([
        axiosPublic.get(`/borrow?email=${user.email}`),
        axiosPublic.get(`/books/${id}`),
      ]);
      setQuant(resBook.data?.quantity);
      setCount(0);
      return { book: resBook.data, userData: resBorrowed.data };
    },
  });

  if (isLoading) return <Loading />;

  const book = data?.book;
  const { _id, authorName, image, name, category, rating, quantity, summary } =
    book || {};
  const previouslyBorrowed = data?.userData?.find((b) => b.name === name);
  const saved = has(_id);
  const available = Number(quant) > 0;

  const handleModal = () => document.getElementById(`${_id}`).showModal();

  const handleBorrow = async () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const purchasedDate = `${year}-${month}-${day}`;
    const returnDate = document.getElementById("returnDate").value;

    const userData = {
      email: user.email,
      userName: user.displayName,
      name,
      image,
      category,
      returnDate,
      purchasedDate,
    };

    const res = await fetch("https://book-beacon-server.vercel.app/borrowed", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.insertedId) {
      Swal.fire({
        title: "Happy reading!",
        text: `"${name}" is yours until ${returnDate}.`,
        icon: "success",
        confirmButtonText: "Great",
        confirmButtonColor: "#016A70",
      });
      setQuant(quant - 1);
      setCount(1);
      await fetch(`https://book-beacon-server.vercel.app/books/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ quantity: quantity - 1 }),
      });
    }
  };

  return (
    <PageTransition>
      {/* blurred backdrop header */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-2xl"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-base-100/80 backdrop-blur-sm dark:bg-base-100/85" />

        <div className="container relative mx-auto grid gap-12 px-4 py-16 lg:grid-cols-[minmax(0,380px)_1fr] lg:py-20">
          {/* cover */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-64 sm:w-72 lg:w-full lg:max-w-sm"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-sage-400/30 blur-2xl" />
            <motion.img
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt={name}
              className="w-full rounded-3xl shadow-lift"
            />
            <span
              className={`absolute -right-3 -top-3 rounded-full px-4 py-1.5 text-xs font-bold text-white shadow-soft ${
                available ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {available ? `${quant} available` : "Out of stock"}
            </span>
          </motion.div>

          {/* info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <span className="chip w-fit">
              <FaLayerGroup /> {category}
            </span>
            <h1 className="font-display mt-4 text-3xl font-bold leading-tight md:text-5xl">
              {name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-base-content/60">
              <FaUserPen className="text-brand-700 dark:text-brand-300" /> by{" "}
              <span className="font-semibold text-base-content">{authorName}</span>
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xl text-gold-500">
                <BookRating rating={rating} />
              </span>
              <span className="text-sm font-semibold text-base-content/60">
                {rating} / 5
              </span>
            </div>

            {summary && (
              <p className="mt-6 max-w-2xl leading-relaxed text-base-content/70">
                {summary.length > 280 ? `${summary.slice(0, 280)}…` : summary}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                disabled={!available || previouslyBorrowed || count === 1}
                onClick={handleModal}
                className="btn-brand rounded-2xl px-8 disabled:opacity-40"
              >
                <FaCalendarCheck />
                {previouslyBorrowed || count === 1 ? "Already borrowed" : "Borrow this book"}
              </motion.button>

              <Link
                to={`/read/${_id}`}
                className="btn btn-outline rounded-2xl border-base-content/20 px-8 hover:border-brand-700 hover:bg-brand-700/10 hover:text-brand-700 dark:hover:border-brand-300 dark:hover:text-brand-300"
              >
                <FaBookOpen /> Read this book
              </Link>

              <button
                onClick={() => toggle(_id)}
                aria-label="Toggle wishlist"
                className={`grid size-12 place-items-center rounded-2xl border transition-all duration-300 hover:scale-110 ${
                  saved
                    ? "border-rose-500 bg-rose-500 text-white"
                    : "border-base-content/20 text-rose-500 hover:border-rose-500"
                }`}
              >
                {saved ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>

            {previouslyBorrowed && (
              <p className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400">
                You already have this book checked out — return it before borrowing again.
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* borrow modal */}
      <dialog id={`${_id}`} className="modal">
        <div className="modal-box rounded-3xl">
          <h3 className="font-display text-center text-2xl font-bold">
            Great <span className="text-gradient">Choice!</span>
          </h3>
          <p className="mt-2 text-center text-sm text-base-content/60">
            When would you like to return “{name}”?
          </p>
          <div className="modal-action justify-center">
            <form method="dialog" className="w-full max-w-xs">
              <label className="label-modern">Return date</label>
              <input
                required
                id="returnDate"
                name="returnDate"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="input-modern"
              />
              <div className="mt-5 flex gap-3">
                <button className="btn btn-ghost flex-1 rounded-xl">Cancel</button>
                <button onClick={handleBorrow} className="btn-brand flex-1 rounded-xl">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </PageTransition>
  );
};

export default BookDetails;
