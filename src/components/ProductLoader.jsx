const ProductLoader = () => {
  return (
    <div
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] animate-pulse"
    >
      {/* Skeleton for Image */}
      <div className="relative w-full h-80 bg-gray-300 rounded-md"></div>
      {/* Skeleton for Title and Price */}
      <div className="flex justify-between">
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
      </div>
      {/* Skeleton for Description */}
      <div className="w-full h-6 bg-gray-300 rounded"></div>
      <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
      {/* Skeleton for Button */}
      <div className="w-1/2 h-8 bg-gray-300 rounded-2xl"></div>
    </div>
  );
};

export default ProductLoader;
