$(document).ready(function(){
    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $date = $('#date'),
        $adresse = $('#adresse'),
        $email = $('#email'),
        $reset = $('#myModal'),
        $champ = $('.form-control');


        
        $nom.keyup(function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                color : 'red'
                });
                $("#nom-alert").text(" < 5 !");
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });       
                $("#nom-alert").text("OK");     
            }
        });

        $prenom.keyup(function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                color : 'red'
                });
                $("#nom-alert2").text("<5!");                    
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });     
                $("#nom-alert2").text("OK");                    
            }
        });

        $adresse.keyup(function(){
            validerdate();
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                color : 'red'
                });
                $("#nom-alert4").text("<5!");                    
            }
            else{
                 $(this).css({ // si tout est bon, on le rend vert
                 borderColor : 'green',
                 color : 'green'
                });         
                $("#nom-alert4").text("OK");                    
            }
        });

        $email.keyup(function(){
            if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                $(this).css({ // on rend le champ rouge
                    borderColor : 'red',
                color : 'red'
                });
                $("#nom-alert5").text("<5!");               
            }
            else{
                verifmail();              
            }
        });

        $('#bouton').click(function(e){
            e.preventDefault();
            if ($nom.val() == "" && $prenom.val() == "" && $adresse.val() == "" && $email.val() == "" && $date.val() == ""){
                mypopup();
            }

            if ($nom.val() != "" && $prenom.val() != "" && $adresse.val() != "" && $email.val() != "" && $date.val() != ""){
                
                      var mymodal = $('#myModal');
                      setTimeout(myMap, 1000);
                      document.getElementById("map").removeAttribute("hidden");
                      mymodal.find('.modal-title').text('Bienvenue ' + $('#nom').val() + ' !');
                      mymodal.find('.modal-body').html('Vous êtes né le ' + $('#date').val())
                      mymodal.modal('show');        
            }
        });
});

function mypopup(){
    txt = 'Veuillez remplir tous les champs svp.';
    var mymodal = $('#myModal');
    mymodal.find('.modal-body').text(txt);
    mymodal.modal('show');
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.508742,-0.120850),
        zoom: 9,         
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function verifmail(){
    var m = document.getElementById("email").value;
    var re = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;    
    if(!re.test(m)){
        $('#email').css({ // on rend le champ rouge
            borderColor : 'red',
            color : 'red'
        });
        $("#nom-alert5").text("mail invalide");  
    }
    else{
        $('#email').css({ // si tout est bon, on le rend vert
        borderColor : 'green',
        color : 'green'
       });  
       $("#nom-alert5").text("OK");                    
   }
}

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