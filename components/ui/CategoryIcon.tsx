"use client";
import { Category } from "@prisma/client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type CategoryIconProps = {
  category: Category;
};
export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>();
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-300 p-3 last-of-type:border-b ${
        category.slug === params.category ? "bg-amber-400" : undefined
      }`}
    >
      <div className="w-16 h-16 relative">
        <Image fill src={`/icon_${category.slug}.svg`} alt="Category img" />
      </div>

      <Link href={`/order/${category.slug}`} className="text-xl font-bold">
        {category.name}
      </Link>
    </div>
  );
}
