import { RiFacebookBoxFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function Footer() {
  return (
    <div
      className="w-full h-[243px] 
      mt-[58.8px] pt-[49px]"
    >
      <div
        className="w-[278px] h-[30px]  
        ml-[578px] flex align-center justify-between" >
          <RiFacebookBoxFill className="w-[30px] h-[30px]" />
          <CiInstagram className="w-[30px] h-[30px]" />
          <FaTwitter className="w-[30px] h-[30px]"  />
          <FaLinkedin  className="w-[30px] h-[30px]" />

        </div>
        <p className="text-[22px] mt-[36.67px] text-center font-medium">
         Copyright ©2020 All rights reserved 
        </p>
      
    </div>
  );
}
