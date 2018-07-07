
____
```javascript
['1','2','3'].map(parseInt)
answer:[1,NaN,NaN]
parseInt('1',0,['1','2','3'])//1，radix为 0，则数字将以 10 为基础来解析
parseInt('2',1,['1','2','3'])//1进制是啥？反正就是NaN
parseInt('3',2,['1','2','3'])//2进制没有3
```
____
