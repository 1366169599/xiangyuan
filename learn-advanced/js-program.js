function Person(name) {
    this.name = name
}
var objectFactory = function() {
    var obj = new Object()
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj
}
objectFactory(Person, 'z')