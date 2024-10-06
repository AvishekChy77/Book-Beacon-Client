import { Link } from "react-router-dom";
import BookRating from "./BookRating";

const Book = ({ book }) => {
  const { _id, authorName, image, name, category, rating } = book || {};

  return (
    <div className=" bg-zinc-50 relative rounded-lg shadow-xl">
      <div className="flex h-72  ">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-l-lg h-full w-40  object-cover"
          />
        </figure>
        <div className="card-body p-4  items-center text-center">
          <h2 className="card-title grow">{name}</h2>
          <p>Author: {authorName}</p>
          <p>Category: {category}</p>
          <p className=" ">
            Rating: <BookRating rating={rating}></BookRating>
          </p>
        </div>
      </div>
      <div
        style={{ background: "rgba(11, 11, 11, 0.50)" }}
        className="rounded-lg absolute top-0 left-0 flex items-center justify-center w-full h-full opacity-0 hover:opacity-90"
      >
        <Link to={`/book/${_id}`}>
          <button className="btn btn-primary rounded">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
