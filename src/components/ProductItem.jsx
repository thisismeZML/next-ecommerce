"use client";

import Image from "next/image";
import Link from "next/link";
const ProductItem = ({ product, firstImage, secondImage }) => {
  return (
    <Link
      href={`/${product.id}`}
      key={product.id}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        {/* First Image */}
        <Image
          src={firstImage}
          fill
          sizes="25vw"
          alt={product.title || "Product Image"}
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
        />
        {/* Second Image */}
        <Image
          src={secondImage}
          fill
          sizes="25vw"
          alt={product.title || "Product Image"}
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{product.title}</span>
        <span className="font-semibold">${product.price}</span>
      </div>
      <div className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </div>
      <button className="rounded-2xl ring-1 ring-primary px-4 py-2 text-xs hover:bg-primary hover:text-white w-max">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductItem;
