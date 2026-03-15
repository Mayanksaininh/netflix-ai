
import Header from "./Header"
import useNowplayingmoives  from "../hooks/useNowplayingmovies"

const Browse = () =>{

   useNowplayingmoives()

    return <div>
        <Header/>
    </div>
}

export default Browse