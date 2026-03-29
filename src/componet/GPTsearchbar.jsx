const SearchBar = ()=>{
    return(
        <div >
           <form
           className="px-3  mt-[10%] flex gap-3 justify-center  bg-black text-white ml-[30%] mr-[30%] pl-3">
            <input type = "text" className="pt-2px w-1/1 rounded  mb-[2.4%] mt-[2.4%] bg-white text-black pl-2" placeholder="What do you want to watch"></input>
            <button className="text-white bg-red-500 rounded px-4 py-2 mt-[2.4%] mb-[2.4%]  ">Search</button>  
           </form>
        </div>
    )
}

export default SearchBar