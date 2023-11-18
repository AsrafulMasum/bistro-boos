import PropTypes from 'prop-types';
import Button from "../../Components/Shared/Button";
import SectionBanner from "../../Components/Shared/SectionBanner";
import img from "../../assets/home/chef-service.jpg"
import MenuItem from '../../Components/Shared/MenuItem';



const MenuSec = ({title, menus}) => {
  return (
    <div className='my-10'>
      <SectionBanner
        title={title}
        img={img}
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></SectionBanner>
      <div className="grid grid-cols-2 gap-10 my-10">
        {
          menus?.map(menu => <MenuItem key={menu?._id} menu={menu}></MenuItem>)
        }
      </div>
      <Button name="order your favourite food"></Button>
    </div>
  );
};

export default MenuSec;

MenuSec.propTypes = {
  title: PropTypes.string,
  menus: PropTypes.array,
}