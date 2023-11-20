import { AiOutlineArrowRight } from "react-icons/ai";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="flex z-40 absolute top-[75%] right-[8%] bg-[#FF3811] w-12 h-12 rounded-full cursor-pointer items-center justify-center"
      onClick={onClick}
    >
      <AiOutlineArrowRight className=" text-white text-2xl   rounded-full"></AiOutlineArrowRight>
    </div>
  );
};

export default SampleNextArrow;
