"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Filter = () => {
  const router = useRouter();
  const param = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(param.get("category") || "");
  const [minPrice, setMinPrice] = useState(param.get("min") || "");
  const [maxPrice, setMaxPrice] = useState(param.get("max") || "");
  const [sort, setSort] = useState(param.get("sort") || "");

  useEffect(() => {
    setSelectedCategory(param.get("category") || "");
    setMinPrice(param.get("min") || "");
    setMaxPrice(param.get("max") || "");
    setSort(param.get("sort") || "");
  }, [param]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    updateQueryParams({ category });
  };

  const handleMinPriceChange = (e) => {
    const min = e.target.value;
    setMinPrice(min);
    updateQueryParams({ min });
  };

  const handleMaxPriceChange = (e) => {
    const max = e.target.value;
    setMaxPrice(max);
    updateQueryParams({ max });
  };

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);
    updateQueryParams({ sort: sortValue });
  };

  const updateQueryParams = (newParams) => {
    const params = new URLSearchParams(param.toString());

    // Update the URL search params with the new filters
    Object.keys(newParams).forEach((key) => {
      if (newParams[key]) {
        params.set(key, newParams[key]);
      } else {
        params.delete(key);
      }
    });

    router.push(`/list?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id="type-select"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">Category</option>
          <option value="1">Clothing</option>
          <option value="2">Electronics</option>
          <option value="3">Furniture</option>
          <option value="4">Shoes</option>
          <option value="5">Miscellaneous</option>
        </select>
      </div>
      <div>
        <select
          name="sort"
          value={sort}
          onChange={handleSortChange}
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="price-desc">Sort By</option>
          <option value="price-asc">Price (Low to high)</option>
          <option value="price-desc">Price (High to low)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
