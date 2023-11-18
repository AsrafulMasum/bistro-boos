import { Carousel } from "react-responsive-carousel";

import slider1 from './../../assets/home/01.jpg'
import slider2 from './../../assets/home/02.jpg'
import slider3 from './../../assets/home/03.png'
import slider4 from './../../assets/home/04.jpg'
import slider5 from './../../assets/home/05.png'
import slider6 from './../../assets/home/06.png'

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel infiniteLoop={true} showArrows={false} autoPlay={true}>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider1} />
        </div>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider2} />
        </div>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider3} />
        </div>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider4} />
        </div>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider5} />
        </div>
        <div className="h-screen">
          <img className="h-full object-cover" src={slider6} />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
