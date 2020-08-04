const fs = require('fs');

const genders = [
  'M', 
  'F',
];

const maleNames = [
  'Liam',
  'Noah',
  'William',
  'James',
  'Logan',
  'Benjamin',
  'Mason',
  'Elijah',
  'Oliver',
  'Jacob',
  'Lucas',
  'Michael',
  'Alexander',
  'Ethan',
  'Daniel',
  'Matthew',
  'Aiden',
  'Henry',
  'Joseph',
  'Jackson',
  'Samuel',
  'Sebastian',
];

const femaleNames = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Charlotte',
  'Amelia',
  'Evelyn',
  'Abigail',
  'Harper',
  'Emily',
  'Elizabeth',
  'Avery',
  'Sofia',
  'Ella',
  'Madison',
  'Scarlett',
  'Victoria',
  'Aria',
  'Grace',
  'Chloe',
];

const lastNames = [
  'Smith',
  'Jones',
  'Taylor',
  'Brown',
  'Williams',
  'Wilson',
  'Johnson',
  'Davies',
  'Robinson',
  'Wright',
  'Thompson',
  'Evans',
  'Walker',
  'White',
  'Roberts',
  'Green',
  'Hall',
  'Wood',
  'Jackson',
  'Clarke',
  'Wood',
  'Black',
];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

const people = [];

for (let i = 0; i <= 20; i++) {
	let person = {};

	person.gender = randChoice(genders);

	let getName = () => {
		if (person.gender === 'M') {
			return randChoice(maleNames);
		} else {
			return randChoice(femaleNames);
		}
	};

	person.name = getName();

	person.surname = lastNames[Math.floor(Math.random() * lastNames.length)];

	person.age = Math.floor(Math.random() * (50 - 18 + 1)) + 18;

	people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, err => {
	if (err) throw err;
	console.log('The file has been saved!');
});

console.log(data);