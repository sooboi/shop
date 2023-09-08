import React from "react";
import { Link } from "react-router-dom";
import { SiPrestashop } from "react-icons/si";
import { HiTemplate } from "react-icons/hi";
import { BsCartFill, BsDatabaseFillAdd, BsSearchHeart } from "react-icons/bs";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <SiPrestashop />
        <h1 className="ml-4">Soo</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <select name="category" id="category">
          <option value="all">전체</option>
          <option value="top">상의</option>
          <option value="bottom">하의</option>
          <option value="shoes">신발</option>
        </select>
        <div className="border border-gray-600 p-2">
          <input type="text" placeholder="검색어를 입력하세요." />
          <button>
            <BsSearchHeart />
          </button>
        </div>
        <Link to="/products" className="text-1xl flex items-center">
          <HiTemplate className="mr-2" />
          상품
        </Link>
        <Link to="/cart" className="text-1xl flex items-center">
          <BsCartFill className="mr-2" />
          장바구니
        </Link>
        <Link to="/products/new" className="text-1xl flex items-center">
          <BsDatabaseFillAdd className="mr-2" />
          상품 등록
        </Link>
      </nav>
      <button className="text-1xl font-semibold">로그인</button>
    </header>
  );
}
