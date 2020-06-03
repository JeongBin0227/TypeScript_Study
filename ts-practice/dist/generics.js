"use strict";
// function merge<T1,T2>(a:T1, b:T2){
//     return{
//         ...a,
//         ...b
//     }
// }
// const merged = merge({foo:1},{bar:2, footer:3})
// function wrap<T>(params: T){
//     return{
//         params
//     }
// }
// const wrapped = wrap('aaa');
// wrapped.params
// type Items<T, V> = {
//     list:T[]
//     value:V
// }
// const items: Items<number, string> = {
//     list:[1,2,3],
//     value:'string'
// }
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
