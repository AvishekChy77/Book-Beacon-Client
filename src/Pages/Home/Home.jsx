import Categories from "./Category/Categories";
import Introduction from "./Introduction";
import Reviews from "./Review/Reviews";
import SimpleSlider from "./Slider/Slider";

const Home = () => {
  return (
    <div className="my-10">
      <SimpleSlider></SimpleSlider>
      <Introduction></Introduction>
      <Categories></Categories>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
