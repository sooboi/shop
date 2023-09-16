import React from "react";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";
import {
  BsFillXSquareFill,
  BsFillPatchPlusFill,
  BsFillPatchMinusFill,
} from "react-icons/bs";

const ICON_CLASS =
  "text-xl transition-all cursor-pointer hover:text-brand hover:scale-105 mx-2";

export default function CartItem({
  products,
  products: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...products, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...products, quantity: quantity + 1 });
  };
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>₩ {price}</p>
        </div>
        <div className="text-2xl flex items-center">
          <BsFillPatchMinusFill className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <BsFillPatchPlusFill className={ICON_CLASS} onClick={handlePlus} />
          <BsFillXSquareFill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
