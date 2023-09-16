import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoSnapchat } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { BsDatabaseFillAdd, BsSearchHeart } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/Authcontext";
import CartStatus from "./ui/CartStatus";

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const [text, setText] = useState("");

  /** 검색창 submit 함수 */
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /** 검색어 input 핸들러 */
  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <h1 className="mr-4 font-[Giants-Inline]">Soo</h1>
        <IoLogoSnapchat />
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <select name="category" id="category">
          <option value="all">전체</option>
          <option value="top">상의</option>
          <option value="bottom">하의</option>
          <option value="shoes">신발</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input
            className="outline-none border-none my-0"
            type="text"
            value={text}
            placeholder="검색어를 입력하세요."
            onChange={handleInput}
          />
          <button>
            <BsSearchHeart />
          </button>
        </form>
        <Link to="/products" className="text-1xl flex items-center">
          <HiTemplate className="mr-2" />
          상품
        </Link>
        {user && (
          <Link to="/cart">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-1xl flex items-center">
            <BsDatabaseFillAdd className="mr-2" />
            상품 등록
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"로그인"} onClick={login} />}
        {user && <Button text={"로그아웃"} onClick={logout} />}
      </nav>
    </header>
  );
}
