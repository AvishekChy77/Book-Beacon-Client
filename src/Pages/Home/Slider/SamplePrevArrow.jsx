import { AiOutlineArrowLeft } from "react-icons/ai";
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex z-40 absolute top-[75%] right-[20%] md:right-[17%] lg:right-[14%] bg-clifford cursor-pointer  w-12 h-12 rounded-full items-center justify-center"
      onClick={onClick}
    >
      <AiOutlineArrowLeft className=" text-white text-2xl   rounded-full"></AiOutlineArrowLeft>
    </div>
  );
};

export default SamplePrevArrow;
