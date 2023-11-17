import { Link } from 'react-router-dom';
import gif from './../../assets/404.gif'

const ErrorPage = () => {
  return (
    <div className='bg-white min-h-screen text-center'>
      <img className='mx-auto w-1/2' src={gif} alt="404 GIF" />
      <Link to='/' className="btn">GO HOME</Link>
    </div>
  );
};

export default ErrorPage;