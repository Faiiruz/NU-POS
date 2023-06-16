import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import {AiFillSignal, AiFillShopping} from 'react-icons/ai'
import {HiShoppingCart, HiDocumentReport} from 'react-icons/hi'
import {FaTruck, FaStore} from 'react-icons/fa'
import {RiBillFill, RiDatabaseFill} from 'react-icons/ri'

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className='fixed p-6 w-60 h-screen bg-white z-20 top-10'>
      <div className='pt-10'>
        <ul className='flex flex-col'>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/'>
            <div className={'flex items-center p-1'+
                      (router.pathname.indexOf("/"))}>
              <AiFillSignal size={20} className='mr-1'/>Dashboard
            </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-8'>
            <Link href='/order'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf("/order"))}>
                <HiShoppingCart size={20} className='mr-1'/>Order
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/delivery'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf("/delivery"))}>
                <FaTruck size={20} className='mr-1'/>Delivery Notes
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/settlement'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf("/settlement"))}>
                <RiBillFill size={20} className='mr-1'/>Settlement
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/product'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf('/product'))}>
                <AiFillShopping size={20} className='mr-1'/>Product
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/store'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf('/store'))}>
                <FaStore size={20} className='mr-1'/>Store
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/masterdata'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf('/masterdata'))}>
                <RiDatabaseFill size={20} className='mr-1'/>Master Data
              </div>
            </Link>
          </li>
          <li className='border rounded mr-12 shadow hover:bg-gray-300 mb-7'>
            <Link href='/report'>
              <div className={'flex items-center p-1'+
                      (router.pathname.indexOf('/report'))}>
                <HiDocumentReport size={20} className='mr-1'/>Report
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar