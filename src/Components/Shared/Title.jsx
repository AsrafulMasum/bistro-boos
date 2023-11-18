import PropTypes from 'prop-types';

const Title = ({heading, subHeading, color}) => {
  return (
    <div className="text-center">
      <div className="py-10">
        <p className="italic text-nav-color mb-1 capitalize">---{subHeading}---</p>
        <h3 className={color ? "text-white text-lg font-medium border-y-2 py-2 px-10 uppercase inline-block" : "text-text-primary text-lg font-medium border-y-2 py-2 px-10 uppercase inline-block"}>
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default Title;

Title.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  color: PropTypes.bool,
}