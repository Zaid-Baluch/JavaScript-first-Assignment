//       CHAPTER: 5 = MATH EXPRESSIONS | JAVASCRIPT

//QUESTION 1
document.write(" QUESTION 1 <br><br>");
var num1 = 16;
var num2 = 5;
var sum = num1 + num2;
document.write(
  "Sum of " + num1 + " and " + num2 + " is " + sum + "<br> <br> <br> <br>"
);

//QUESTION 2
document.write(" QUESTION 2 <br><br>");
var sub = num1 - num2;
document.write(
  "Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>"
);

var mul = num1 * num2;
document.write(
  "multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>"
);

var div = num1 / num2;
document.write("division of " + num1 + " and " + num2 + " is " + div + "<br>");

var mod = num1 % num2;
document.write(
  "remainder of " + num1 + " and " + num2 + " is " + mod + "<br> <br> <br> <br>"
);

//QUESTION 3
document.write(" QUESTION 3 <br><br>");
var number;
document.write("Value after variable declaration is: " + number + "<br>");
number = 4;
document.write("Initial value is: " + number + "<br>");
number++;
document.write("Value after increment is: " + number + "<br>");
number = number + 6;
document.write("Value after addition is: " + number + "<br>");
number--;
document.write("Value after decremenmt is: " + number + "<br>");
number = number % 2;
document.write("The remainder is: " + number + "<br> <br> <br> <br>");

//QUESTION 4
document.write(" QUESTION 4 <br><br>");
var movie_ticket = 600;
var ticket_quantity = 5;
var total_cost = movie_ticket * ticket_quantity;

document.write(
  "Total cost to buy " +
    ticket_quantity +
    " tickets to a movie is " +
    total_cost +
    " PKR" +
    "<br> <br> <br> <br>"
);

//QUESTION 5
document.write(" QUESTION 5 <br><br>");
var num = 5;
document.write(" Table of " + num + "<br>");
document.write(num + " x 1 = " + num + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br><br><br><br>");

//QUESTION 6
document.write(" QUESTION 6 <br><br>");
var celsius = 40;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write(celsius + "°C is " + fahrenheit + "°F <br>");
document.write(
  fahrenheit + "°F is " + ((fahrenheit - 32) * 5) / 9 + "°C <br><br><br><br>"
);

//QUESTION 7
document.write(" QUESTION 7 <br><br>");
var item1_price = 500;
var item2_price = 200;
var order1 = 2;
var order2 = 4;
var ship_charges = 100;

document.write("price of item 1 is : " + item1_price + "<br>");
document.write("quantity of item 1 is : " + order1 + "<br>");

document.write("price of item 2 is : " + item2_price + "<br>");
document.write("quantity of item 2 is : " + order2 + "<br><br>");

document.write(
  " total cost of your order is " +
    (item1_price * order1 + item2_price * order2 + ship_charges) +
    "<br><br><br><br>"
);

//QUESTION 8
document.write(" QUESTION 8 <br><br>");
var total_marks = 800;
var obt_marks = 750;
document.write("total marks:" + total_marks + "<br>");
document.write("obtained marks:" + obt_marks + "<br>");

document.write(
  "percentage : " + (obt_marks / total_marks) * 100 + "<br><br><br><br>"
);

//QUESTION 9
var dollar = 10;
var riyal = 25;
document.write(
  "Total currency in PKR : " + (dollar * 270 + riyal * 28) + "<br><br><br><br>"
);

//QUESTION 10
document.write(" QUESTION 10 <br><br>");
var numb = 10;
document.write(((numb + 5) * 10) / 2 + "<br><br><br><br>");

//QUESTION 11
document.write(" QUESTION 11 <br><br>");
var current_year = 2025;
var birth_year = 2004;
document.write(
  "your current age is: " + (current_year - birth_year) + "<br><br><br><br>"
);

//QUESTION 12
document.write(" QUESTION 12 <br><br>");
var radius = 10;
document.write("radius : " + radius + "<br>");
document.write("The circumference is : " + 2 * 3.142 * 10 + "<br>");
document.write("the area is : " + 3.142 * (10 * 10) + "<br><br><br><br>");

//QUESTION 13
document.write(" QUESTION 13 <br><br>");
var snack = "Lays";
var current_age = 21;
var max_age = 65;
var per_day = 2;

document.write(
  "you will need " +
    (max_age - current_age) * 365 * 2 +
    " " +
    snack +
    " to last you until the ripe old age of " +
    max_age +
    "<br><br><br><br>"
);
