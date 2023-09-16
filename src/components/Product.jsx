import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./ui/Loader";
import useProducts from "../hooks/useProducts";

export default function Product() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products &&
          products.map((it) => <ProductCard key={it.id} product={it} />)}
      </ul>
    </>
  );
}
