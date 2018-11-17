import routerHelperService from './router-helper/router-helper.service';
import moviesService from './movies/movies.service';

const coreModule = angular.module('app.core', [
    'ui.router'
]);

coreModule.config(routerHelperService);
coreModule.service('moviesService', moviesService);

export default coreModule;