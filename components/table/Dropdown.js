import React, { useState } from "react";
import { dropdownOptions, CobaTable } from "../constant/table-data";
import { useRouter } from "next/router";

const Dropdown = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({});

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange = (event, rowData) => {
    const { checked } = event.target;
    let updatedRows = [...selectedRows];
    if (checked) {
      updatedRows.push(rowData);
    } else {
      updatedRows = updatedRows.filter((row) => row !== rowData);
    }
    setSelectedRows(updatedRows);
    calculateTotalPrice(updatedRows);
  };

  const handlePaymentMethodChange = (event, paymentMethod) => {
    const { checked } = event.target;
    let updatedPaymentMethods = [...selectedPaymentMethods];
    if (checked) {
      updatedPaymentMethods.push(paymentMethod);
    } else {
      updatedPaymentMethods = updatedPaymentMethods.filter(
        (method) => method !== paymentMethod
      );
    }
    setSelectedPaymentMethods(updatedPaymentMethods);
    // Reset payment details for the deselected payment method
    if (!checked) {
      setPaymentDetails((prevDetails) => {
        const updatedDetails = { ...prevDetails };
        delete updatedDetails[paymentMethod];
        return updatedDetails;
      });
    }
  };

  const handlePaymentDetailsChange = (event, paymentMethod) => {
    const { value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [paymentMethod]: value,
    }));
  };

  const calculateTotalPrice = (rows) => {
    const totalPrice = rows.reduce((sum, row) => sum + row.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleGoBack = () => {
    router.push("/settlement");
  };

  const renderTable = () => {
    if (selectedOption) {
      const data = CobaTable[selectedOption];
      if (data) {
        return (
          <div className="p-6 mt-10 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">List Delivery Notes</h2>
            <table className="bg-white w-full">
              <thead>
                <tr className="text-left text-md text-slate-700">
                  <th className="py-2 px-4"></th>
                  <th className="py-2 px-4 ">No. Resi</th>
                  <th className="py-2 px-4 ">Date</th>
                  <th className="py-2 px-4 ">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row)}
                        onChange={(e) => handleCheckboxChange(e, row)}
                      />
                    </td>
                    <td className="py-2 px-4 ">{row.resi}</td>
                    <td className="py-2 px-4 ">{row.date}</td>
                    <td className="py-2 px-4 ">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4">Total Price: {totalPrice}</p>
            {renderPaymentMethods()}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleGoBack}
                className="flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Save Settlement
              </button>
            </div>
          </div>
        );
      }
    }
    return null; // Jika tidak ada opsi yang dipilih atau data tidak ditemukan, jangan tampilkan tabel
  };

  const renderPaymentMethods = () => {
    return (
      <div className="mt-4 space-y-2">
        <p>Pilih Metode Pembayaran:</p>
        <div className="flex items-center">
          <input
            className="mr-4"
            type="checkbox"
            id="depositCash"
            checked={selectedPaymentMethods.includes("depositCash")}
            onChange={(e) => handlePaymentMethodChange(e, "depositCash")}
          />
          <label htmlFor="depositCash">Deposit Cash</label>
          {selectedPaymentMethods.includes("depositCash") && (
            <input
              className="flex flex-col"
              type="text"
              value={paymentDetails["depositCash"] || ""}
              onChange={(e) => handlePaymentDetailsChange(e, "depositCash")}
              placeholder="Nominal deposit"
            />
          )}
        </div>
        <div className="flex items-center">
          <input
            className="mr-4"
            type="checkbox"
            id="cash"
            checked={selectedPaymentMethods.includes("cash")}
            onChange={(e) => handlePaymentMethodChange(e, "cash")}
          />
          <label htmlFor="cash">Cash</label>
          {selectedPaymentMethods.includes("cash") && (
            <input
              className="flex flex-col"
              type="text"
              value={paymentDetails["cash"] || ""}
              onChange={(e) => handlePaymentDetailsChange(e, "cash")}
              placeholder="Jumlah cash"
            />
          )}
        </div>
        <div className="flex items-center">
          <input
            className="mr-4"
            type="checkbox"
            id="transfer"
            checked={selectedPaymentMethods.includes("transfer")}
            onChange={(e) => handlePaymentMethodChange(e, "transfer")}
          />
          <label htmlFor="transfer">Transfer</label>
          {selectedPaymentMethods.includes("transfer") && (
            <input
              className="flex flex-col"
              type="text"
              value={paymentDetails["transfer"] || ""}
              onChange={(e) => handlePaymentDetailsChange(e, "transfer")}
              placeholder="Nomor rekening tujuan"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex space-x-5">
        <h2>Select Outlet</h2>
        <select
          className="bg-white"
          value={selectedOption}
          onChange={handleDropdownChange}
        >
          <option value="">Select Outlet</option>
          {dropdownOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {renderTable()}
    </div>
  );
};

export default Dropdown;
