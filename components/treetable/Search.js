import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    onSearch(keyword);
  };

  return (
    <input
    className='border px-2 rounded mb-4'
      type="text"
      placeholder="Search..."
      value={searchKeyword}
      onChange={handleSearchChange}
    />
  );
};

export default Search;
