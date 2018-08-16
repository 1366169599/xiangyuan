var a =[1,2,3,4,51,1,2,2];
// var obj ={}
// for(var i=0;i<a.length;i++) {
//     if(!obj[a[i]]){
//         obj[a[i]] = a[i]
//     }
// }
var setA = new Set(a)

setA.forEach(function(item) {
    console.log(item)
})