import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/cartSlice";
import Star from "@/api/star";
export default function Products({ product }) {
  const dispatch=useDispatch();
  const addBasket=()=>{
dispatch(addToBasket(product))
  }
  return (
    <div className="relative flex flex-col h-[450px] m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 italic text-xs text-gray-400">{product.category}</p>
      <div className="flex items-center justify-center">
       <a> <img src={product.image} className="w-[245px] h-[145px] sm:w-[250px] sm:h-[145px] object-contain" alt="" /></a>
      </div>
      <h4 className="my-3 text-sm sm:text-base">{product.title}</h4>
      <div className="flex">
      <Star/>
      </div>
      <div className="flex-1">
        <p className="text-xs sm:text-sm my-2 line-clamp-2">{product.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs  sm:text-sm text-gray-400 flex-1">Türkiye'ye gönderilir</div>
        <div className="text-xl font-bold">${product.price}</div>
      </div>
      <div className="relative">
        <button onClick={addBasket} className="button mt-2 text-sm sm:text-base">Sepete Ekle</button>
      </div>
    </div>
  );
}
