//EXERCICE 1
var nombre1 = document.getElementById('nombre1');
	var operateur = document.getElementById('operateur');
	var nombre2 = document.getElementById('nombre2');

	document.getElementById('resultat').onclick=function () {

        //VERSION AVEC LES IF
	// 	if (operateur.value == "+") {

	// 		console.log(parseInt(nombre1.value)+parseInt(nombre2.value))
	// 	//alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)+parseInt(nombre2.value)))
    // }
    // else if (operateur.value == "-") {
        
    //     console.log(parseInt(nombre1.value)-parseInt(nombre2.value))
	// 	//alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)+parseInt(nombre2.value)))
    // }

    //VERSION AVEC SWITCH
    switch (operateur.value) {
        case "+":
            alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)+parseInt(nombre2.value)))
        break;
        case "-":
            alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)-parseInt(nombre2.value)))
        break;
        case "*":
            alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)*parseInt(nombre2.value)))
        break;
        case "/":
            alert(nombre1.value +""+operateur.value+""+nombre2.value+"="+(parseInt(nombre1.value)/parseInt(nombre2.value)))
        break;
        
        default:
            alert("Merci de revoir votre saisi")
        break;
        }
	};
//FIN EXERCICE 1

// DEBUT EXERCICE 2
//cacher le formulaire lors du chargement de la page
document.querySelector('.formul').style.visibility ="hidden";
document.querySelector('.formul').style.background ="blue";

document.querySelector('#apparaitre').onclick=function () {
    document.querySelector('.formul').style.visibility='visible';
}

document.querySelector('#disparaitre').onclick=function () {
    document.querySelector('.formul').style.visibility='hidden';
}
//FIN EXERCICE 2

//DEBUT EXERCICE 3

document.querySelectorAll('.exercice3 ').forEach(element => {
    //Quand je survole le champs
    element.onmouseover=function () {
        console.log("mouseover")
        document.querySelector('#message').innerHTML="saisir un chiffre";
        document.querySelector('#message').style.cssText='background:yellow; text-align:center;'
    }

    //Quand je retire la souris
    element.onmouseout=function () {
        document.querySelector('#message').innerHTML="";
    }
});