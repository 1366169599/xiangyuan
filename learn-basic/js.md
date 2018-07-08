var a = "hello world"
var a = 100
var a = true
var a = new Object()
var a = {}
var a = {
    name: 'apple',
    price: 15
}
var a
var a = null

var a = function() {
    console.log('hello world')
}

alert('hello world')
console.log('hello world')

if() {

} else if {

} else {

}

while() {

}
do() {

} while()


BOM对象：
location
history
localStorage
sessionStorage



js语法举例
js基本类型：number string boolean undefined null Object Symbol
声明变量
var foo = 'hello world'
声明一个函数
function foo() {
    console.log('hello world')
}
调用一个函数
foo()

if() {
} else if(){
} else {
}

循环
for(var i=0; i<10; i++) {
    console.log(i)
}
双重循环
for(var i=0; i<10; i++) {
    for(var j=0; j<=i; j++){
        console.log(j)
    }
    console.log(i,'一次外层循环')
}

三元运算符：
foo ? 'foo' : 'bar'
表示如果foo成立的话（就是foo这个值是真）就返回'foo'，否则返回bar

js注释：//
或者
/**
    hello world
**/