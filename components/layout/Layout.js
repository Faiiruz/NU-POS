import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
