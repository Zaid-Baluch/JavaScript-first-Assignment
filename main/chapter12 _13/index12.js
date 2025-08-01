//              CHAPTER 12 = IF-ELSE STATEMENTS / SETS OF STATEMENTS | JAVASCRIPT

// //QUESTION 1
console.log("QUESTION 1");
var input = prompt("Enter a character : ");
var ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log("Its a number.");
} else if (ascii >= 65 && ascii <= 90) {
  console.log("its an uppercase letter.");
} else if (ascii >= 97 && ascii <= 127) {
  console.log("its an uppercase letter.");
} else {
  console.log("invalid input.");
}

// QUESTION 2
console.log("QUESTION 2");
var num1 = +prompt("Enter your first  number: ");
var num2 = +prompt("Enter your second  number: ");

if (num1 == num2) {
  console.log("Both numbers are equal.");
} else if (num1 > num2) {
  console.log("Num1 " + num1 + " is greater than num2 " + num2);
} else if (num1 < num2) {
  console.log("Num2 " + num2 + " is greater than num1 " + num1);
} else {
  console.log("Invalid Input.");
}

//QUESTION 3
console.log("QUESTION 3");
var number = +prompt("Enter a number : ");
if (number == 0) {
  console.log("The number is zero.");
} else if (number > 0) {
  console.log("The number is Positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("invalid input");
}

//QUESTION 4
console.log("QUESTION 4");

var vowel = prompt("Enter a single character : ");

if (vowel.length == 1) {
  if ((vowel == "a", "A", "e", "E", "i", "I", "o", "O", "u", "U")) {
    console.log(true + " its a vowel.");
  } else {
    console.log(false + " its not a vowel.");
  }
} else {
  console.log("please enter a single character.");
}

//QUESTION 5
console.log("QUESTIUON 5");
var correct_password = "sohaib";
var password = prompt("Enter your correct password : ");

if (password == null) {
  console.log("please enter a password");
} else {
  if (password === correct_password) {
    console.log("The Password, you entered is correct");
  } else {
    console.log("Incorrect password");
  }
}

// QUESTION 6
console.log("QUESTION 6");
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "good morning";
  console.log(greeting);
} else {
  greeting = "good evening";
  console.log(greeting);
}

// QUESTION 7
console.log("QUESTION 7");
var time = +prompt("Enter a time");
if (time >= 0o00 && time < 1200) {
  console.log("Good morning.");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon.");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening.");
} else if (time >= 2100 && time < 2359) {
  console.log("Good night.");
} else {
  console.log("Invalid input");
}
