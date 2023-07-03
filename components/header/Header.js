import React from 'react';

const Header = () => {
  return (
    <header className="bg-white text-black border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="ml-2 text-2xl font-bold">Admin Panel</h1>
        {/* Tambahkan elemen lain sesuai kebutuhan */}
      </div>
    </header>
  );
};

export default Header;