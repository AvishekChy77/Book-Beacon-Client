import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { GridSkeleton } from "../../../Components/Loading";
import SectionHeading from "../../../Components/SectionHeading";
import { Section } from "../../../Components/Motion";
import Category from "./Category";

const Categories = () => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  // hide the section gracefully when the API is unreachable
  if (isError || (!isLoading && !categories?.length)) return null;

  return (
    <Section className="container mx-auto px-4 py-20">
      <SectionHeading
        eyebrow="Browse by genre"
        title={
          <>
            Find Your <span className="text-gradient">Reading Lane</span>
          </>
        }
        subtitle="From gripping thrillers to timeless classics — pick a shelf and dive in."
      />
      {isLoading ? (
        <GridSkeleton count={4} />
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories?.map((category, i) => (
            <Category key={category._id} category={category} index={i} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Categories;
