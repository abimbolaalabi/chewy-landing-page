import Button from "./Button";
const Header = () => {
    return (
        <div className="flex flex-col bg-[#1c49c2] w-full h-[7rem] p-3  text-white font-bold">
            {/* upper part */}
            <div className=" flex  justify-between items-center w-full py-2">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chewy_pet_food_logo.svg/2560px-Chewy_pet_food_logo.svg.png" className="h-[3rem] object-contain" />
               {/* search */}
               <div className="bg-white w-[22rem] p-3 flex justify-between items-center rounded-md">
                <input type="text" placeholder="Search" className="border-none outline-none justify-between text-gray-900"/>
                <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
               </div>
                {/* Country */}
               <div className="flex items-center gap-1">
                    <img src="\images\usa.png" alt="" className="w-[1rem] object-cover" />
                   <p>USA</p>
                   <i class="fa-solid fa-chevron-down"></i>
                </div>
               <Button  text="Use App" style=" border-2 border-white text-white px-3 py-2 rounded-full"/> 
               {/* help*/}
            <div className="flex items-center gap-1">
                <i class="fa-regular fa-message"></i>
               <p>24/7Help</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>  
                 {/*sign in  */}
                 <div className="flex items-center gap-1">
                    <i class="fa-regular fa-user"></i>
                    <p>Sign in</p>
                     <i class="fa-solid fa-chevron-down"></i>
                 </div>
                 {/* cart */}
                 <div className="flex items-center gap-1">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Cart</p>
                    <i class="fa-solid fa-chevron-down"></i>
                 </div>

            </div>
            
            {/* downpart */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <p>Dog</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center">
                    <p>Cat</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center">
                    <p>Other Animals</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center">
                    <p>Pharmacy</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className="flex items-center">
                    <p>Services</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div>
                    <p>Learn</p>
                </div>
                <div className="flex items-center">
                    <p>Get Back</p>
                      <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div>
                    <p>Today's Deals</p>
                </div>
                <div className="flex items-center">
                    <img src="\images\ant-removebg-preview.png" alt="" className="w-6" />
                    <p>Flea & Tick</p>
                </div>
                <div>
                    <p className="text-[yellow]">Free delivery on first-time orders over $35</p>
                </div>
            </div>
        </div>
    )
}
export default Header;