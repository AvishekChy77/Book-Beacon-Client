import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState();
  const [length, setLength] = useState();
  useEffect(() => {
    axios.get("https://book-beacon-server.vercel.app/books").then((res) => {
      setBooks(res.data);
      setLength(res.data.length);
    });
  }, []);

  const handleFilter = () => {
    const filteredBooks = books.filter((book) => book.quantity > 0);
    setBooks(filteredBooks);
    console.log(filteredBooks);
  };
  const handleAll = () => {
    axios.get("https://book-beacon-server.vercel.app/books").then((res) => {
      setBooks(res.data);
    });
  };

  return (
    <div>
      <h2 className=" text-2xl font-bold mt-10 text-center">
        Here's our entire collections of Books
      </h2>
      <div className="my-5 text-center">
        {books?.length == length ? (
          <button
            onClick={handleFilter}
            className="btn btn-outline btn-sm rounded hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-transparent"
          >
            show available books only
          </button>
        ) : (
          <button
            onClick={handleAll}
            className="btn btn-outline btn-sm rounded hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-transparent"
          >
            show all books
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books?.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
