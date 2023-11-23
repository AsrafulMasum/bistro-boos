import PropTypes from "prop-types";
import Button from "./Button";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const MenuCard = ({ menu }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user?.email) {
      const cartInfo = {
        itemId: menu?._id,
        itemName: menu?.name,
        itemPrice: menu?.price,
        email: user?.email,
        image: menu?.image,
      };

      axiosSecure
        .post("/cart", cartInfo)
        .then((res) => {
          if (res?.data?.insertedId) {
            toast.success(`${menu?.name} added to the cart.`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card border rounded h-full">
        <figure>
          <img src={menu?.image} alt="Shoes" className="rounded" />
        </figure>
        <div className="card-body items-center text-center flex-grow">
          <h2 className="card-title flex-grow">{menu?.name}</h2>
          <p>{menu?.recipe}</p>
          <div onClick={handleAddToCart} className="card-actions mt-4">
            <Button name="add to cart"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  menu: PropTypes.object,
};
