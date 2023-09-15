import React from "react";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section>
      <Banner />
      <Product />
      <Footer />
    </section>
  );
}
