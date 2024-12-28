import Add from "@/components/Add";
import CustomizeProduct from "@/components/CustomizeProduct";
import ProductImages from "@/components/ProductImages";

const SinglePage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`http://localhost:3003/products/${slug}`);
  const product = await res.json();
  console.log(product);
  return (
    <div className="px-4 mb-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.title}</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut id a
          atque. Placeat tempora consectetur porro illo delectus sapiente
          corporis dolores cupiditate excepturi.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora architecto blanditiis voluptates magnam beatae officiis
            alias recusandae vel saepe? Est amet minus voluptates.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora architecto blanditiis voluptates magnam beatae officiis
            alias recusandae vel saepe? Est amet minus voluptates.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            tempora architecto blanditiis voluptates magnam beatae officiis
            alias recusandae vel saepe? Est amet minus voluptates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
