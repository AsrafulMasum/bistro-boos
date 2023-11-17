import PropTypes from 'prop-types';

const LayoutContainer = ({children}) => {
  return (
    <div className="max-w-screen-xl mx-4 md:mx-6 lg:mx-8 xl:mx-12 2xl:mx-auto">
      {children}
    </div>
  );
};

export default LayoutContainer;

LayoutContainer.propTypes = {
  children: PropTypes.node
}