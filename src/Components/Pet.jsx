
const Pet = ({src,text})=> {
    return (
        <div className="flex flex-col items-center ">
            <img src={src} className="w-[21rem] h-[20rem] object-cover bg-[#ddf0ff] rounded-lg"/>
            <p className="font-bold text-base text-[#121212]">{text}</p>
        </div>
    )
}
export default Pet;