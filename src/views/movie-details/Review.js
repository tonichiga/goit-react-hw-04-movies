import {useEffect, useState} from "react";
import {getReviewMovie} from "../../services/apiReqst";
import s from "./Review.module.scss"


const Review = ({movieId}) => {

    const [reviewMovie, setReviewMovie] = useState([])
    const [endLoad, setEndLoad] = useState(false)

    useEffect(()=> {
        getReviewMovie(movieId).then(res => {
            setReviewMovie(res.data)
            setEndLoad(true)})
    }, [])

console.log(reviewMovie)

    return (
        <>
            <h1>Страница обзоров</h1>

                {endLoad && reviewMovie.results.map(({author, content, id}) =>  ( <div className={s.commentWrapper} key={id}><p><b>{author}</b></p><p className={s.text}>{content}</p></div>))}

        </>
    )
}

export default Review