"use strict";
//숫자 합 구하기
// function sumArr(number:number[]):number{
//     return number.reduce((acc,current) => acc+current,0)
// }
// type == interface
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(5, 10);
const shapes = [circle, rectangle];
shapes.forEach(shape => console.log(shape.getArea()));
