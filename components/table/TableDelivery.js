import React, { useState } from "react";
import { tableDelivery } from "../constant/table-data";
import { useRouter } from "next/router";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
const TableDelivery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [dropdownItemId, setDropdownItemId] = useState(null);

  const filtertableDelivery = tableDelivery.filter((item) =>
    item.delivery.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDropdownChange = (itemId, action) => {
    if (action === "edit") {
      // Handle edit action
      console.log(`Edit item with id: ${itemId}`);
    } else if (action === "view detail") setDropdownItemId(null);
  };

  const handleAddDelivery = () => {
    router.push(`/delivery/new/`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <input
          className="border p-1 rounded mb-4 px-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={handleAddDelivery}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Create Delivery
        </button>
      </div>
      <table className="bg-white border border-slate-100">
        <thead>
          <tr className="text-left text-md text-slate-700">
            <th className="py-2 px-4  ">No Delivery</th>
            <th className="py-2 px-4  ">Date</th>
            <th className="py-2 px-4  ">Outlet Name</th>
            <th className="py-2 px-4  ">Owner Name</th>
            <th className="py-2 px-4  ">Address</th>
            <th className="py-2 px-4  ">Type</th>
            <th className="py-2 px-4  ">No Telp</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {filtertableDelivery.map((item) => (
            <tr className="text-left text-sm  text-slate-500" key={item.id}>
              <td className="py-2 px-4">{item.delivery}</td>
              <td className="py-2 px-4">{item.date}</td>
              <td className="py-2 px-4">{item.outlet}</td>
              <td className="py-2 px-4">{item.owner}</td>
              <td className="py-2 px-4">{item.place}</td>
              <td className="py-2 px-4">{item.type}</td>
              <td className="py-2 px-4">{item.no}</td>
              <td className="py-2 px-4">{item.info}</td>
              <td className="py-2 px-4">
                <div className="relative inline-block">
                  <div
                    onClick={() => setDropdownItemId(item.id)}
                    className="cursor-pointer"
                  >
                    <HiOutlineDotsHorizontal className="w-4 h-4" />
                  </div>
                  {dropdownItemId === item.id && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                          href={`/delivery/edit`}
                        >
                          Edit
                        </Link>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                          href={`/delivery/detail`}
                        >
                          View Detail
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDelivery;
