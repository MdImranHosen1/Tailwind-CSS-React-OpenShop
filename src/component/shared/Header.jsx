import React, { useState } from "react";
import searchIcon from "../assets/search.png";
import smsIcon from "../assets/sms.png";
import notificationIcon from "../assets/notification.png";
import idIcon from "../assets/donatello.png";
import { SmsModel,NotificationModel,ProfileModel  } from "./HeaderModel";

export default function Header() {
  const [sms, setSms] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <div>
      <div className="bg-white h-16 px-4 flex items-center">
        <div className="relative">
          <input
            type="email"
            className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-2 hover:border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
            placeholder="Search"
          />
          <div className="absolute  inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <img src={searchIcon} />
          </div>
        </div>
        <div className=" flex flex-1"></div>
        <div className=" flex ">
          <div className="  m-3 grid content-center">
            <img
              onClick={() =>
            {
                setSms(!sms);
                setNotification(false);
                setProfile(false);
            }}
              className=" w-6 h-6 opacity-70"
              src={smsIcon}
            />
            <SmsModel click={sms} ></SmsModel>
          </div>
          <div className="  m-3 grid content-center">
            <img onClick={()=> {
                setNotification(!notification);
                setProfile(false);
                setSms(false);
            }} className=" w-6 h-6 opacity-70" src={notificationIcon} />
            <NotificationModel click={notification}/>
          </div>
          <div className="  ml-4 mr-1 grid content-center rounded-full bg-gray-300 border-2 border-gray-600">
            <img className=" w-9 h-9 " onClick={()=>{
                setProfile(!profile);
                setNotification(false);
                setSms(false);
            }} src={idIcon} />
           <ProfileModel click={ profile} closeProfile={setProfile}/>
          </div>
          
        </div>
        <div></div>
      </div>
    </div>
  );
}
