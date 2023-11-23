import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useLoadSecureData from "../../../Hooks/useLoadSecureData";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const url = `/cart/${user?.email}`;
  const { data: allCart, refetch } = useLoadSecureData(url);

  const totalPrice = allCart?.reduce((total, item) => {
    return total + item?.itemPrice
  } , 0)

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/cart/${id}`);
          if (res?.data?.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your menu item has been deleted.",
              icon: "success",
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center mb-4">
        <h3 className="text-2xl font-semibold">Items : {allCart?.length}</h3>
        <p className="text-2xl font-semibold">Total Price : $ {totalPrice}</p>
        {allCart?.length ? <Link to="/dashboard/payment"><button className="btn btn-success px-8">Pay</button></Link> : <button className="btn btn-success px-8" disabled>Pay</button>}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Menu Item</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allCart?.map((cart, idx) => (
              <tr key={cart?._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart?.image} alt="Menu Image" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{cart?.itemName}</p>
                    </div>
                  </div>
                </td>
                <th>$ {cart?.itemPrice}</th>
                <td>
                  <button
                    onClick={() => handleDelete(cart?._id)}
                    className="bg-red-600 p-4 rounded text-white"
                  >
                    <RiDeleteBin6Line className="text-lg"></RiDeleteBin6Line>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
