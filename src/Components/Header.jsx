import Button from "./Button";
const Header = () => {
    return (
        <div className="flex flex-col bg-[#1c49c2] w-full h-[7.5rem] p-3 fixed text-white font-bold">
            {/* upper part */}
            <div className=" flex  justify-between items-center w-full py-2">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chewy_pet_food_logo.svg/2560px-Chewy_pet_food_logo.svg.png" className="w-[10rem] object-contain" />
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
            <div className="flex items-center gap-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M7.791 19c-.326-.132-.507-.196-.607-.183c-.124.015-.304.147-.664.41c-.634.466-1.432.8-2.617.771c-.599-.014-.898-.021-1.032-.249c-.134-.227.033-.542.367-1.172c.463-.874.756-1.874.312-2.675c-.766-1.144-1.417-2.5-1.512-3.963a19 19 0 0 1 0-2.388c.261-4.019 3.433-7.22 7.415-7.484c1.356-.09 2.774-.09 4.132 0c3.965.263 7.127 3.438 7.412 7.433"/><path d="M14.698 21.647c-2.51-.16-4.51-2.117-4.674-4.573a11 11 0 0 1 0-1.46c.165-2.456 2.164-4.412 4.674-4.573c.856-.055 1.75-.055 2.604 0c2.51.161 4.51 2.117 4.674 4.574c.032.48.032.978 0 1.459c-.06.894-.47 1.723-.953 2.422c-.28.49-.095 1.1.197 1.634c.21.385.316.578.231.717s-.273.143-.65.152c-.747.018-1.25-.187-1.65-.471c-.227-.161-.34-.242-.418-.251s-.232.052-.54.174a3 3 0 0 1-.89.196a21 21 0 0 1-2.605 0"/></g></svg>
                {/* <i class="fa-regular fa-message"></i> */}
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