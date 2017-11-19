$(document).ready(function(){
    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $date = $('#date'),
        $adresse = $('#adresse'),
        $email = $('#email'),
        $reset = $('#myModal');


        $nom.keyup(function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
                $("#nom-alert").text($nom.val().length + ' car. <5!');
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });       
                $("#nom-alert").text($nom.val().length + ' car. OK');     /*ok dans le texte*/
            }
        });

        $prenom.keyup(function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
                $("#nom-alert2").text($prenom.val().length + ' car. <5!');                    
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });     
                $("#nom-alert2").text($prenom.val().length + ' car. OK');                    
            }
        });

        $adresse.keyup(function(){
            validerdate();
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
                $("#nom-alert4").text($adresse.val().length + ' car. <5!');                    
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });         
                $("#nom-alert4").text($adresse.val().length + ' car. OK');                    
            }
        });

        $email.keyup(function(){
            var m = document.getElementById("email").value;
            var re = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
                $("#nom-alert5").text($email.val().length + ' car. <5!');               
            }
            if(!re.test(m)){
                $('#email').css({ // on rend le champ rouge
                    borderColor : 'red',
                    color : 'red'
                });
                $("#nom-alert5").text($email.val().length + ' car. Mail invalide');  
            }
            else{
                $('#email').css({ // si tout est bon, on le rend vert
                borderColor : 'green',
                color : 'green'
               });  
               $("#nom-alert5").text($email.val().length + ' car. OK');                    
           }
        });

        $('#bouton').click(function(e){
            e.preventDefault();
            if ($nom.val() == "" && $prenom.val() == "" && $adresse.val() == "" && $email.val() == "" && $date.val() == ""){
                mypopup();
            }

            if ($nom.val() != "" && $prenom.val() != "" && $adresse.val() != "" && $email.val() != "" && $date.val() != ""){
                
                localStorage.setItem("lastname", $nom.val());
                localStorage.setItem("name", $prenom.val());
                localStorage.setItem("birthdate", $date.val());
                localStorage.setItem("adresse", $adresse.val());
                localStorage.setItem("email", $email.val());
                document.getElementById("resultat").removeAttribute("hidden");
                $("#resultat").html("Bravo! Le formulaire est sauvegardé.");
            
                var nom = localStorage.getItem("lastname");
                var prenom = localStorage.getItem("name");
                var date = localStorage.getItem("birthdate");
                var adresse = localStorage.getItem("adresse");
                var mail = localStorage.getItem("email");
                var $url_adr = "https://maps.google.com/?q=" +  $('#adresse').val(); 
                var $lien_mail = "mailto:" + $('#email').val();
            
                document.getElementById("titre").removeAttribute("hidden");
                document.getElementById("table").removeAttribute("hidden");

                document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                '<tr><td>'+nom+'</td><td>'+prenom+'</td><td>' +date+'</td><td><a id="lien_adr" href="#">' +adresse+'</td><td><a id="lien_mail" href="#">'+mail+'</td></tr>';
                
                $('a#lien_adr').attr('href', $url_adr);
                $('a#lien_mail').attr('href', $lien_mail);
            }
        });
});

function mypopup(){
    txt = 'Veuillez remplir tous les champs svp.';
    var mymodal = $('#myModal');
    mymodal.find('.modal-body').text(txt);
    mymodal.modal('show');
}

/*function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom: 9,         
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}*/

function validerdate(){
    var dateN = document.getElementById("date").value;

    if (dateN == ""){
        $('#date').css({ // on rend le champ rouge
            borderColor : 'red',
            color : 'red'
        });
        $("#nom-alert3").text("La date !");    
    }    
    else{
        $('#date').css({ // si tout est bon, on le rend vert
        borderColor : 'green',
        color : 'green'
       });  
       $("#nom-alert3").text("OK");                    
   }
}