//숫자 합 구하기
// function sumArr(number:number[]):number{
//     return number.reduce((acc,current) => acc+current,0)
// }

// const sum =  sumArr([1,2,3,4,5])

// console.log(sum)

//interface 사용
interface Shape{
    getArea():number
}

// type == interface
class Circle implements Shape {
    radius:number

    constructor(radius:number){
     this.radius = radius   
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width:number
    height:number

    constructor(width:number, height:number){
        this.width = width
        this.height = height
    }
    
    getArea(){
        return this.height * this.width
    }
}

const circle = new Circle(5)
const rectangle = new Rectangle(5,10)
const shapes = [circle,rectangle]

shapes.forEach(shape => console.log(shape.getArea()))
