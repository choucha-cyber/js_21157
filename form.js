function verif() {
    //event.preventDefault();
    var homme = document.querySelector("#mr");
    var femme = document.querySelector("#mrs");

    //if (!homme.checked) {
    if (homme.checked == false && femme.checked == false )  {
        alert('Saisir votre civilité');
        return false;
    }
    
    if ((document.querySelector('#firstname').value == '') )  {
        alert('Entrez un nom ');
        document.querySelector('#firstname').focus();
        document.querySelector('#firstname').style.background = "red";
        document.querySelector('.error').innerHTML = "SVP, entrez votre nom";
        return false;
    }else{
        document.querySelector('#firstname').style.background = "green";
        document.querySelector('.error').innerHTML = "";
    }
    if ((document.querySelector('#lastname').value == '')  )  {
        alert('Entrez un nom ');
        document.querySelector('#lastname').focus();
        document.querySelector('#lastname').style.background = "red";
        document.querySelector('.error').innerHTML = "SVP, entrez votre prénom";
        
        return false;
    }
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;

    if (!regex.test(document.querySelector('#email').value) )  {
        alert('Entrez un nom ');
        document.querySelector('#email').focus();
        document.querySelector('#email').style.background = "red";
        document.querySelector('.error').innerHTML = "Email pas valide";
        return false;
    }

    if (true) {
        document.querySelector('.container').innerHTML = "MERCI, pour votre message, ça fait plaisir   " +document.querySelector('#lastname').value;
    }
}
