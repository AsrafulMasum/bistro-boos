import OrderSlide from "../../Components/OrderSlide";
import Title from "../../Components/Shared/Title";

const OrderSection = () => {
  return (
    <div className="flex flex-col">
      <Title heading={'ORDER ONLINE'} subHeading={'From 11:00am to 10:00pm'}></Title>
      <OrderSlide></OrderSlide>
    </div>
  );
};

export default OrderSection;
