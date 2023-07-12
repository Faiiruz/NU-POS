import React from "react";
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  // Fungsi untuk menghandle logout
  const handleLogout = () => {
    const confirmLogout = window.confirm('Apakah Anda yakin ingin logout?');
    if (confirmLogout) {
      // Lakukan proses logout di sini (seperti menghapus token dari local storage atau melakukan permintaan ke server)

      // Setelah logout, arahkan pengguna ke halaman login
      router.push('/login');
    }
  };

  return (
    <header className="bg-white text-black border-b py-4">
      <div>
        <div className="flex items-center justify-between">
        <h1 className="ml-2 text-2xl font-bold">Admin Panel</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
          Keluar
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
