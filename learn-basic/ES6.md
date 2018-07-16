[ECMAScript 6 入门](http://es6.ruanyifeng.com/)
let const
解构
```javascript
数组
let [a, b, c] = [1, 2, 3];
对象
let { foo, bar } = { foo: "aaa", bar: "bbb" };
字符串
const [a, b, c, d, e] = 'hello';
函数参数
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

用途：
交换变量
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

let x = 1;
let y = 2;

[x, y] = [y, x];

```

() => {}
map/set
class
