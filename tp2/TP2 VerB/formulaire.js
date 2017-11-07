function validation(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var dateN = document.getElementById("date").value;
    var adresse = document.getElementById("adresse").value;
    var adresse_mail = document.getElementById("mail").value;

/*** Traitement pour le nom ***/

   if (nom == ""){
        document.getElementById("error1").innerHTML = "La saisie du nom est obligatoire";
        document.getElementById("error1").removeAttribute("hidden");      
    }else if(document.getElementById("nom").value.length < 5){
        document.getElementById("error1").innerHTML = "Le nom doit comporté au moins 5 caractères";
        document.getElementById("error1").removeAttribute("hidden");        
    }

/*** Traitement pour le prénom ***/

    else if (prenom == ""){
        document.getElementById("error1").setAttribute("hidden","hidden");
        document.getElementById("error2").innerHTML = "La saisie du prénom est obligatoire";
        document.getElementById("error2").removeAttribute("hidden");        
    }else if(document.getElementById("prenom").value.length < 5){
        document.getElementById("error2").innerHTML = "Le prénom doit comporté au moins 5 caractères";
        document.getElementById("error2").removeAttribute("hidden");       
    }

/*** Traitement pour la date ***/

    else if (dateN == ""){
        document.getElementById("error2").setAttribute("hidden","hidden");
        document.getElementById("error3").innerHTML = "La saisie de votre date de naissance est obligatoire";
        document.getElementById("error3").removeAttribute("hidden");
    }

/*** Traitement pour l'adresse ***/

    else if (adresse == ""){
        document.getElementById("error3").setAttribute("hidden","hidden");
        document.getElementById("error4").innerHTML = "La saisie de votre adresse est obligatoire";
        document.getElementById("error4").removeAttribute("hidden");
    }else if(document.getElementById("adresse").value.length < 5){
        document.getElementById("error4").innerHTML = "L'adresse doit comporté au moins 5 caractères";
        document.getElementById("error4").removeAttribute("hidden");      
    }

/*** Traitement pour le mail ***/

    else if (adresse_mail == ""){
        document.getElementById("error4").setAttribute("hidden","hidden");
        document.getElementById("error5").innerHTML = "La saisie d'une adresse mail valide est obligatoire";
        document.getElementById("error5").removeAttribute("hidden");
    }else if(document.getElementById("mail").value.length < 5){
        document.getElementById("error5").innerHTML = "L'adresse mail doit comporté au moins 5 caractères";
        document.getElementById("error5").removeAttribute("hidden");  
    }

    /*** Traitement si tout se passe bien ***/
    else{
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        document.getElementById("error1").setAttribute("hidden","hidden");
        document.getElementById("error2").setAttribute("hidden","hidden");
        document.getElementById("error3").setAttribute("hidden","hidden");
        document.getElementById("error4").setAttribute("hidden","hidden");
        document.getElementById("error5").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
    }
}