import Card from "../card/Card";
export default function PostCard(){
  return (
 <div className="w-[100%] h-[31.375rem] mt-[6.9375rem] bg-[#f4e2e2]">
   <div className=" w-[64.375rem] ml-[237px] pt-[26px] flex justify-between">
      
   <p className="font-medium text-[22px] font-[heebo] ">Recent Post</p>
   <p className="text-[#f98585] font-medium text-[22px]">View all</p>

   </div>
     <div className=" ml-[238px] w-[1008px] flex gap-[42px] mt-[19px]">
      <Card/>
      <Card/>
      
     
      
  </div>
   </div> 
  )
}
