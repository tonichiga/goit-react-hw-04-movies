import AppBar from "./views/AppBar"
import {Route, Switch} from "react-router-dom";
import {Suspense, lazy} from "react"
// import HomeView from "./views/HomeView";
// import MoviesPage from "./views/MoviesPage";
// import MovieDetailsPage from "./views/MovieDetailsPage";
// import PageNotFound from "./views/PageNotFound";

const HomeView = lazy(() => import("./views/HomeView.js" /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() => import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */),
);
const PageNotFound = lazy(() => import("./views/PageNotFound.js" /* webpackChunkName: "page-not-found" */),
);

function App() {

  return (
            <>
                <AppBar/>
                <Suspense fallback={<h1>Is loading...</h1>}>
                <Switch>
                    <Route exact path="/" component={HomeView}/>
                    <Route exact path="/movies" render={(props) => <MoviesPage {...props}  />}/>
                    <Route path="/movies/:moviesId" component={MovieDetailsPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
                </Suspense>
            </>
  );
}

export default App;
