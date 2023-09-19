import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./ui/Loader";
import useProducts from "../hooks/useProducts";
import { useFilterContext } from "../context/Filtercontext";

export default function Product() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const { filter, search } = useFilterContext();

  const filteredProduct = products?.filter((products) => {
    if (filter === "전체") {
      return true; // filter 값이 전체면 모든 제품을 반환
    } else {
      return products.category === filter;
    }
  });

  const filteredTitle = filteredProduct?.filter((it) => {
    if (!search) {
      return true; // input 값이 비어있을 때 모든 제품을 반환
    } else {
      return it.title.includes(search);
    }
  });

  return (
    <>
      {isLoading && <Loader />}

      {error && <p>{error}</p>}

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {/* {search
          ? filteredTitle.map((it) => <ProductCard key={it.id} product={it} />)
          : filteredProduct?.map((it) => (
              <ProductCard key={it.id} product={it} />
            ))} */}
        {filteredTitle && filteredTitle.length > 0 ? (
          filteredTitle.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="h-72">해당 검색어의 제품을 찾을 수 없습니다 🥺</p>
        )}
      </ul>
    </>
  );
}
