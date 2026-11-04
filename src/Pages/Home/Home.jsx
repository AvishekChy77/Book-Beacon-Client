import { PageTransition } from "../../Components/Motion";
import Hero from "./Hero";
import Stats from "./Stats";
import Categories from "./Category/Categories";
import FeaturedBooks from "./FeaturedBooks";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import Quotes from "./Quotes";
import Reviews from "./Review/Reviews";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedBooks />
      <WhyUs />
      <HowItWorks />
      <Quotes />
      <Reviews />
      <Newsletter />
    </PageTransition>
  );
};

export default Home;
