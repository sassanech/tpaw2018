function validation(){
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var dateN = document.getElementById("date").value;
    var adresse = document.getElementById("adresse").value;
    var adresse_mail = document.getElementById("mail").value;

/*** Traitement pour le nom ***/

    if (nom == ""){
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
        document.getElementById("error").removeAttribute("hidden");     
        document.getElementById("nom").focus();   
    }else if(document.getElementById("nom").value.length < 5){
        document.getElementById("error").innerHTML = "Le nom doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");        
    }

/*** Traitement pour le prénom ***/

    else if (prenom == ""){
        document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
        document.getElementById("error").removeAttribute("hidden");        
    }else if(document.getElementById("prenom").value.length < 5){
        document.getElementById("error").innerHTML = "Le prénom doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");       
    }

/*** Traitement pour la date ***/

    else if (dateN == ""){
        document.getElementById("error").innerHTML = "La saisie de votre date de naissance est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }

/*** Traitement pour l'adresse ***/

    else if (adresse == ""){
        document.getElementById("error").innerHTML = "La saisie de votre adresse est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }else if(document.getElementById("adresse").value.length < 5){
        document.getElementById("error").innerHTML = "L'adresse doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");      
    }

/*** Traitement pour le mail ***/

    else if (adresse_mail == ""){
        document.getElementById("error").innerHTML = "La saisie d'une adresse mail valide est obligatoire";
        document.getElementById("error").removeAttribute("hidden");
    }else if(document.getElementById("mail").value.length < 5){
        document.getElementById("error").innerHTML = "L'adresse mail doit comporté au moins 5 caractères";
        document.getElementById("error").removeAttribute("hidden");  
    }

    /*** Traitement si tout se passe bien ***/
    else{
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
        document.getElementById("error").setAttribute("hidden","hidden");
        document.getElementById("resultat").removeAttribute("hidden");
    }
}