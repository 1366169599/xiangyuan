// var a='2';
// var a1='z';
// var a2=false;
// var a3=1.2;
// var o={
//     valueOf:function(){
//         return -1;
//     }
// };
// console.log(a++);
// console.log(a1++);
// console.log(a2++);
// console.log(a3--);
// console.log(o--);



// console.log(!false);


// switch(true){
//     case num<0:console.log('less than 0');
//     break;
//     case num>=0 && num<10:console.log('between 0 and 10');
//     break;
//     default:console.log('more than 10');
// }
// var num=15;

// var person=new Object();
// console.log(person instanceof Object)


var obj = {
    foo: function(){
      console.log(this)
    }
  }
  var bar = obj.foo
  obj.foo() 
  bar() 


// function func(){
//     console.log(this)
//   }
  
//   func()