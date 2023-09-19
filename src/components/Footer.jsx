import React from "react";
import { SiTistory } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-500 bottom-0 p-2 text-white flex items-center justify-around">
      <ul className="flex p-2">
        <li className="text-xl px-2 border border-white mr-5">Sooboi Info</li>
        <Link to="https://github.com/sooboi" className="flex items-center mr-4">
          <li className="flex items-center mr-4">
            <AiFillGithub className="mr-3" />
            https://github.com/sooboi
          </li>
        </Link>
        <Link
          to="https://sueboi.tistory.com/"
          className="flex items-center mr-4"
        >
          <li className="flex items-center">
            <SiTistory className="mr-3" />
            https://sueboi.tistory.com
          </li>
        </Link>
      </ul>
    </footer>
  );
}
