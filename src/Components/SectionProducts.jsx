import PromoCard from './PromoCard';
import ProductCard from './ProductCard';

const products = [
  {
    image: "meds/nex.avif",
    title: "NexGard PLUS",
    description: "Chewables for Dogs, 331-66 lbs. (Purple Box)",
    rating: 4.6,
    reviews: "2.6k",
    price: 224.39,
    autoship: 213.17,
  },
  {
    image: "meds/simp.avif",
    title: "Simparica Trio",
    description: "Chewable Tablet for Dogs, 44.1-88 lbs. (Green Box)",
    rating: 4.7,
    reviews: "13k",
    price: 211.12,
    autoship: 200.56,
  },
  {
    image: "meds/nexgard.avif",
    title: "NexGard COMBO",
    description: "Topical for Cats, 5.6-16.5 lbs. (Yellow Box)",
    rating: 4.6,
    reviews: "1.2k",
    price: 173.99,
    autoship: 165.29,
  },
  {
    image: "meds/nexgard.avif",
    title: "Revolution Plus",
    description: "Topical for Cats, 5.6-11 lbs. (Orange Box)",
    rating: 4.8,
    reviews: "4.4k",
    price: 154.4,
    autoship: 146.68,
  },
];

const SectionProducts = () => {
  return (
    <div className="w-full px-6 py-10 bg-[#f8f9fb]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1">
          <PromoCard />
        </div>
        <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((prod, index) => (
            <ProductCard key={index} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
