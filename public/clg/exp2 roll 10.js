a=document.querySelector("form")
b=document.querySelector(".form")
a.onsubmit =(ev)=>
                {
                    ev.preventDefault();
                    document.write(a.elements[0].value)
                    b.innerText=a.elements[0].value
                }
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];

// Loop through all the elements in the array 
for(var i in fruits) {  
    document.write(fruits[i] + "<br>");
}

const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

window.number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    document.write("The number is even.");
}

// if the number is odd
else {
    document.write("The number is odd.");
}


// program to check if a number is prime or not

// take input from the user
window.number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    document.write("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(`${number} is a prime number`);
    } else {
        document.write(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    document.write("The number is not a prime number.");
}


var d = new Date();
	
switch(d.getDay()) {
	case 0:
		alert("Today is Sunday.");
		break;
	case 1:
		alert("Today is Monday.");
		break;
	case 2:
		alert("Today is Tuesday.");
		break;
	case 3:
		alert("Today is Wednesday.");
		break;
	case 4:
		alert("Today is Thursday.");
		break;
	case 5:
		alert("Today is Friday.");
		break;
	case 6:
		alert("Today is Saturday.");
		break;   
	default:
		alert("No information available for that day.");
		break;
}

const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        document.write('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

document.write(typeof person); // object

// accessing the object value
document.write(person.name);
document.write(person.hobbies[0]);
person.greet();
document.write(person.score.maths);



const string = '      Hello World       ';

const result = string.split(' ').join('');

document.write(result);
