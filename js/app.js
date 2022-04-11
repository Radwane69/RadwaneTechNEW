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

