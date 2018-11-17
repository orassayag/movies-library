import * as moviesUtils from '../../services/utils/moviesUtils.service';

export default class MovieController {
    constructor($location, $window, moviesService) {
        'ngInject';

        this.movie = null;
        this.moviesService = moviesService;
        this.location = $location;
        this.window = $window;
        this.moviesUtils = moviesUtils;
    }

    $onInit = () => {
        let movieId = this.location.search().id;
        if (!movieId) {
            this.window.location.href = `/`;
        }

        movieId = Number(movieId);
        if (isNaN(movieId)) {
            this.window.location.href = `/`;
        }

        this.moviesService.getMovieById(movieId).then((movie) => {
            this.movie = movie;
        });
    };
}