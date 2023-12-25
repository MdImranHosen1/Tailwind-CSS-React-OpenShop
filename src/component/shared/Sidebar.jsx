import React from "react";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS,DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";



const linkClasses = "flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className=" p-3 w-60 bg-neutral-900 flex  flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-2 ">
        <FcBullish fontSize={24} />
        <span className=" text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="flex-1 flex-col pt-8 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className=" border-t-2 border-gray-500">
      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      <div className={classNames(linkClasses,' text-red-500 cursor-pointer')}>
        <HiOutlineLogout className={classNames(" text-xl ",classNames)}/>
        logout</div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  let location = useLocation();
 
  return (
    <Link to={item.path} className={classNames(location.pathname===item.path?'text-white bg-neutral-700 ':' text-gray-400',linkClasses)}>
        <span className=" text-xl">{item.icon} </span>
        {item.label}
      
    </Link>
  );
}
