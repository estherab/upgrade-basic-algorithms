// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log("Primer elemento - ", avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = "IRONMAN";
console.log("Primer elemento - ", avengers[0]);

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.
alert("Nº de elementos: " + avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
avengers.push("MORTY");
avengers.push("SUMMER");

console.log("Último elemento - ", avengers[avengers.length-1]);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();

console.log("Primer elemento - ", rickAndMortyCharacters[0]);
console.log("Último elemento - ", rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

rickAndMortyCharacters.push("Jerry", "Morty", "Summer", "Lapiz Lopez");

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1 ,1);
console.log(rickAndMortyCharacters);