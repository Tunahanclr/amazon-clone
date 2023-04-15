import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutProduct from '@/components/CheckoutProduct';
import { useSession } from "next-auth/react";

const Checkout = () => {
  const items = useSelector((state) => state.items);
  const total = useSelector((state) => state.total);
  const { data: session } = useSession();
  return (
    <div className='bg-gray-100'>
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>{
              items.length ===0 ?
              <div className='flex items-center justify-start mr-8 '>
                <img className=' sm:w-[250] md:w-[500px] w-[200px] h-[100px]  sm:h-[150px] md:h-[250px] object-contain' src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
                <h1 className=' text-base sm:text-xl sm:whitespace-nowrap md:text-3xl'>Your Amazon Cart is empty
                </h1>
              </div>
              :"Shopping Basket"
            }</h1>
            {items.map((item, i)=>(
              <CheckoutProduct key={item.id} item={item}/>
            ))}
          </div>
        </div>
        {/* right */}
        {items.length > 0 &&(
          <>
            <div className='bg-white p-10 flex flex-col md:inline-block shadow-md'>
              <h2 className='whitespace-nowrap'>subtotal({items.length} items:)
                <span className='font-bold'>
                  ${total}
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button w-36 mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300  cursor-not-allowed'}`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Checkout;
