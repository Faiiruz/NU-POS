import React, { useState } from "react";
import { useRouter } from "next/router";
import { menuItems } from "../constant/data";
import Icons from "../Icon";

const MenuItem = ({ item, handleMenuClick }) => {
  const handleItemClick = (itemId) => {
    handleMenuClick(itemId);
  };

  return (
    <li className="rounded-lg">
      <div className="flex items-center p-2">
        <a
          href={item.link}
          className="flex items-center hover:text-gray-300"
          onClick={() => handleItemClick(item.id)}
        >
          <Icons icon={item.icon} className="mr-1 cursor-pointer" />
          {item.title}
        </a>
      </div>
      {item.submenu && (
        <ul className="pl-4">
          {item.submenu.map((subItem) => (
            <MenuItem
              key={subItem.id}
              item={subItem}
              handleMenuClick={handleMenuClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="bg-white text-black border-r p-5 rounded-lg">
      <ul className="space-y-7 mt-1">
        <div className="text-center">Logo</div>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
