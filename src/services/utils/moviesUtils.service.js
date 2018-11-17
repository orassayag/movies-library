import * as textUtilsService from './textUtils.service';

const getMoviesArray = (data) => {
    const randomNumbers = textUtilsService.getRandomNumbers({
        numbersCount: data.count,
        maxNumber: data.response.data.length
    });

    const updatedIndexesArray = [...randomNumbers, ...data.indexesArray];
    const updatedMoviesArray = data.response.data.filter((value, index) => {
        return updatedIndexesArray.indexOf(index) >= 0 && value.posterurl && value.imdbRating;
    }).map((movie) => {
        return movie;
    });

    return {
        updatedIndexesArray: updatedIndexesArray,
        updatedMoviesArray: updatedMoviesArray
    };
};

export const getRandomMovies = (data) => {
    if (!data || !data.count || !data.response || !data.response.data || data.response.data.length <= 0) {
        throw new Error('Invalid query parameters');
    }

    let moviesArray = [];
    let indexesArray = [];
    while (moviesArray.length < data.count) {
        const result = getMoviesArray({
            response: data.response,
            indexesArray: indexesArray,
            count: data.count,
            maxNumber: data.response.data
        });
        indexesArray = result.updatedIndexesArray;
        moviesArray = result.updatedMoviesArray;
    }

    if (moviesArray.length > data.count) {
        moviesArray = moviesArray.slice(0, data.count);
    }

    return moviesArray;
};

export const getRatingNumber = (number) => {
    if (!number) {
        return 0;
    }

    if (number > 5) {
        number = 5;
    }
    return new Array(Math.floor(number));
};