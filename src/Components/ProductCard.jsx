const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#f2f8fd] rounded-lg p-4 flex flex-col gap-2">
      <img src={product.image} alt={product.title} className="h-[120px] object-contain" />
      <div>
        <h3 className="font-bold text-sm">{product.title}</h3>
        <p className="text-xs text-gray-600">{product.description}</p>
      </div>
      <div className="flex items-center text-yellow-500 text-sm gap-1">
        <span>{product.rating}</span>
        {"⭐".repeat(Math.floor(product.rating))}
        <span className="text-gray-500">({product.reviews})</span>
      </div>
      <div>
        <p className="font-bold">${product.price}</p>
        <p className="text-blue-700 font-semibold">${product.autoship} Autoship</p>
      </div>
      <p className="text-red-500 text-sm">Save 50% on your first Autoship</p>
      <p className="text-gray-500 text-xs">+1 deal</p>
      <p className="text-xs mt-1">📄 Prescription Item</p>
    </div>
  );
};

export default ProductCard;
