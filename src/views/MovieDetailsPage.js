import {useState, useEffect} from "react"
import {getOneMovie} from "../services/apiReqst"
import {NavLink, Route, Switch} from "react-router-dom";
import Cast from "./movie-details/Cast";
import Review from "./movie-details/Review"
import s from "./MoviewDetailsPage.module.scss"

const MovieDetailsPage = (props) => {

    const [movieDetails, setMovieDetails] = useState([])
    const {moviesId} = props.match.params

    const imgPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`
    // profile_path

    useEffect(() => {
        getOneMovie(moviesId).then(res => setMovieDetails(res.data))
    }, [moviesId])

    return (
        <>
            <h2>Страница одного фильма</h2>
            <p>{movieDetails.title}</p>
            <img className="posterImg" src={imgPath} alt=""/>
            <p>{movieDetails.overview}</p>

            {/*{ !btnVisible && <button onClick={getCast}>Cast</button>}*/}

            <ul className={s.castList}>
                <li className={s.castListElement}><NavLink to={`${props.match.url}/cast`}>Cast</NavLink></li>
                <li className={s.castListElement}><NavLink to={`${props.match.url}/review`}>Review</NavLink></li>
            </ul>

            <Switch>
                <Route path={`${props.match.url}/cast`} render={() => {
                    return <Cast movieId={moviesId}/>
                }}/>
                <Route path={`${props.match.url}/review`} render={() => {
                    return <Review movieId={moviesId}/>
                }}/>
            </Switch>
        </>
    )
}

export default MovieDetailsPage;