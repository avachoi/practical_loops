//Part1: Fizz Buzz
for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("Fizz Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

//Part 2: Prime Time
let n = 4;
while (n < Infinity) {
	n++;
	if (n % 2 !== 0 && n % 3 !== 0) {
		console.log(n);
		break;
	}
}

//Part 3: Feeling Loopy
let str =
	"ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let row = "";
let cell = "";
for (let i = 0; i < str.length; i++) {
	if (str[i] === ",") {
		row += cell + ",";
		cell = "";
	} else if (str[i] === "\n") {
		row += cell;
		console.log(row);
		row = "";
		cell = "";
	} else {
		cell += str[i];
	}
}
row += cell;
console.log(row);
