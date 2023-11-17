import PropTypes from 'prop-types';

const Title = ({heading, subHeading}) => {
  return (
    <div className="text-center">
      <div className="py-10 inline-block">
        <p className="italic text-nav-color mb-1">---{subHeading}---</p>
        <h3 className="text-text-primary text-lg font-medium border-y-2 py-2">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default Title;

Title.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
}