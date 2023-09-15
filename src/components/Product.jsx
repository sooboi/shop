import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import React from "react";
import ProductCard from "./ProductCard";

export default function Product() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], () => getProducts());

  return (
    <>
      {isLoading && <p>Loading . . .</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4">
        {products &&
          products.map((it) => <ProductCard key={it.id} product={it} />)}
      </ul>
    </>
  );
}