import * as moviesUtils from '../../services/utils/moviesUtils.service';

export default class MoviesController {
    constructor($window, moviesService) {
        'ngInject';

        this.movies = null;
        this.moviesService = moviesService;
        this.window = $window;
        this.moviesUtils = moviesUtils;
    }

    $onInit = () => {
        this.moviesService.getRandomMovies(20).then((movies) => {
            this.movies = movies;
        });
    };

    imageDetails = (id) => {
        this.window.location.href = `/movie?id=${id}`;
    }
}