import { useQuery } from "@tanstack/react-query";
import { FaQuoteLeft } from "react-icons/fa6";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Section } from "../../../Components/Motion";
import SectionHeading from "../../../Components/SectionHeading";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import BookRating from "../../CategoryCollection/BookRating";

const gradients = [
  "from-brand-600 to-brand-400",
  "from-sage-500 to-sage-300",
  "from-gold-500 to-gold-300",
  "from-rose-500 to-rose-300",
];

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  if (!reviews?.length) return null;

  return (
    <Section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-base-200/50" />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">Readers Like You</span>
            </>
          }
        />
        <Swiper
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={rev._id} className="!h-auto">
              <div className="surface relative flex h-full flex-col p-7">
                <FaQuoteLeft className="absolute right-6 top-6 text-4xl text-brand-700/10 dark:text-brand-300/10" />
                <span className="text-gold-500">
                  <BookRating rating={rev.rating} />
                </span>
                <h3 className="font-display mt-3 text-lg font-bold leading-snug">
                  “{rev.shortQuote}”
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-base-content/60">
                  {rev.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-base-300/60 pt-4">
                  <span
                    className={`grid size-11 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${
                      gradients[i % gradients.length]
                    }`}
                  >
                    {rev.name
                      ?.split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{rev.name}</p>
                    <p className="text-xs text-base-content/50">BookBeacon reader</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default Reviews;
