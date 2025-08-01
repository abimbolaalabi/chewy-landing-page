const PromoCard = () => {
  return (
    <div className="bg-[#e5f1fd] rounded-lg p-4 w-full h-full flex flex-col items-center text-left">
      <img src="\images\dgLov.avif" alt="Promo" className="rounded-lg mb-4 w-full h-[75%] object-cover" />
      <p className="text-[1rem] font-semibold text-[#001c49] leading-snug">
        Up to 50% off your first Autoship order of flea & tick prevention meds
      </p>
      <a href="#" className="text-blue-600 mt-2 text-sm font-medium hover:underline">
        Shop all flea & tick
      </a>
    </div>
  );
};

export default PromoCard;
