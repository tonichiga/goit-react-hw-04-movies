import {getMovie} from "../services/apiReqst";
import {NavLink, Route} from "react-router-dom";
import {useState} from "react"
import MovieDetailsPage from "./MovieDetailsPage";

const MoviesPage = (props) => {
    const [filmsArray, setFilmsArray] = useState([])
    // const [pressSubmit, setPressSubmit] = useState(false)
    const [name, setName] = useState("")

    const sendSubmit = () => {
        getMovie(name).then(res => setFilmsArray(res.data.results))
        // setPressSubmit(true)

    }
    // console.log(filmsArray.find(({id}) => id === 732450))
    const getNameFilm = (e) => {
        setName({name: e.target.value})
    }

    return (
        <>
            <h1>Страница Поиска фильмов по ключевому слову</h1>
            <input onChange={getNameFilm} type="text" placeholder="enter film"/>
            <button onClick={sendSubmit}>Search</button>
            <ul>
                {filmsArray.map(({title, id}) => <li key={id}><NavLink to={`${props.match.url}/${id}/`}>{title}</NavLink></li>)}
            </ul>
            <Route
                path={`${props.match.path}/:moviesId`}
                render={(props) => {
                    const moviesId = Number(props.match.params.moviesId);

                    const movie = filmsArray.find(({ id }) => id === moviesId);
                    //
                    return <MovieDetailsPage {...props} movie={movie}/>
                    // return movie && <MovieDetailsPage {...props} movie={films} />;
                }}
            />
        </>
    )
}

export default MoviesPage;