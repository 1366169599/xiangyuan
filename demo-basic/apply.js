function Otaku(name, age) {
  this.name = name;
  this.age = age;

  this.habit = "Games";
}
Otaku.prototype.say =function() {
    console.log('hell tom')
}

// var person = new Otaku('tom',12);

// console.log(person.name, person.age);

function objectFactory() {
   //arguments = [Otaku, "tom", 12]
  var obj = {},
    Constructor = [].shift.call(arguments);
    //Construcor =Otaku;
    //arguments = ["tom", 12]
  obj.__proto__ = Constructor.prototype;

  Constructor.apply(obj, arguments);

    // Otaku.apply(obj,["tom", 12])
    // Otaku("tom", 12)

  return obj;
}

var person = objectFactory(Otaku, "tom123", 12);
console.log(person.name)
person.say()
