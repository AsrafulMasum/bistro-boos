import { useEffect, useState } from "react";
import MenuItem from "../../Components/Shared/MenuItem";



const Offer = () => {

  const [allMenus, setAllMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  const offeredMenu = allMenus.filter((menu) => menu?.category === "offered");

  return (
    <div className="grid grid-cols-2 gap-10 my-10">
      {
        offeredMenu?.map(menu => <MenuItem key={menu?._id} menu={menu}></MenuItem>)
      }
    </div>
  );
};

export default Offer;