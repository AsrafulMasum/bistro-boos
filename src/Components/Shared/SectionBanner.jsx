import PropTypes from 'prop-types';

const SectionBanner = ({title, img, description}) => {
  return (
    <div className='p-20'
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(39, 18, 123, 0.3)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white p-20 text-center space-y-2">
        <h3 className='text-3xl font-bold uppercase'>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionBanner;

SectionBanner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.any,
}