

const VideoTitle=({title,overview})=>{
    return(
        <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-sm w-1/4">{overview}</p>
            <div>
            <button className="bg-white px-12 text-black  text-xl rounded-lg p-4 hover:opacity-50"> ▷ Play</button>
            <button  className="mx-2 bg-gray-500 px- text-white text-xl bg-opacity-50 rounded-lg p-4">ⅰ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;