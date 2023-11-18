import PropTypes from "prop-types";
import Button from "./Button";

const MenuCard = ({ menu }) => {
  return (
    <div>
      <div className="card border rounded h-full">
        <figure>
          <img
            src={menu?.image}
            alt="Shoes"
            className="rounded"
          />
        </figure>
        <div className="card-body items-center text-center flex-grow">
          <h2 className="card-title flex-grow">{menu?.name}</h2>
          <p>{menu?.recipe}</p>
          <div className="card-actions mt-4">
            <Button name="add to cart"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  menu: PropTypes.object,
};
