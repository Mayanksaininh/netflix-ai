
const VideoTitle = ({title , overview}) =>{
    return (
        <div className="mr-5 w-1/2">
            <h1 className="text-4xl font-bold text-black">{title}</h1>
            <h3 className="text-lg text-gray-700 mt-2">{overview }</h3>
            <button className= "bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition"> 
             <span className="text-black">▶</span>
             Play</button>
            <button className="bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold ml-4 hover:bg-gray-500 transition">   
            <span className="text-white">ℹ</span>
            More Info</button>
        </div>
    )
}

export default VideoTitle