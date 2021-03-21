import {useState, useEffect} from "react"
import {getOneMovie, getCastMovie} from "../services/apiReqst"
import {NavLink, Route, Switch} from "react-router-dom";
import Cast from "./movie-details/Cast";
import Review from "./movie-details/Review"

const MovieDetailsPage = (props) => {

    const [movieDetails, setMovieDetails] = useState([])
    const {moviesId} = props.match.params
    const [castMovie, setCast] = useState([])
    const [btnVisible, setBtnVisible] = useState(false)

    const imgPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`
    // profile_path

    useEffect(() => {
        getOneMovie(moviesId).then(res => setMovieDetails(res.data))
    }, [moviesId])

    // const getCast = () => {
    //     getCastMovie(moviesId).then(res => {
    //         setCast(res.data);
    //         setBtnVisible(true)
    //     })
    // }


    console.log(props)
    return (
        <>
            <h2>Страница одного фильма</h2>
            <p>{movieDetails.title}</p>
            <img className="posterImg" src={imgPath} alt=""/>
            <p>{movieDetails.overview}</p>

            {/*{ !btnVisible && <button onClick={getCast}>Cast</button>}*/}

            <ul>
                <li><NavLink to={`${props.match.url}/cast`}>Cast</NavLink></li>
                <li><NavLink to={`${props.match.url}/review`}>Review</NavLink></li>
            </ul>

            <Switch>
                <Route path={`${props.match.url}/cast`} component={Cast}/>
                <Route path={`${props.match.url}/review`} component={Review}/>
            </Switch>
        </>
    )
}

export default MovieDetailsPage;