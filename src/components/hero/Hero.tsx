import Image from "next/image"

export default function Hero(){
  return(
  <div className=" w-[64.375rem] h-[19.25rem] mt-[179px] ml-[14.4375rem]  flex justify-between">
     {/* contant div */}
     <div className=" w-[521px] h-[19.0625rem]">
      <h1 className="font-[heebo] text-[3rem] font-[900]  text-align-left text-[#21243d]">Hi, I am John,
        <br/>
Creative Technologist</h1>
<p className="text-[#21243D] font-[Heebo] text-[1rem] font-normal 
text-align-left mt-[29px]">
  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

 <button className="w-[12.8125rem] h-[3.125rem] rounded-sm py-3  px-27 font-[18px] text-[500] text-white bg-[#F98585]  mt-[36px] shadow-[#414141]
">Download Resume</button>
     </div>
{/* image div */}
     <div className="w-[282px] h-[297px] bg-[#aa9f9f,31%]">
     <div  className=" w-[292px] h-[299px]">
      <Image src={"/Images/hero-image.png"} alt="heropic"width={292} height={299}/>

     </div>
     </div>
   </div>
 
  )
}