import React from "react";
import { Link } from "react-router-dom";
import { IoLogoSnapchat } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { BsDatabaseFillAdd, BsSearchHeart, BsSunFill } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import CartStatus from "./ui/CartStatus";
import { useAuthContext } from "../context/Authcontext";
import { useFilterContext } from "../context/Filtercontext";
import { useNightContext } from "../context/Nightcontext";

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const {
    handleFilter,
    filter,
    input,
    handleInput,
    handleSubmit,
    handleReset,
  } = useFilterContext();

  const { handleToggle } = useNightContext();

  return (
    <header className="p-6">
      <div className="flex items-center justify-center">
        <Link
          id="link"
          to="/"
          onClick={handleReset}
          className="flex items-center text-5xl text-brand"
        >
          <h1 className="mr-4 font-[Giants-Inline]">Soo</h1>
          <IoLogoSnapchat />
        </Link>
      </div>

      <div className="flex items-center justify-center mt-3">
        <select
          className="bg-transparent"
          name="category"
          id="category"
          value={filter}
          onChange={handleFilter}
        >
          <option value="전체">전체</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="신발">신발</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input
            className="outline-none border-none my-0 bg-transparent"
            placeholder="검색어를 입력하세요."
            type="text"
            value={input}
            onChange={handleInput}
          />
          <button>
            <BsSearchHeart />
          </button>
        </form>
        <p className="ml-10" onClick={handleToggle}>
          <BsSunFill className="cursor-pointer hover:text-brand" />
        </p>
      </div>

      <nav className="flex justify-between">
        <div className="flex items-center">
          <Link to="/products" className="text-1xl flex items-center">
            <HiTemplate className="mr-2" />
            상품
          </Link>
        </div>

        <div className="flex items-center space-x-8 ">
          {user && user.isAdmin && (
            <Link to="/products/new" className="text-1xl flex items-center">
              <BsDatabaseFillAdd className="mr-2" />
              상품 등록
            </Link>
          )}
          {user && (
            <Link to="/cart">
              <CartStatus />
            </Link>
          )}

          {user && <User user={user} />}
          {!user && <Button text={"로그인"} onClick={login} />}
          {user && <Button text={"로그아웃"} onClick={logout} />}
        </div>
      </nav>
    </header>
  );
}
