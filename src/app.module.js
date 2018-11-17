import styles from './assets/styles/styles.scss';

import './services/core.module';
import './app.components';

const appModule = angular
	.module('movies-library', [
		'app.core',
		'ui.router',
		'app.header',
		'app.home',
		'app.movie',
		'app.movies'
	]);

export default appModule;