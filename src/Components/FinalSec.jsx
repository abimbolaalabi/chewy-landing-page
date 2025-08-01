const FinalSec = () => {
  return (
    <div className="w-full  text-black py-14  ">
      <div className="flex flex-col gap-6 px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-center items-start gap-10">
          {/* Country */}
          <div className="flex items-center gap-2 mb-4">
            <img src="images/usa.png" alt="USA" className="w-8 object-cover" />
            <p className="text-[#2a4680]">United States</p>
          </div>

          
          <div className="flex flex-wrap justify-center gap-4 text-[#2a4680] font-normal">
            <p>About</p>
            <p>Investor Relations</p>
            <p>Affiliates</p>
            <p>Jobs</p>
            <p>FAQs</p>
            <p>Learn</p>
            <p>Give Back</p>
            <p>Gift Cards</p>
            <p>Sell on Chewy</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 rounded-full">
            <img src="socials/facebook.jpeg" alt="Facebook" className="w-6 h-6 object-cover" />
            <img src="socials/youtube.jpeg" alt="YouTube" className="w-6 h-6 object-cover" />
            <img src="socials/instagram.jpeg" alt="Instagram" className="w-6 h-6 object-cover" />
            <img src="socials/tiktok.png" alt="TikTok" className="w-6 h-6 object-cover" />
          </div>
        </div>

        {/* Bottom Section - App Badges */}
        <div className="flex justify-center flex-wrap gap-5 ">
          <img src="final/apple-store-badge.jpg" alt="Apple Store" className="w-20 h-6 object-cover" />
          <img src="final/google_play_web_generic.png" alt="Google Play" className="w-32 h-6 object-cover" />
          <img src="final/pharmacy.jpg" alt="Pharmacy" className="w-32 h-6 object-cover" />
          <img src="final/accredited.png" alt="Accredited" className="w-32 h-6 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FinalSec;
