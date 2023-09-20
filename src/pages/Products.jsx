import React from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";

export default function Products() {
  const navigate = new useNavigate();

  return (
    <>
      <Product />
      <Footer />
    </>
  );
}
