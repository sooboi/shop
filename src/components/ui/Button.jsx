import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand text-white py-2 px-4 font-semibold rounded-sm hover:brightness-125"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
