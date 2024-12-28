import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 15,
    title: "Classic White Crew Neck T-Shirt",
    price: 39,
    description:
      "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    images: [
      "https://i.imgur.com/axsyGpD.jpeg",
      "https://i.imgur.com/T8oq9X2.jpeg",
      "https://i.imgur.com/J6MinJn.jpeg",
    ],
    creationAt: "2024-12-21T11:57:54.000Z",
    updatedAt: "2024-12-21T11:57:54.000Z",
    category: {
      id: 1,
      name: "nuddevo",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2024-12-21T11:57:54.000Z",
      updatedAt: "2024-12-21T13:31:35.000Z",
    },
  },
  {
    id: 20,
    title: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 28,
    description:
      "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    images: [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg",
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
    id: 21,
    title: "Efficient 2-Slice Toaster",
    price: 48,
    description:
      "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    images: [
      "https://i.imgur.com/keVCVIa.jpeg",
      "https://i.imgur.com/afHY7v2.jpeg",
      "https://i.imgur.com/yAOihUe.jpeg",
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
    id: 22,
    title: "Sleek Wireless Computer Mouse",
    price: 10,
    description:
      "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    images: [
      "https://i.imgur.com/w3Y8NwQ.jpeg",
      "https://i.imgur.com/WJFOGIC.jpeg",
      "https://i.imgur.com/dV4Nklf.jpeg",
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
];

const ProductList = () => {
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
          <div className="text-sm text-gray-500 line-clamp-2 ">{product.description}</div>
          <button className="rounded-2xl ring-1 ring-primary px-4 py-2 text-xs hover:bg-primary hover:text-white w-max">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
