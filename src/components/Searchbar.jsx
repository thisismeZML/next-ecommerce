"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      action=""
      className="flex items-center justify-between gap-4 bg-gray-100 rounded-md p-2 flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className=" cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="search" />
      </button>
    </form>
  );
};

export default Searchbar;
