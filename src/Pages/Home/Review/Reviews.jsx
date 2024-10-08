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
