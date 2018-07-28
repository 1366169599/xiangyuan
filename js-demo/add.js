
var a = [1, '+', 4, '/', '5', '*', 4]
var newA = []
 for(var i =0; i<a.length; i++) {
     if((a[i] === '/' || a[i] ==='*' )) {
        newA.push(i)
     }
 }
console.log(newA)