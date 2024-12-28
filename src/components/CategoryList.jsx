import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "nuddevo",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T13:31:35.000Z",
  },
  {
    id: 2,
    name: "Electronics",
    image: "https://i.imgur.com/ZANVnHE.jpeg",
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
  },
  {
    id: 3,
    name: "Furniture",
    image: "https://i.imgur.com/Qphac99.jpeg",
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
  },
  {
    id: 4,
    name: "Shoes",
    image: "https://i.imgur.com/qNOjJje.jpeg",
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
  },
  {
    id: 5,
    name: "Miscellaneous",
    image: "https://i.imgur.com/BG8J0Fj.jpg",
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
  },
  {
    id: 17,
    name: "blush",
    image:
      "https://sdcdn.io/mac/ae/mac_sku_M22011_1x1_0.png?width=1080&height=1080",
    creationAt: "2024-12-21T22:03:28.000Z",
    updatedAt: "2024-12-21T22:03:28.000Z",
  },
];
const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href="/list?cat=test"
            className="flex-shrink-0 w-full sm:1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className=" relative bg-slate-100 w-full h-96">
              <Image
                src={category.image}
                fill
                alt="category"
                sizes="20vw"
                className=" object-cover"
              />
            </div>
            <h1 className="mt-8 font-light tracking-wide text-xl">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
