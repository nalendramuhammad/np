"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center text-center gap-1 text-[6px] md:text-xs text-gray-400 mix-blend-difference z-40 mt-auto">
      <span className="font-satoshi font-bold">
        this website is currently under development.
      </span>
      <span className="font-satoshi font-bold">
        for more projects or information, feel free to{" "}
        <a
          href="mailto:mwahyunalendra@gmail.com"
          className="font-tiempos italic font-normal underline decoration-1 underline-offset-2 hover:opacity-70 transition-opacity lg:cursor-none"
          data-clickable="true"
        >
          reach out.
        </a>
      </span>
    </footer>
  );
}
