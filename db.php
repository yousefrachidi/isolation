<?php

$nom = $_REQUEST['nom'];
$prenom = $_REQUEST['prenom'];
$sutiation = $_REQUEST['sutiation'];
$mode_chauf = $_REQUEST['mode_chauf'];
$comble= $_REQUEST['comble'];
$sous= $_REQUEST['sous'];
$garage= $_REQUEST['garage'];
$surfac_c= $_REQUEST['surfac_c'];
$surfac_s= $_REQUEST['surfac_s'];
$surfac_g = $_REQUEST['surfac_g'];
$email = $_REQUEST['email'];
$codep = $_REQUEST['codep'];
$commune= $_REQUEST['commune'];
$adress= $_REQUEST['adress'];
$tel= $_REQUEST['tel'];
$revenu= $_REQUEST['revenu'];
$nombre_pr= $_REQUEST['nombre_pr'];

        $conx=mysqli_connect('localhost','root','','iso')or die("erreur de connexion");
      
       
      $s="insert into info_1( nom ,   prenom  , sutiation    ,  mode_chauf     ,  comble   ,    sous   , garage  ,  surfac_c ,    surfac_s , surfac_g,  email ,codep ,  commune,  adress,  tel  ,  nombre_pr ,  revenu ) 
      values('$nom','$prenom','$sutiation','$mode_chauf','$comble','$sous','$garage','$surfac_c','$surfac_s','$surfac_g', '$email','$codep','$commune','$adress','$tel','$nombre_pr','$revenu')";
      
       $test= mysqli_query($conx, $s); 
       
        if($test ==false)
        {
                print'false'. $s ;
        }
        else print 'true';

        mysqli_close($conx);
//    nom ,   prenom  , sutiation    ,  mode_chauf     ,  comble   ,    sous   , garage  ,  surfac_c ,    surfac_s , surfac_g,  email ,codep ,  commune,  adress,  tel  ,  nombre_pr ,  revenu 
 
       
?>