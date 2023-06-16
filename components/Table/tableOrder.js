import React, {useState} from "react";
import FilterCombo from "../FilterCombo";
// components
import CardOrder from "../Card/CardOrder";

// layout for page

// import Admin from "@/component/Layout/Admin";

export default function TableOrder() {
    const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOptionChange = (id, value) => {
    if (id === 'filter1') {
      setSelectedOption1(value);
      // Lakukan sesuatu dengan nilai terpilih pada filter 1
    } else if (id === 'filter2') {
      setSelectedOption2(value);
      // Lakukan sesuatu dengan nilai terpilih pada filter 2
    }
  };

  const options1 = [
    { value: 'option1', label: 'Opsi 1' },
    { value: 'option2', label: 'Opsi 2' },
    { value: 'option3', label: 'Opsi 3' },
  ];

  const options2 = [
    { value: 'optionA', label: 'Opsi A' },
    { value: 'optionB', label: 'Opsi B' },
    { value: 'optionC', label: 'Opsi C' },
  ];
  return (
    <>
      <div className="flex flex-wrap mt-40 ml-[247px] ">
      <div className="flex gap-3 items-center ml-10 -mt-[120px]">
        <div className="flex gap-x-2 items-center">
        <h1>Outlet Store</h1>
      <FilterCombo
        id="filter1"
        options={options1}
        selectedOption={selectedOption1}
        onOptionChange={handleOptionChange}
      />
      </div>
      <div className="flex gap-x-2 items-center">
        <h1>No Order</h1>
      <FilterCombo
        id="filter2"
        options={options2}
        selectedOption={selectedOption2}
        onOptionChange={handleOptionChange}
      />
      </div>
    </div>
        <div className="w-70 mb-12 px-4">
          <CardOrder />
        </div>
        <div className="w-70 mb-12 px-4">
        </div>
      </div>
    </>
  );
}
