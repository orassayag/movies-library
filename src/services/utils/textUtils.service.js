// This function returns a random number.
const getRandomNumber = (maxNumber) => {
    if (!maxNumber || isNaN(maxNumber)) {
        return 0;
    }

    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - 1 + 1)) + 1;
};

// This function returns random numbers.
export const getRandomNumbers = (data) => {
    if (!data || !data.numbersCount || isNaN(data.numbersCount)) {
        return 0;
    }

    const numbersArray = [];
    for (let i = 0; i < data.numbersCount; i++) {
        const number = getRandomNumber(data.maxNumber);
        if (numbersArray.indexOf(number) < 0) {
            numbersArray.push(number);
        }
    }
    return numbersArray;
};