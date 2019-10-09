var number =5 ;// in-line comment 

/* mullti-line 
hohohooh
ohohohoh
hoohhooh
comment */

// Data types 
 /* Undefined = something is not defined , null = nothing , boolean = true / false  , string = ,symbol = immutable unique value , number , and object = store key value pairs   */


 /* three ways to declare variables . Var = acces through all program , Let = only used within the scope tha tit was declared, const = variable will never change   
*/

var myName = "Beau";

myname = 8 ;

// assigning vs  declaring variables 

var a ; // decalring variable 
var b = 2 ; // assigning variable 

// console.log

console.log(b)
console.log(a)

// javasrcipt is case sensitive 

// math adding 
var bruh = 20 + 30 ; 
console.log(bruh);
// math operators same as java 

// incrementing the same as java EX : i++
// or decreasing 1 by i-- 

// finding length string 
var string1 = "Ada";

 console.log(string1.length)

 // bracket notation to findn character at its index 

 console.log(string1[2]);

 
 // Arrays 

var ourArray = ["john" , 23];
var myArray = ["bruh" , 1];

//nested array / multiimensiaonal array 
var array2 = [["the uni" , 7],["galazy",5]];
 
console.log(myArray);
//add elemetnsts with push 
array2.push(["lets","go"]);

console.log(array2);
// remove elements with pop 
array2.pop(array2);
console.log(array2);
// shift = removes first element  
// unshift = add element to begging of array
array2.shift(array2);
console.log(array2);

// functions
 function func1(){
     console.log(7+7);
 }

 func1();

 // functions + parameters 
 function func2(a,b){
     console.log( a - b );
 }

func2(100,50);


// scope = visability of variables . 
// variables wihtout var key words = scope to global ex : 
// vatiables decalred within function have scope only to that function.


globalvariable = 10 ; 

// return value from function with return 

function operation1(num){
    return num - 10;
}
console.log(operation1(5));


// assigned return value to a variable 

var changed = 0 ;
function ch(n){
    return(n+7)* 6;
}
ch = ch(5);
console.log(ch);

// stand line 
// a queue = abstract data structure where items are kept in order , where numbers , nerw items enter from back and old are taking from the front 

function queuelineb(array , item){
    array.push(item);    
    return array.shift();

}

var testarray = [1,2,3,4,5,6];
// JSON = changes an array to a string 
// easy to see on screen 
console.log("Before: "+ JSON.stringify(testarray));
console.log(queuelineb(testarray,7));
console.log("After:" + JSON.stringify(testarray));


// if 

function func4(itTrue){
    if(itTrue){
        return "Yes , true"; // if true return yes
    }else {
    return "No, false"; // if false return false 
    }
}

console.log(func4(false));


// 2 things are true == && (same as java )

function testinggg(i){
    if(i > 10){
        return " greater";
    }else if ( i < 5){
        return "smaller";
    }else {
        return "is between them"; 
    }
}
console.log(testinggg(6));


// quick program array + else ifs 
var golfn = ["holeOne","Eagle", "Par"];
function score (par , stroke){
    if(stroke == 1 ){
        return golfn[0]
    }else if (stroke <= par -2){
        return golfn[1]
    }else{
        return golfn[2]
    }
}

console.log(score(5,2))


// switch 
function switchfunc(i){
    var score = "";
    switch(i){
        case 1 : 
            score = "yes";
            break;
        case 2 : 
            score ="no";
            break;
        default : 
            return "oof";
            break;
        
    }
    return score; 
}
console.log(switchfunc(1));


// simple boolean answer 
// no need to do logic to get boolean answer 
function booleanfunc(a,b){
    return a < b ;

}
console.log(booleanfunc(5,6));


// Objects !!!!

// similar to arrays , but we use properties to ge into indexes .
// values , and properties 

var puppy = { 
    "name": "chester",
    "legs": 4,
    "tails": 1,
    "friends" : ["me"]

};

// access properties in an object 

var hehe = puppy.tails;
var haha = puppy.name;
// or like this 
var huhu = puppy["legs"];

console.log(hehe);
console.log(haha);
console.log(huhu)

// changing properties 
puppy.friends = ["noone"];

// adding properties 
puppy.mood = "sad";

// deleteproperties 
delete puppy.mood; 

// object can be thought of as a key in dictionaries . EX : 
function lookupDic(i){
    var result = "";
    var lookup = {
        "alpha" : "johhny",
        "omega" : "dexter",
        "delta": "deedee"
};
    result = lookup[i];
    return result;
}
console.log(lookupDic("omega"));


// check if object got property 

function checking (i){
    if (puppy.hasOwnProperty(i)){
        return puppy[i];
    }else {
        return "no"
    }
    
}
console.log(checking("name"));


// complex objects array with multiple objects

var music = [{
    "artist" : "police",
    "title":"Man walking",
    "formats" : ["CD" , "8T","LP"],
    "gold" : true
},
{
    // new object inside the music array
    "artist" : "booo",
    "title" : "sadasd",
}];

// accessing nested objects 
 var storage = {
     "car" : {
         "inside":{
             "glove box":"maps"
         },
         "outside": { 
             "trunk": "hello"
         }
     }
 };

 var contentsBox = storage.car.inside["glove box"];
 console.log(contentsBox);


 // accesing multiple arrays  with objects 

 var plants = [ { 
     type : "flowers",
     list: [
         "rose","dandelion"
     ]
 },
 {
    type : "trees",
    list:[
        "pine","birch"
    ]
 }
];

var secondTree = plants[1].list[1];
console.log(secondTree);

// 2 hour mark coding challenge . 

// while loops continue while true , stops if its false 

var array3 = [ ] ; 

var i = 0 ; 

while ( i < 5) {
    array3.push(i++);

}
console.log(array3)

// iterate with for loop 


var array4 = [ ] ; 
for ( var i = 0 ; i < 5 ; i ++) {
    array4.push(i++);

}
console.log(array3)


