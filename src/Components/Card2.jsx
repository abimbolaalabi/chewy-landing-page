
const Card2 = ({src, text}) => {
    return (
        <div className=" flex flex-col items-center">
            <img src={src} className="w-[12rem] h-[12rem]  rounded-full"  />
            <p>{text}</p>
        </div>
    )
}

export default Card2;