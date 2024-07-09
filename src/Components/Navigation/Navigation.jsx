import { useState } from 'react';
import { React } from 'react';
import {
  RiDashboardFill, RiArrowDownWideLine, RiArticleFill, RiAdvertisementFill, RiBuilding4Fill,
  RiBarChartBoxFill, RiBookletFill, RiAccountBoxFill, RiShoppingCartFill, RiPassValidFill, RiLockUnlockFill
} from "react-icons/ri";

const Navigation = () => {

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

    <ul className='pt-2'>
      {Menus.map((menu, index) => (
        <>
          <li key={index} className={`text-gray-200 text-sm flex items-center gap-x-4
          cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 ${menu.spacing ? "mt-9" : "mt-2"}`}>
            <span className='text-2xl block float-left'>
              {menu.icon ? menu.icon : <RiDashboardFill />}
            </span>
            <span className={`text-base whitespace-pre font-medium flex-1 duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
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
  )
}

export default Navigation