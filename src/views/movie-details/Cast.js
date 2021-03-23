import {useEffect, useState} from "react";
import {getCastMovie} from "../../services/apiReqst";
import s from "./Cast.module.scss"


const Cast = ({movieId}) => {

    const [castMovie, setCast] = useState([])
    const [endLoad, setEndLoad] = useState(false)


    const imgPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`

    useEffect(()=> {
        getCastMovie(movieId).then(res => {
            setCast(res.data);
            setEndLoad(true)})
    }, [])

    console.log("СAST:", castMovie.cast)
    console.log(endLoad)
    return (
        <>
            <h1>Актерский состав</h1>

            <ul className={s.contentWrapper}>


            {endLoad && castMovie.cast.map(({name, profile_path, id}) =>  (<li key={id}>
                {profile_path ? <img className="cast" src={imgPath + profile_path} width={200} alt="Актёр"/> : <p>Картинки не найдено</p>}
                <p>{name}</p>
            </li>) )}
            </ul>
        </>
    )
}

export default Cast