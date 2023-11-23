import Button from "../../Components/Shared/Button";
import SectionBanner from "../../Components/Shared/SectionBanner";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";
import mainImg from "../../assets/menu/banner3.jpg";
import Offer from "./Offer";
import MenuSec from "./MenuSec";
import useLoadPublicData from "../../Hooks/useLoadPublicData";

const Menus = () => {
  const saladUrl = "/menus?category=salad";
  const { data: saladMenu } = useLoadPublicData(saladUrl);

  const dessertUrl = "/menus?category=dessert";
  const { data: dessertMenu } = useLoadPublicData(dessertUrl);

  const soupUrl = "/menus?category=soup";
  const { data: soupMenu } = useLoadPublicData(soupUrl);

  const pizzaUrl = "/menus?category=pizza";
  const { data: pizzaMenu } = useLoadPublicData(pizzaUrl);

  return (
    <div className="text-center mb-10">
      <SectionBanner
        title="our menu"
        img={mainImg}
        description="WOULD YOU LIKE TO TRY A DISH?"
        pt={true}
      ></SectionBanner>
      <LayoutContainer>
        <Offer></Offer>
      </LayoutContainer>
      <Button name="order your favourite food"></Button>
      <MenuSec title="Desserts" menus={dessertMenu}></MenuSec>
      <MenuSec title="pizza" menus={pizzaMenu}></MenuSec>
      <MenuSec title="salads" menus={saladMenu}></MenuSec>
      <MenuSec title="soups" menus={soupMenu}></MenuSec>
    </div>
  );
};

export default Menus;
