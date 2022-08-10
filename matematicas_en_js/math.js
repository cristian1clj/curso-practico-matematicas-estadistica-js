
class Square {
    constructor(side) {
        this.side = side;
    }

    get sides() {
        return `\nSides: ${this.side}cm`;
    }

    get perimeter() {
        return `\nPerimeter: ${this.calculatePerimeter(this.side)}cm`
    }

    get area() {
        return `\nArea: ${this.calculateArea(this.side)}cm^2`
    }

    calculatePerimeter(side) {
        return side * 4;
    }

    calculateArea(side) {
        return side ** 2;
    }
}

class Triangle {
    constructor(side1, side2, base) {
        this.side1 = side1;
        this.side2 = side2;
        this.base = base;
    }

    get sides() {
        return {
            'Side 1': `${this.side1}cm`, 
            'Side 2': `${this.side2}cm`, 
            'Base': `${this.base}cm`
        };
    }

    get perimeter() {
        return `\nPerimeter: ${this.calculatePerimeter(this.side1, this.side2, this.base)}cm`;
    }

    get area() {
        return `\nArea: ${this.calculateArea(this.base, this.side1)}cm^2`;
    }

    get height() {
        return `\nHeight: ${this.calculateHeight(this.side1, this.base)}`;
    }

    calculatePerimeter(side1, side2, base) {
        return side1 + side2 + base;
    }

    calculateArea(base, side) {
        return (base * this.calculateHeight(side, base)) / 2;
    }

    calculateHeight(side1, base) {
        if (side1 == base) {
            console.warn('Este no es un triangulo isosceles');
        } else {
            return Math.sqrt(side1**2 - ((base**2) / 4));
        }
    }
}

class Circle {
    constructor(rad) {
        this.rad = rad;
        this.diam = rad * 2;
    }

    get radius() {
        return `\nRadius: ${this.rad}cm`;
    }

    get diameter() {
        return `\nDiameter: ${this.diam}cm`;
    }

    get circumference() {
        return `\nCircumference: ${this.calculateCircumference(this.diam)}`;
    }

    get area() {
        return `\nArea: ${this.calculateArea(this.rad)}`;
    }

    get perimeter() {
        return `\nPerimeter: ${this.calculatePerimeter(this.rad)}`;
    }

    calculateCircumference(diam) {
        return Math.PI * diam;
    }

    calculateArea(rad) {
        return (rad ** 2) * Math.PI;
    }

    calculatePerimeter(rad) {
        return 2 * Math.PI * rad;
    }
}


// Square
const mySquare = new Square(5);

console.log(
    "Square =>", 
    mySquare.sides, 
    mySquare.perimeter, 
    mySquare.area
);

// Triangle
const myTriangle = new Triangle(6, 6, 4, 5.5);

console.log(
    "Triangle =>", 
    myTriangle.sides,  
    myTriangle.perimeter, 
    myTriangle.area, 
    myTriangle.height
);

// Circle
const myCircle = new Circle(3);

console.log(
    "Circle =>", 
    myCircle.radius, 
    myCircle.diameter, 
    myCircle.circumference, 
    myCircle.area, 
    myCircle.perimeter
);