// Variabelen bestimmen

let morseAlphabet = [
	{ letter: "1", morseCode: ".----" },
	{ letter: "2", morseCode: "..---" },
	{ letter: "3", morseCode: "...--" },
	{ letter: "4", morseCode: "....-" },
	{ letter: "5", morseCode: "....." },
	{ letter: "6", morseCode: "-...." },
	{ letter: "7", morseCode: "--..." },
	{ letter: "8", morseCode: "---.." },
	{ letter: "9", morseCode: "----." },
	{ letter: "0", morseCode: "-----" },
	{ letter: " ", morseCode: "    " },
	{ letter: "A", morseCode: ".-" },
	{ letter: "B", morseCode: "-..." },
	{ letter: "C", morseCode: "-.-." },
	{ letter: "D", morseCode: "-.." },
	{ letter: "E", morseCode: "." },
	{ letter: "F", morseCode: "..-." },
	{ letter: "G", morseCode: "--." },
	{ letter: "H", morseCode: "...." },
	{ letter: "I", morseCode: ".." },
	{ letter: "J", morseCode: ".---" },
	{ letter: "K", morseCode: "-.-" },
	{ letter: "L", morseCode: ".-.." },
	{ letter: "M", morseCode: "--" },
	{ letter: "N", morseCode: "-." },
	{ letter: "O", morseCode: "---" },
	{ letter: "P", morseCode: ".--." },
	{ letter: "Q", morseCode: "--.-" },
	{ letter: "R", morseCode: ".-." },
	{ letter: "S", morseCode: "..." },
	{ letter: "T", morseCode: "-" },
	{ letter: "U", morseCode: "..-" },
	{ letter: "V", morseCode: "...-" },
	{ letter: "W", morseCode: ".--" },
	{ letter: "X", morseCode: "-..-" },
	{ letter: "Y", morseCode: "-.--" },
	{ letter: "Z", morseCode: "--.." },
];
let inputText = document.getElementById("inputText");
let outputText = document.getElementById("outputText");
let explanationH2 = document.getElementById("explanation");
let outputExplanation = document.getElementById("outputExplanation");

let anzeigeBuchstaben = document.getElementById("anzeigeBuchstaben");
let anzeigeMorse = document.getElementById("anzeigeMorse")

// Funktion

function encrypt() {
	outputText.innerHTML = "";
	outputExplanation.innerHTML = "";
	for (input of inputText.value.toLowerCase()) {
		for (buchstabe of morseAlphabet) {
			if (buchstabe.letter.toLowerCase() === input) {
				explanationH2.innerHTML = "Erklärung";
				outputText.innerHTML += buchstabe.morseCode + " ";
				if (buchstabe.letter === " ") {
					outputExplanation.innerHTML +=  "<p></p>";
				} else
					outputExplanation.innerHTML += `<p>${buchstabe.letter.toLowerCase()} = ${buchstabe.morseCode
					}</p>`;
			}
		}
	}
}

// Anzeige Buchstaben

for (buchstabe of morseAlphabet) {
    anzeigeBuchstaben.innerHTML += `<p>${buchstabe.letter.toLowerCase()}</p>`;
    anzeigeMorse.innerHTML += `<p>${buchstabe.morseCode}</p>`;
}

// anzeigeBuchstaben.innerHTML = morseAlphabet.letter.map((b) => {
// 		return `<p>${b}</p>`;
// 	}).join(" ");