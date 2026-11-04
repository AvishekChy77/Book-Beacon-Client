import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendarDay, FaRotateLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import EmptyState from "../../Components/EmptyState";
import { GridSkeleton } from "../../Components/Loading";
import { fadeUp, PageTransition, stagger } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const daysLeft = (returnDate) => {
  if (!returnDate) return null;
  const diff = new Date(returnDate) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ["borrowed", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/borrow?email=${user.email}`);
      setBorrowedBooks(res.data);
      return res.data;
    },
  });

  const handleReturn = (id, name) => {
    Swal.fire({
      title: "Return this book?",
      text: `"${name}" will go back on the shelf for other readers.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#016A70",
      cancelButtonColor: "#e11d48",
      confirmButtonText: "Yes, return it",
    }).then((result) => {
      if (!result.isConfirmed) return;
      fetch(`https://book-beacon-server.vercel.app/borrowed/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.deletedCount > 0) {
            // restore the quantity
            const bookArray = await axiosPublic.get("/books");
            const book = bookArray?.data?.find((b) => b.name === name);
            if (book) {
              await fetch(
                `https://book-beacon-server.vercel.app/books/${book._id}`,
                {
                  method: "PATCH",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ quantity: book.quantity + 1 }),
                }
              );
            }
            Swal.fire({
              title: "Returned!",
              text: "Thanks for bringing it back on time.",
              icon: "success",
              confirmButtonColor: "#016A70",
            });
            setBorrowedBooks((prev) => prev.filter((b) => b._id !== id));
          }
        });
    });
  };

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Your bookshelf"
        title="Borrowed Books"
        subtitle="Everything you've checked out, with return dates at a glance."
        crumbs={["Borrowed Books"]}
      />

      {isLoading ? (
        <div className="mt-10">
          <GridSkeleton count={3} />
        </div>
      ) : borrowedBooks.length === 0 ? (
        <EmptyState
          icon="📖"
          title="No books borrowed yet"
          message="Your shelf is empty — browse the library and borrow your first book."
          actionText="Browse books"
          actionTo="/allBooks"
        />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {borrowedBooks.map((book) => {
            const left = daysLeft(book.returnDate);
            const overdue = left !== null && left < 0;
            return (
              <motion.div
                key={book._id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="surface group flex overflow-hidden p-0 hover:shadow-lift"
              >
                <div className="relative w-32 shrink-0 overflow-hidden sm:w-36">
                  <img
                    src={book.image}
                    alt={book.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="chip w-fit">{book.category}</span>
                  <h3 className="font-display mt-2 line-clamp-2 font-bold leading-snug">
                    {book.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-base-content/60">
                    <p className="flex items-center gap-2">
                      <FaCalendarDay className="text-brand-700 dark:text-brand-300" />
                      Borrowed: <span className="font-semibold">{book.purchasedDate}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRotateLeft className="text-brand-700 dark:text-brand-300" />
                      Return by: <span className="font-semibold">{book.returnDate}</span>
                    </p>
                  </div>

                  {left !== null && (
                    <span
                      className={`mt-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                        overdue
                          ? "bg-rose-500/20 text-rose-500"
                          : left <= 3
                          ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                          : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {overdue
                        ? `${Math.abs(left)} day${Math.abs(left) === 1 ? "" : "s"} overdue`
                        : `${left} day${left === 1 ? "" : "s"} left`}
                    </span>
                  )}

                  <button
                    onClick={() => handleReturn(book._id, book.name)}
                    className="btn btn-sm mt-auto w-fit rounded-xl border-none bg-brand-700/10 text-brand-700 hover:bg-brand-700 hover:text-white dark:bg-brand-300/10 dark:text-brand-300 dark:hover:bg-brand-400 dark:hover:text-brand-950"
                  >
                    Return book
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </PageTransition>
  );
};

export default BorrowedBooks;
