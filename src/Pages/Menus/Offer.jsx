import MenuItem from "../../Components/Shared/MenuItem";
import useLoadPublicData from "../../Hooks/useLoadPublicData";

const Offer = () => {
  const offeredUrl = "/menus?category=pizza";
  const { data: offeredMenu } = useLoadPublicData(offeredUrl);

  return (
    <div className="grid grid-cols-2 gap-10 my-10">
      {offeredMenu?.map((menu) => (
        <MenuItem key={menu?._id} menu={menu}></MenuItem>
      ))}
    </div>
  );
};

export default Offer;
