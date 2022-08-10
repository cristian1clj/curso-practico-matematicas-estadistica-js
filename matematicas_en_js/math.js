
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
    constructor(side1, side2, base, height) {
        this.side1 = side1;
        this.side2 = side2;
        this.base = base;
        this.height = height;
    }

    get sides() {
        return {
            'Side 1': `${this.side1}cm`, 
            'Side 2': `${this.side2}cm`, 
            'Base': `${this.base}cm`, 
            'Height': `${this.height}cm`
        };
    }

    get perimeter() {
        return `\nPerimeter: ${this.calculatePerimeter(this.side1, this.side2, this.base)}cm`;
    }

    get area() {
        return `\nArea: ${this.calculateArea(this.base, this.height)}cm^2`;
    }

    calculatePerimeter(side1, side2, base) {
        return side1 + side2 + base;
    }

    calculateArea(base, height) {
        return (base * height) / 2;
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
    myTriangle.area
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