import React from "react";
import Star from "@/api/star";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "@/redux/cartSlice";

export default function CheckoutProduct({ item }) {
  const dispatch = useDispatch();

  const addItemBasket = () => {
    dispatch(addToBasket(item));
  };

  const removeItemBasket = () => {
    dispatch(removeFromBasket({ id: item.id }));
};

  return (
    <div className="grid items-center grid-cols-5">
      <img
        src={item.image}
        className="h-[200px] w-[200px] object-contain"
        alt=""
      />
      <div className="col-span-3 mx-5">
        <p>{item.title}</p>
        <div className="flex mb-4">
          <Star />
        </div>
        <p className="text-xs md:text-sm my-2 line-clamp-3">
          {item.description}
        </p>
        <div className="text-xs text-gray-400 flex-1">
          Türkiye'ye gönderilir
        </div>
        <span>${item.price}</span>
      </div>
      {/* right  */}
      <div>
        <div className="flex flex-col gap-2 my-auto justify-self-end">
          <button className="button w-full text-xs md:text-sm md:w-36" onClick={addItemBasket}>
            Add to Basket
          </button>
          <button className="button w-full md:w-36 text-xs md:text-sm" onClick={removeItemBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}
