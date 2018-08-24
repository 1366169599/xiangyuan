function add(x, y) {
  return x + y;
}
add(1,2)
var curry = function(fn) {
    var arg = [].slice.call(arguments, 1);
    return function() {
        arg =[].concat.call(arg);
        arguments = [].slice.apply(arguments);
        console.log(arg,arguments)
        var newArgs = arg.concat(arguments);
        // var newArgs = ar.concat.call(arguments)
        console.log(newArgs)
        return fn.apply(this,newArgs)//add(1,2)
    }
}

let answer = curry(add,1)(2)
console.log(answer)