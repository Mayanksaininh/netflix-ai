
import Header from "./Header"
import useNowplayingmoives  from "../hooks/useNowplayingmovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () =>{

   useNowplayingmoives()

    return <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
    </div>
}

export default Browse