import { Link } from "react-router-dom";
import BookRating from "../CategoryCollection/BookRating";

const BookCard = ({ book }) => {
  const { _id, authorName, image, name, category, rating } = book || {};
  return (
    <div className=" relative rounded-lg bg-emerald-100 shadow-xl">
      <div className="flex h-72">
        <figure>
          <img
            src={image}
            alt=""
            className="rounded-l-lg h-full w-40  object-cover"
          />
        </figure>
        <div className="card-body p-4  items-center text-center">
          <h2 className="card-title grow">{name}</h2>
          <p>Category: {category}</p>
          <p>Author: {authorName}</p>
          <p>
            Rating: <BookRating rating={rating}></BookRating>
          </p>
          <Link to={`/UpdateBook/${_id}`}>
            <button className="btn btn-outline btn-sm rounded">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
