import movieComponent from './movie.component';

const movieModule = angular.module('app.movie', []);

movieModule.component('movie', movieComponent);

export default movieModule;