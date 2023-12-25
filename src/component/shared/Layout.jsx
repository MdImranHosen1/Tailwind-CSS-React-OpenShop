import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar/>
      <div>
        <div className=" bg-orange-400">header</div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
