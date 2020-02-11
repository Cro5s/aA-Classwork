
// constructor style function and invocation
function NewConstructorFunction(name){
    this.name = name
}

let func = new NewConstructorFunction("test")


// named function
function namedFunction(name) {
    return `hello ${name}`
}

namedFunction("bob") // output: "hello bob"


// "monkey patching" greet to global Function object
Function.prototype.greet = function(name){
    return `great to meet you, ${name}`
}

// or ...
NewConstructorFunction.prototype.greet = function(name){
    return `great to meet you, ${name}`
}

let welcome = function(params) {}

welcome.greet("someones name") // invoking greet method style

// invoking method style
let welcome2 = new NewConstructorFunction("test2")
welcome2.greet("someones name")

let t = this; // <- this "t" will always be global 

// named function
function returnUninvokedFunction() {
    let that = this;
    const func = function(params) {
        // that.SOMETHING
    } // does not auto bind
    return func // <- will return an uninvoked function to be invoked at a later time
}

let uFunc = returnUninvokedFunction() // <- uFunc is now an uninvoked function
uFunc("some param") // <- returned function is now invoked

// named function
function returnUninvokedFunctionES6Style() {
    return (params) => { // auto binds object
        // this.SOMETHING
    }
}
let uFuncES6 = returnUninvokedFunctionES6Style() // <- uFunc is now an uninvoked function
uFuncES6("some param") // <- returned function is now invoked


// adds myCurry to any function 
Function.prototype.myCurry = function(numArgs) {
    const numbers = []

    function _myCurry(num) {
        numbers.push(num)
        if(numbers.length === numArgs){
            let sum = 0
            numbers.forEach( num => {
                sum += num
            })
            return sum
        } else {
            return _myCurry
        }
    }
    return _myCurry 
}

Function.prototype.myCurry = function(numArgs) {
    const numbers = []

    function _myCurry(num) {
        numbers.push(num)
        if(numbers.length === numArgs){
            return this(numbers) // sum function callback
        } else {
            return _myCurry // <- uninvoked returned function
        }
    }
    return _myCurry  // <- uninvoked returned function
}

let sum = function(...nums) {
    let sum = 0
    nums.forEach( num => {
        sum += num
    })
    return sum
}

let s = sum.myCurry(5)
s(1)
s(2)
s(3)
s(4)
s(5)

// or...
sum.myCurry(5)(1)(2)(3)(4)(5)