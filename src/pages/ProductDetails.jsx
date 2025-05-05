import React from 'react'

function ProductDetails() {


    
  return (
    <>
          <h1 className="font-bold text-4xl p-4 text-center m-4">Your Cart</h1>

          <div className="overflow-x-auto">
            <table className=" border-collapse mx-auto">
              <thead>
                <tr className="bg-gray-100 font-medium text-2xl">
                  <th className="border-t-b border-gray-300 p-4 text-center">
                    Item
                  </th>

                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Price
                  </th>
                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Quantity
                  </th>
                  <th className="border-t-b border-gray-300 p-4 text-left">
                    Total
                  </th>
                  <th className="border-t-b border-gray-300  text-left">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 border-b border-gray-300 "
                  >
                    <td className="p-4 flex items-center gap-4 mx-1.5">
                      <img
                        className="w-35 object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                      <span className="font-semibold text-3xl">
                        {item.title}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-2xl ">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="p-4 font-medium text-2xl text-center">
                      {item.quantity}
                    </td>
                    <td className="p-4 font-medium text-2xl">
                      ${Math.ceil(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="font-medium text-2xl pl-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-gray-200  hover:bg-green-500 rounded-md flex items-center justify-center  p-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="30"
                          viewBox="0 -960 960 960"
                          width="30"
                        >
                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-1/2 mx-auto mr-72 mt-6">
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Sub Total:</span>
              <span className="font-medium">
                ${Math.ceil(total).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Sales Tax (6%):</span>
              <span className="font-medium">
                ${Math.ceil(total * 0.06).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between py-5 text-3xl border-b border-gray-300">
              <span className="font-medium">Grand Total:</span>
              <span className="text-5xl font-medium">
                ${Math.ceil(total + total * 0.06).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-row items-end py-5 gap-20 text-3xl border-b border-gray-300">
              <div className="flex justify-between py-5">
                <span className="font-medium">
                  Congrats, you're eligible for{" "}
                  <span className="text-green-500">Free Shipping</span>
                </span>
                <span>
                  <i className="fas fa-truck text-green-500 fa-1x"></i>
                </span>
              </div>
              <div className="flex justify-between py-5">
                <span className="font-medium">Continue Shopping:</span>
                <Link
                  to="/"
                  className="hover:translate-x-[-10px] transition-transform duration-300 ease-in-out"
                >
                  {/* <span > */}
                  <i className="fas fa-arrow-left text-blue-500 fa-2x"></i>
                  {/* </span> */}
                </Link>
              </div>
            </div>
          </div>
        </>
  )
}

export default ProductDetails