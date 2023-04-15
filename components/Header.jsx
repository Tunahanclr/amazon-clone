import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/cartSlice";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector((state) => state.items);

  return (
    <header>
      {/* top nav */}
      <div className="bg-amazon_blue h-14 flex items-center justify-between p-1 flex-grow py-2">
        <div className="flex items-center flex-grow sm:flex-grow-0">
        <img
  onClick={() => router.push("/")}
  className="w-28 items-center ml-4 flex pt-3 object-cover cursor-pointer logo"
  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
  alt=""
/>
        </div>

        {/*search*/}
        <div className="hidden ml-5 sm:flex items-center justify-center h-10 flex-grow">
          <div className="relative flex items-center w-full justify-center">
            <input
              type="text"
              placeholder="search Amazon"
              className="rounded-md relative p-2 focus:outline-none focus:border-yellow-500 focus:border-2 flex-grow"
            />
            <div className="bg-yellow-400 h-10 w-10 rounded-md absolute right-0 cursor-pointer flex justify-center items-center">
              <BsSearch className="font-bold cursor-pointer text-xl" />
            </div>
          </div>
        </div>

        {/*Right*/}
        <div className="flex text-white ml-10 gap-5 sm:gap-12 whitespace-nowrap pr-5 items-center">
          <div onClick={signIn} className="flex cursor-pointer flex-col items-center">
            <span className="text-xs font-medium">
             {session ? `Hello, ${session.user.name}` : "Hello, sign in"} 
            </span>
            <h3 className=" text-[10px] sm:text-sm font-bold">Account & Lists</h3>
          </div>
          <div className=" flex cursor-pointer flex-col items-center">
            <span className="text-xs font-medium">Retums</span>
            <h3 className="text-[10px] sm:text-sm  font-bold">& Orders</h3>
          </div>
          <div onClick={() => router.push("/checkout")}  className="flex cursor-pointer items-center">
          <span className="sm:text-base text-xs absolute -top-[1px] right-9 bg-red-600 text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">{items.length}</span>
<AiOutlineShoppingCart className="text-2xl sm:text-3xl md:text-4xl relative" />
<h3 className="text-[10px] sm:text-sm font-bold mt-1">Cart</h3>
         </div>
        </div>
              {/* bottom nav */}
      </div>
         <div className="flex flex-col bg-amazon_blue-light ">
          <div>
          <div className="sm:hidden ml-5 flex items-center justify-center h-10 flex-grow">
  <div className="relative flex items-center  w-[450px] justify-center">
    <input type="text" placeholder="search Amazon" className=" rounded-md relative p-2 focus:outline-none focus:border-yellow-500 focus:border-2 flex-grow" />
    <div className="bg-yellow-400 h-10 w-10 rounded-md absolute right-0 cursor-pointer flex justify-center items-center">
      <BsSearch className="font-bold cursor-pointer text-xl" />
    </div>
  </div>
</div>
          </div>


         <div className=" text-xs md:text-sm h-[39px] gap-2 sm:gap-4 md:gap-6 whitespace-nowrap  text-white flex items-center p-5">
         <div  className="flex font-bold gap-1 items-center cursor-pointer">
  <AiOutlineMenu className="font-extrabold text-white text-xl"/> <span className="">All</span>
</div>
        
            <div className="flex  gap-1 items-center cursor-pointer">
         <span className="">Today's Deals</span>
            </div>
            <div className="flex  gap-1 items-center cursor-pointer">
         <span className="">Customer Service</span>
            </div>
            <div className="flex  gap-1 items-center cursor-pointer">
         <span className="">Registry</span>
            </div>
            <div className="flex  gap-1 items-center cursor-pointer">
         <span className="">Gift Cards</span>
            </div>
            <div className="flex  gap-1 items-center cursor-pointer">
         <span className="">Sell</span>
            </div>
          </div>
         </div>
      <div>
      </div>
    </header>
  );
}
