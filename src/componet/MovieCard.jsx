import { IMG_CRN_URL } from "../utils/Constant"

const MovieCard = ({poster_path}) =>{
    return (
        <div>
            <img 
            alt="Movie Card"
            src = {IMG_CRN_URL + poster_path}>
            </img>
        </div>
    )
}

export default MovieCard 