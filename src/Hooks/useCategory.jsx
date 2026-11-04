import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["combineData"],
    queryFn: async () => {
      const [res1, res2] = await Promise.all([
        axiosPublic.get("/category"),
        axiosPublic.get("/books"),
      ]);
      return { category: res1.data, books: res2.data };
    },
  });
  return { data, isLoading, isFetching, isError, refetch };
};

export default useCategory;
