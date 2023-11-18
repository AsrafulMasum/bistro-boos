import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import MenuCard from "../../Components/Shared/MenuCard";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";

const Recommended = () => {
  const [allMenus, setAllMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  const offer = allMenus.filter((menu) => menu?.category === "offered");

  return (
    <div className="my-20">
      <Title heading="CHEF RECOMMENDS" subHeading="Should Try"></Title>
      <LayoutContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {offer?.map((menu) => (
            <MenuCard key={menu?._id} menu={menu}></MenuCard>
          ))}
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Recommended;
