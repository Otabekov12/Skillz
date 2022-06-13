import Hero from "../../Components/Hero/Hero";
import Favorites from "../../Components/Favorites/Favorites";
import Recommendations from "../../Components/Recommendations/Recommendations";
import Workshops from "../../Components/Workshops/Workshops";
import Review from "../../Components/Review/Review";
import Recent from "../../Components/Recent Articles/Recent";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Favorites />
      <Recommendations />
      <Workshops />
      <Review />
      <Recent />
    </main>
  );
};

export default Home;
