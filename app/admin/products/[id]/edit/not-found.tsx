import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>Product Not Found</Heading>
      <Link
        href={"/admin/products"}
        className="bg-amber-400 text-black py-3 px-10 text-xl text-center font-bold cursor-pointer w-full lg:w-auto"
      >
        Return to Products
      </Link>
    </div>
  );
}
