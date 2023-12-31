import React, { useState } from "react";
import { useLocation } from "react-router";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
import { useAuthContext } from "../context/Authcontext";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const [success, setSuccess] = useState("");
  const { user } = useAuthContext();

  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  /** 옵션 선택 */
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  /** 장바구니 추가 */
  const handleClick = (e) => {
    if (user !== null) {
      const product = {
        id,
        image,
        title,
        price,
        option: selected,
        quantity: 1,
      };
      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess("장바구니에 추가되었습니다.");
          setTimeout(() => setSuccess(null), 4000);
        },
      });
      return;
    }
    return alert("로그인을 먼저해주세요");
  };

  return (
    <>
      <p className="mx-12 mt-4  text-gray-500">{category}</p>
      <section className="flex flex-col md:flex-row p-4 ">
        <img
          className="xl:w-2/4 md:w-3/4 sm:w-full px-4 basis-7/12"
          src={image}
          alt={title}
        />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2 ">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-700">
            ₩ {price}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              옵션 :
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none text-black"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((it, index) => <option key={index}>{it}</option>)}
            </select>
          </div>
          {success && <p className="my-2 text-brand">{success}</p>}
          <Button text="장바구니 담기" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
