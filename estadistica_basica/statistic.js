list = [400, 450, 515, 370, 410, 540, 700, 701, 80, 370, 450, 100, 370];

// Funcionalidades
function isPair(arr) {
    return !(arr.length % 2);
}


// Calcular media
function calculateAverageForeach(arr) {
    let result = 0;

    arr.forEach(element => {
        result += element;
    });
    result /= arr.length;

    return result;
}

function calculateAverageReduce(arr) {
    const add = arr.reduce((av, nv) => av + nv);
    let result = add / arr.length;

    return result;
}


// Calcular mediana
function calculateMedian(arr) {
    const sortArr = arr.sort((av, nv) => av - nv);
    let median = 0;

    if (isPair(sortArr)) {
        let half1 = sortArr[(sortArr.length / 2) - 1];
        let half2 = sortArr[sortArr.length / 2];

        median = calculateAverageReduce([half1, half2]);

    } else {
        let half = Math.round(sortArr.length / 2) - 1;
        median = sortArr[half];
    }

    return median;
}


// Calcular moda
function calculateMode(arr) {
    let auxArr = {};
    
    arr.map(element => {
        element in auxArr ? (auxArr[element]++) : (auxArr[element] = 1);
    });
    
    auxArr = Object.entries(auxArr);
    const sortArr = auxArr.sort((av, nv) => av[1] - nv[1]);
    
    let biggerNum = sortArr[sortArr.length - 1][0];

    return biggerNum;
}