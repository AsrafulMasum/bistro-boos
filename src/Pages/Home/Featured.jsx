import Button from "../../Components/Shared/Button";
import Title from "../../Components/Shared/Title";
import img from "../../assets/home/featured.jpg";


const Featured = () => {
  return (
    <div style={{
      background: ` url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backgroundBlendMode: "overlay",
    }}>
      <Title heading="from our menu" subHeading="check it out" color={true}></Title>
      <div className="flex">
        <img className="w-1/2 py-20 pl-20 pr-5" src={img} alt="" />
        <div className="text-white w-1/2 flex flex-col justify-center pr-20 pl-5 gap-4">
          <h3 className="text-lg font-medium">March 20, 2023 <br /> WHERE CAN I GET SOME?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit, magnam dolores aut, enim illo at praesentium quasi quo, quibusdam similique odio sunt inventore officiis aliquid incidunt eos voluptatum eaque.aliquid incidunt eos voluptatum eaque.</p>
          <Button name="read more"></Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;