import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";

import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div>
      <Title heading="TESTIMONIALS" subHeading="What Our Clients Say"></Title>
      <LayoutContainer>
        <Swiper navigation={true} modules={[Navigation]}>
          {allReviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="text-center my-10">
                <p className="px-48 mb-4">{review?.details}</p>
                <h3 className="text-nav-color">{review?.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </LayoutContainer>
    </div>
  );
};

export default Reviews;
