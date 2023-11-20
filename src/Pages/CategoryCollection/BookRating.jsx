import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

const BookRating = ({ rating }) => {
  return (
    <Rating
      initialRating={rating}
      emptySymbol={<AiOutlineStar></AiOutlineStar>}
      fullSymbol={<AiFillStar></AiFillStar>}
      readonly
    />
  );
};

export default BookRating;
