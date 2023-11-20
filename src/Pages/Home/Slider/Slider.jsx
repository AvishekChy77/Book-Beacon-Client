import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Component } from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      fade: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="my-10 ">
        <Slider {...settings}>
          {/* slide-1 */}
          <div className="">
            <img
              className=" rounded h-[60vh] md:h-[88vh] object-cover w-full"
              src="https://i.ibb.co/1ZSDkQT/slide-2.jpg"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded text-white absolute z-30 text-left space-y-7 w-full h-full left-0 top-0 flex flex-col justify-center pl-10 md:pl-16">
              <h3 className=" text-4xl lg:text-6xl font-bold max-w-md ">
                Your Reading Journey Starts Here
              </h3>
              <p className=" text-lg max-w-md">
                BookBeacon - Your Gateway to Endless Stories
              </p>
            </div>
          </div>
          {/* slide-2 */}
          <div className="">
            <img
              className=" rounded  h-[60vh] md:h-[88vh] object-cover w-full"
              src="https://i.ibb.co/TwD2FCB/slide-4.jpg"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded text-white absolute z-30  text-left space-y-7 w-full h-full left-0 top-0 flex flex-col justify-center pl-10 md:pl-16">
              <h3 className=" text-4xl lg:text-6xl font-bold max-w-md ">
                Discover the World of Books
              </h3>
              <p className=" text-lg max-w-md">
                Explore, Borrow, and Immerse in Stories
              </p>
            </div>
          </div>
          {/* slide-3 */}
          <div className="">
            <img
              className=" rounded  h-[60vh] md:h-[88vh] object-cover w-full"
              src="https://i.ibb.co/wBxfhDV/slide-1.jpg"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded text-white absolute z-30  text-left space-y-7 w-full h-full left-0 top-0 flex flex-col justify-center pl-10 md:pl-16">
              <h3 className=" text-4xl lg:text-6xl font-bold max-w-md ">
                Your Personal Library Awaits
              </h3>
              <p className=" text-lg max-w-md">
                Read, Learn, and Share with BookBeacon
              </p>
            </div>
          </div>
          {/* slide-4 */}
          <div className="">
            <img
              className=" rounded  h-[60vh] md:h-[88vh] object-cover w-full"
              src="https://i.ibb.co/ryG6GzF/slide-3.jpg"
              alt=""
            />
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded text-white absolute z-30 text-left space-y-7 w-full h-full left-0 top-0 flex flex-col justify-center pl-10 md:pl-16">
              <h3 className=" text-4xl lg:text-6xl font-bold max-w-md ">
                Join Our Literary Community
              </h3>
              <p className=" text-lg max-w-md">
                Connect with Fellow Book Lovers Today
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
