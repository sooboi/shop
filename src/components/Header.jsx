import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiPrestashop } from "react-icons/si";
import { HiTemplate } from "react-icons/hi";
import { BsCartFill, BsDatabaseFillAdd, BsSearchHeart } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const [user, setUser] = useState();
  const [text, setText] = useState("");

  /** 상태 관찰자 로그인/로그아웃 */
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

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
        <form onSubmit={handleSubmit} className="border border-gray-600 p-2">
          <input
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
          <Link to="/cart" className="text-1xl flex items-center">
            <BsCartFill className="mr-2" />
            장바구니
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
