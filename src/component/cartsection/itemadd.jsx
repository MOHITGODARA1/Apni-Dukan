import { UseCart } from "../storedata/cartdata";

export function ItemAdd() {
  const { cart, removeFromCart } = UseCart(); // Assuming you have removeFromCart()

  // Total calculation
  const total = cart?.item?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-semibold mb-4">My Cart</h1>

      {cart?.item?.length > 0 ? (
        <>
          {cart.item.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
              <div className="flex gap-4">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="font-semibold text-base">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      {item.description?.split(" ").slice(0, 5).join(" ") + "..."}
                    </p>
                    <p className="text-green-600 font-bold mt-1">
                      ₹{item.price} × {item.quantity} = ₹
                      {item.price * item.quantity}
                    </p>
                  </div>

                  <div className="mt-2">
                    <select
                      value={item.quantity}
                      disabled
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      <option value={1}>Qty: 1</option>
                      <option value={2}>Qty: 2</option>
                      <option value={3}>Qty: 3</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Only Remove Button */}
              <div className="flex justify-end mt-4 text-sm text-gray-600">
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Buy Now */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-base font-semibold mb-2">Price Details</h3>
            <div className="flex justify-between text-sm mb-1">
              <span>Total Items</span>
              <span>{cart.item.length}</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Total Price</span>
              <span>₹{total}</span>
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full bg-[#489fb5] hover:bg-[#357d92] mt-4 py-2 text-white rounded-md">
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
