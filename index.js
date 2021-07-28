var fruits_mango = 'mango';
var fruits_apple = 'apple';

var obj = {
name:'naveen',
channel:'Your koding Skills',
time:'7pm ISt',
isHeGood: true,
view:'20 views'

}


// console.log(obj)

// vSpecial Variable

// Two way we can create 

// var fruits = new Array('Mango','apple');
// var fruits = ['Mango','grapes','apple'];

// var complexArray = ['Fruits','Veg', 'Cool Drinks', true, false, 10000, 22.45,obj, ['Teaching','Community'] ];
var complexArray = ['Avengers','Marvel','Dc Comics'];



//Accessing Array



// console.log(complexArray);
// console.log(complexArray[0]);
// console.log(complexArray[1]);
// console.log(complexArray[8]);
// console.log(complexArray.length);


// console.log("********************************")
// var hobbies = complexArray[8]
// console.log("Hobbies:",hobbies);

// console.log("********************************")

// var personal_information = complexArray[7];
// console.log("Personal Information:",personal_information);
// console.log("********************************")

// console.log("Personal Name:",personal_information.name);
// console.log("********************************")


// console.log("Personal Name:", complexArray[complexArray.length - 2]);
// console.log("********************************")


// console.log(fruits)



//  console.log(complexArray)
// console.log("Before",complexArray.length)
//  //Iterations Methods
// complexArray.pop()
// console.log("After",complexArray.length)
//  for(var i=0;i< 9 ;i++){
//   // console.log("Iteration :", i)
//    console.log("Array List :", complexArray[i])
//  }

//  for(var i=0;i<=8 ;i++){
//   // console.log("Iteration :", i)
//    console.log("Array List :", complexArray[i])
//  }

//  for(var i=0;i< complexArray.length ;i++){
//   // console.log("Iteration :", i)
//    console.log("Array List :", complexArray[i])
//  }



//Insertion
//Push - unshift


//Push
//  complexArray.push(new Date())
//  complexArray.unshift(new Date())

 //Delete
// Pop -  Shift
// complexArray.pop()
// complexArray.shift()

complexArray.push('Your Koding SKills')



// console.log("Original",complexArray);
// var copy_complex_arr = complexArray;

// copy_complex_arr.push('New Element')
// console.log("Copy",copy_complex_arr);

// console.log("** Original **",complexArray);

// var a = 'Naveen';
// var b = a;


// console.log(a);
// console.log(b);
// b = 'Kumar'
// console.log(b);



console.log("Original",complexArray);
var copy_complex_arr = complexArray.slice();

copy_complex_arr.push('New Element')
console.log("Copy",copy_complex_arr);

console.log("** Original **",complexArray);

console.log(Array.isArray('Naveen'))
console.log(Array.isArray(complexArray))

var [one,two,three,four,five=5] = [1,2,3,4];

console.log(one)
console.log(five)



