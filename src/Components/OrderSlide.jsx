import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default OrderSlide;
