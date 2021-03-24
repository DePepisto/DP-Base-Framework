const vorname = 'Sven';
const nachname = 'Weimann';
const geschlecht = true;

console.log(vorname);

if (geschlecht === true) {
	console.log(`Hallo Herr ${vorname} ${nachname}`);
} else {
	console.log(`Hallo Frau ${vorname} ${nachname}`);
}

/* 

// Formell

const person = new Object();

person.vorname = "Sven";
person.nachname = "Weimann";
person.geschlecht = true; 

*/

// Literal

const person = {
	vorname: 'Robin',
	nachname: 'Leibinger',
	geschlecht: true,
	anrede: function (geschlecht = this.geschlecht) {
		return geschlecht
			? `Hallo Herr ${this.vorname} ${this.nachname}`
			: `Hallo Frau ${this.vorname} ${this.nachname}`;
	},
};

// Bedingter ternärer Operator
console.log(
	person.geschlecht === true
		? `Hallo Herr ${person.vorname} ${person.nachname}`
		: `Hallo Frau ${person.vorname} ${person.nachname}`
);

console.log(person.anrede());

const names = ['Andreas', 'Sven', 'Rudolf', 'Maria', 'Josef', 'Hermine'];

let i = 0;

for (let i = 0; i < names.length; i++) {
	console.log(i, names[i]);
}

for (const name of names) {
	console.log(name);
}

names.forEach((name, i) => {
	return console.log(name, i);
});
