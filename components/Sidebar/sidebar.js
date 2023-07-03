import React from 'react';
import { menuItems } from '../constant/data';
import Icons from '../Icon';

const Sidebar = () => {

  return (
    <div className="bg-white text-black border-r w-56 p-4">
      <ul className="space-y-10 mt-1">
        <div className='text-center'>
          Logo
        </div>
        {menuItems.map((item) => (
          <li key={item.id}>
            <div className='flex items-center'>
              <Icons icon={item.icon} className='mr-1'/>
            <a href={item.link} className="block hover:text-gray-300">
              {item.title}
            </a>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar;