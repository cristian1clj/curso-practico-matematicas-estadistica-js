const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const equalsButton = document.getElementById('equalsButton');
const finalPrice = document.getElementById('finalPrice');

equalsButton.addEventListener('click', generateDiscountedPrice);

function generateDiscountedPrice() {
    const price = inputPrice.value;
    const discount = inputDiscount.value;

    if (!price || !discount) {
        finalPrice.innerText = 'Debes ingresar un valor para el precio y para el descuento';
        return;
    }

    if (discount > 100) {
        finalPrice.innerText = 'El valor del descuento debe ser menor de 100%';
        return;
    }

    let result = (price * (100 - discount)) / 100;
    finalPrice.innerText = `$${result}`;
}