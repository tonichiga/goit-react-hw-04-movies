import {NavLink} from "react-router-dom";
import s from "./AppBar.module.scss"


const AppBar = () => {
    return (
        <>
             <ul className={s.headerWrapper}>
                <li className={s.headerElement}><NavLink to="/">Home</NavLink></li>
                 <li className={s.headerElement}><NavLink to="/movies">Movie</NavLink></li>
             </ul>


        </>
    )
}

export default AppBar