import { useParams } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import Book from "./Book";

const CategoryCollection = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useCategory();
  console.log(data);
  const categories = data?.category;
  const sCategory = categories?.find((c) => c._id === id);
  const books = data?.books;
  console.log(sCategory, books, categories);

  const sCategoryBooks = books?.filter(
    (b) => b.category === sCategory.category
  );
  console.log(sCategory, books, sCategoryBooks);

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
        {sCategory.category}
      </h2>
      <p className="text-xl text-center my-2">
        Explore our vast collection of {sCategory.category} books
      </p>
      {isFetching && (
        <div className=" max-w-4xl mx-auto p-5 mt-5 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {sCategoryBooks?.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default CategoryCollection;
