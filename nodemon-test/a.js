// console.log('asdj')
// for(var i=0;i<10;i++){
//     console.log(i)
// }

// function natural(n){
//     if(typeof n!='number'){
//         return 'not a number'
//     }else{
//         return(n>=0&&Math.floor(n)==n)
//     }

// }
// console.log(natural(2.3))
// console.log(natural(2.3))
// console.log(natural('a'))

//  var sum=0;
//  for(var i=0;i<1000;i++){
//     if(i%3==0||i%5==0){
//         sum=sum+i
//     }
//  }
//   console.log(sum)

  var a = 21; 
var b =7;  
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);


function reverse3(array) {
    return array.map(function(element, idx, arr) {
        return arr[(arr.length - 1) - idx]
    });
}
