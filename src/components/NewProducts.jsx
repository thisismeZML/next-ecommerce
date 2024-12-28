import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 26,
    title: "Sleek Mirror Finish Phone Case",
    price: 27,
    description:
      "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    images: [
      "https://i.imgur.com/yb9UQKL.jpeg",
      "https://i.imgur.com/m2owtQG.jpeg",
      "https://i.imgur.com/bNiORct.jpeg",
    ],
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-12-21T11:57:54.000Z",
      updatedAt: "2024-12-21T11:57:54.000Z",
    },
  },
  {
    id: 27,
    title: "Sleek Smartwatch with Vibrant Display",
    price: 16,
    description:
      "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.",
    images: [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg",
    ],
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2024-12-21T11:57:54.000Z",
      updatedAt: "2024-12-21T11:57:54.000Z",
    },
  },
  {
    id: 28,
    title: "Sleek Modern Leather Sofa",
    price: 53,
    description:
      "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.",
    images: [
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/dJjpEgG.jpeg",
      "https://i.imgur.com/MxJyADq.jpeg",
    ],
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-12-21T11:57:54.000Z",
      updatedAt: "2024-12-21T11:57:54.000Z",
    },
  },
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-12-21T11:57:54.000Z",
      updatedAt: "2024-12-21T11:57:54.000Z",
    },
  },
];
const NewProducts = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      {products.map((product) => (
        <Link
          href={`/${product.id}`}
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            {/* First Image */}
            <Image
              src={product.images[1]}
              fill
              sizes="25vw"
              alt={product.title}
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            {/* Second Image */}
            <Image
              src={product.images[2] || product.images[0]}
              fill
              sizes="25vw"
              alt={product.title}
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.title}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="text-sm text-gray-500 line-clamp-2 ">
            {product.description}
          </div>
          <button className="rounded-2xl ring-1 ring-primary px-4 py-2 text-xs hover:bg-primary hover:text-white w-max">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default NewProducts;
