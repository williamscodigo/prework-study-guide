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