$(document).ready(function(){
    var $nom = $('#nom'),
        $prenom = $('#prenom'),
        $date = $('#date'),
        $adresse = $('#adresse'),
        $email = $('#email');


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
                
                var $url_adr = "https://maps.google.com/?q=" +  $('#adresse').val(); // variables pour mettre les liens dans le tableau
                var $lien_mail = "mailto:" + $('#email').val();

                /*** STOCKAGE DES INPUTS DANS LA LISTE JSON***/
                contactStore.add($nom.val(), $prenom.val(), $date.val(), $adresse.val(), $email.val());
                var list = contactStore.getList();

                /*** ON PARCOURT LE TABLEAU EST ON MET LES VALEURS DES CHAMPS DANS LE TABLEAU HTML***/
                for(var index in list){
                    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                    '<tr><td>'+list[index].name+'</td><td>'+list[index].firstname+'</td><td>' +list[index].date+'</td><td><a id="lien_adr" href="#">' +list[index].adress+'</td><td><a id="lien_mail" href="#">'+list[index].mail+'</td></tr>';
                }

                document.getElementById("titre").removeAttribute("hidden");
                document.getElementById("table").removeAttribute("hidden");

                
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