// Import Swiper React components
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Autoplay, Pagination } from "swiper/modules";
import BookRating from "../../CategoryCollection/BookRating";
import NavigationButtons from "./NavigationButtons";

const Reviews = () => {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        "https://book-beacon-server.vercel.app/reviews"
      );
      return res.data;
    },
  });
  console.log(reviews);
  return (
    <div className="my-20 max-w-3xl mx-auto">
      {/* <div className="flex gap-5 flex-col md:flex-row">
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            A Reader's Paradise!
          </h2>
          <p className=" flex-grow text-black">
            {`"BookBeacon has made my reading journey so enjoyable. The wide range of book categories and easy navigation have made it a reader's paradise. I've found countless gems that I wouldn't have discovered elsewhere."`}
          </p>
          <p className="text-blue-800">THAD J.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            A Must-Visit for Book Lovers
          </h2>
          <p className=" flex-grow text-black">
            {`"If you're a book enthusiast, BookBeacon is a must-visit. The extensive collection of books, user-friendly interface, and personalized recommendations have elevated my reading experience. I can't recommend it enough!"`}
          </p>
          <p className="text-blue-800">Rena A.</p>
        </div>
        <div className=" rounded shadow-lg bg-slate-50 p-3 flex flex-col">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <h2 className=" text-lg font-bold text-blue-800">
            Discover, Borrow, Enjoy
          </h2>
          <p className=" flex-grow text-black">
            {`"BookBeacon simplifies library management and makes it easy to discover, borrow, and enjoy books across various genres. It's a game-changer for book lovers. Say goodbye to endless searching and hello to a world of literary delight."`}
          </p>
          <p className="text-blue-800">M. Jordan</p>
        </div>
      </div> */}
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper shadow-xl"
      >
        {reviews?.map((rev) => (
          <SwiperSlide key={rev._id}>
            <div className="p-8 mb-10  ">
              <p className="text-[#D4AF37] md:pl-2">
                <BookRating rating={rev.rating}></BookRating>
              </p>
              <h2 className="flex gap-2 justify-center items-center text-lg md:text-xl lg:text-2xl font-bold ">
                <FaQuoteLeft />
                {rev.shortQuote}
                <FaQuoteRight />
              </h2>
              <p className=" text-justify text-sm md:text-base">{rev.quote}</p>
              <p className=" font-semibold text-right">-{rev.name}</p>
            </div>
          </SwiperSlide>
        ))}
        <NavigationButtons></NavigationButtons>
      </Swiper>
    </div>
  );
};

export default Reviews;
