import axios from 'axios';

const API_KEY = '15ccc9a8c676c1c9b5477fb06b4d7b82';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Сформировать путь запроса к популярным
// const getPopularPath = pageNum => {
//   return `movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNum}&region=UA`;
// };

// Сформировать путь запроса для поиска по ключевому слову
// export const getKeywordPath = (keyword, pageNum) => {
//   return `search/movie?api_key=${API_KEY}&language=en-US&query=${keyword.replace(
//     ' ',
//     '+',
//   )}&page=${pageNum}&include_adult=false`;
// };


export const getMovie = ({name}) => {
   return axios.get(`/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`)
}

export const favoriteMovie = () => {
   return axios.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getOneMovie = (movieId) => {
   return axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`)

}

export const getCastMovie = (id) => {
   return axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}

export const getReviewMovie = (id) => {
   return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}
// // Получить перечень жанров фильмов
// export const getGenres = () => {
//   const url = `/genre/movie/list?api_key=${API_KEY}&language=en-US`;
//   return axios.get(url).then(res => res.data);
// };
//
// // Получить данные о фильму по id
// export const getMovieById = id => {
//   const url = `movie/${id}?api_key=${API_KEY}`;
//   return axios.get(url).then(res => res.data);
// };