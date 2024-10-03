const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 1){
            const result = arr
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(result);
        } else{
            reject(new Error("Error: Array elements not correct!"));
        }
    });
};

lowerCaseWords(mixedArray)
    .then((result) =>  console.log(result))
    .catch((error) =>  console.log(error));