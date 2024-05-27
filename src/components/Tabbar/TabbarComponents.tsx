"use client";

import Link from 'next/link';
import { MenuList, MenuItem } from './Menu';

const TabbarComponents = () => {

  const leftMenu = MenuList.slice(0, 4);
  const rightMenu = MenuList.slice(4);

  return (
    <nav className="bg-white w-full  py-4">
      <div className=" ml-52" >
        <div className=" flex">
          <div className="w-[700px] flex justify-between">
            {/* Left Menu Items */}
            <div className="flex space-x-8">
              {leftMenu.map((item: MenuItem) => (
                  <Link key={item.name} href={item.path}>
                <span className={item.active ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
                  {item.name}
                </span>
                  </Link>
              ))}
            </div>
            {/* Right Menu Item */}
            <div className="">
              {rightMenu.map((item: MenuItem) => (
                  <Link key={item.name} href={item.path}>
                <span className={item.active ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"}>
                  {item.name}
                </span>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TabbarComponents;
