import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react"
import {favoriteMovie} from "../services/apiReqst";
import s from "./HomePage.module.scss";

const HomeView = () => {
    const [favoriteMovieArr, setFavoriteMovie] = useState([])
    useEffect(() => {
        favoriteMovie().then(res => setFavoriteMovie(res.data.results))
    },[])

    return (
        <>
            <h1>Главная страница</h1>
            <ul className={s.listMovie}>
            {favoriteMovieArr.map(({title, id}) => <li className={s.listElement} key={id}><NavLink to={`movies/${id}`}>{title}</NavLink></li>)}

            </ul>

        </>
    )
}
export default HomeView;