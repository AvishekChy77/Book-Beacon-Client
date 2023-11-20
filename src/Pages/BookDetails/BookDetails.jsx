import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import BookRating from "../CategoryCollection/BookRating";

const BookDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [quant, setQuant] = useState();
  const [count, setCount] = useState(0);
  // const books = useLoaderData();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["doubleData"],
    queryFn: async () => {
      const res1 = await axios.get(
        `https://book-beacon-server.vercel.app/borrow?email=${user.email}`
      );
      const res2 = await axios.get(
        `https://book-beacon-server.vercel.app/books/${id}`
      );
      const data2 = res2.data;
      setQuant(data2?.quantity);
      setCount(0);
      return { book: data2, userData: res1.data };
    },
  });
  if (isLoading) {
    return (
      <div className=" max-w-4xl mx-auto p-5 mt-5 text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // const book = books?.find((book) => book._id === id);
  const book = data?.book;
  const { _id, authorName, image, name, category, rating, quantity } = book;

  const userData = data?.userData;
  const previouslyBorrowed = userData?.find((book) => book.name == name);
  console.log(previouslyBorrowed, userData);

  const handleModal = () => {
    document.getElementById(`${_id}`).showModal();
  };
  const handleBorrow = async () => {
    // purchase date
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();
    const purchasedDate = `${year}-${month}-${day}`;
    // return date
    const returnDate = document.getElementById("returnDate").value;
    console.log(returnDate);
    const email = user.email;
    const userName = user.displayName;
    const userData = {
      email,
      userName,
      name,
      image,
      category,
      returnDate,
      purchasedDate,
    };
    console.log(userData);
    await fetch("https://book-beacon-server.vercel.app/borrowed", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Book borrowed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          setQuant(quant - 1);
          setCount(1);
        }
      });

    //update the quantity
    await fetch(`https://book-beacon-server.vercel.app/books/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity - 1 }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="my-10 ">
      {isFetching && (
        <div className=" max-w-4xl mx-auto p-5 mt-5 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      <div className="flex justify-center flex-col md:flex-row md:h-72  ">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-l-lg h-full px-5  object-cover"
          />
        </figure>
        <div className="card-body p-4  items-center ">
          <h2 className="card-title grow">{name}</h2>
          <p>Author: {authorName}</p>
          <p>Category: {category}</p>
          <p className=" ">
            Rating: <BookRating rating={rating}></BookRating>
          </p>
          <p>Available: {quant}</p>
          <div>
            <button
              disabled={quant === 0 || previouslyBorrowed || count === 1}
              onClick={handleModal}
              className="btn text-white rounded border-none mr-2 hover:text-[#FF3811] hover:bg-none bg-[#FF3811]"
            >
              Borrow this book
            </button>

            <dialog id={`${_id}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-sky-600 text-center text-2xl">
                  Great Choice!
                </h3>

                <div className="modal-action justify-center">
                  <form method="dialog">
                    <label className=" font-semibold">
                      Please select a Return date
                    </label>{" "}
                    <br />
                    <input
                      required
                      id="returnDate"
                      name="returnDate"
                      type="date"
                    />
                    <br />
                    {/* if there is a button in form, it will close the modal */}
                    <div className=" text-center">
                      <button
                        onClick={handleBorrow}
                        className="btn btn-sm mt-2 btn-outline rounded hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-transparent"
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>

            <Link to={`/read/${_id}`}>
              <button className="btn btn-outline rounded hover:border-[#FF3811] hover:text-[#FF3811] hover:bg-transparent">
                Read this book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
