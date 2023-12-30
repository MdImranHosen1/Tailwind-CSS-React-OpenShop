import React from "react";
import idIcon from "../assets/donatello.png";


export function SmsModel({click}) {


  if(!click)
  {
    return null
  }

  
  return (
    <div
      id="model-div"
      className="fixed right-20 top-16  bg-black bg-opacity-5 border-2 border-gray-100"
    >
      <div className="bg-white text-gray-700 p-2 rounded ">
        <div className=" font-semibold  border-b-2 border-spacing-4 mb-2">
          Messeges
        </div>
        <ul className=" text-sm m-2 *:border-b-2 *:border-gray-100">
          <li>This is first messege</li>
          <li>This is first messege</li>
          <li>This is first messege</li>
        </ul>
      </div>
    </div>
  );
}

export function NotificationModel({click}) {


  if(!click)
  {
    return null
  }

  
  return (
    <div
      id="model-div"
      className="fixed right-6 top-16  bg-black bg-opacity-5 border-2 border-gray-100"
    >
      <div className="bg-white text-gray-700 p-2 rounded ">
        <div className=" font-semibold  border-b-2 border-spacing-4 mb-2">
          Notification
        </div>
        <ul className=" text-sm m-2 *:border-b-2 *:border-gray-100">
          <li>This is first Notification</li>
          <li>This is first Notification</li>
          <li>This is first Notification</li>
        </ul>
      </div>
    </div>
  );
}

export function ProfileModel({click ,closeProfile}) {


  if(!click)
  {
    return null
  }

  
  return (
    <div
      className=" absolute grid  bg-black inset-0 place-items-center bg-opacity-30 backdrop-blur w-full h-full border-2 border-gray-100"
    >
      <div className=" flex flex-col bg-white text-gray-700 p-2 rounded w-1/2  h-1/2 ">
        <div className=" flex font-semibold justify-between   border-b-2 border-spacing-4 mb-2">
          <div>Profile</div>
          <div onClick={()=>closeProfile(false)} className=" text-red-600 cursor-pointer">X</div>
        </div>
        <div  className="flex   justify-center">
          <img className="w-1/4  rounded-full  border-2 border-gray-300" src={idIcon} alt='profileImage' />
        </div>
        <div>
          <p className="flex justify-center pt-5 font-bold text-xl">John Wick</p>
          <p className="flex justify-center pt-2 text-lg">Programmer</p>
        </div>
       <div className=" flex flex-1 flex-col"></div>
        <div className=" flex *:mx-4 justify-center pb-3">
          <div>Icon</div>
          <div>Icon</div>
          <div>Icon</div>
        </div>
      </div>
    </div>
  );
}