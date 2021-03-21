import { Route, NavLink, Switch } from "react-router-dom";
// import {useState, useEffect} from "react"
// import { getMovie,favoriteMovie } from "./services/apiReqst"
import HomeView from "./views/HomeView"
import MoviesPage from "./views/MoviesPage"
import MovieDetailsPage from "./views/MovieDetailsPage"
import PageNotFound from "./views/PageNotFound"

function App() {





    // useEffect(() => {
    //     if (pressSubmit) {
    //     console.log("useEffect")
    //     window.location.pathname = "/movies"
    //     }
    //     },[filmsArray])







  return (
<>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movies">Movie</NavLink></li>
    </ul>
    <div className="App">





    </div>

      <Switch>
          <Route exact path="/" component={HomeView}/>
          <Route exact path="/movies" render={(props) => <MoviesPage {...props}  />}/>
          <Route path="/movies/:moviesId" component={MovieDetailsPage}/>
          <Route component={PageNotFound}/>
      </Switch>
</>
  );
}

export default App;
