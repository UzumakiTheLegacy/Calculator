const decision = prompt("Type 'division' to divide, 'multiplication' to multiply, 'subtraction' to subtract, 'addition' to add, 'square' to find square, 'squareroot' to find squareroot, 'lcm' to find lcm, 'hcf' to find hcf (Note: This is case sensitive.)");

if(decision == "division" ){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + num1/num2;
}
else if(decision == "multiplication"){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + num1*num2;
}
else if(decision == "subtraction"){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + (num1 - num2)}

else if(decision == "addition"){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + (num1 + num2);
}
else if(decision == "square"){
const num = parseInt(prompt('Enter the number '));
  var result = "The result is " + Math.pow(num,2);
}
else if(decision == "squareroot"){
const numb = parseInt(prompt('Enter the number '));

  var result = "The result is " + Math.sqrt(numb);
}
else if(decision == "lcm"){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + lcm(num1,num2);
}
else if(decision == "hcf"){
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
var result = "The result is " + hcf(num1,num2);
}
else if(decision == ""
  (document.getElementById("demo").innerHTML = "Please enter a valid input"));
else(
  (document.getElementById("demo").innerHTML = "Please enter a valid input"));

  function lcm(a,b){
  var lcm = a*b;
  while(a!=b){
    if(a>b){
      a = a-b;
    }
    else{
      b = b-a;
    }
  }
  return lcm/a;
}

function hcf(a,b){
  var a = arguments[0];
  var b = arguments[1];
  while(a!=b){
    if(a>b){
      a = a-b;
    }
    else{
      b = b-a;
    }
  }
  return a;
}

function Reload(){
  window.location.reload();
}

document.getElementById("demo").innerHTML = result;