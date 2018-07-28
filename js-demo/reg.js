var matches  = /moma1([0-9]*)?/gi
var a = 'moma19999'
var result = matches.exec(a);
// console.log(result[1])


var phone =/^1[0-9]{9}9$/g 
var r1 = phone.test('15010000009')
console.log(r1)