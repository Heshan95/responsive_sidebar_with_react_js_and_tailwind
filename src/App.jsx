import React from 'react'
import { useState } from 'react';
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiSearch2Line } from "react-icons/ri";
import { IoLogoSlack } from "react-icons/io5";
import {
  RiDashboardFill, RiArrowDownWideLine, RiArticleFill, RiAdvertisementFill, RiBuilding4Fill,
  RiBarChartBoxFill, RiBookletFill, RiAccountBoxFill, RiShoppingCartFill, RiPassValidFill, RiLockUnlockFill
} from "react-icons/ri";
import Navigation from './Components/Navigation/Navigation.jsx'

const App = () => {

  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const Menus = [
    { titel: "Dashboard" },
    { titel: "Pages", icon: <RiArticleFill /> },
    { titel: "Media", spacing: true, icon: <RiAdvertisementFill /> },
    {
      titel: "Projects",
      subMenu: true,
      subMenuItems: [
        { titel: "SubMenu 01" },
        { titel: "SubMenu 02" },
        { titel: "SubMenu 03" },
      ],
      icon: <RiBuilding4Fill />
    },
    { titel: "Analytics", icon: <RiBarChartBoxFill /> },
    { titel: "Index", icon: <RiBookletFill /> },
    { titel: "Profile", icon: <RiAccountBoxFill /> },
    { titel: "Selling", spacing: true, icon: <RiShoppingCartFill /> },
    { titel: "Dashboard", icon: <RiPassValidFill /> },
    { titel: "Logout", icon: <RiLockUnlockFill /> },
  ];

  return (
    <div className='flex'>
      <div className={`bg-sea-green h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
        <BsArrowLeftCircle className={`bg-white text-sea-green text-3xl rounded-full
      absolute -right-3 top-9 border border-sea-green cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

        <div className='inline-flex'>
          <IoLogoSlack className={`bg-amber-50 text-4xl rounded cursor-pointer
      block float-left mr-2 duration-500 ${!open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium
      text-2xl duration-300 ${!open && "scale-0"}`}>Wellfort Management</h1>
        </div>

        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <RiSearch2Line className={`text-white text-lg block float-left cursor-pointer ${!open && "mr-2"}`} />
          <input type={"search"} placeholder='' className={`text-base bg-transparent w-full text-white
          focus: outline-none ${!open && "hidden"}`} />
        </div>

        {/* <Navigation /> */}

        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-200 text-sm flex items-center gap-x-4
          cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className='text-2xl block float-left'>
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  style={{
                    transitionDelay: `${index + 1}00ms`,
                  }}
                  className={`text-base whitespace-pre font-medium flex-1 duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                  {menu.titel}
                </span>
                {menu.subMenu && open && (
                  <RiArrowDownWideLine className={`${subMenuOpen && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />
                )}
              </li>

              {menu.subMenu && subMenuOpen && open && (
                <ul>
                  {menu.subMenuItems.map((subMenuItem, index) => {
                    <li key={index} className='text-gray-200 text-sm flex items-center gap-x-4
          cursor-pointer p-2 px-5 hover:bg-light-white rounded-md'>
                      {subMenuItem.titel}
                    </li>
                  })}
                </ul>
              )}
            </>
          ))}
        </ul>

      </div>


      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home Page</h1>
      </div>
    </div>
  )
}

export default App
