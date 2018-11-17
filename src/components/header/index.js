import headerComponent from './header.component';

const headerModule = angular.module('app.header', []);

headerModule.component('appHeader', headerComponent);

export default headerModule;