"use client";

import ProductItem from "./ProductItem";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ProductLoader from "./ProductLoader";

const isValidUrl = (url) => {
  try {
    return !!new URL(url);
  } catch {
    return false;
  }
};

const parseImages = (images) => {
  if (typeof images === "string") {
    try {
      return JSON.parse(images); // Parse the string into an array
    } catch {
      return []; // Return an empty array if parsing fails
    }
  }
  return images; // Return the original value if it's already an array
};

const ProductsContainer = () => {
  const param = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState("http://localhost:3003/products");
  const category = param.get("category"); // Get the selected category from URL
  const sort = param.get("sort"); // Get the sort parameter from URL

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: products, error } = useSWR(fetchUrl, fetcher);

  const fallbackImage = "/path/to/placeholder-image.jpg"; // Add a valid path to your placeholder image

  // Update fetchUrl when the sort or category changes
  useEffect(() => {
    let url = "http://localhost:3003/products?";

    // Append sorting if present
    if (sort === "price-asc") {
      url += "_sort=price&_order=asc";
    } else if (sort === "price-desc") {
      url += "_sort=price&_order=desc";
    }

    setFetchUrl(url); // Update the fetchUrl to trigger re-fetching of data
  }, [category, sort]);

  if (!products && !error) {
    // Show skeletons during loading
    const skeletons = Array.from({ length: 8 }, (_, index) => index); // Fixed length
    return (
      <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
        {skeletons.map((_, index) => (
          <ProductLoader key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Failed to load products. Please try again later.</div>;
  }

  // Filter products by category AFTER the products are fetched
  const filteredProducts = category
    ? products.filter((product) => String(product.category.id) === category)
    : products;

  if (filteredProducts.length === 0) {
    return <div>No products found for the selected category.</div>;
  }

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      {filteredProducts.map((product) => {
        const parsedImages = parseImages(product.images);
        const firstImage = isValidUrl(parsedImages[0])
          ? parsedImages[0]
          : fallbackImage;
        const secondImage = isValidUrl(parsedImages[1])
          ? parsedImages[1]
          : isValidUrl(parsedImages[2])
          ? parsedImages[2]
          : fallbackImage;

        return (
          <ProductItem
            product={product}
            firstImage={firstImage}
            secondImage={secondImage}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;
