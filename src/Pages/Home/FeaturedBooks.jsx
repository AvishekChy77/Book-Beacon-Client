import { useQuery } from "@tanstack/react-query";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BookCard from "../../Components/BookCard";
import { GridSkeleton } from "../../Components/Loading";
import { Reveal, Section } from "../../Components/Motion";
import SectionHeading from "../../Components/SectionHeading";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const FeaturedBooks = () => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, data: books } = useQuery({
    queryKey: ["featured-books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/books");
      return res.data;
    },
  });

  const featured = [...(books || [])]
    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    .slice(0, 8);

  return (
    <Section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-base-200/50" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Reader favourites"
          title={
            <>
              Top-Rated <span className="text-gradient">Books This Week</span>
            </>
          }
          subtitle="The highest-rated picks from our shelves, loved by the BookBeacon community."
        />

        {isLoading ? (
          <GridSkeleton count={8} />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}

        <Reveal className="mt-12 text-center" delay={0.2}>
          <Link to="/allBooks" className="btn-brand rounded-2xl px-8">
            View the full library <FaArrowRight />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
};

export default FeaturedBooks;
