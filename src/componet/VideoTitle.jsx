
const VideoTitle = ({title , overview}) =>{
    return (
        <div className="pt-66 px-16">
            <h1 className="text-4xl font-bold text-black">{title}</h1>
            <p className="text-lg text-gray-700 mt-2 w-1/4">{overview }</p>
           <div className="flex gap-4 mt-4">
            <button className="bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition opacity-85 ml-2"> ▶ Play</button>
            <button className="bg-gray-500/70 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-500 transition opacity-85 ml-2"> ℹ More Info</button> 
           </div>
        </div>
    ) 
}

export default VideoTitle