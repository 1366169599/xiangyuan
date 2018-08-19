var a ={
    name : "Cherry",
    fn : function (a,b) {
     console.log( a + b)
    }
   }
   var b = a.fn;
   b.apply(a,[1,2])  // 3

   b(1,2);




var a ={
  name : "Cherry",
  fn : function (a,b) {
   console.log( a + b)
  }
 }
 var b = a.fn;
 b.call(a,1,2)  // 3


 b(1,2)


 	
var a ={
    name : "Cherry",
    fn : function (a,b) {
     console.log( a + b)
    }
   }
   var b = a.fn;
   b.bind(a,1,2)()