import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./ui/Loader";
import useProducts from "../hooks/useProducts";
import { useFilterContext } from "../context/Filtercontext";

export default function Product() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const { filter } = useFilterContext();

  const filteredProduct = products?.filter((products) => {
    if (filter === "전체") {
      return true;
    } else {
      return products.category === filter;
    }
  });

  return (
    <>
      {isLoading && <Loader />}

      {error && <p>{error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {filteredProduct &&
          filteredProduct.map((it) => <ProductCard key={it.id} product={it} />)}
      </ul>
    </>
  );
}
