function controle(exo1) {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  //si inférieure
  if (a < b) {
    alert("Le plus petit chiffre est  " + a);
  }
  //si supérieure
  if (a > b) {
    alert("Le plus grand chiffre est  " + a);
  }
  //si égal
  else if (a == b) {
    alert("Les chiffres sont égaux.");
  }
}

//On voit le resulat mais ne s'affiche pas longtemps
function somme() {
  var nbr1, nbr2, sum;
  nbr1 = Number(document.getElementById("nbr1").value);
  nbr2 = Number(document.getElementById("nbr2").value);
  sum = nbr1 + nbr2;
  document.getElementById("sum").value = sum;
}

//exo 3
function nbr() {
  let minute = parseInt(prompt("Minutes"));
  let seconde = parseInt(prompt("Secondes"));
  let enSeconde = minute * 60 + seconde;

  console.log(enSeconde);
}

//exo 4, je n'y arrive pas avec la function, j'y sans.
// function number() {
let a = 10;
a = a + 20;
console.log(a);
// }

//exo 5
function laSurface(base, hauteur) {
  return (base * hauteur) / 2;
}

//exo 6 je me suis documenter pour le .reverse et le . join
function reverse(s) {
  return s.split("").reverse().join("");
}

let ok = reverse("Radwane");
console.log(ok);

//exo 7

console.log(Math.max(10, 11, 8.4));

//exo 8 j'ai utiliser le .find, on ne la pas vu en cours mais je me suis documenter

function number() {
  const array = [6, 7, 12, 90, 700];
  const firstElement = array.find((element) => element != undefined);
  console.log(firstElement);
}
