import React from 'react';

const FilterCombo = ({ id, options, selectedOption, onOptionChange }) => {
  return (
    <select
      id={id}
      value={selectedOption}
      onChange={(e) => onOptionChange(id, e.target.value)}
      className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterCombo;
