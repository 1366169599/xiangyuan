console.log('do while')
var a = 0
do {
    a++;
    console.log(a)
} while ( a < 10)

console.log('while')

var b = 0
while(b < 10) {
    b++
    console.log(b)
}

console.log('if')

var c = 2
if(c == 2) {
    console.log('c 等于 2')
} else {
    console.log('c 不等于 2')
}

console.log('for')

for(var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('for')

var arr = [1, 2, 3, 4, 5]
for(var i = 0; i < arr.length - 1; i++) {
    console.log(arr[i])
}

// array

arr.forEach((item, index) => {
    console.log(item, index)
})

let arr2 = arr.map(item => {
    return item * 2;
})
console.log(arr2)

var arr3 = arr.filter(item => {
    return item % 2 === 0;
})
console.log(arr3)

var arr4 = arr.reduce((acc, cur) => {
    acc.push(cur * 2);
    return acc
}, [])

console.log(arr4)


