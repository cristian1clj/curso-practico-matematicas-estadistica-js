const inputPrice = document.getElementById('price');
const inputCoupon = document.getElementById('coupon');
const equalsButton = document.getElementById('equalsButton');
const finalPrice = document.getElementById('finalPrice');


class Coupon{
    constructor(code, discount) {
        this.code = code;
        this.discount = discount;
    }
}

const couponList = [];
couponList.push(
    new Coupon('ThisIsACode', 25), 
    new Coupon('fishCanFly', 50), 
    new Coupon('100%', 15), 
    new Coupon('ThisIsNotACode', 100)
    );


equalsButton.addEventListener('click', generateDiscountedPrice);

function generateDiscountedPrice() {
    const price = inputPrice.value;
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        finalPrice.innerText = 'Debes ingresar un valor para el precio y para el descuento';
        return;
    }

    const indexCoupon = couponList.find(element => element.code == coupon);
    if (indexCoupon) {
        let result = (price * (100 - indexCoupon.discount)) / 100;
        finalPrice.innerText = `$${result}`;

    } else {
        finalPrice.innerText = 'Codigo de cupon no valido D:';
    }
}