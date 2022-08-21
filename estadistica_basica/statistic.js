list = [400, 450, 540, 700, 701];

function calculateAverage(arr) {
    let result = 0;

    arr.forEach(element => {
        result += element;
    });

    result /= arr.length;

    console.log(`Resultado = ${result}`);
}