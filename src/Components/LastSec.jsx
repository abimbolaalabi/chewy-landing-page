import Button from "./Button"
const LastSec = () => {
    return (
        <div className="mt-8 font-semibold text-lg">
            <div className="  px-8  ">
               <img src="images\heropic.jpeg" className="rounded-md w-full h-[8rem] object-cover" />
            </div>
            <div className="w-full h-[5rem] bg-[#1c49c2] flex justify-between items-center px-14">
               <div className="text-white">
                <p>Our experts available 24/7:</p>
               </div>
               <div className="flex justify-center items-center gap-1 text-white">
                <i class="fa-solid fa-phone"></i>
                <p>1-800-672-4399</p>
               </div>
               <div className="flex justify-centeritems-center gap-1 text-white">
                <i class="fa-regular fa-comments"></i>
                <p>chat now</p>
               </div>
                <Button text="Back to top ↑" style={ "border-2 border-none text-blue-700 px-10 py-2 rounded-full bg-white "}/>
            </div>
        </div>
    )
}
export default LastSec;