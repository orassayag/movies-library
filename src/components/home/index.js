import homeComponent from './home.component';

const homeModule = angular.module('app.home', []);

homeModule.component('home', homeComponent);

export default homeModule;