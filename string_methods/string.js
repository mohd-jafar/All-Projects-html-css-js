var str= "Javascript"

console.log(str.toUpperCase())
console.log(str.toLowerCase())

var str1="Hello world"
console.log(str1.slice(5,15))

var str3= "Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon";
console.log(str3.split(","))

var str4="Javascript"
console.log(str4.indexOf("a"))

var str5="Javascript"
console.log(str5.lastIndexOf("a"))


var str6="Javascript is used"
var str7=" to add functionalities to the web app"

// console.log(str6+str7)
console.log(str6.concat(str7))


var str8="This course is all about Javascript"
console.log(str8.includes("Javascript"))



Math.floor(Math.random() * 101);

Math.floor(Math.random() * 51)+50;   //  random b/w 50 and 100

console.log('1 1 1 1 1')
console.log('2 1 2 4 8')
console.log('3 1 3 9 27')
console.log('4 1 4 16 64')
console.log('5 1 5 25 125')

var salarypm=50000
var annualbonus=10000

console.log("Annual income",salarypm*12+annualbonus)