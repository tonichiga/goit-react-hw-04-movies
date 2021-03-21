import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react"
import {favoriteMovie} from "../services/apiReqst";

const HomeView = () => {
    const [favoriteMovieArr, setFavoriteMovie] = useState([])
    useEffect(() => {
        favoriteMovie().then(res => setFavoriteMovie(res.data.results))
    },[])

    return (
        <>
            <h1>Главная страница</h1>
            {favoriteMovieArr.map(({title, id}) => <li key={id}><NavLink to={`movies/${id}/`}>{title}</NavLink></li>)}

        </>
    )
}
export default HomeView;