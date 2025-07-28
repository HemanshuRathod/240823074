const surname="RATHOD"
const name="Hemanshu"
console.log(surname)
console.log(name)

//1 Check Even or odd
let num=7
if(num %2 ==0)
{
    console.log("number is even")

}else{
    console.log("number is odd")
}

//2 Find the maximum of two number
const a=5
const b=7

if(a>b){
    console.log("a is max")
}else{
    console.log("b is min")
}

//3 Check Leap Year

const year =2020

if(year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}year is leap`)
}

//4 Sum of Natural Numbers

let n=5
let sum=0
for(let i=0;i<=n;i++)
    sum+i
    {
        console.log(`sum of first ${n}natural number is ${num} `)
    }

//5 Factorial of a Number

let n1=9
let result=1
for(let i=1;i<=n1;i++)
{
    result*=i
}
console.log(result)

//6 Print Multiplication

let number=3
let rows=10
for(let i=1;i<=rows;i++)
{
    console.log(number +"x"+i+"="+(number*i))
}

//7 Reverse a Number 
let n3=1234
let result1=n3.toString().split('').reverse().join()
console.log(result1)

//8 Palindrome check Number
const num1 =121
const reversed =num1.toString().split('').reverse().join('')

if(num1 == reversed){
    console.log(`${num1} Palindrom`)
}else{
    console.log(`${num1} is not Palindrom`)
}

//9 Check Prime Number

let num4=12
let prime=num4>1

for(let i=2;i<num4;i++){
    if(num4%i==0){
        prime=false
        break
    }
}
console.log(prime?"prime":"not prime")

//10  Count digits in a Number

let num5=12345
let Count=num5.toString().length

console.log("digots:",Count)

//11 Sum of Digit
// Definiton: Calculate the sum of all digit in a number.
// input:123
// Output:6

let num8=123
let sum8= num8.toString().split('').reduce((a,b) => a+ +b,0);
  console.log(sum8);

//12 check Armstrong Number
//  defination:Check if the number is Equal to the sum of its digits each raise to the power of the number of digits.
//  Input:153
//  Output:Armstrong

let numm = 153;
let strNum = numm.toString();
let len = strNum.length;
let summ = 0;

for (let char of strNum) {
  summ += Math.pow(Number(char), len);
}

if (summ === numm) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}


// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3

let g=5
let first=0
let second=1
console.log(0);
console.log(1);
for(let i=2; i<g; i++){
    sum=first+second
    first=second
    second=sum
    console.log(" "+sum);
}
  
// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.


let alph='a'
let str="apple"
if(str.includes('a'||'e'||'i'||'o'||'u')){
    console.log("vowel");
}else{
    console.log("constant");
}
// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.


let a1 = 4;
let b1 = 2;
let operation = '/';

let result2;
if (operation === '+') {
    result2 = a1 + b1;

} else if (operation === '-') {
    result2 = a1 - b1;

} else if (operation === '*') {
    result2 = a1 * b1;

} else if (operation === '/') {
    result2 = a1 / b1;
} else {
    result2 = "Invalid operation";
}

console.log(result2); 

// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.


let a2 = 28;
let b2 = 0;


while (b2 !== 0) {
    let temp = b2;
    b2 = a2 % b2;
    a2 = temp;
}
console.log(a2);

// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.

let num9 =  1 + 2 + 4 + 7 + 14 ;
let sum9 = 0;

for (let i = 1; i <= num9 / 2; i++) {
    if (num9 % i === 0) {
        sum9 += i;
    }
}

if (sum9 === num9) {
    console.log("Perfect");
} else {
    console.log("Not Perfect");
}


// 18. Print All Divisors
// Definition: Display all positive divisors of a number.


let nu=10
for(let i=0; i<=nu; i++){
    if(nu%i==0){
        console.log(i)
    }
}

// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.

let c = -5;

if (c == 0) {
    console.log("zero");
} else if (c < 0) {
    console.log("Negative");
} else {
    console.log("positive");
}

// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
let a5 = 9;
let b5 = 3;

let result5 = a5 ** b5;

console.log(result5); 