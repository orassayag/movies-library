import moviesComponent from './movies.component';

const moviesModule = angular.module('app.movies', []);

moviesModule.component('movies', moviesComponent);

export default moviesModule;