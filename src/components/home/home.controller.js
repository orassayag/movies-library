import * as moviesUtils from '../../services/utils/moviesUtils.service';

export default class HomeController {
    constructor(moviesService) {
        'ngInject';

        this.movies = null;
        this.moviesService = moviesService;
        this.moviesUtils = moviesUtils;
    }

    $onInit = () => {
        this.moviesService.getRandomMovies(3).then((movies) => {
            this.movies = movies;
        });
    };
}