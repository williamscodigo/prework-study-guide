//defining variables
const topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

//const topic = topics.split(',')[0];
//const topic = topics.split(',')[3].trim();
//split(',') is a String method that tranform a string to an array.
//join(',') is an array method that transform an array to a string.
//trim() is a String methods that remove trailing and leading spaces.
//note: .split(', ') will work without need the trim in above example:

const topic = topics.split(', ')[3];

//controlling the program flow
if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}

//usign a for loop to iterate an array
const shapes = ["triangle", "square", "pentagon", "circle"];

for(let x = 0; x < shapes.length; x++) {
 console.log(shapes[x]);
}



/*
note: we will get an error if we try to access a value in the wrong scope.

function sayHello() {
    console.log("Hello World!");
}

if(true) {
  const log =  () => console.log("logging");
  log();
  sayHello();
}else{
 log();
}

log();
*/