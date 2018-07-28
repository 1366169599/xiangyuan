
// arr = [1, 3, 5, 2, 4, 6];
// for (var i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         console.log(arr[i])
//     };

// }
// arr.forEach(function (item, index) {
//     if (index % 2 == 1) {
//         console.log(item)
//     }
// })
// var a=arr.filter(function(item,index,arr){
//     return (index%2==1)
// })
// console.log(a)
// var a = arr.map(function(item,index,arr){
//     return {
//         name: index,
//         age:index,
//         item:item
//     }
// })
// console.log(a);
// var b= [{name:'sf',age:10},{name:'sf',age:10},{name:'sf',age:10}]
// var s = b.map(function(item){
//     return item.age
// })
// console.log(s)
// var sum=arr.reduce(function(prev,cur,index,arr){
//       return prev+cur;
// })
// console.log(sum)
// var i=0
// do{
//       i=i+2;
// }while(i<10);
// console.log(i);
// var i=0;
// while(i<10){
//       i=i+2;
// }
// console.log(i)
// var a=10;
// for(var i=0;i<a;i++){
//       console.log(i);
// }
// var a=10;
// var i=0;
// while(i<a){
//       console.log(i);
//       i++;
// }
// var num=0;
// for(var i=1;i<20;i++){
//       if(i%5==0){
//             break;
//       }
//       num++;
//       console.log(num);
// }
// var num=0;
// for(var i=1;i<10;i++){
//       if(i%5==0){
//             continue;
//       }
//       num++;
//       console.log(num);
// }
// var num=30;
// switch(true){
//       case num<0:console.log("小于0");
//       break;
//       case num>0&&num<10:console.log("0到10");
//       break;
//       default:console.log("大于10");
// }
// var arr = [];
//   arr.push(1); 
//   console.log(arr);
// arr.push(2);  
// console.log(arr);
// arr.push([3,4,5]);  
// console.log(arr);
// console.log(arr.length);
// var arr=[1,2,3,4,5]
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.length);
// var arr=[1,2,3,4,5];
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);


// var arr=[5,1,23,10,14,20,4];
// // console.log(arr.sort());
// function compareFunction(a,b){
//       if(a>b){
//             return 1;
//       }else if(a<b){
//             return -1;
//       }else{
//             return 0;
//       }
// }
// console.log(arr.sort(compareFunction));


// var arr=[5,1,23,10,14,20,4];
// arr.reverse();
// console.log(arr);


// var arr1=[5,1,23,10,14,20,4];
// var arr2=[1,2,3,4,5,6];
// var arr3=arr1.concat(arr2);
// console.log(arr3);


// var arr1=[5,1,23,10,14,20,4];
// var arr2=arr1.slice(2);
// var arr3=arr1.slice(1,5);
// console.log(arr2);
// console.log(arr3);


// var arr1=[5,1,23,10,14,20,4];
// var arr2=arr1.splice(0,1);
// var arr3=arr1.splice(2,2,33,44);
// console.log(arr1);


// var arr1=[5,1,23,10,14,20,4];
// arr1.indexOf(5)


// var arr=[5,1,23,10,14,20,4];
// var a=arr.reduce(function(pre,cur,index,arr){
//       return pre+cur;
// })
// console.log(a)


// var arr=[5,1,23,10,14,20,4];
// var arrMax=function()
// {
//     var max=arr[0];
//     for(var i=1;i<arr.length;i++)
//     {
//       if(arr[i]>max)
//       {
//             max=arr[i];
//       }
//     } 
//     return max; 
// }
// var a=arrMax();
// var b =Math.max(...arr);
// console.log(b);

// function foo(x, y=2) {
//       console.log(y)
// }

// foo(1)


// function foo({x, y = 5}) {
//       console.log(x, y);
// }
// let [a, b, c] = [1, 2, 3];
// console.log(a,b,c)
// foo({x: 1})
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo,bar,baz)
// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third)

// let a= [1, 2, 3, 4];
// let b =[...a]
// console.log(b)
// function test(...a) {
//      console.log(a) 
// }
// test(1,2,3)
// let [head,...tail] =[1,2,3,3]
// var [...b] = a

// function test(x,y,z,d) {
//       console.log(x,y,z,d)
// }
// test(...a)
// console.log(head)
// console.log(tail)
// var x =1;
// var y =2;
// var a = {x, y=2}
// console.log(a)

// function a() {

// }
// function sd(params) {
      
// }



class Test {
      constructor(name) {
            this.name = name;
      }
      init() {

      }
      changeName(name) {
            console.log('========啊 改名字啦==========')
            this.name = name
            console.log('========啊 改名字 结束==========')
      }
      getName() {
            return this.name
      }
      say() {
            console.log('我是 一个' + this.name);

      }
}
// var jsjd ='df'
var test = new Test('狗');
test.say();
console.log(test.getName())

test.changeName('狼狗')


test.say();


// var a =new Object();