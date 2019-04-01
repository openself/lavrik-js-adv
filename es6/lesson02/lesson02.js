import 'babel-polyfill'
/*
let some = {
    i: 2,
    double: function () {
        return this.i * this.i
    }
}

console.log(some.double())

let some2 = {
    i: 2
}

function double(n, m) {
    return this.i * this.i * n * m
}

console.log(double.call(some2, 3, 2))
console.log(double.apply(some2, [3, 2]))

let double2 = double.bind(some2)
console.log(double2(3, 2))
console.log(double2.call(null, 3, 2))

// Стрелочная ф-ция - это ф-ция с привязанным контекстом
let double3 = (n) => {
    let {i} = some2
    return i * i * n
}
console.log(double3(3))
console.log(double3.call(null, 3)) // ничего не меняется

let double4 = double.bind(some, 4); // фиксируем первый аргумент
console.log(double4(1, 1));

for(var i = 0; i < 5; i++){
    window.setTimeout((function(i){
        console.log(i);
    }).bind(null, i), i * 100);
}

for(let i = 10; i < 15; i++){
    window.setTimeout((function(){
        console.log(i);
    }), i * 200);
}
*/
const add = arg1 => arg2 => arg1 + arg2

console.log(add(1)(2))
