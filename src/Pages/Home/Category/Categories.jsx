import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Category from "./Category";

const Categories = () => {
  const {
    isLoading,
    isFetching,
    data: Categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        "https://book-beacon-server.vercel.app/category"
      );
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className=" max-w-4xl mx-auto p-5 mt-5 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="my-10 max-w-4xl p-4 mx-auto ">
      <h2 className=" text-3xl font-extrabold text-center lg:text-4xl">
        Categories
      </h2>
      {isFetching && (
        <div className=" max-w-4xl mx-auto p-5 mt-5 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {Categories?.map((Scategory) => (
          <Category key={Scategory._id} Scategory={Scategory}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
