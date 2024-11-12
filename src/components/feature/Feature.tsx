import Detail from "../detail/Detail";
import Image from "next/image"
export default function Feature(){
 return(
  <div className="mt-[79px] ml-[237px]  w-[919px] h-[934.2px]">
    <p className=" text-[22px] font-medium">Featured works</p>
  <div className="flex">
  <div className=" w-[256px] h-[896.3px]">
    <Image src="/Images/Rectangle 30.png" alt="pic" width="246" height="180" className="mt-[32px]"></Image>

    <Image src="/Images/Rectangle 32.png" alt="pic" width="246" height="180" className="mt-[111px]"></Image>

    <Image src="/Images/Rectangle 34.png" alt="pic" width="246" height="180" className="mt-[111px]"></Image>


</div>
<div className=" h-[896.3px] w-[663.46px] flex-row gap-20 m-[20px]">
  <Detail/>
  <Detail/>
  <Detail/>
</div>
  </div>
  </div>
 ) 
} 