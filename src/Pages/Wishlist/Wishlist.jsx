import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa6";
import BookCard from "../../Components/BookCard";
import EmptyState from "../../Components/EmptyState";
import { GridSkeleton } from "../../Components/Loading";
import { PageTransition, stagger } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useWishlist from "../../Hooks/useWishlist";

const Wishlist = () => {
  const axiosPublic = useAxiosPublic();
  const { wishlist } = useWishlist();

  const { data: books, isLoading, isError, refetch } = useQuery({
    queryKey: ["all-books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/books");
      return res.data;
    },
  });

  const saved = books?.filter((b) => wishlist.includes(b._id)) || [];

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Saved for later"
        title="My Wishlist"
        subtitle="Books you've bookmarked with a ❤️ — they stay saved on this device."
        crumbs={["Wishlist"]}
      />

      {isLoading ? (
        <div className="mt-10">
          <GridSkeleton count={4} />
        </div>
      ) : isError ? (
        <EmptyState
          icon="📡"
          title="The library is unreachable"
          message="We couldn't load your saved books — the database may be waking up. Please try again in a moment."
          actionText="Try again"
          onAction={() => refetch()}
        />
      ) : saved.length === 0 ? (
        <EmptyState
          icon={<FaHeart className="text-rose-500" />}
          title="Your wishlist is empty"
          message="Tap the heart on any book to save it here for later."
          actionText="Find books to love"
          actionTo="/allBooks"
        />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {saved.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Wishlist;
