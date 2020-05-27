//숫자 합 구하기
function sumArr(number:number[]):number{
    return number.reduce((acc,current) => acc+current,0)
}

const sum =  sumArr([1,2,3,4,5])

console.log(sum)