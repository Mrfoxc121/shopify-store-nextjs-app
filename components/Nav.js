import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4pb-4pb-2 mx-auto lg:m-w-sreen-xl">
        <Link legacyBehavior href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Shopify + Next.js</span>
          </a>
        </Link>
        <a className="text-md font-bold cursor-pointer">
            Cart
        </a>
      </div>
    </header>
  );
}
