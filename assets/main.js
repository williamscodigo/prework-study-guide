//defining variables
const topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

const topic1 = topics.split(',')[0];
const topic2 = topics.split(',')[3].trim();
//split(',') is a String method that tranform a string to an array.
//join(',') is an array method that transform an array to a string.
//trim() is a String methods that remove trailing and leading spaces.

const topic2a = topics.split(', ')[3]; // topic2 without trim method 

//defining a function
function selectTopic(topic) {
  //controlling the program flow
  if (topic === "HTML") {
    console.log("Let's study HTML!");
  } else if (topic === "CSS") {
    console.log("Let's study CSS!");
  } else if (topic === "Git") {
    console.log("Let's study Git!");
  } else if (topic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}

//calling a function - note we can call it as many times as needed
selectTopic(topic1);
selectTopic(topic2);
selectTopic(topic2a);

//lets call selectTopic with a ramdom topic
//tranform topics string to array
const topicsArray = topics.split(', ');
//generate a random topic/index
const randomTopic = topicsArray[Math.floor(Math.random() * topicsArray.length)];
selectTopic(randomTopic);


const shapes = ["triangle", "square", "pentagon", "circle"];

function listTopics() {
  //usign a for loop to iterate an array
  for(let x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
   }
}

listTopics();


/*
javascript - scope - simple example

function sayHello() {
    console.log("Hello World!");
}

if(true) {
  const talk = () => console.log("logging");
  talk();      
  sayHello();
}else{
 talk();    //note: this line can't be reach
}

talk();    //note: this line give us an error since talk is not define is this scope.
*/
