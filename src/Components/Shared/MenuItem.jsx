import PropTypes from "prop-types";

const MenuItem = ({ menu }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <img
          className="w-28 h-20 object-cover rounded-full rounded-tl-none"
          src={menu?.image}
          alt=""
        />
      </div>
      <div className="flex">
        <div>
          <h3 className="font-[Cinzel] text-xl">{menu?.name}-----------------</h3>
          <p className="text-text-secondary">{menu?.recipe}</p>
        </div>
        <p className="text-nav-color">${menu?.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  menu: PropTypes.object,
};
