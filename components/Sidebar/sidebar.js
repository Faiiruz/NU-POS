import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { menuItems } from "../constant/data";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Icons from "../Icon";

const MenuItem = ({ item, handleMenuClick }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === item.link) {
      setSubMenuOpen(true);
    } else {
      setSubMenuOpen(false);
    }
  }, [router.pathname, item.link]);

  const handleItemClick = (itemId) => {
    if (item.submenu) {
      setSubMenuOpen(!isSubMenuOpen);
    }
    handleMenuClick(itemId);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li className="rounded-lg">
      <div className="flex items-center ">
        <a
          href={item.link}
          className={`${
            router.pathname === item.link ? "bg-slate-400 text-black" : ""
          } flex items-center hover:text-gray-300 text-sm w-full p-2 rounded-sm`}
          onClick={() => handleItemClick(item.id)}
        >
          <Icons icon={item.icon} className="mr-1 ml-1 cursor-pointer" />
          {item.title}
        </a>
        {item.submenu && (
          <button
            className="ml-auto focus:outline-none"
            onClick={toggleSubMenu}
          >
            {isSubMenuOpen ? (
              <FiChevronUp className="h-5 w-5" />
            ) : (
              <FiChevronDown className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {item.submenu && isSubMenuOpen && (
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
    <div className="bg-white text-black border-r w-44 flex flex-col">
      <div className="text-center">
        <img src="/image/logo-nu.jpeg" alt="Logo NU" className="w-full"/>
      </div>
      <ul className="space-y-7 mt-3 p-1">
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
