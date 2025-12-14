const accountId=1234 // the vaue of the variable declared using const cannot be changed in any part of the program
let accountEmail="mohitk24407@gmail.com" //can be changed
var accountPass ="1234" //can be changed var is not used generally now days after js became compatible with scope
// Therefore prefer not to use var bcz of the issue of block scope and functional scope instead use let  to declare variables !!!
accountCity="Kanpur"//can be changed // this is also a way to make variables in js but this is not a good practice 
let accountName //this will declare a variable with no value on printing it will show "undefined"

accountEmail="mohit0107@gmail.com" //trying to change
accountPass="456" //trying to change
accountCity="Delhi" //trying to change

//PRINTING THESE VALUES ONE BY ONE

// console.log(accountId);
// console.log(accountPass);
// console.log(accountCity);
// console.log(accountEmail);

//PRINTING THESE VALUES AT ONCE TOGETHER
//console.table([]) prints the variables in a table format like shown below;;
// ┌─────────┬───────────────────────┐
// │ (index) │ Values                │
// ├─────────┼───────────────────────┤
// │ 0       │ 1234                  │
// │ 1       │ '456'                 │
// │ 2       │ 'Delhi'               │
// │ 3       │ 'mohit0107@gmail.com' │
// └─────────┴───────────────────────┘
console.table([accountId , accountPass , accountCity , accountEmail])

