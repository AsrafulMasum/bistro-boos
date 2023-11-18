import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

import pic1 from "./../assets/home/slide1.jpg";
import pic2 from "./../assets/home/slide2.jpg";
import pic3 from "./../assets/home/slide3.jpg";
import pic4 from "./../assets/home/slide4.jpg";
import pic5 from "./../assets/home/slide5.jpg";

const OrderSlide = () => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <img src={pic1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pic5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default OrderSlide;
