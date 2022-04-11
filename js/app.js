function controle(monform) {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    //si inférieure
	if(a < b){
        alert("Le plus petit chiffre est : " +a);
    }
    //si supérieure
    if(a > b){
        alert("Le plus grand chiffre est : " +a);
    }
    //si égal
    else if(a == b){
        alert("Les chiffres sont égaux.");
    }
}

//On voit le resulat mais ne s'affiche pas longtemps
function somme(){
    var nbr1, nbr2, sum;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    sum = nbr1 + nbr2;
    document.getElementById("sum").value = sum;
} 