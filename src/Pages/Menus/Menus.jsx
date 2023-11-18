import { useEffect, useState } from "react";
import Button from "../../Components/Shared/Button";
import SectionBanner from "../../Components/Shared/SectionBanner";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";
import mainImg from "../../assets/menu/banner3.jpg";
import Offer from "./Offer";
import MenuSec from "./MenuSec";

const Menus = () => {

  const [allMenus, setAllMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  const dessertMenu = allMenus.filter((menu) => menu?.category === "dessert");
  const soupMenu = allMenus.filter((menu) => menu?.category === "soup");
  const saladMenu = allMenus.filter((menu) => menu?.category === "salad");
  const pizzaMenu = allMenus.filter((menu) => menu?.category === "pizza");

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
