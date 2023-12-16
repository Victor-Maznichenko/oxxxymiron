import News from "../News/News";
import TourItems from "../TourItems/TourItems";
import TracksItems from "../TracksItems/TracksItems";
import MainBanner from "./MainBanner";
import ShopBanner from "./ShopBanner";
import TourBanner from "./TourBanner";

const Home = () => {
   return (
      <main>
         <MainBanner />
         <TourItems />
         <TourBanner />
         <TracksItems />
         <ShopBanner />
         <News />
      </main>
   );
};

export default Home;
