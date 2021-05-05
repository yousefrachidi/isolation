
//close form
function close(){
  $('.navbar').show();
  $('#part_1').show();
   $('#part_2').hide();
   $('#part_3').hide();
   $('#part_4').hide();
   $('#part_5').hide();
   $('.img_3').css({'border':'1px solid black'});
   $('#span_er').text('');
   $('#progres_').css({"width":"20%"});
   $('.btn-block').attr("disabled", false); 
}

      
 $(function(){
 
   //open form
   $('.insc').click(function(){
    $('.navbar').hide();
  });

$('.uk-modal-close-full').click(function(){
  close();

});
    
     //message succe
     function succe(){
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
}

    //messege dialog
    $("body").delay(4000).show(function(){
      myfonction();
      });
      
        function myfonction(){
          var data = sessionStorage.getItem('swalcount');

          if(data!=2)
          {
            Swal.fire({
                title: 'DEMANDEZ UN DEVIS GRATUITEMENT',
                confirmButtonText:'<a  style="color:white" onclick="$(\'.navbar\').hide();"  href="#modal-full" uk-toggle>Tester votre éligibilité!</a>' ,
                timer: 9200
              })
          
            sessionStorage.setItem('swalcount', 3);
          }
        } 

    //variable   
        var   nom ;
        var   prenom ;
        var   sutiation ; //
        var   mode_chauf ; //
        var   comble="null" ; //
        var   sous ="null" ; //
        var   garage ="null" ; //
        var   surfac_c="null"; //
        var   surfac_s="null"; //
        var   surfac_g="null"; //
        var   email ;
        var   codep ; //
        var   commune ; //
        var   adress ; //
        var   tel ;
        var   nombre_pr ="";
        var   revenu ="";
        

            $('#progres_').css({'width':"20%"});

           
          
            $('.img_1').click(function(){
                $('#part_1').hide();
                $('#part_2').show(1000);
                var str = $(this).attr('src');
                var fileName = str.split("/").pop();
                sutiation = fileName.replace('.png','');
                idr=2;
                $('#progres_').css({'width':"40%"});

            });

            $('.img_2').click(function(){
           
                $('#part_2').hide();
                $('#part_3').show(1000);
                idr=3;
                var str = $(this).attr('src');
                var fileName = str.split("/").pop();
                mode_chauf = fileName.replace('.png','');
           
                $('#progres_').css({'width':"60%"});
            });


            $('.img_3').click(function(){
             
              $(this).toggleClass('select_image');
              $('.btn-block').attr("disabled", false);
           
             });

            $('.img_3').dblclick(function(){
            
                var index=document.getElementsByClassName('img_3');
              
                    if(index[0].classList.contains('select_image')==true)
                    {
                     comble="Comble";
                     
                    }
                  if(index[1].classList.contains('select_image')==true)
                    {
                       sous="Sous_sol";
                      
                    }
                 if(index[2].classList.contains('select_image')==true)
                    {
                        garage="Garage";
                     
                    }
                  
                $('.code').focus();
                $('#part_3').hide();
                $('#part_4').show();
                idr=4;
                $('#progres_').css({'width':"80%"});

             });
             //select
            
           
         
           $('#sel_c').change(function(){
            surfac_c  = $(this).children("option:selected").text();
           });
           
           $('#sel_s').change(function(){
            surfac_s  =  $(this).children("option:selected").text();
            });

            $('#sel_g').change(function(){
                surfac_g  =  $(this).children("option:selected").text();
            });

           //btn
           
          $('.btn1').click(function(){
                $('.code').focus();
                $('#part_3').hide();
                $('#part_4').show();
                idr=4;
                var index=document.getElementsByClassName('img_3');
              if(index[0].classList.contains('select_image')==true)
              {
               comble="Comble";
              }
            if(index[1].classList.contains('select_image')==true)
              {
                 sous="Sous_sol";
              }
           if(index[2].classList.contains('select_image')==true)
              {
                  garage="Garage";
              }
            
              $('#progres_').css({'width':"80%"});
           });

          $('.btn2').click(function(){
            var pattern=new RegExp("^[0-9]{5}$");
               var inp1=document.getElementsByName('Code');
               if(pattern.test(inp1[0].value)== false)
               {
                $('#span_er').text("Le champ code postal n'est pas au bon format (5 chiffres) .").css({'color':'red'});
               }
               else if(inp1[1].value!='' && inp1[2].value!=''){
                            $('#span_er').text('');
                            $('#part_4').hide();
                            $('#part_5').show();
                              idr=4;
                              codep=inp1[0].value;
                              commune= inp1[1].value;
                              adress= inp1[2].value;  
                            
               }
               else {
                   $('#span_er').text("Saisir tous les champes !!").css({'color':'red'});
               }
             
               $('#progres_').css({'width':"90%"});
               

           });

         // nombre reveune
         $('#nb_revenu li a').click(function()
           {
                 nombre_pr =  $(this).text();
            });
         $('#pr_revenu').on('click','li',function ()
            { 
                revenu = $(this).text();
               
            });

         $('.btn3').click(function(e){
      
         
                nom=document.getElementsByName('nom');
                prenom=document.getElementsByName('prenom');
                email=document.getElementsByName('email');
                tel=document.getElementsByName('tel');
    
                if(revenu !="" && nombre_pr != "")
                {

               $.ajax({
                    url:"db.php",
                    type:"post",
                  data:    'nom='+nom[0].value+ '&prenom='+prenom[0].value+'&sutiation='+sutiation+'&mode_chauf=' +mode_chauf+  '&comble=' +comble+ '&sous=' +sous+
                         '&garage=' +garage+ '&surfac_c=' + surfac_c+ '&surfac_s=' +surfac_s + '&surfac_g=' +surfac_g+ '&email=' +email[0].value+ '&codep='+codep+
                          '&commune=' +commune+  "&adress=" +adress+  '&tel='+ tel[0].value + '&nombre_pr=' +nombre_pr+ '&revenu='+revenu,
                    done:function(data){
                       for(var i in data)
                       {
                        $('body').text(data[i]);
                           
                       }
                        },
                    fail:function(hrx,status,data)
                    {
                        $('body').html("Erreur :"+hrx.status).css({'color':"red"});
                    }
                  
                    });
                    
                      succe(); 
                      sessionStorage.setItem('swalcount', 2);
                    
                }
                else 
                {
                     e.preventDefault();
                    $('#span2').text('Selectione le Nombre de personnes ou le Revenu ?? ').css({'color':'red'});
                }
       
              
              
           });

       
            //revenu
            $('#nb_revenu li a').click(function(event){
               
                var text; 
               
                if( $(this).text()==1)
                   {
                       text= "<li > <a class='dropdown-item' href='#'>Moin 18960 €  </a> </li> <li> <a class='dropdown-item' href='#'> Plus 18960 € </a></li>";
                   
                   }
                  
                  else if( $(this).text()==2)
                   {
                       var text= "<li ><a class='dropdown-item' href='#'>Moin 27729 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 27729 € </a></li>";
                      
                     
                   }
                
                   else  if( $(this).text()==3)
                   {
                        text= "<li ><a class='dropdown-item' href='#'>Moin 33346 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 33346 € </a></li>";

                   } 
                   
                   else  if( $(this).text()==4)
                   {
                       text= "<li ><a class='dropdown-item' href='#'>Moin 38958 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 38958 € </a></li>";

                   }
                   else  if( $(this).text()==5) {
                    text= "<li ><a class='dropdown-item' href='#'>Moin 44592 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 44592 € </a></li>";

                   }
                   else  if( $(this).text()==6) {
                     text= "<li ><a class='dropdown-item' href='#'>Moin 50209 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 50209 € </a></li>";

                   }
                   else  if( $(this).text()==7) {
                    text= "<li ><a class='dropdown-item' href='#'>Moin 55826 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 55826 € </a></li>";

                   }
                   else  if( $(this).text()==8) {
                     text= "<li ><a class='dropdown-item' href='#'>Moin 61443 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 61443 € </a></li>";

                   }
                   else  if( $(this).text()==9) {
                    text= "<li ><a class='dropdown-item' href='#'>Moin 67060 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 67060 € </a></li>";
                   }
                   else  if( $(this).text()==10) {
                    text= "<li ><a class='dropdown-item' href='#'>Moin 72677 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 72677 € </a></li>";
                   }
                   else  if( $(this).text()==11) {
                     text= "<li ><a class='dropdown-item' href='#'>Moin 78294 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 78294 € </a></li>";
                   }
                   else  if( $(this).text()==12) {
                    text= "<li ><a class='dropdown-item' href='#'>Moin 83911 €  </a></li> <li><a class='dropdown-item' href='#'> Plus 83911 € </a></li>";
                   }
                  $('#pr_revenu').html(text);
               // document.getElementById('pr_revenu').innerHTML=text;
            });

            /* Retour */
           
          $('#retour_2').click(function(){
            $('#part_1').show();
            $('#part_2').hide();
            $('#progres_').css({"width":"20%"});
           });
           $('#retour_3').click(function(){
            $('#part_2').show();
            $('#part_3').hide();
            $('#progres_').css({"width":"40%"});
           });
           $('#retour_4').click(function(){
            $('#part_3').show();
            $('#part_4').hide();
            $('#progres_').css({"width":"60%"});
           });
           $('#retour_5').click(function(){
            $('#part_4').show();
            $('#part_5').hide();
            $('#progres_').css({"width":"80%"});
           });
         
          });
   
           
              
  