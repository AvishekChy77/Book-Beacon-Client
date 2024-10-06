import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import Bookcard from "./Bookcard";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  // const axiosSecure = useAxios();
  // const url = `/borrowed?email=${user.email}`;
  // useEffect(() => {
  //   setTimeout(() => {
  //     axiosSecure.get(url).then((res) => {
  //       setBorrowedBooks(res.data);
  //     });
  //   }, 5000);
  // }, [url, axiosSecure]);

  const { data, isLoading } = useQuery({
    queryKey: ["borrow"],
    queryFn: async () => {
      const res = await axios.get(
        `https://book-beacon-server.vercel.app/borrow?email=${user.email}`
      );
      setBorrowedBooks(res.data);

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

  const handleDelete = async (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`https://book-beacon-server.vercel.app/borrowed/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(async (data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              //update the quantity
              const bookArray = await axios.get(
                `https://book-beacon-server.vercel.app/books`
              );
              const books = bookArray?.data;
              const book = books?.find((book) => book.name == name);
              const quantity = book?.quantity;
              const bookId = book?._id;
              console.log(books, bookArray, quantity);
              fetch(`https://book-beacon-server.vercel.app/books/${bookId}`, {
                method: "PATCH",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ quantity: quantity + 1 }),
              })
                .then((res) => res.json())
                .then((data) => console.log(data));

              Swal.fire(
                "Success!",
                "Your book has been returned, Thank you.",
                "success"
              );
              const remaining = borrowedBooks?.filter(
                (booking) => booking._id !== id
              );
              setBorrowedBooks(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className=" text-center my-10 text-2xl font-bold ">
        List of Books you borrowed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {borrowedBooks?.map((book) => (
          <Bookcard
            key={book._id}
            handleDelete={handleDelete}
            book={book}
          ></Bookcard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
