import React from "react";
import { Star } from "lucide-react";

const products = [
  {
    image: "https://fakeimg.pl/300/",
    name: "Camera Mi 360°",
    sold: 432,
    price: 120,
    revenue: 51840,
    rating: 4.81,
  },
  {
    image: "https://fakeimg.pl/300/",
    name: "Massage Gun",
    sold: 120,
    price: 112,
    revenue: 25440,
    rating: 3.44,
  },
  {
    image: "https://fakeimg.pl/300/",
    name: "Vacuum-Mop 2 Pro",
    sold: 221,
    price: 320,
    revenue: 15123,
    rating: 3.22,
  },
  {
    image: "https://fakeimg.pl/300/",
    name: "Vacuum-Mop 2",
    sold: 223,
    price: 234,
    revenue: 32812,
    rating: 3.00,
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Top Products</h2>
        <button className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg">
          Full results
        </button>
      </div>
      
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-500 text-sm">
            <th className="py-2">Product</th>
            <th className="py-2">Sold amount</th>
            <th className="py-2">Unit price</th>
            <th className="py-2">Revenue</th>
            <th className="py-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="">
              <td className="flex items-center py-3 space-x-3">
                <img src={product.image} alt={product.name} className="w-8 h-8 rounded-full" />
                <span className="text-gray-800">{product.name}</span>
              </td>
              <td className="py-3">{product.sold}</td>
              <td className="py-3">${product.price}</td>
              <td className="py-3">${product.revenue.toLocaleString()}</td>
              <td className="py-3 flex items-center">
                <Star className="w-4 h-4 text-orange-400" />
                <span className="ml-1">{product.rating}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
