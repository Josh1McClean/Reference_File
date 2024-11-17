//THIS IS A COMMENT...HERE LIES THE JS FILES 🌐💻
//THIS IS A COMMENT...THESE ARE COMMON JS FUNCTIONALITIES (DEEPER DIVE LATER) 📜🔧
console.log("Wassup World");
// console.log(document.getElementById("name").innerHTML = "Yo This Josh");
// document.getElementById("name").style = "color: green";
// document.getElementById("name").style = "color: green";
//THIS IS A COMMENT...THESE ARE COMMON JS FUNCTIONALITIES (DEEPER DIVE LATER) 📜🔧


//THIS IS A COMMENT...THESE ARE DATA TYPES🔤
/*STRINGS:  a primitive data type used to represent sequences of characters. Strings can 
include letters, numbers, symbols, and spaces. They are enclosed in either single (') 
or double (") quotes.*/
"I'm A String But With Double Quotations"
'I\'m Also a String But With Single Quotations'

    /*NUMBERS: A primitive data type used to represent numeric values. There are two types of 
    numbers in JavaScript: integers and floating-point numbers*/
    - 1
.01
1
10
100
1000

/*BOOLEAN: A primitive data type that represents one of two values: true or false. 
Booleans are often used to express the truth or falsity of a condition or to indicate 
the result of a comparison or logical operation.*/
true
false

/*UNDEFINED: A special value and also a type. It represents the absence of a defined value.
If a variable has been declared but not assigned a value, or if a function does not 
explicitly return a value, the result is undefined.*/
undefined

/*NULL: A special value that represents the intentional absence of any object value. It is 
a primitive data type and typically used to signify that a variable or object property 
has no assigned value.*/
null

/*OBJECT: A complex data type that allows you to store and organize data using key-value 
pairs. Objects are a fundamental part of the language, and they provide a way to 
structure and represent information in a flexible manner.*/
{ }

/*NAN: "Not-a-Number." It is a special value representing an undefined or unpresentable 
value resulting from an operation that should return a valid number but doesn't.*/
NaN

/*CONSOLE.LOG(TYPEOF VALUE): Statement in JavaScript is used to log the data type of a 
variable or an expression to the console. The typeof operator is used to determine the 
type of a given value.*/
console.log(typeof "str");
//THIS IS A COMMENT...THESE ARE DATA TYPES 🔤

//THIS IS A COMMENT...THESE ARE VARIABLES 🔣
/*VARIABlE: A named storage location that holds a value. Variables are used to store 
and manage data in a program, making it easier to reference and manipulate that data 
throughout the code*/

/*LET: a keyword used for variable declaration. It was introduced in ECMAScript 6 
(ES6) to provide a way to declare variables with block scope. Variables declared 
with let are limited to the block, statement, or expression where they are defined, 
and they are not hoisted to the top of their containing scope like variables declared 
with var.*/
let x = 1;
console.log(x);

/*CONST: A keyword used for variable declaration, similar to let. However, variables 
declared with const are constants, meaning their values cannot be reassigned after 
they are initially assigned.*/
const myNumber = 2
console.log(myNumber);

let friend1 = 'Alex';
let friend2 = 'G';
friend1 = friend2
console.log(friend1, friend2);

friend1 = "Dizzy"
console.log(friend1, friend2);

/*ASSIGNMENT: Refers to the process of giving a value to a variable. It involves storing 
a particular data value in a variable so that the variable can be used to reference and 
work with that value in the program*/

/*RE-ASSIGNMENT: Refers  to the process of assigning a new value to a variable that 
already has an existing value. Once a variable has been declared and assigned a value, 
you can change that value by assigning a different value to the same variable*/

/*RE-DECLARATION: Refers to the act of declaring a variable that has already been declared. 
In most cases, attempting to re-declare a variable using the var, let, or const keywords 
within the same scope leads to an error, depending on the type of variable and the scope in 
which it is declared*/
//THIS IS A COMMENT...THESE ARE VARIABLES 🔣

//THIS IS A COMMENT...THESE ARE ARITHMETIC OPERATORS ➕➖✖️➗
/*ARITHMETIC OPERATORS: Symbols or keywords that perform mathematical operations on numeric 
values. They are used to perform common arithmetic tasks like addition(+), subtraction(-), 
multiplication(*), division(/), exponential(**), modulus(%), increment(++), and decrement(--)*/

//ADDITION(+): (No Definition Needed)
let sum = 1 + 1
console.log(sum) //2

//SUBTRACTION(-): (No Definition Needed)
let difference = 3 - 1
console.log(difference) //2

//MULTIPLICATION(*): (No Definition Needed)
let product = 4 * 5;
console.log(product) //20

//DIVISION(/): (No Definition Needed)
let quotient = 9 / 3;
console.log(quotient) //3

//EXPONENTIAL(**): (No Definition Needed)
let exponent = 2 ** 3;
console.log(exponent) //8

/*MODULUS(%): Returns the remainder of a division operation. It calculates the remainder when the 
left operand is divided by the right operand. The modulus operation is often used to determine 
whether a number is even or odd and to cycle through a range of values*/
let remainder = 15 % 4;
console.log(remainder) //3

/*INCREMENT(++): Refers to the process of increasing the value of a numeric variable by 1. The
increment operation is commonly performed using the increment operator ++. It is a shorthand
notation for adding 1 to the current value of a variable*/
let a = 5;

a++;
console.log(a) //6

/*DECREMENT(--): Refers to the process of decreasing the value of a numeric variable by 1. The
decrement operation is commonly performed using the decrement operator --. It is a shorthand
notation for subtracting 1 from the current value of a variable*/
let b = 6;

b--;
console.log(b) //5
//THIS IS A COMMENT...THESE ARE ARITHMETIC OPERATORS ➕➖✖️➗

//THIS IS A COMMENT...THESE ARE ASSIGNMENT OPERATORS 📌🟰
/*ASSIGNMENT OPERATORS: Used to assign values to variables. They combine the assignment operation 
with another operation, such as addition, subtraction, multiplication, or division. These operators 
provide a concise way to modify the value of a variable based on its existing value*/

//ASSIGNMENT(=): Foundational assignment operator
let numb = 20;

//ADDITION ASSIGNMENT(+=):
numb += numb;
console.log(numb) //40

//SUBTRACTION ASSIGNMENT(-=):
numb -= 19;
console.log(numb) //1

//MULTIPLICATION ASSIGNMENT(*=):
numb *= 30;
console.log(numb) //600

//DIVISION ASSIGNMENT(/=):
numb /= 5;
console.log(numb) //4

//MODULUS ASSIGNMENT(%=):
numb %= 7;
console.log(numb) //6
//FOR SOME REASON THE CONSOLE/TERMINAL CAN'T RUN ALL THESE OPERATORS CORRECTLY SIMULTANEOUSLY
//THIS IS A COMMENT...THESE ARE ASSIGNMENT OPERATORS 📌🟰

//THIS IS A COMMENT...THESE ARE TYPE CONVERSIONS ⏩⏪
/*TYPE CONVERSIONS (AKA TYPE COERCION): Refers to the process of changing the data type of a value 
from one type to another. JavaScript is a dynamically-typed language, meaning that variables can 
hold values of different types, and type conversions can happen implicitly or explicitly*/

//STRING-NUMBER
let c = "8"; //STRING
let d = 10; //NUMBER
let outcome = d * Number(c); // STRING WILL BE CONVERTED TO A NUMBER 
console.log(outcome) //80

//PARSEINT (WHOLE NUMBERS)
let e = "5"; //STRING
let f = 10; //NUMBER
let result = f - parseInt(e); //STRING WILL BE CONVERTED TO A NUMBER 
console.log(result) //5

//PARSEFLOAT (FOR DECIMAL POINTS)
let g = "5.999999999"; //STRING
let h = 10; //NUMBER
let output = h + parseFloat(g); //STRING WILL BE CONVERTED TO A NUMBER WITH DECIMAL POINT
console.log(output) //15.9999
//THIS IS A COMMENT...THESE ARE TYPE CONVERSIONS

//BOOLEAN-NUMBER (FALSE CONVERTS TO 0)
let i = false; //BOOLEAN
let j = 3; //NUMBER
let figure = i + Number(j) //BOOLEAN WILL BE CONVERTED TO A NUMBER 
console.log(figure); //3

//BOOLEAN-NUMBER (TRUE CONVERTS TO 1)
let k = true; //BOOLEAN
let l = 4; //NUMBER
let total = k + Number(l) //BOOLEAN WILL BE CONVERTED TO A NUMBER 
console.log(total); //5

//NUMBER-STRING
let myName = "Josh"; //STRING
let myAge = 26; //NUMBER
let message = `My name is ${myName} and I am ${myAge.toString()} years old.`; //NUM CONVERTS TO STR 
console.log(message); //My name is Josh and I am 26 years old. 

//toSTRING() (EXPLICITLY TURNS TYPE TO STRING)
let nickname = "Nemo"; //STRING
let age = "26"; //NUMBER
console.log(typeof age.toString()); //typeOf toString

//NUMBER-STRING (DIFFERENTIATOR BETWEEN STR AND NUM)
let nnickname = "Nemo"; //STRING
let aage = "26"; //NUMBER
console.log(String(aage), aage); //STRING()
//console.log(String(false), true); ALSO WORKS FOR CONVERTING BOOLEANS TO STRIMGS

//SHORTHAND STRING-NUMBER CONVERSION
let year = "1997"  //STRING
let currAge = 26 //NUMBER
console.log(+year + 27); //SHORTHAND CONVERTER
//THIS IS A COMMENT...THESE ARE TYPE CONVERSIONS ⏩⏪

//THIS IS A COMMENT...THESE ARE COMPARISON OPERATORS ➡️🟰🟰⬅️
/*COMPARISON OPERATORS: Are used to compare values and return a Boolean result (true or false) based 
on the comparison. They are commonly used in conditional statements, loops, and other scenarios where 
you need to make decisions based on the relationship between values*/

/*EQUAL TO (== OR ===): The equality operator == and the strict equality operator === are used for 
comparison. They both check if two values are equal, but they differ in their behavior regarding type 
coercion. The equality operator performs type coercion if the operands are of different types. It 
converts the operands to the same type before making the comparison.The strict equality operator does 
not perform type coercion. It checks both the values and their types, and only returns true if both are 
the same*/
let value = 2 == "2";
let values = 2 == 2;
console.log(value, values); //CHECKS IF TWO VALUES ARE EQUAL, PERFORMS TYPE COERCION IF NECESSARY

let valued = 2 === "2";
let Valued = 2 === 2;
console.log(valued, Valued); //CHECKS IF TWO VALUES ARE EQUAL WITHOUT TYPE COERCION(*USE* STRICTLY EQUAL)

/*NOT EQUAL TO (!= OR !==): The not equal operator != and the strict not equal operator !== are used for
inequality comparisons. They check if two values are not equal, and like their equality counterparts,
they differ in their treatment of type coercion. The not equal operator performs type coercion if the
operands are of different types. It converts the operands to the same type before making the comparison
and returns true if the values are not equal. The strict not equal operator does not perform type coercion.
It checks both the values and their types, returning true only if both the values and types are not the
same. In basic terminology it reverses everything that the equal to operator does*/
let opposite = 2 != "2";
let opposites = 2 != 2;
console.log(opposite, opposites); //ACTS AS STRICTLY EQUAL WOULD

let reverse = 2 !== "2";
let reversed = 2 !== 2;
console.log(reverse, reversed); //ACTS AS LENIENT EQUAL WOULD

/*GREATER THAN (>): Used to compare two values and determine if the left operand is greater than the right
operand. It returns true if the condition is met and false*/
let greater = 2 > 1;
let great = 1 > 2;
console.log(greater, great); //CHECKS IF LEFT OPERAND IS GREATER THAN THE RIGHT
//WORKS THE SAME FOR LETTERS WITHIN A STRING SINCE EACH KEY ON A KEYBOARD HAS A NUMBER REPRESENTATIVE (ASCI)

/*LESS THAN (<):Used to compare two values and determine if the left operand is less than the right operand.
It returns true if the condition is met and false*/
let lesser = 1 < 2;
let less = 2 < 1;
console.log(lesser, less); //CHECKS IF LEFT OPERAND IS LESS THAN THE RIGHT

//WORKS THE SAME FOR LETTERS WITHIN A STRING SINCE EACH KEY ON A KEYBOARD HAS A NUMBER REPRESENTATIVEB (ASCI)
let str = "aAbBcC"
console.log(str.charCodeAt(0,)); //METHOD TO FIND OUT THE ASCI CODE (NUM REP) FOR EACH KEY (LETTER)

/*GREATER THAN OR EQUAL TO (>=): Used to compare two values and determine if the left operand is greater
than or equal to the right operand. It returns true if the condition is met and false*/
let greatT = 10 >= 10
let greaterT = 10 >= 9
let greatestT = 10 >= 11
console.log(greatT, greaterT, greatestT); //CHECKS IF LEFT OPERAND IS GREATER THAN OR EQUAL TO THE LEFT

/*LESS THAN OR EQUAL TO(<=):Used to compare two values and determine if the left operand is less than or
equal to the right operand. It returns true if the condition is met and false*/
let lesserT = 10 <= 10
let lessT = 10 <= 9
let leastT = 10 <= 11
console.log(lesserT, lessT, leastT) //CHECKS IF LEFT OPERAND IS LESS THAN OR EQUAL TO THE RIGHT
//THIS IS A COMMENT...THESE ARE COMPARISON OPERATORS ➡️🟰🟰⬅️

//THIS IS A COMMENT...THESE ARE LOGICAL OPERATORS💡🚧
/*LOGICAL OPERATORS: Used to perform logical operations on boolean values. These operators are typically used 
in conditional statements and expressions. There are three main logical operators in JavaScript; Logical AND 
(&&), Logical OR (||), and Logical NOT (!)*/

/*LOGICAL AND (&&): Used to combine two boolean expressions. It returns true if both of the operands are 
true; otherwise, it returns false. The logical AND operator is often used in conditional statements and 
expressions*/
let and = true && true;
let AND = true && false;
let aNd = false && true;
let anD = false && false;
console.log(and, AND, aNd, anD); //LOGICAL AND(&&): RETURNS TRUE ONLY IF BOTH CONDITIONS ARE TRUE

/*LOGICAL OR (||): Used  to combine two boolean expressions. It returns true if at least one of the operands
is true; otherwise, it returns false. The logical OR operator is often used in conditional statements and 
expressions*/
let or = true || true;
let Or = true || false;
let oR = false || true;
let OR = false || false;
console.log(or, Or, oR, OR); //LOGICAL OR (||): RETURNS FALSE UNLESS AT LEAST ONE OF THE CONDITIONS IS TRUE

/*LOGICAL NOT (!): Is a unary operator that is used to negate a boolean expression. It returns true if the 
operand is false, and false if the operand is true. The logical NOT operator is often used to invert the 
truth value of a boolean expression.*/
let not = !false;
let Not = !true;
let nOt = !(5 < 4);
let noT = !(5 > 4);
console.log(not, Not, nOt, noT); //LOGICAL NOT (!): RETURNS FALSE IF IT'S TRUE, AND RETURN TRUE IF IT'S FALSE
//THIS IS A COMMENT...THESE ARE LOGICAL OPERATORS💡🚧

//THIS IS A COMMENT...THESE ARE CONDITIONALS 🤔🤔
/*CONDITIONALS: Structures that allow you to make decisions in your code based on whether a specified
condition evaluates to true or false (BOOLEANS). These conditions are typically expressed using comparison or 
logical operators, and they enable your program to execute different blocks of code depending on the 
circumstances*/

/*IF STATEMENT: A conditional statement that allows you to execute a block of code if a specified condition
evaluates to true*/
let thisYear = 2024

if (thisYear > 2023) {
    console.log("You Gotta Execute More Bro")
} //CODE RUNS IF "thisYear" IS GREATER THAN 2023
console.log("You Can Learn Anything With Focus") //WILL ALWAYS RUN REGARDLESS

if (thisYear <= 2024) {
    console.log("You'll Procrastinate Like The Previous Years")
} //CODE WILL RUN IF "thisYear" IS LESS THAN OR EQUAL TO 2024
console.log("You Can't Learn Anything Without Focus") //WILL ALWAYS RUN REGARDLESS

/*IF-ELSE STATEMENT: A conditional statement that allows you to execute one block of code if a specified
condition evaluates to true and another block of code if the condition evaluates to false*/
if (thisYear = 2024) {
    console.log("I'll Break Into Tech This Year")
} else {
    console.log("I'll Sit On My Talents Like Last Year")
} //CODE WILL RUN IF "thisYear" IS 2024, BUT WONT IF IT'S NOT
console.log("Gotta Just Do Stuff This Year") //WILL ALWAYS RUN REGARDLESS

if (thisYear <= 2023) {
    console.log("I'll Break Into Tech This Year")
} else {
    console.log("I'll Sit On My Talents Like Last Year")
} //CODE WILL RUN IF "thisYear" IS LESS THAN OR EQUAL TO 2024, BUT WONT IF IT'S NOT
console.log("Gotta Just Do Stuff This Year") //WILL ALWAYS RUN REGARDLESS

/*IF-ELSE ELSE-IF STATEMENT: A conditional statement that allows you to check multiple conditions in
sequence and execute different blocks of code based on which condition is true*/
if (thisYear >= 2025) {
    console.log("I'll Keep Building Momentum")
} else if (thisYear === 2024) {
    console.log("I'm Executing")
} else {
    console.log("I'll Sit On My Talents Like 2023")
} //CODE WILL CHECK EACH CONDITION AND RUN THE LINE THAT BEST FITS THE CONDITIONS CRITERIA
console.log("STUCK TO THE GRIND") //WILL ALWAYS RUN REGARDLESS

/*ALERT: A built-in function that displays a modal dialog box with a specified message and an OK 
button. It is commonly used for providing simple notifications or alerts to users*/
let usersYear = parseInt(prompt("What year are you currently in?"));

if (usersYear === 2024) {
    alert("Take Advantage Of The Year You're In");
} else if (usersYear === 2023) {
    alert("You Wasted The Previous Year");
} else if (usersYear >= 2025 || usersYear <= 2022) {
    alert("You're A Time Traveler I See");
} else {
} //CONDITIONAL STATEMENT ALERT EXAMPLE TIED TO HTML DOC
console.log("Stay Dedicated To Intense Consistency"); //WILL ALWAYS RUN REGARDLESS
//THIS IS A COMMENT...THESE ARE CONDITIONALS 🤔🤔

//THIS IS A COMMENT...THESE ARE NESTED CONDITIONALS 🤔🤔♾️
/*NESTED CONDITIONALS: Refer to the practice of placing one conditional statement inside another. This allows 
for more complex decision-making by checking multiple conditions in a hierarchical or nested structure. The 
general syntax for nested conditionals involves using one or more if, else if, or else statements inside the 
block of another conditional statement.*/
let country = prompt("What country are you from?");

if (country === "USA" || country === "United States" || country === "United States of America") {
    let usersAge = parseInt(prompt("How Old Are You?"));
    if (usersAge < 18) {
        alert("You're not old enough to party mate");
    } if (usersAge < 21 && usersAge >= 18) {
        alert("Limbo sucks huh?");
    } if (usersAge >= 21) {
        alert("Welcome To The Gulag!");
    } else {
        alert("Your services are no longer needed past this point");
    }
} //ALL OF THE IF STATEMENTS AFTER THE FIRST OME ARE NESTED
//THIS IS A COMMENT...THESE ARE NESTED CONDITIONALS 🤔🤔♾️

//THIS IS A COMMENT...THESE ARE SWITCH STATEMENTS 🔀
/*SWITCH STATEMENT: A conditional statement that allows you to perform different actions based on different
conditions. It's a more concise way to write multiple if-else statements when you need to compare a value
against multiple possible values*/
let favTeam = prompt("Whats Your Favorite NFL Team?");

switch (favTeam) {
    case "Falcons":
        alert("ATLANTA")
        break;

    case "Panthers":
        alert("CAROLINA")
        break;

    default:
        alert("Wow...Sorry For Your Loss🚮");
        break;
} //IF USER ENTERS FALCONS OR PANTHERS, THE CORRESPONDING ALERT WILL SHOW. IF NOT, NOTHING WILL HAPPEN

/*CASE: Is a label used within a switch statement to specify different possible values that a variable or
expression might have. The case labels are used to define different blocks of code that should be executed
based on the value of the expression in the switch statement*/
let favteaM = prompt("Whats Your Favorite NBA Team?");

switch (favteaM) {
    case "Knicks":
        alert("NEW YORK")
        break;

    case "Lakers":
        alert("LOS ANGLES")
        break;

    default:
        alert("Wow...Sorry For Your Loss🚮");
        break;
} //CAN ADD AS MANY CASES AS WE WANT. IF BREAK IS REMOVED IT'LL PERFORM A FALL THROUGH AND EXECUTE EACH ALERT

let theirAge = Number(prompt("How Old Are You?"));

switch (theirAge) {
    case 10:
        alert("CHILD");
        break;

    case 20:
        alert("YOUNGIN");
        break;

    case 30:
        alert("EHHH GETTIN LESS YOUNG");
        break;

    case 40:
        alert("GAH DAMN");
        break;

    default:
        alert("If you entered over 40, soon gon be up outta here man 💀☠️👻");
        break;
} //WHEN USING NUMBERS FOR THE SWITCH, ALWAYS CONVERT THE STRING TO A NUMBER (Number(prompt(...))

/*DEFAULT: Is a label used within a switch statement. It specifies a block of code to be executed if none of
the case labels in the switch statement match the value of the expression. The default case is optional, and
it serves as a catch-all for any values not covered by the specific case labels*/
let favGame = prompt("Whats Your Favorite PS5 Game (For Now, Not All Time Playstation)?");

switch (favGame) {
    case "The Last of Us":
    case "The Last of Us 2":
        alert("2 WAS BETTER...SAID WHAT I SAID");
        break;

    case "Spider-Man":
    case "Spider-Man: Miles Morales":
    case "Spider-Man 2":
        alert("3 BETTER HAVE THE LONGEST PLAY TIME");
        break;

    default:
        alert("Fair Enough");
        break;
} //DEFAULT APPEARS IF THE USER DOESN'T ENTER ANY OF THE LISTED CASES
//THIS IS A COMMENT...THESE ARE SWITCH STATEMENTS 🔀

//THIS IS A COMMENT...THESE ARE ARRAYS 🔢🔡
/*ARRAYS: A data structure that allows you to store multiple values within a single variable. These values 
can be of any data type, including numbers, strings, objects, or even other arrays, making arrays a versatile 
and powerful tool for organizing and manipulating data. Arrays in JavaScript are defined using square 
brackets ([]) and can contain zero or more elements separated by commas. In order to access elements from our
array is by using something known as an index. In programming, we always start counting at zero which means
that every single element in our array can be accessed by an individual integer starting at zero. This means
that in every array the first element counted will be an index number of zero, the second will be one, the 
third will be two, etc...*/
let numberArray = [10, 20, "Wassup", 30, 40];

console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray[2]); //ACCESSING ARRAYS

numberArray[0] = 5;
console.log(numberArray); ///MODIFYING ARRAY VALUES

numberArray[numberArray.length - 1] = 500;
console.log(numberArray); //CHECKS FOR THE AMOUNT OF ELEMENTS IN AN ARRAY AND UPDATES THE END OF IT

let numarr = new Array(40, 50, 60);
console.log(numarr); //CREATING NEW ARRAYS WITH THE NEW LESS COMMON METHOD

let name01 = prompt("What's Your Name");
let yourAge = prompt("What's Your Age");
let hairColor = prompt("What's Your Hair Color?");

if (name01 !== "") numarr.push(name01);
if (yourAge !== "") numarr.push(yourAge);
if (hairColor !== "") numarr.push(hairColor); /*ADDS(PUSH) ELEMENTS INTO AN ARRAY (OLD OR NEW). IF THERES AM EMPTY ARRAY ("") PUSH VALUE INTO IT. IF STATEMENT IS HONORED 
DUE TO BEING ON ONE LINE OR BELOW (NO NEED FOR CURLY BRACES)*/
alert(numarr);

let eliminate = prompt("Would You Like To Delete The Last Element (Yes or No)?");

if (eliminate === "yes") numarr.pop()
alert(numarr);  //POP REMOVES THE LAST ELEMENT FROM AN ARRAY 
//IF THE USER PROMPTS YES ("") POP REMOVES THE LAST ELEMENT FROM THE ARRAY 

let arr = [];
let arr2 = [1, 2, 3];
let arr3 = [3, 4, 5];

arr.push(arr2);
arr.push(arr3);
console.log(arr); //NESTED ARRAYS

console.log(arr[0][0])
console.log(arr[1][0])//ACCESSING ELEMENTS WITHIN NESTED ARRAYS

let oneDA = [] //ONE DIMENSIONAL ARRAY 
let twoDA = [[]] //TWO DIMENSIONAL ARRAYS
let threeDA = [[[]], [[]]] //THREE DIMENSIONAL ARRAYS
let fourDA = [[[]], [[]], [[[]]]] //FOUR DIMENSIONAL ARRAYS
//THIS IS A COMMENT...THESE ARE ARRAYS 🔢🔡

//THIS IS A COMMENT...THESE ARE ARRAY METHODS 🔢🔡🗯️
/*ARRAY METHODS: Are built -in functions that can be used to manipulate arrays in various ways.
These methods allow you to perform common tasks such as adding or removing elements, searching for elements, 
iterating over elements, and transforming arrays. Some commonly used array methods are push(), pop(), shift(), 
unshift(), toString(), concat(), slice(), splice(), indexOf(), join(), sort() etc.*/
let arrMeth = [1, 2, 3];
let stringArr = arrMeth.toString(); //CONVERTS ARRAY TO A STRING (TOSTRING())
let unOrdered1 = [45, 23, 45, -8, 7];
let unOrdered2 = [45, 23, 45, -8, 7];
let arrMeth2 = ["1️⃣", "2️⃣", "3️⃣"];
let meths = arrMeth.concat(arrMeth2); //COMBINES ARRAYS TOGETHER WITHOUT MODIFYING EXISTING ARRAYS
let numbers = [1, 2, 3, 4, 5, 6,];
let games1 = ["COD", "RAINBOW 6"];
let games2 = ["GHOST OF TSUSHIMA", "GOD OF WAR", "SUICIDE SQUAD: KILL THE JUSTICE LEAGUE"];
let athletes = ["Football", "Basketball", "Track & Field", "Boxing", "MMA"];
let sports = athletes.indexOf("Track & Field"); //RETURNS THE INDEX OF A SPECIFIED ELEMENT WITHIN AN ARRAY
let strArr = numbers.join(" | "); //JOINS ALL THE ELEMENTS INTO ONE STRING SEPARATED BY PUNCTUATION AND SPACE
let sli = arrMeth2.slice(0, 2); //RETURNS A PORTION OF AN ARRAY AS A NEW ARRAY

arrMeth.shift(); //REMOVES FIRST VALUE FROM AN ARRAY (SHIFT())
arrMeth.unshift(-1); //ADDS VALUES AT THE BEGINNING OF AN ARRAY (UNSHIFT())
unOrdered1.sort(); //ORGANIZES THE ARRAY VALUES BY THEIR ASSIGNED ASCII NUMBERS IN ASCENDING ORDER (SORT())
unOrdered2.sort((a, b) => a - b); //A FUNCTION THAT ORGANIZES THE ARRAY VALUES CHRONOLOGICAL ORDER (SORT())
numbers.splice(2, 1) /*REMOVES ELEMENTS FROM IN BETWEEN THE FIRST AND LAST ARRAY. FIRST ARGUMENT IS THE INDEX
POSITION OF THE ELEMENT, SECOND IS THE AMOUNT OF ELEMENTS YOU'D LIKE TO DELETE (SPLICE())*/
games1.push("HELLDIVERS 2"); //ADDS ONE OR MORE ELEMENTS TO THE END OF AN ARRAY (PUSH())   
games2.pop(); //REMOVES THE LAST ELEMENT FROM AN ARRAY

console.log(stringArr);
console.log(arrMeth);
console.log(unOrdered1);
console.log(unOrdered2);
console.log(meths);
console.log(numbers);
console.log(games1);
console.log(games2);
console.log(sports);
console.log(strArr);
console.log(sli);
//THIS IS A COMMENT...THESE ARE ARRAY METHODS 🔢🔡🗯️

//THIS IS A COMMENT...THESE ARE STRINGS🧵🪢
/*STRINGS: A sequence of characters enclosed within either single quotes (') or double quotes ("). Strings 
are used to represent textual data such as words, sentences, or any other sequence of characters*/
console.log("\'"); //ESCAPE CHARACTER
console.log("\\"); //ESCAPING AN ESCAPE CHARACTER
console.log("Big\ndog"); //MOVES WORDS TO NEW LINE

let wealth = "RICH💰";
let stri01 = `I am a ${7 > 6} string!`;
let stri02 = `I am a ${wealth} string!`;

console.log(stri01); //TEMPLATE LITERALS
console.log(stri02); //TEMPLATE LITERALS
console.log(stri01[0]); //ACCESS THE INDEX OF A CHARACTER IN A STRING 
console.log(stri02.length); //CHECKS THE LENGTH OF THE STRING 
//THIS IS A COMMENT...THESE ARE STRINGS🧵🪢

//THIS IS A COMMENT...THESE ARE STRING METHODS🧵🪢🗯️
/*STRING METHODS: Are built-in functions that can be used to manipulate strings. These methods allow you to 
perform various operations on strings, such as extracting substrings, searching for specific characters or 
patterns, converting case, and modifying string contents. Some commonly used string methods are toUpperCase, 
toLowerCase, charAt, slice, split, etc.*/
let str01 = "Top Dog";
let str02 = str01.slice(1, 5); //EXTRACTS A PORTION OF A STRING AND RETURNS IT AS A NEW STRING (SLICE())
let str03 = "BIG DOG";
let str04 = str03.replace("DOG", "MAN"); /*REPLACES CHARACTERS WITH OTHER SPECIFIED VALUES 
(REPLACE())*/
let str05 = "wassup galaxy";
let str06 = str05.toUpperCase(); //CONVERTS A STRING TO UPPERCASE
let str07 = "WASSUP GALAXY";
let str08 = str07.toLowerCase(); /*CONVERTS A STRING TO LOWERCASE. (if (str.toLowerCase() == "yes")) USEFUL 
FOR CHECKING USER INPUT WHEN THEY FILL OUT FORMS (FAIL SAFE)*/
let str09 = "Joshua";

console.log(str02);
console.log(str04);
console.log(str06);
console.log(str08);
console.log(str09.charAt(5)); //RETURNS THE CHARACTER AT A SPECIFIED INDEX
//THIS IS A COMMENT...THESE ARE STRING METHODS🧵🪢🗯️

//THIS IS A COMMENT...THESE ARE FOR LOOPS🔁🔄⚙️
/*FOR LOOPS: A control flow statement that allows you to repeatedly execute a block of code a specified 
number of times. It's commonly used when you know in advance how many times you want to execute a block of 
code*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/*FOR LOOP BREAKDOWN: We have three things at work here. We declare a variable (let i = 0;) which is our
looping/counting variable. Then a condition where we want to loop until this condition is false (i < 10;),
and then we have what we want to do to adjust the variable at the end of every single loop (i++). In the
above example, I've created a loop where we're I set the declaring variable "i" to equal "0." I want to loop
while "i" is less than "10," and every time I complete a loop, I'll add one to i "i++" (increment++). That
means eventually "i" will become "10" and then we will break out of this loop and stop repeating code. 
Anything inside of the curly braces will be repeated. In the above example I wrote "console.log(i)" and run 
it within the terminal(node.js)/console, we'll get "0"-"9" and ending before reaching "10." This is the
most basic version of a for loop*/

//MORE COMPLEX FOR LOOP
for (let j = 2000; j >= -2000; j -= 100) {
    console.log(j);
} //FOR LOOP USING COMPARISON OPERATORS

//FOR LOOP WORD PROBLEMS: IMPORTANT KEYWORDS RELATED TO FOR LOOPS- BREAK, CONTINUE
/*Oftentimes we’ll use a for loop to loop through something like an array or a string and be searching for a 
specific value. We may also just be looping through a certain set of numbers and be looking for a number that 
meets some kind of property. */

/*PROBLEM #1: Print out all of the values that are divisible by two and put them in an array, but do not 
count the number "0". Then once we have a certain number of those values counted stop looping 
(Comment out the solution)*/
let divBy2 = []

for (let k = 0; k <= 100; k++) {
    if (k % 3 === 0 && k !== 0) continue; /*CONTINUE: SKIPS CURRENT ITERATION, GO TO THE START OF THE 
    FOR LOOP AND CONTINUE LOOPING (POINT OF THIS CODE IS TO NOT GET ANY OF THE VAALUES THAT ARE DIVISIBLE BY
    3. I'LL ONLY GET THE ONES THAT ARE DIVISIBLE BY 2)*/

    if (k % 2 == 0 && k !== 0) divBy2.push(k);

    if (divBy2.length >= 20) break; //BREAK: COMPLETELY EXITS THE LOOP
}
console.log(divBy2);
/*EXPLANATION OF SOLUTION ABOVE: Starting with the for loop syntax it didn't matter what I named my variable
(i, j, k), or what my numbered value was (unless a value is specified/requested within the question). So that
is why the for loop in this case is "for (let k = 0; k <= 100; k++)." Next within my curly braces what I
wanted to do was collect all of the values that are divisible by 2, and put them in an array. So I made a
variable to declare an array by writing "let divBy2 = []." Following this, in order to complete the equation
(values that are divisible by two), I made an  if statement with the values of "if (k % 2 == 0 && k !== 0)
divBy2.push(k);" In layman's terms within the if statement When I say "if k mod (modulus) “2” equals (==) “0”
what that is doing is getting the remainder after dividing “k” by “2.” Now if the remainder is “0”, that
means it does evenly divide by two, hence, it is divisible by 2. Then I'm just making sure that “k” is not
equal to “0” because if I do “0” mod “2”, I'm going to get zero even though “0” is not really divisible by
two at least that's the way that I'm going to treat it. Then below the curly braces I wrote
“console.log(divBy2)” and ran my code which will display all of the different values that are divisible by
“2” from “0” to “100”, and I made it that way by pushing them (divBy2.push) into my array. For the additional
problem of “stop looping once a certain value/number was reached” I chose to place the value at “20” by
using an if statement.  In order to accomplish this I needed a way to be able to exit it and to stop looping
early. I did this by using the break keyword. It works similarly to how it does in the switch statement, but
what this will do is essentially just egg at the for loop. What I wrote in this case was
“if(divBy2.length >= 20) break;” In simple terms this expression is saying that if “divBy2” dot(.)
length (checks the amount of values in the array) is greater than or equal to 20 (>=), then I can “break”
and if this keyword is encountered it’ll exit the for loop. Once I run the “console.log(divBy2)” again
instead of getting all the values that are divisible by two, I’ll only get 20 values instead because as soon
as the length is equal to 20 the code will break and stop looping (which is the certain number of values
that were to be counted)*/

//PROBLEM #2: Allow a user to enter a number between 1-0
let numberElements = Number(prompt("Enter A Number between 1-10"));

if (numberElements >= 1 && numberElements <= 10) {
    let list = document.getElementById("list");

    for (let m = 0; m < numberElements; m++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(m.toString()));
        list.appendChild(li);
    }
} else {
    alert("I CAN TELL READING ISN'T YOUR STRONG SUIT!?🤦🏿")
}
/*EXPLANATION OF SOLUTION ABOVE: To start the solution above I created a variable (numberElements) that will
convert the values prompted by the user in the browser from a string (words) to a number and I'll be asking
user to enter a number between 1 and 10. In simpler terms the code solution above is saying that "if the
number of elements (numberElements) is greater than or equal (>=) to 1 and (&&) the number of elements
(numberElements) is less than or equal to (<=) 10, then anything else will not be valid (else) I will alert
(alert) the user that its not valid with a message (I CAN TELL READING ISN'T YOUR STRONG SUIT!?🤦🏿). That was
the first step which was to create an if statement. The next step was to make my "for loop" where I wanted to
grab an element on my screen and append (add/put) different elements inside of it. So if the user entered "5"
I'll be adding numbers "0-4" onto the screen. In order to do this I had to create an element in my js code
so I wrote in my HTML code "<ul id="list"></ul>" which is an unordered list with an "id" of "list" that I'll
be able to grab and append "li" tags within it based on what the user entered. To accomplish this I first
made a variable by writing "let list = document.getElementById("list");" then making my for loop of
"for (let m = 0; m < numberElements; m++)." From here in order to insert a new HTML element I needed to make
another variable under my for loop by writing "let li = document.createElement("li"); (li is the element I'm
creating)." Then to insert/change (append) the text I wrote
"li.appendChild(document.createTextNode(m.toString())); (The text node is text that I want to put inside of
this HTML element." Now that I've created this "li" element I have to put it in my HTML document by appending
it as a child to my list (which is the id I created within the HTML code). In order to do this I wrote out
"list.appendChild(li);" In simple terms the solution is saying that "I created an li tag
(let li = document.createElement("li");), inserted the text inside of the li tag
(li.appendChild(document.createTextNode(m.toString()));), and then inserted the entire tag that now has the
text inside of it within the main list"*/
//THIS IS A COMMENT...THESE ARE FOR LOOPS🔁🔄⚙️

//THIS IS A COMMENT...THESE ARE FOR OF LOOPS🔁🔄🏃
/*FOR OF LOOPS: A modern iteration statement that allows you to iterate over iterable objects such as arrays,
strings, sets, maps, and other iterable objects. It provides a more concise syntax compared to traditional
for loops when iterating over the values of an iterable. The for...of loop iterates over the values of an
iterable object, rather than iterating over the indices or keys like the traditional for loop or forEach
method. It automatically retrieves each value from the iterable and assigns it to a variable for processing*/
//FOR OF LOOOP ARRAY
let strs = ["one", "two", "three"];

//PREVIOUS WAY TO RUN A FOR LOOP THROUGH AN ARRAY (LOOPS THROUGH INDICES OF DIFFERENT ELEMENTS).
for (let n = 0; n < strs.length; n++) {
    let str = strs[n];
}

//NEW METHOD TO RUN A LOOP THROUGH AN ARRAY WITH THE FOR OF LOOP (LOOPS THROUGH INDIVIDUAL ELEMENTS)
for (let str of strs.entries()) { //".ENTRIES()" RETURNS BOTH THE INDEX AND VALUE INSTEAD OF ONLY AN ELEMENT
    console.log(str); //OUTPUT WITH ENTRIES(): [ 0, 'one' ], [1, 'two'], [2, 'three']
}//OUTPUT WITHOUT ENTRIES(): one, two, three

//FOR OF LOOP STRING
let strs1 = "Wassup Galaxy"

for (let char of strs1) {
    console.log(char);
}//RETURNS EACH CHARACTER OF THE STRING 
//THIS IS A COMMENT...THESE ARE FOR OF LOOPS🔁🔄🏃

//THIS IS A COMMENT...THESE ARE WHILE LOOPS🔁👨‍💻
/*WHILE LOOPS: A control flow statement that allows you to repeatedly execute a block of code as long as a 
specified condition is true. It's commonly used when you don't know in advance how many times you want to 
execute a block of code, and you want to keep executing it until a certain condition is met or becomes false.*/
//SIMPLE WHILE LOOP SYNTAX
let o = 0;

while (o < 10) {
    console.log(o);
    o++;
}

/*DO WHILE LOOPS: A control flow statement that allows you to repeatedly execute a block of code as long as a 
specified condition is true. Similar to the while loop, the do...while loop executes the code block first and 
then evaluates the condition. If the condition is true, the loop will continue to execute. If the condition is 
false, the loop will terminate.*/
//SIMPLE DO WHILE LOOP SYNTAX
let ii = 1;

do {
    console.log(i);
    ii++;
} while (ii <= 5);

/*PRACTICAL USE CASE EXAMPLE: I'll be asking the user for an input and I'll continue to ask them for it until
they give us a valid input. In this case I will ask the user to enter a number between 1-10 and I only want
to stop asking them that when they input a valid number. If they give anything other than what is requested
I'll continue to ask them until they enter a valid input*/
do { //THE CODE WITHIN THE "DO" WILL HAPPEN NO MATTER WHAT
    numberLoop = Number(prompt("Enter A Number between 1-10:"));
} while (!(numberLoop >= 1 && numberLoop <= 10)); /*THE CODE WITHIN THE WHILE WILL CONTINUE UNTIL THE
CONDITION IS TRUE
*/

//WAY TO UTILIZE THIS CODE IF YOUR USING THE BREAK KEYWORD (YOU CAN ALSO UTILIZE THE CONTINUE KEYWORD)
/*
while (true) {
   let numberLoop = Number(prompt("Enter A Number between 1-10:"));
 if (numberLoop >= 1 && numberLoop <= 10) break;
 continue(THIS IS WHERE THE CONTINUE KEYWORD WILL BE PLACED)
}
console.log(numberLoop);
*/
//THIS IS A COMMENT...THESE ARE WHILE LOOPS🔁👨‍💻

//THIS IS A COMMENT...THESE ARE SETS🔑🎭
/*SETS: A built-in object that allows you to store unique values of any type, whether primitive values or
object references. It provides a collection of unique elements, and each element in a Set must be unique.
In other words, a Set cannot contain duplicate values (RUNS FASTER THAN ARRAYS. CAN ONLY GET INDEX OF 
VALUES IN A SET BY ITERATING THROUGH IT WITH A LOOP. BEST USED WHEN YOU DON'T WANT DUPLICATE VALUES)*/
//BASIC SYNTAX FOR SET(VARIABLE)
let s = new Set();

//HOW TO INITIALIZE A SET WITH DIFFERENT ELEMENTS IN IT (PASS AN ARRAY OR ITERABLE OBJECT THAT CAN EX. ([]) )
let sS = new Set([]);

//SET METHODS - .ADD, .DELETE, .SIZE, .HAS
let s1 = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
s1.add(-1) //ADDS ELEMENTS TO A SET (OUTPUT2: Set(4) { 1, 2, 3, 4, -1 })
s1.delete(4) //DELETES ELEMENTS FROM A SET (OUTPUT3: Set(5) { 1, 2, 3, -1 })
console.log(s1); //OUTPUT1: Set(4) { 1, 2, 3, 4 } (REMOVES DUPLICATE VALUES. ONLY CONTAINS UNIQUE ELEMENTS)
console.log(s1.size); //CHECKS THE SIZE OF THE ARRAY (OUTPUT4: 4)
console.log(s1.has(1)); //CHECKS IF ELEMENT EXISTS (ENTER A VALUE INTO THE .HAS(ANYTHING))
//                        OUTPUT: TRUE (BOOLEAN VALUE TRUE OR FALSE IS ALWAYS RETURNED)

//HOW TO GET INDEX/ORDER OF VALUES WITH SET (ITERATE WITH A FOR OF LOOP)
for (let numbers1 of s1) {
    console.log(numbers1)
}

//COMPLEX WAY TO FIND DUPLICATE VALUES WITH SETS
let exArr = [1, 2, 3, 3, 4];
let numbers2 = new Set();

for (let value of exArr) {
    if (numbers2.has(value)) {
        console.log("Found duplicate of", value);
    }
    numbers2.add(value);
}/*CHECKS EACH NUMBER IN THE ARRAY UNTIL A DUPLICATE APPEARS THEN LOGS IT TO THE CONSOLE UNTIL COMPLETION
(OUTPUT: Found duplicate of 3)*/
//THIS IS A COMMENT...THESE ARE SETS🔑🎭

//THIS IS A COMMENT...THESE ARE MAPS🗺️📊
/*MAPS: A built-in object that allows you to store key-value pairs, where each key can be of any data type
and each value can be of any data type, including objects or functions. Unlike regular objects ({}), which
only allow string or symbol keys, Map objects can use any value, including objects and primitive values, as
keys (ALLOWS US TO BE MORE FLEXIBLE WITH OUR DATA).*/
//BASIC SYNTAX FOR MAPS (VARIABLE)
let mmap = new Map();

mmap.set("a", 1) //.SET ADDS KEY-VALUE PAIRS TO THE MAP
mmap.set("b", 2)
mmap.set("a", 4) //"a" IS THE KEY & "4" IS THE VALUE (APPLIES TO ALL KEY-VALUE PAIRS)
mmap.delete("a"); //0UTPUT: DELETED
console.log(mmap); /*OUTPUT1: Map { 'a' => 4, 'b' => 2 } (LIKE "SETS" MAPS STORE UNIQUE VALUES SO INSTEAD OF 
"a" BEING PRINTED TWICE, THE VALUE OF IT WAS CHANGED TO THE RECENT "a, 4" SO IT CAN ONLY BE SHOWN ONCE)*/

//MAP METHODS - .GET, .HAS, .SIZE
console.log(mmap.get("a")); //ACCESSES VALUE WITHIN A MAP (OUTPUT2: 4)

console.log(mmap.has("a")); //CHECKS IF ELEMENT EXISTS IN A MAP (ENTER A VALUE INTO THE .HAS(ANYTHING))
//                           OUTPUT3: TRUE (BOOLEAN VALUE TRUE OR FALSE IS ALWAYS RETURNED)
console.log(mmap.size); //CHECKS THE SIZE OF THE MAP (OUTPUT4: 1)

//EX: KEEP TRACK OF THE FREQUENCY OF CHARACTERS FROM A STRING OR ARRAY USING A MAPPING TYPE
let exampleStr = "Wassup guys, my name is Josh"
let freq = new Map();

for (let exchar of exampleStr) {
    if (freq.has(exchar)) {
        freq.set(exchar, freq.get(exchar) + 1) //.SET ADDS KEY-VALUE PAIRS TO THE MAP(FREQ = MAP)
    } else {
        freq.set(exchar, 1)
    }
}
freq.delete() //USEFUL IF I WANT TO DELETE ANYTHING ASSOCIATED WITH THIS MAP 
//FREQ = MAP
//KEY = EXCHAR
//VALUE = FREQ.SET(EXCHAR)

console.log(freq)
console.log(freq.get("m")) //ACCESSES VALUES WITHIN MAP
/*EXPLANATION: BEFORE ANYTHING MAKE THE STRING AND THE VARIABLE. THE FIRST STEP TO CREATE A FOR OF
LOOP. THE THIRD STEP IS TO MAKE AN IF STATEMENT. THE THIRD STEP IS TO CHECK IF THE KEY EXIST
INSIDE OF THE MAP. IF IT DOES I'LL UPDATE IT, IF IT DOESN'T I'LL INSERT IT
(if (freq.has(exchar)) { freq.set(exchar, freq.get(exchar) + 1)}). BASICALLY THE IF STATEMENT IS SAYING THAT
IF WE HAVE THE CHARACTER INSIDE OF OUR FREQUENCY "if (freq.has(exchar))"", THEN WE NEED TO SET IT SO THAT WE
HAVE ONE MORE FOR THE VALUE "freq.set(exchar". SO IF IT WAS TWO BEFORE, NOW IT NEEDS TO BE THREE. THIS MEANS
I'LL GET WHAT THE EXISTING VALUE WAS AND THEN ADD ONE TO IT "freq.get(exchar) + 1)." THE NEXT STEP IS TO
MAKE AN ELSE STATEMENT BECAUSE I HAVE TO SET IT TO EQUAL "1" DUE TO THE FACT THAT IF IT DIDN'T ALREADY EXIST,
I NEED TO INSERT IT FOR THE FIRST TIME AND GIVE IT A VALUE OF ONE else {freq.set(exchar, 1)} (IT MEANS THE
FREQUENCY OF THE VALUE COMING UP). FINAL STEP IS TO WRITE "CONSOLE.LOG(FREQ)" TO SEE HOW THE CODE RUNS AND I
CAN ALSO WRITE "CONSOLE.LOG(FREQ.GET(ANY OF THE CHARACTERS INCLUDING A SPACE BETWEEN QUOTATIONS))" TO ACCESS
A SPECIFIC FREQUENCY/VALUE TO CHECK HOW MANY TIMES IT WAS TRACKED.*/
//THIS IS A COMMENT...THESE ARE MAPS🗺️📊

//THIS IS A COMMENT...THESE ARE OBJECTS🧰🛠️
/*OBJECTS: A collection of key-value pairs where each key is a unique string (or symbol) and each value can 
be of any data type, including primitive types, arrays, functions, or even other objects. Objects are one of 
the fundamental data types in JavaScript and are used to represent complex data structures and entities*/
//BASIC OBJECT SYNTAX (VARIABLE & TYPEOF)
let obj = {}
console.log(typeof obj);

//BASIC OBJECT EXAMPLE USING PROPERTIES (PROPERTY = VALUES (i.e NAME, AGE, PLACE ETC...))
let obj1 = {
    name: "Josh",
};
obj1.name = "Nate"; //(REASSIGN/CHANGE A PROPERTY WITHIN AN OBJ)
obj1.age = 26; //ADDS/CHANGEs THE PROPERTY "AGE" TO THE OBJECT
console.log(obj1); //ACCESSES THE OBJECT
console.log(obj1.name); //ACCESS THE SPECIFIED "NAME" PROPERTY IN OBJECT USING DOT(.) NOTATION
console.log(obj1["age"]); //ACCESS THE SPECIFIED "AGE" PROPERTY IN OBJECT USING BRACKET([""]) NOTATION

//NESTED OBJECTS
let person = {
    name: "Josh",
    sports: [{ sport1: "Football" }, { sport2: "Basketball" }], //NESTED OBJECTS IN AN ARRAY, IN AN OBJECT
};
//delete person.name; //DELETES THE "NAME" PROPERTY FROM THE "PERSON" OBJECT  

console.log(person);
console.log(person.sports[0]); //ACCESSES SPECIFIC PROPERTY
console.log(person.sports[0].sport1); //ACCESSES SPECIFIC PROPERTY MORE IN DEPTH (ALSO USES BRACKET NOTATION)

//CHECKS IF AN ELEMENT EXISTS WITHIN AN OBJECT (RETURNS BOOLEAN VALUE OF TRUE OR FALSE)
console.log("name" in person); //FALSE
console.log("sports" in person); //TRUE

//LOOPS/ITERATING THROUGH ALL PROPERTY'S WITHIN AN OBJECT (FOR..(in)..OF)
for (let property in person) {
    console.log(property);
    console.log(person[property]); //ACCESSES VALUES WITHIN PROPERTY (CAN ONLY USE BRACKET NOTATION IN LOOP)
}

//SYNTAX TO ACCESS ALL PROPERTY NAMES AND VALUES WITHIN AN OBJECT USING FOR..OF LOOP (ENTRIES)
for (let [property, value] of Object.entries(person)) {
    console.log(property, value);
}

//SYNTAX TO ACCESS ALL PROPERTY VALUES WITHIN AN OBJECT USING FOR..OF LOOP (VALUES)
for (let value of Object.values(person)) {
    console.log(value);
}

//SYNTAX TO ACCESS ALL PROPERTY VALUES WITHIN AN OBJECT USING FOR..OF LOOP (KEYS)
for (let value of Object.keys(person)) {
    console.log(value);
}

//COPYING OBJECTS
let obj2 = {
    name: "Josh",
};

let obj3 = { ...obj2, age: 26 }; //SPREAD OPERATOR ( {...} ): COPIES ALL PROPERTIES FROM ONE OBJECT INTO A 
//                                NEW OBJECT. CAN ALSO ADD PROPERTIES TO AN OBJECT WITHIN SPREAD OPERATOR
obj2.name = "Lis"; //WITHOUT THE SPREAD OPERATOR THE OBJECTS "NAME" PROPERTY WILL BOTH BE CHANGED
console.log(obj2);
console.log(obj3);
//THIS IS A COMMENT...THESE ARE OBJECTS🧰🛠️

//THIS IS A COMMENT...THESE ARE ERROR HANDLING⚠️🚨
/*ERROR HANDLING: refers to the process of managing and responding to errors that occur during the execution
of a program. Errors can occur for various reasons, such as incorrect input, unexpected conditions, or
programming mistakes. Proper error handling helps ensure that your program can gracefully handle these
errors and recover from them without crashing or causing unexpected behavior. There are several mechanisms
for error handling in JavaScript such as try...catch Statements, throw Statements, Error Objects and Error
Events*/
//TRY...CATCH STATEMENT EX SYNTAX
let xx = 2;

try {
    console.log("try")
    console.log("success")
} catch (err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally")
}

//THROW STATEMENT EX SYNTAX
try {
    console.log("try")
    throw Error("This is an error") //USE FOR CUSTOM ERRORS
} catch (err) {
    console.log(err.message, err.name);
} finally {
    console.log("finally")
}
//NOT THE MOST NECESSARY ASPECT OF CODING IN YOUR DAY TO DAY OPERATIONS
//THIS IS A COMMENT...THESE ARE ERROR HANDLING⚠️🚨

//THIS IS A COMMENT...THESE ARE FUNCTIONS⚙️🔧
/*FUNCTIONS: A block of reusable code that performs a specific task or calculates a value. Functions are 
one of the fundamental building blocks of JavaScript programming and are used to encapsulate logic, promote 
code reusability, and modularize code*/
//FUNCTION EX SYNTAX
function add() {
    console.log("add");
}
add();

/*ADD()= FUNCTION NAME
console.log("add");= LOGS THE ADD() FUNCTION TO CONSOLE/TERMINAL
ADD() (OUTSIDE OF CODE BLOCK)= CALLS FUNCTION AND EXECUTES IT*/

//BASIC FUNCTION USE 
function add01(x, y) {
    console.log(x + y);
}
add01(10, 10); //OUTPUT: 20
add01(1, 1); //OUTPUT: 2

//BASIC FUNCTION USE 2
function subtract(x, y) {
    console.log(x - y);
}
subtract(100, 73); //OUTPUT: 27
subtract(20, 12); //OUTPUT: 8

//BASIC FUNCTION USE WITH RETURN KEYWORD
function addTwoNumbers(aA, bB) {
    return aA + bB;
}
let cC = addTwoNumbers(20, 15);
let dD = addTwoNumbers(cC, 10);
console.log(dD);
//THIS IS A COMMENT...THESE ARE FUNCTIONS⚙️🔧

//THIS IS A COMMENT...THESE ARE EVENTS & THIS🎉🔔
/*EVENTS & THIS: Events are actions or occurrences that happen in the browser (HTML) as a result of user 
interaction or system events. Examples of events include clicking a button, hovering over an element, 
submitting a form, or resizing the window. JavaScript allows you to respond to these events by attaching 
event listeners to elements, which execute specific code (event handlers) when the event occurs. This 
refers to the current context or object. When used within event handlers, this typically refers to the 
element that triggered the event. It allows you to access properties and methods of the element within the 
event handler (EXAMPLES THROUGHOUT THIS SECTION WILL BE LINKED TO HTML FILE)*/
//ONCLICK EVENT
function enterUsername() {
    let username = document.getElementById("username").value;
    document.getElementById("text").innerHTML = username
}

/*THIS KEYWORD (FURTHER EXPLANATION): refers to the current execution context, or the object that the 
function is operating on. The value of this is determined by how a function is called and where it is called
*/
let me = {
    firstName: "Josh",
    lastName: "McClean",
    getName: function () {
        console.log(this.firstName + this.lastName)
    }
};
/* "THIS" MADE IT EASIER TO CALLBACK MY FUNCTION WITHIN AN OBJECT. (INSTEAD OF REFERRING TO "getName()" AS
A CALLBACK IN THIS CASE ITS REGARDED AS A REFERENCE OF THE FUNCTION)*/
me.getName() //CALLBACK
me.getName //REFERENCE 
//THIS IS A COMMENT...THESE ARE EVENTS & THIS🎉🔔

//THIS IS A COMMENT...THESE ARE ARROW FUNCTIONS⚙️🟰➡️
/*ARROW FUNCTIONS: A concise way to write anonymous functions in JavaScript. They provide a shorter syntax 
compared to traditional function expressions and automatically bind this to the enclosing context. Arrow 
functions were introduced in ECMAScript 6 (ES6) and have become a common feature in modern JavaScript code*/
//ARROW FUNCTION SYNTAX
let arrowFunc = () => {
    console.log("Wassup")
};
arrowFunc();

//BASIC ARROW FUNCTION EX
let arrow = (x, y) => {
    console.log(x ** y)
};
arrow(3, 9);

//ARROW FUNCTION RETURN EX
let aF = (xx, yy) => {
    return xx * yy
}
let results = aF(6, 8);
console.log(results);

//ARROW FUNCTION SHORTHAND VALUE EX
let func = (xxx, yyy) => xxx / yyy

let outputs = func(13153, 6);
console.log(outputs);

//ARROW FUNCTION RETURNING AN OBJECT EX
let arrowFunction = (w, z) => ({ w: w, z: z })

let outcomes = arrowFunction(20, 30);
console.log(outcomes); outcomes
//THIS IS A COMMENT...THESE ARE ARROW FUNCTIONS⚙️🟰➡️

//THIS IS A COMMENT...THESE ARE MAP, FILTER, & REDUCE FUNCTIONS🖌️🚰📉
/*MAP, FILTER, & REDUCE FUNCTIONS: The map, filter, and reduce functions are higher-order functions
available in JavaScript that are commonly used for processing arrays. They provide a concise and functional
programming approach to manipulate arrays and extract data*/
//MAP FUNCTION EXAMPLE 1 - PRE-MADE ARRAY (let mapARR = [...])
let mapArr = [1, 2, 3, 4, 5, 6];
let squared = mapArr.map((r) => r ** 2);
console.log(squared); /*transforms each element of the "mapArr" array, and creates a new array with the 
transformed values. In this case, it squares each number in the "mapArr" array to produce squared numbers
*/

//MAP FUNCTION EXAMPLE 2 - CUSTOM ARRAY (MADE WITH FUNCTION...SAME THING JUST LONGER)
let arrAy = [1, 2, 3, 4, 5, 6];

function map(arrAy, funC) {
    let newMapArray = [];

    for (let valuee of arrAy) {
        let newArrValue = funC(valuee);
        newMapArray.push(newArrValue)
    }
    return newMapArray;
}
let theResult = map(arrAy, (t) => t ** 3)
console.log(theResult)
/*ARR= MAKES AN ARRAY
FUNC= APPLIES ALL OF THE VALUES TO THE ARRAY (ARR)*/

//FILTER FUNCTION EXAMPLE 1 - FILTER ONLY KEEPS VALUES IN AN ARRAY IF THEY PASS THE FILTER
let filtArr = [1, 2, 3, 4, 5, 6, 7];
let filteredArr = filtArr.filter((vvalue) => vvalue % 2 === 0) //KEEPS VALUES IF THEY'RE ONLY DIVISIBLE BY 2
console.log(filteredArr);

//FILTER FUNCTION EXAMPLE 2 - CUSTOM ARRAY (MADE WITH FUNCTION...SAME THING JUST LONGER)
let filArray = [1, 2, 3, 4, 5, 6, 7];

function filter(filArray, filFunc) {
    let newFilArray = []

    for (let vaalue of filArray) {
        if (filFunc(vaalue)) {
            newFilArray.push(vaalue)
        }
    }
    return newFilArray
}
let filterResult = filter(filArray, (qq) => qq % 3 == 0)
console.log(filterResult);

//REDUCE FUNCTION EXAMPLE 1 - REDUCES ARRAY OR ITERABLE OBJECTS INTO A SINGLE VALUE
let reduceArr = [1, 2, 3, 4, 5, 6, 7, 8];
let redSum = reduceArr.reduce((prev, current) => prev + current);
console.log(redSum); /*(1 + 2 + 3 + 4 + 5 + 6 + 7+ 8 = 36 (WHOLE ARRAY REDUCED TO SINGLE VALUE OF 36)*/

//REDUCE FUNCTION EXAMPLE 2 - CUSTOM ARRAY (MADE WITH FUNCTION...SAME THING JUST LONGER)
let redArr = [1, 2, 3, 4, 5, 6, 7, 8];

function reduce(redArr, redFunc) {
    let currentReduResult = 0

    for (let redNum of redArr) {
        currentReduResult = redFunc(currentReduResult, redNum);
    }
    return currentReduResult;
}
let redResult = reduce(redArr, (prev, next) => prev - next);
console.log(redResult);/*(1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 = -34 (WHOLE ARRAY REDUCED TO SINGLE VALUE OF -34)*/
//THIS IS A COMMENT...THESE ARE MAP, FILTER, & REDUCE FUNCTIONS🖌️🚰📉

//THIS IS A COMMENT...THIS IS SCOPE🌍🕸️🔍
/*SCOPE: Refers to the context in which variables, functions, and objects are accessible. It determines the
visibility and lifetime of these entities within the code. Understanding scope is crucial for managing
variable access, avoiding conflicts, and ensuring predictable behavior in JavaScript programs. There are two
main types of scope in JavaScript: Global and Local*/

/*GLOBAL SCOPE: Variables declared outside of any function, or at the top level of a script, have global
scope. Global scope variables are accessible from anywhere within the script, including inside functions.
They persist throughout the lifetime of the script, and their values can be modified from any part of the
code. However, excessive use of global variables can lead to naming conflicts and make it difficult to
maintain and debug code*/
//BASIC GLOBAL SCOPE EXAMPLE
let aa = 2;

function accessA() {
    aa = 4;
}
accessA()
console.log(aa);

/*LOCAL SCOPE: Variables declared inside a function have local scope and are accessible only within that
function. Parameters of a function also have local scope and are accessible only within the function. Local
variables have a limited lifetime, existing only as long as the function is executing. Each function
invocation creates a new scope, and variables declared within the function are not accessible outside of it.
Nested functions create nested scopes, where inner functions have access to variables from outer functions
(closure)*/
//BASIC LOCAL SCOPE EXAMPLE
// function accessB() {
//     let bb = 4
// }
// accessB()
// console.log(bb); //WONT WORK BECAUSE THE VARIABLE WAS MADE IN THE FUNCTION AND CAN'T BE CALLED OUTSIDE OF IT
function accessB() {
    let bb = 5;
    if (true) {
        console.log(bb);
    }
}
accessB();
//THIS IS A COMMENT...THIS IS SCOPE🌍🕸️🔍

//THIS IS A COMMENT...THIS IS MUTABILITY🧩🌱
/*MUTABILITY: Refers to the ability of objects (such as arrays and objects) to be changed or modified after
they have been created. In simpler terms, a mutable object can have its state, properties, or elements
altered, added, or removed during the execution of a program. JavaScript distinguishes between mutable and
immutable data types*/

/*MUTABLE DATA TYPES (CHANGEABLE): Objects (including arrays, objects, and functions) are mutable in 
JavaScript. Mutable objects can be modified by changing their properties or elements directly, without 
needing to create a new object. Modifications made to a mutable object affect the object itself, as well as 
any references to it*/
//VARIABLES WITH LET ARE MUTABLE
let variable = 10
variable = 9
console.log(variable)

//ARRAYS ARE MUTABLE
let thisArr = [1, 2, 3, 4];
let thisArray = thisArr; //STORES A REFERENCE TO THE THISARR
let theArray = [...thisArray]; //MAKES A COPY OF THE ORIGINAL ARRAY USING THE SPREAD OPERATOR

thisArr[3] = 13;
thisArr = [20];
console.log(thisArr, thisArray, theArray);

//FUNCTIONS ARE MUTABLE
function modifyArray(cc) { //(CC) IS EQUAL TO ARRAY1 (SIDE EFFECT OF THE FUNCTION) 
    cc[0] = 50;
}

let array1 = [10, 40, 30, 20, 10];
console.log(array1);
modifyArray(array1);
console.log(array1);

//OBJECTS ARE MUTABLE (WORKS THE SAME AS FUNCTIONS. ALSO WORKS WITH THEM)
function modifyObject(dd) { //(DD) IS EQUAL TO OBJECT (SIDE EFFECT OF THE FUNCTION)  
    dd.property = "Winner😈";
}

let object = { name: "Josh" };
console.log(object);
modifyObject(object);
console.log(object);

//WORD TO THE WISE...CONST HELPS WITH KEEPING A VALUE ASSIGNED TO ITS ORIGIN

/*IMMUTABLE DATA TYPES (UNCHANGEABLE): Numbers, strings, booleans, null, and undefined are immutable in
JavaScript. Immutable data types cannot be changed once they are created. Any attempt to modify them results 
in the creation of a new value. Operations on immutable data types always return new values without 
modifying the original data.*/
true
3
"string"
undefined
null
//THIS IS A COMMENT...THIS IS MUTABILITY🧩🌱

//THIS IS A COMMENT...THIS IS MATH🧮📐
/*MATH: A built-in object that provides a set of properties and methods for performing mathematical 
operations. It is not a constructor like other objects, so you cannot create instances of it with the new 
keyword.*/
//MATH.ROUND - ROUNDS A DECIMAL VALUE UP OR DOWN TO THE NEAREST INTEGER
let num1 = 2.5;
let roundedNum = Math.round(num1);
console.log(roundedNum);

let num01 = 2.72;
let roundedNum01 = Math.round(num1 * 10) / 10; //ROUNDS TO THE NEAREST TENTH (WORKS FOR THOUSANDTH AS WELL)
console.log(roundedNum01);

//MATH.FLOOR - ROUNDS DOWN TO THE INTEGERS LOWEST VALUE (EX. 2.1 = 2 & 2.9 = 2)
let num2 = 2.9;
let roundedNum2 = Math.floor(num2);
console.log(roundedNum2);

let num02 = 2.9;
let roundedNum02 = Math.floor(num02);
console.log(roundedNum02);

//MATH.CEIL - ROUNDS UP TO THE INTEGERS HIGHEST VALUE (EX. 2.1 = 3 & 2.9 = 3)
let num3 = 2.9;
let roundedNum3 = Math.ceil(num3);
console.log(roundedNum3);

let num03 = 2.1;
let roundedNum03 = Math.ceil(num03);
console.log(roundedNum03);

//MATH.MAX - GRABS THE MAXIMUM VALUE FROM AN ITERABLE OBJECT
let num4 = 200;
let num4a = 100;

let max1 = Math.max(num4, num4a)
console.log(max1);

let num5 = 200;
let num5a = 100;

let max01 = Math.max(num4, num4a, 150, 250, 300, 350)
console.log(max01);

let numArray1 = [2, 4, 6, 8, 10];

let max2 = Math.max(...numArray1); //MUST USE SPREAD OPERATOR TO PASS EACH INDIVIDUAL VALUE AS DIFFERENT ARGS
console.log(max2);

//MATH.MIN - GRABS THE MINIMUM VALUE FROM AN ITERABLE OBJECT
let num6 = 200;
let num6a = 100;

let min1 = Math.min(num4, num4a)
console.log(min1);

let num7 = 200;
let num7a = 100;

let min01 = Math.min(num4, num4a, 150, 250, 300, 350)
console.log(min01);

let numArray01 = [2, 4, 6, 8, 10];

let min2 = Math.min(...numArray01); //MUST USE SPREAD OPERATOR TO PASS EACH INDIVIDUAL VALUE AS DIFFERENT ARGS
console.log(min2);

//MATH.ABS - GETS THE ABSOLUTE VALUE OF A NUMBER
let abs1 = Math.abs(-1); //REMOVES THE NEGATIVE SIGN FROM THE VALUE AND SHOWS I'TS ACTUAL VALUE.
let abs01 = Math.abs(1); //IF THE NUMBER IS POSITIVE, IT'LL JUST SHOW IT IN IT'S POSITIVE STATE.
console.log(abs1);
console.log(abs01);

//INFINITY - TREATED AS THE LARGEST POSSIBLE VALUE IN SET OF M=NUMBERS THAT ARE REPRESENTABLE
let gg = Infinity
let iii = -Infinity //TREATED AS THE SMALLEST POSSIBLE VALUE IN SET OF M=NUMBERS THAT ARE REPRESENTABLE
//THIS IS A COMMENT...THIS IS MATH🧮📐

//THIS IS A COMMENT...THIS IS RANDOM🎲🎰
/*RANDOM: Used to generate pseudo-random floating-point numbers between 0 (inclusive) and 1 (exclusive). It
returns a random number with approximately uniform distribution, meaning each possible value within the
range has an equal likelihood of being generated*/
//BASIC SYNTAX - GENERATES RANDOM NUMBER BETWEEN 0 AND 1. NUMBER CAN BE DIVIDED, MULTIPLIED, ROUNDED, ETC...
let nums = Math.random();
console.log(nums);

//ROUND RANDOM NUMBERS BETWEEN 1-10 (SYNTAX FOR ANY NUMBER)
let nums1 = Math.round(Math.random() * 10);
console.log(nums1);

//ROUND RANDOM NUMBERS BETWEEN 10-20. THIS METHOD MAKES 10 THE FLOOR NUMBER (SYNTAX FOR ANY NUMBER)
let nums01 = 10 + Math.round(Math.random() * 10);
console.log(nums01);

//GENERATE RANDOM NUMBERS BETWEEN A MINIMUM AND MAXIMUM VALUE USING FUNCTIONS (BASIC SYNTAX)
function randNumb(mini, maxi) {
    return Math.floor(Math.random() * (maxi - mini) + mini)
}
let rnd = randNumb(-100, 100);
console.log(rnd);

/*EXERCISE - CREATE ANN APPLICATION THAT ASKS USERS TO GUESS A NUMBER BETWEEN 1-100 IF THEY GET IT RIGHT, 
TELL IF THEY GOT IT RIGHT OR WRONG AND HOW MANY GUESSES IT TOOK (LINKED TO HTML FILE UNDER JS RANDOM 
EXERCISE)*/
function randomNum(minimum, maximum) {  //FUNCTION TO START GENERATION OF NUMBERS
    return Math.floor(Math.random() * (maximum - minimum) + minimum)
}

let nnumber = randomNum(1, 100);
let numGuesses = 0;

function reset() { //ALLOWS A RESET OF RANDOM NUMBERS AND GUESSES
    nnumber = randomNum(1, 100);
    numGuesses = 0;
    document.getElementById("num-guesses").innerHTML = 0;
}

function makeGuess() {
    const guessInput = document.getElementById("guess"); //GRABS THE ELEMENT/ID FROM THE HTML FILE
    const guess = Number(guessInput.value); //GRABS THE VALUE AND STORES IT IN THE VARIABLE
    guessInput.value = "";  //RESETS THE VALUE OF THE USER INPUT
    const feedback = document.getElementById("feedback"); //GRABS THE ELEMENT/ID FROM THE HTML FILE 


    numGuesses++; //INCREMENTS THE NUMBER OF GUESSES (TRACKS NUMBER OF GUESSES THE USER INPUTS)
    document.getElementById("num-guesses").innerHTML = numGuesses;//DISPLAYS NEW NUMBER OF GUESSES IN <PTAG>

    if (guess === nnumber) { //IF GUESS IS EQUAL TO THE NUMBER
        feedback.innerHTML = "By George You've Got It 😁🤴🏿."; //THE USER WILL GET THIS RESPONSE
        reset(); //RESETS SO IT CAN BE DONE OVER AND OVER AGAIN
    } else if (guess > nnumber) { //GIVES USERS A LANDMARK ON WHERE TO GUESS
        feedback.innerHTML = "My God You Suck...Try Again (Hint: Lower)😒🤦🏿."; //SHOWS IF USER IS WRONG
    } else {
        feedback.innerHTML = "You Still Suck...Try Again (Hint: Higher)🤬💩."; //SHOWS IF USER IS WRONG
    }
}
//THIS IS A COMMENT...THIS IS RANDOM🎲🎰

//THIS IS A COMMENT...THIS IS SORTING🔢0️⃣➡️9️⃣📝🅰️🆎
/*SORTING: Refers to the process of arranging elements in an array or collection in a specific order,
typically ascending or descending according to some criteria. JavaScript provides several built-in methods
for sorting arrays, allowing you to easily reorder the elements based on various criteria, such as numerical
or alphabetical order*/
//BASIC SORTING SYNTAX
let nuum = [1, 3, 2, 4, 5, 10, 13, 11, 12, 15, 14];
let sortedNums = nuum.sort(); //SORTS BY ASCII VALUES (HOW THE COMPUTER READS IT)
console.log(sortedNums);

let nuum1 = [1, 3, 2, 4, 5, 10, 13, 11, 12, 15, 14];
let sortedNums1 = nuum1.sort((aaa, bbb) => aaa - bbb); //SORTS BY ASCENDING VALUES (HOW HUMANS READS IT)
console.log(sortedNums1); //SORTS BY DESCENDING VALUES (HOW HUMANS READS IT) ((aaa, bbb) => bbb - aaa)

//SORTING OBJECTS
let objcts = [
    { year: 1987, make: "Ford" },
    { year: 1997, make: "Porsche" },
    { year: 2007, make: "BMW" },
    { year: 2017, make: "Benz" },
];
let storedObjcts = objcts.sort(((aaa1, bbb1) => aaa1 - bbb1)); //SORTS BY OLDEST MODEL
console.log(storedObjcts);

let objcts01 = [
    { year: 1987, make: "Ford" },
    { year: 1997, make: "Porsche" },
    { year: 2007, make: "BMW" },
    { year: 2017, make: "Benz" },
];
let storedObjcts01 = objcts01.sort(((aaa01, bbb01) => bbb01.year - aaa01.year)); //SORTS BY NEWEST MODEL
console.log(storedObjcts01);

//EXERCISE - SORT ALPHABETICALLY IF CARS HAVE THE SAME YEAR
let objcts02 = [
    { year: 2024, make: "Ford" },
    { year: 2024, make: "Porsche" },
    { year: 2024, make: "BMW" },
    { year: 2024, make: "Benz" },
];

let storedObjcts02 = objcts02.sort((aaa02, bbb02) => {
    let diffInYear = bbb02.year - aaa02.year;
    if (diffInYear === 0) {
        if (aaa02.make > bbb02.make) {
            return 1
        } else if (aaa02.make < bbb02.make) {
            return -1
        } else {
            return 0
        }
    }
    return diffInYear
});
console.log(storedObjcts02); //SORTS IN ASCENDING ORDER

let objcts03 = [
    { year: 2024, make: "Ford" },
    { year: 2024, make: "Porsche" },
    { year: 2024, make: "BMW" },
    { year: 2024, make: "Benz" },
];

let storedObjcts03 = objcts02.sort((aaa03, bbb03) => {
    let diffInYear1 = bbb03.year - aaa03.year;
    if (diffInYear1 === 0) {
        if (aaa03.make > bbb03.make) {
            return 1
        } else if (aaa03.make < bbb03.make) {
            return -1
        } else {
            return 0
        }
    }
    return diffInYear1
});
storedObjcts03.reverse()
console.log(storedObjcts03); /*".REVERSE" IS THE QUICKER WAY TO WRITE THE SAME CODE TO HAVE AN OPPOSITE 
OUTCOME WITHOUT WRITING THE LOGIC TO DO SO. YOU CAN ALSO COPY THE ORIGINAL OBJECT WITH A SPREAD OPERATOR TO
AVOID CHANGING THE ORIGINAL/EXISTING CODE "[...storedObjcts03].reverse()"*/
//THIS IS A COMMENT...THIS IS SORTING🔢0️⃣➡️9️⃣📝🅰️🆎

//THIS IS A COMMENT...THIS IS JAVASCRIPT OOP🧬🚪//node app.js   
/*Object-Oriented Programming (OOP) is a programming paradigm that focuses on organizing code into objects
that encapsulate data and behavior. In JavaScript, objects are created using constructor functions, classes,
or object literals. Prototypes, Classes & Objects, Attributes & Methods, Static Attributes & Methods, and
Inheritance are some of the key features within OOP*/

/*Prototypes: Are the mechanism by which objects inherit properties and methods from other objects. Prototypal
inheritance is a core concept in JavaScript’s object-oriented programming paradigm*/
//POINTLESS IN MY OPINION 

/*Classes & Objects: Are fundamental concepts in object-oriented programming (OOP). Objects are the basic building
blocks of JavaScript. They are collections of key-value pairs, where the keys are strings (or symbols) and the values
can be any data type, including other objects, functions, arrays, etc. Objects allow you to organize and structure
your code by encapsulating related data and behavior together. Classes are a more recent addition to JavaScript. They
provide a way to define blueprints for creating objects with similar properties and behaviors. A class is a template
for creating objects, and objects created from the same class share the same structure and behavior*/

//USE CASE ON HOW TO MODEL SYSTEMS AND WRITE PROGRAMS WITH OOP (EX: SCHOOL SETTING CREATED WITH Objects BY CLASSES)
/*
Person - The students will be the people with names and ages
- Name
    - Age

Teacher - The teachers will also have names but they'll have salaries and be able to teach as well as grade
    - Name
    - Salary
    - teach()
    - grade()

    Student - The students will have a way of greeting/introducing themselves
    - greet()

Class - The Class(classroom) will organize the teachers and students together (Math class has this teacher and students)
    - Students
    - Teacher
*/
/*Although JavaScript is not an OOP language, in other languages that are (Java) this is the way in which everything is done.
You come up with what's known as a class and the class represents this kind of object (Person, Teacher, Student, Class). Then
you create what's known as "instances" of this class which in this case we could say for example 10 "instances" of the
Teacher class. In layman's terms that'll be 10 individual teachers that have different properties and/or attributes which
allow them to do different things through their methods*/

//CODED EXAMPLE OF SCHOOL (CLASSES & OBJECTS)
class Person { //CLASS OS TREATED LIKE AN OBJECT
    //Attributes/Properties
    name;
    age;

    //Methods
    constructor(name, age) { //CONSTRUCTOR IS TREATED AS A FUNCTION 
        this.name = name; //THIS REFERS TO THE PROPERTY (NAME)
        this.age = age; //THIS REFERS TO THE PROPERTY (AGE)
    }

    sayHi(shouldSayBye) {
        console.log(`Wassup I'm ${this.name} and I'm ${this.age} years old!`);
        if (shouldSayBye) {
            console.log("Bye");
        }
    }
}
//Instances
const person1 = new Person("Josh", 10);
const person2 = new Person("Nate", 14);
person1.sayHi(false)
person2.sayHi(true)
console.log(person1, person2);
/*Using Classes & Objects with OOP Were able to use a class to construct our object that allows us to use it (the class)
multiple times to construct multiple objects. In regards to the "person1" and "person2" variables, they're two different
objects that are both the type of person (linked to the person class like the school model analogy). This class (Person)
acts as the type of an object and it's the blueprint on how to construct and interact with these different objects. In
addition to that, whenever we'd want to add a new person to the object we'd simply have to write "new" the name of the
class and the values that are required by my constructor inside of the parenthesis
(ex. const person3 = new Person("Danny", 9);. This would be a great strategy for making the contents of a video game in
my opinion.

Another thing we could do to build on top of this strategy is to add simple methods on to it. In order to define a method
we'd write the name of the method, parenthesis (sayHi(){}) and what I want it to do within the body of the function ({}).
(ex. sayHi() {
        console.log(`Wassup I'm ${this.name} and I'm ${this.age} years old!`);
    })
Once that's done we'd just call the method by referencing my different people and the name of the method together
(person1.sayHi() & person2.sayHi()). The "shouldSayBye" condition is just an example on how to make a method accept
different arguments within it's parameters and to utilize it we could just pass boolean values in its parameters when
calling it back (ex. sayHi(shouldSayBye), person1.sayHi(false), person2.sayHi(true))
*/

/*Attributes & Methods: Are fundamental concepts used to define the structure and behavior of objects in OOP. Attributes,
also known as properties or fields, are the data or state associated with an object. They represent the characteristics
or characteristics of an object. Attributes can be of any data type, such as strings, numbers, arrays, or even other
objects. Methods are functions associated with objects that define the behavior of the object. They represent the actions
or operations that an object can perform. Methods are typically used to manipulate the object’s attributes or perform some
other computation*/
class Teacher { //
    //Attributes/Properties
    name;
    age;
    #salary; /*Placing the "#" before the value allows it to be private. This means that it cannot be accessed or modified
    from outside of the class definition. In other words it's protected from being misused by someone accidentally or 
    manipulated intentionally. This is known as the process of encapsulation*/


    //Methods
    constructor(name, age, salary) { //CONSTRUCTOR IS TREATED AS A FUNCTION 
        this.name = name; //THIS REFERS TO THE PROPERTY (NAME)
        this.age = age; //THIS REFERS TO THE PROPERTY (AGE)
        this.#salary = salary; //THIS REFERS TO THE PROPERTY (SALARY)
    }

    getSalary() { //Allows for the salary to be logged outside of the class
        console.log(this.#salary);
        return this.#salary //Allows for the salary to be viewed if this syntax is used
    }

    setSalary(newSalary) { //Allows for any new change to the original salary to be valid as long as the condition is met
        if (newSalary <= 25000) {
            throw Error("Invalid Salary, Must be above 25000")
        }
        this.#salary = newSalary; //Syntax to change salary
    }
}

//Instances
const teacher1 = new Teacher("Dalis", 26, 50000);
const teacher2 = new Teacher("Lis", 26, 50001);
//teacher1.salary = 100000 (This can't happen because the value of "salary" is now private (#salary))
console.log(teacher1, teacher2);
teacher1.setSalary(60000);//Syntax to change #salary (Private Attribute) 
teacher2.setSalary(60000);//Syntax to change #salary Private Attribute) 
console.log(teacher1.getSalary());//Syntax to call changed #salary (Private Attribute) 
console.log(teacher2.getSalary());//Syntax to call changed #salary (Private Attribute) 

/*Static Attributes & Methods: Are associated with the class itself rather than with instances of the class in OOP. They are
shared among all instances of the class and can be accessed directly from the class without needing to create an instance.
Static attributes, also known as class variables or class properties, are properties that belong to the class itself rather
than to individual instances of the class. They are declared using the static keyword and are shared among all instances of
the class. Static methods are methods that belong to the class itself rather than to individual instances. They are declared
using the static keyword and can be called directly on the class without needing to create an instance*/
//REPETITIVE. REVISIT SECTION IF NEEDED LATER.

/*Inheritance: Refers to the ability of a class (known as a subclass or derived class) to inherit properties and behaviors from
another class (known as a superclass or base class). In JavaScript, inheritance is implemented using prototypes*/
//REPETITIVE. REVISIT SECTION IF NEEDED LATER.
//THIS IS A COMMENT...THIS IS JAVASCRIPT OOP🧬🚪//node app.js
//THIS IS A COMMENT...HERE LIES THE JS FILES🌐💻//node app.js   