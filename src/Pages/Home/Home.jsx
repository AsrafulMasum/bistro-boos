import SectionBanner from "../../Components/Shared/SectionBanner";
import Banner from "./Banner";
// import OrderSection from "./OrderSection";
import bg from "./../../assets/home/chef-service.jpg";
import MenuSection from "./MenuSection";
import Recommended from "./Recommended";
import Call from "./Call";
import Featured from "./Featured";
// import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <OrderSection></OrderSection> */}
      <SectionBanner
        title="bistro boss"
        img={bg}
        bg={true}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo."
      ></SectionBanner>
      <MenuSection></MenuSection>
      <Call></Call>
      <Recommended></Recommended>
      <Featured></Featured>
      {/* <Reviews></Reviews> */}
    </div>
  );
};

export default Home;
