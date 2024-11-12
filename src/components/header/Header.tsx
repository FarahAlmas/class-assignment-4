import Link from "next/link";
export default function Header(){
  return(
   <div className="ml-[68rem] mt-[4.1875rem] items-end ">
 
      <ul className=" w-[283px] h-[24px] flex
         justify-between font-medium text-[20px]">
        <Link href="/"><li>Works</li></Link>
        <Link href="/"><li>Blog</li></Link>
        <Link href="/"><li>Contact</li></Link>
      </ul>
   </div>
  
  )
} 