import React, { useState } from "react";
import { DropdownData, TreeTableData } from "../constant/table-data";
import { useRouter } from "next/router";

const DropdownTreeTable = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isTreeTableVisible, setIsTreeTableVisible] = useState(false);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [isAddProductModalVisible, setIsAddProductModalVisible] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue);
    setIsTreeTableVisible(false);
    setIsTableVisible(false);
    setIsAddProductVisible(false);
    setIsAddProductModalVisible(false);
    setSelectedProduct([]);
  };

  const treeData = selectedItem ? TreeTableData[selectedItem] : null;

  const handleShowTable = () => {
    setIsTableVisible(!isTableVisible);
    setIsTreeTableVisible(false);
    setIsAddProductVisible(true);
    setIsAddProductModalVisible(false);
  };

  const handleShowTreeTable = () => {
    setIsTreeTableVisible(!isTreeTableVisible);
    setIsTableVisible(false);
    setIsAddProductVisible(false);
    setIsAddProductModalVisible(false);
  };

  const handleAddProductClick = () => {
    setIsAddProductModalVisible(true);
  };

  const handleSaveProduct = () => {
    setIsAddProductModalVisible(false);
    setIsTableVisible(true);
    setSelectedProduct([]);
  };

  const handleProductCheckboxChange = (e, productId) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedProduct((prevSelectedProduct) => [
        ...prevSelectedProduct,
        productId,
      ]);
    } else {
      setSelectedProduct((prevSelectedProduct) =>
        prevSelectedProduct.filter((id) => id !== productId)
      );
    }
  };

  const handleSave = () => {
    router.push(`/delivery`);
  };

  return (
    <div>
      <div className="flex space-x-2">
        <h2 className="pt-2">Select Outlet</h2>
        <select
          className="border bg-white p-2 mb-4"
          onChange={handleDropdownChange}
        >
          <option value="">Select Outlet</option>
          {DropdownData.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {selectedItem && (
        <div className="flex items-center space-x-8">
          <h2>Konsinyasi</h2>
          <label className="mr-4">
            <input
              type="checkbox"
              checked={isTableVisible}
              onChange={handleShowTable}
            />
            Yes
          </label>

          <label>
            <input
              type="checkbox"
              checked={isTreeTableVisible}
              onChange={handleShowTreeTable}
            />
            No
          </label>
        </div>
      )}

      {isTableVisible && (
        <div className="p-6 bg-white rounded-md shadow-md">
          {isAddProductVisible && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddProductClick}
            >
              Add Product
            </button>
          )}
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">SKU</th>
                <th className="border p-2">Nama Produk</th>
                <th className="border p-2">Kategori</th>
                <th className="border p-2">Harga</th>
                <th className="border p-2">Jumlah Permintaan</th>
                <th className="border p-2">Satuan Permintaan</th>
                <th className="border p-2">Sisa Barang</th>
                <th className="border p-2">Satuan Sisa</th>
                <th className="border p-2">Jumlah Pengiriman</th>
                <th className="border p-2">Satuan Pengiriman</th>
              </tr>
            </thead>
            <tbody>
              {selectedItem &&
                treeData.map((item) => (
                  <tr key={item.id}>
                    <td className="border p-2">{item.sku}</td>
                    <td className="border p-2">{item.productName}</td>
                    <td className="border p-2">{item.category}</td>
                    <td className="border p-2">{item.price}</td>
                    <td className="border p-2">{item.quantityRequest}</td>
                    <td className="border p-2">{item.unitRequest}</td>
                    <td className="border p-2">{item.sisaBarang}</td>
                    <td className="border p-2">{item.unitSisa}</td>
                    <td className="border ">
                      <input className="w-full h-full" type="text" />
                    </td>
                    <td className="border ">
                      <input className="w-full h-full" type="text" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {isAddProductModalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2>Select Products</h2>
            <form>
              {selectedItem &&
                treeData.map((item) => (
                  <div key={item.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedProduct.includes(item.id)}
                        onChange={(e) =>
                          handleProductCheckboxChange(e, item.id)
                        }
                      />
                      {item.productName}
                    </label>
                  </div>
                ))}
              <div className="flex items-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSaveProduct}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isTreeTableVisible && treeData && (
        <ul>
          <TreeNode node={treeData} />
        </ul>
      )}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleSave1 = () => {
    router.push(`/delivery`);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <li>
        <div onClick={handleToggle}>{isExpanded ? "-" : "+"}</div>
        {isExpanded && (
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">SKU</th>
                <th className="border p-2">Nama Produk</th>
                <th className="border p-2">Kategori</th>
                <th className="border p-2">Harga</th>
                <th className="border p-2">Jumlah Permintaan</th>
                <th className="border p-2">Satuan Permintaan</th>
                <th className="border p-2">Sisa Barang</th>
                <th className="border p-2">Satuan Sisa</th>
                <th className="border p-2">Jumlah Pengiriman</th>
                <th className="border p-2">Satuan Pengiriman</th>
              </tr>
            </thead>
            <tbody>
              {node.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.sku}</td>
                  <td className="border p-2">{item.productName}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">{item.price}</td>
                  <td className="border p-2">{item.quantityRequest}</td>
                  <td className="border p-2">{item.unitRequest}</td>
                  <td className="border p-2">{item.sisaBarang}</td>
                  <td className="border p-2">{item.unitSisa}</td>
                  <td className="border ">
                    <input className="w-full h-full" type="text" />
                  </td>
                  <td className="border ">
                    <input className="w-full h-full" type="text" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave1}
            className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </li>
    </div>
  );
};

export default DropdownTreeTable;
