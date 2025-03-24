

"use client";
import Link from "next/link";
import * as React from "react";
// import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/slices/cartSlice";



export default function MainHeaderPage() {

  // const [isLoggedOut, setIsLoggedOut] = useState(false)
  

  const path = usePathname();
  const totalItems = useSelector(selectTotalItems);

  // const handleSignOut = () => {
  //   setIsLoggedOut(true); // Set the state to true to trigger the redirect
  // };

  // // If the user is logged out, render the LoginPage component
  // if (isLoggedOut) {
  //   return <LoginPage />;
  // }

 
  return (
    <nav className="sticky top-0 z-20 bg-white p-5 px-0 py-0 pt-4">
      <div className="flex justify-between ps-40 py-3 bg-white shadow-lg  ">
        <span></span>
        <ul className="flex text-base gap-3 text-black font-bold">
                    <li className='px-2 pt-0 text-md   rounded-xl border-black'>
                        <Link href='/' >Home</Link>
                    </li>
                    <li className='px-2 pt-0 text-md rounded-xl'>
                        <Link href='/shop' className={path.startsWith('/shop') ? '' : undefined}>Store</Link>
                    </li>
                    <li className='px-2 text-md   rounded-xl'>
                        <Link href='/cart' className={path.startsWith('/cart') ? '' : undefined}>
                            <div className="flex">
                                <span className='pt-0'>Cart</span>
                                <div className="relative inline-flex items-center">
                                    
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 mt-0 ml-1" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z"/></svg>
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 h-5 w-5 bg-green-600 mt-2 text-white rounded-full flex items-center justify-center text-xs">
                                            {totalItems}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
       
        <div className="flex gap-4">
          <div className="px-3">
          {/* <button className="bg-sky-600 hover:scale-110 px-2  py-1 rounded-xl text-black text-sm"
          // onClick={handleSignOut}
          >
            Sign Out
          </button> */}
          </div>
          {/* <span className="pt-2 pe-2">
            <ToggleTheme />
          </span> */}
        </div>
      </div>
    </nav>
  );
}
