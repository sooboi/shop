import React from "react";
import Loader from "../components/ui/Loader";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";

export default function Cart() {
  const {
    cartQuery: { isLoading, data: products, uid },
  } = useCart();

  const Shipping = 3000;

  if (isLoading) return <Loader />;

  const hasProducts = products && products.length > 0;

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="p-8 flex flex-col h-screen">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProducts && (
        <p className="flex flex-col my-10 items-center font-bold">
          장바구니에 상품이 없습니다 😭
        </p>
      )}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((it) => (
                <CartItem key={it.id} products={it} uid={uid} />
              ))}
          </ul>
          <div className="flex justify-between items-center px-2 md:px-8 lg:px-16 mb-4 ">
            <PriceCard text="상품 금액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={Shipping} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총 금액" price={totalPrice + Shipping} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
