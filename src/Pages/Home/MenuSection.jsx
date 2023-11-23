import Title from "../../Components/Shared/Title";
import MenuItem from "../../Components/Shared/MenuItem";
import LayoutContainer from "./../../Layout/LayoutComponent/LayoutContainer"
import Button from "../../Components/Shared/Button";
import useLoadPublicData from "../../Hooks/useLoadPublicData";

const MenuSection = () => {

  const url = "/menus?category=popular"
  const {data: popularMenu} = useLoadPublicData(url)

  return (
    <div className="my-20 text-center">
      <Title heading="from our menu" subHeading="Check it out"></Title>
      <LayoutContainer>
        <div className="grid grid-cols-2 gap-10 my-10">
          {popularMenu?.map((menu) => (
            <MenuItem key={menu?._id} menu={menu}></MenuItem>
          ))}
        </div>
      </LayoutContainer>
      <Button name="view all menu"></Button>
    </div>
  );
};

export default MenuSection;
