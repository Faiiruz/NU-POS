import TreeSettle from './TreeSettle';
import { useState } from 'react';
import { settlement } from '../constant/table-data';
import Search from './Search';
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/router';

const TreeSettleTable= () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter()

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const handleCreateSettlement = () => {
    router.push(`/settlement/new/`);
  };

  const filteredData = settlement.filter((node) => {
    const regex = new RegExp(`^${searchKeyword}`, 'i');
    return regex.test(node.no);
  });
  
  return (
    <div>
        <div className='flex justify-between'>
        <Search onSearch={handleSearch} />
        <button
          onClick={handleCreateSettlement}
          className="flex items-center px-4 py-2 mb-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <AiOutlinePlus className="mr-2" />
          Add Delivery
        </button> 
        </div>
      {filteredData.map((node) => (
        <TreeSettle key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeSettleTable;