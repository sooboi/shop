import React from "react";
import Product from "../components/Product";
import { useNavigate } from "react-router";

export default function Products() {
  const navigate = new useNavigate();

  return <Product />;
}
