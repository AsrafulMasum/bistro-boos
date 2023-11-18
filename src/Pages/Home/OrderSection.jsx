import OrderSlide from "../../Components/OrderSlide";
import Title from "../../Components/Shared/Title";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";

const OrderSection = () => {
  return (
    <div className="flex flex-col my-10">
      <Title
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10:00pm"}
      ></Title>
      <LayoutContainer>
        <OrderSlide></OrderSlide>
      </LayoutContainer>
    </div>
  );
};

export default OrderSection;
