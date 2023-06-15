// console.log("hello world");
//         console.warn("this is a warning");
//         console.error("this is error");

    //3.javaScript variable
    //  variable:--containers to store data values ..
    var number1=34;
    var number2=56;
    // console.log(number1 + number2);

// 4.datatypes in javaScript 
//string
var str1="this is a string ";
var str2='this is also an string '

//number
var num1=23;
var num2=34;

//object
var marks={
    ravi: 34,
    shubham: 78,
    ajay: 99.977
}
// console.log(marks);
//Boolean
var a = true;
var b =false;
// document.write(a);
/*
At a very heigh level, there are two types of data types in javaSCript
1.primitive datatypes: undefined, null,number,String,boolean,Symbole
2.Reference datatypes: arrays , objects
*/

var arr=[1,2,3,4,5]
var arr=[1,2,"ajay",4,5]
// console.log(arr)


//operatores in javaScript
// Arrithmatic opratores
//substraction opratores
var a=34;
var b=45;
// console.log("the values of a +b is",a+b);
// console.log("the values of a -b is",a-b);
// console.log("the values of a *b is",a*b);
// console.log("the values of a /b is",a/b);
// console.log("the values of a %b is",a%b);

//assignment opratores
var c=b;

//comparison opraters
var x=23;
var y=34;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);

//logical opratores
// console.log(true && ture);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Bitwise opratore (|)
//logical OR opratore(||)

/*
logical not:-
 sach ko jhut or jhut ko such kare use logical not opratore kahate hai
*/
// console.log(! false);
// console.log(!true);

//functions in javaScript
// DRY =do not repeat yourself

// function avg (a,b)
// {
//    c=(a+b)/2;
//    return c;

// }
// c1 = avg(4,6)
// c2= avg(14,16)
// console.log(c1,c2);

// Conditional statment in javaScript

// var age =3;
// if(age>8){
//     console.log("your not a kid")
// }
// else{
//     console.log(" your are a kid")
// }

// var arr=[1,2,3,4,5,6]
// // console.log(arr);

// arr.forEach(function(element){
//     console.log(element);
// })

//just repeat the line of the above sentance level
// var arr=[1,2,3,4,5,6]
// // console.log(arr);

// arr.forEach(function(element){
//     console.log(element);
// })

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

let myArr =["fan","camera", 34, null,true];
//arry methods
console.log(myArr.length);
// myArr.pop();// it use to hide or cut the last element from the array
// myArr.push("ajay")// it is use to insert the elemnet in the array
// myArr.shift() // it is use to delete the first element in the array
// myArr.unshift()
// console.log(myArr.unshift("harry"))// it is use to insert harry in the first of array element 
console.log(myArr);


//string methods in javaScript

let mylovelyString = "Ajay is a good boy";
// console.log(mylovelyString.length)
// console.log(mylovelyString.ondexof("good"))
// d=mylovelyString.replace("Ajay", "Rohan");
// d=d.replace("good, bad");
// console.log(d,mylovelyString)


let myDate=new Date()
// console.log(myDate.getFullYear());

//Dom manipulaton

 let elem = document.getElementById('click')
// console.log(elem)
let elemclass = document.getElementsByClassName("container")
// console.log(elemclass)
// elemclass[0].style.background='yellow'
elemclass[0].classList.add('bg-primery')

tn= document.getElementsByTagName('button')
console.log(tn)
RN=document.getElementsByTagName('div')
console.log(RN)

//selecting using Query
/*
sel= documnet.querySelector('.container')
console.log(sel)

sel= documnet.querySelectorAll('.container')
console.log(sel)*/



// Events in javaSCript ;-
// 1.mousehover
// 2.clickon




// arrow function
// function summ (a,b){
//     return a+b;
// }
summ =(a,b)=>{
    return a+b;
}



//setTimeout and setInerval
// set timeout ;- yek tarikhese hum lock karate hai code it's maean it exicute after sum time of interval

logkaro=()=>{

    console.log("i am ajay")
}
// setTimeout(logkaro,2000)

// setInterval(logkaro,2000)
// clr=setTimeout(logkaro ,4000)
// clr=setInterval(logkaro,2000)

// clearInterval(clr) ;- it is use to stop the running time of setime interval



// javaScript localStorage
// localStorage.setItem('name','ajay')
// localStorage.getItem('name')
    // localStorage.removeItem('name')
    // localStorage.clear();


// JSON ;-
// What is a JSON used for?
// JSON is perfect for storing temporary data.

obj = {name: "ajay", length:1}
jso = JSON.stringify(obj);
console.log( typeof jso)
console.log(jso)
parsed = JSON.parse('{"name": "ajay", "length":1, "a" : {"this" : "that"}}')
console.log(parsed)














