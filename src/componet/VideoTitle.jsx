
const VideoTitle = ({title , overview}) =>{
    return (
        <div className=" pt-[22%] px-16 ">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="text-lg text-white mt-2 w-1/4">{overview }</p>
           <div className="flex gap-4 mt-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition opacity-85 ml-2"> ▶ Play</button>
            <button className="bg-gray-500/80 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition opacity-85 ml-2"> More Info</button> 
           </div>
        </div>
    ) 
}

export default VideoTitle