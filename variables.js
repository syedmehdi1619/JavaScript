const myNum = 1234
let myName = "Mehdi Hassan"
var myPw = "NotYet"
myCity = "Karachi"
let myState
// myNum = 2222 not possible
console.log(myNum);
myName = "Syed Mehdi"
myPw = "Password"
myCity = "Islamabad"

/*
prefer not to use var bcz of scope issue
*/

console.table([myName, myPw, myCity, myState]);
