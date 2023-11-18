import PropTypes from "prop-types";

const Button = ({ name }) => {
  return (
    <div>
      <button className="btn bg-transparent border-0 border-b-2 border-nav-color uppercase text-nav-color hover:bg-[#1F2937] hover:border-none px-8">
        {name}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  name: PropTypes.string,
};
