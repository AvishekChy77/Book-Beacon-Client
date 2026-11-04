import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import BookCard from "../../Components/BookCard";
import EmptyState from "../../Components/EmptyState";
import { GridSkeleton } from "../../Components/Loading";
import { PageTransition, stagger } from "../../Components/Motion";
import PageBanner from "../../Components/PageBanner";
import useCategory from "../../Hooks/useCategory";

const CategoryCollection = () => {
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useCategory();

  const categories = data?.category;
  const sCategory = categories?.find((c) => c._id === id);
  const books = data?.books?.filter((b) => b.category === sCategory?.category);

  return (
    <PageTransition className="container mx-auto px-4 pb-20">
      <PageBanner
        eyebrow="Category"
        title={sCategory?.category || "Collection"}
        subtitle={`Explore our hand-picked collection of ${
          sCategory?.category || ""
        } books.`}
        crumbs={["Categories", sCategory?.category || "…"]}
      />

      {isLoading ? (
        <div className="mt-10">
          <GridSkeleton count={8} />
        </div>
      ) : isError ? (
        <EmptyState
          icon="📡"
          title="The library is unreachable"
          message="We couldn't load this collection — the database may be waking up. Please try again in a moment."
          actionText="Try again"
          onAction={() => refetch()}
        />
      ) : !books?.length ? (
        <EmptyState
          icon="📚"
          title="Nothing on this shelf yet"
          message="We're still stocking this category — check back soon or browse all books."
          actionText="Browse all books"
          actionTo="/allBooks"
        />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {books.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </motion.div>
      )}
    </PageTransition>
  );
};

export default CategoryCollection;
