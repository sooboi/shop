import React from "react";
import { BsCartFill } from "react-icons/bs";
import useCart from "../../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="text-1xl flex items-center relative">
      <BsCartFill className="mr-2" />
      <p>장바구니</p>
      {products && products.length > 0 && (
        <p className="w-4 h-4 text-center bg-brand text-white rounded-full text-xs absolute -top-2 left-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
