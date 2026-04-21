
const VideoTitle = ({title , overview}) =>{
    return (
        <div className=" pt-[16%] px-16 ">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
            <p className="hidden md:inline-block text-lg text-white font-bold/2 mt-2 w-1/4">{overview }</p>
           <div className="flex gap-4 mt-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition opacity-85 ml-2"> ▶ Play</button>
            <button className="bg-gray-500/80 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition opacity-85 ml-2"> More Info</button> 
           </div>
        </div>
    ) 
}

export default VideoTitle