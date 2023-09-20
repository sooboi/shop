import React from "react";
import { SiTistory } from "react-icons/si";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNightContext } from "../context/Nightcontext";

export default function Footer() {
  const { MoveToTop } = useNightContext();

  return (
    <div>
      <p
        onClick={MoveToTop}
        className="bg-brand flex justify-center p-2 text-white cursor-pointer transition-all hover:brightness-125 rounded-tl-full rounded-tr-full"
      >
        <PiArrowFatLinesUpFill />
      </p>
      <footer className="w-full bg-slate-500 bottom-0 p-2 text-white flex items-center justify-around">
        <ul className="flex p-2">
          <li className="text-xl px-2 border border-white mr-5">Sooboi</li>
          <Link
            to="https://github.com/sooboi"
            className="flex items-center mr-4"
          >
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
    </div>
  );
}
