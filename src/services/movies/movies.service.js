import * as moviesUtils from '../utils/moviesUtils.service';

export default class MoviesService {

    constructor($http) {
        'ngInject';

        this.moviesUrl = 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-coming-soon.json';
        this.$http = $http;
    }

    getRandomMovies = (count) => {
        return this.$http.get(this.moviesUrl)
            .then((response) => {
                return moviesUtils.getRandomMovies({
                    count: count,
                    response: response
                });
            }).catch((err) => {
                throw Error(err);
            });
    };

    getMovieById = (movieId) => {
        return this.$http.get(this.moviesUrl)
            .then((response) => {
                if (response && response.data && response.data.length > 0) {
                    return response.data.find(m => Number(m.id) === movieId);
                }
            })
            .catch((err) => {
                throw Error(err);
            });
    };
}