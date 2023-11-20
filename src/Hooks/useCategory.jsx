import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategory = () => {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["combineData"],
    queryFn: async () => {
      const res1 = await axios.get(
        "https://book-beacon-server.vercel.app/category"
      );
      const res2 = await axios.get(
        "https://book-beacon-server.vercel.app/books"
      );
      return { category: res1.data, books: res2.data };
    },
  });
  return { data, isLoading, isFetching };
};

export default useCategory;
