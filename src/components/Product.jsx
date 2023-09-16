import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./ui/Loader";

export default function Product() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts, { staleTime: 1000 * 60 });
  // } = useQuery(["products"], () => getProducts());

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
