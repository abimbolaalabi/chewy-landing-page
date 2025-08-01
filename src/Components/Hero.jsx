import Button from "./Button"
const Hero = () => {
    return (
        <div className="mt-20">
            <div className="w-full text-center py-3 shadow-md font-bold" >
                <p>$20 eGift card $49+ on 1st order* use WELCOME</p>
            </div>
            <div className="w-full h-[20rem]  object-cover">
                <img src="images\heroSec.avif" alt="" className="object-cover h-full rounded-md bg" />
            </div>
            <div className="w-full h-[20vh] mt-3 bg-[#f3f5f9] rounded-md flex  items-center justify-between px-5">
                <div className="flex justify-center items-center gap-3">
                    <p className="font-bold text-2xl">Hey, Friend!</p>
                    <Button text="Sign in" style={"border-2 border-none text-white px-5 py-2 rounded-full bg-blue-700 "} />
                </div>
                <div className="flex gap-5">
                    <div className="w-[20rem] h-[80px] bg-[#fff] flex px-4 items-center rounded-md">
                        <div>
                            <img src="/images/water-removebg-preview.png" alt="" className="w-12" />
                        </div>
                        <div>
                            <p>Save 35% on first order</p>
                            <p>Set up an Autoship</p>
                        </div>
                    </div>
                    <div className="w-[20rem] h-[80px] bg-[#ffffff] flex justify-center items-center rounded-md">
                        <div>
                            <img src="\images\bottle-removebg-preview.png" alt="" className="w-12" />
                        </div>
                        <div>
                            <p>Save 20% on first pharmacy order</p>
                            <p>Fill a prescription</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;