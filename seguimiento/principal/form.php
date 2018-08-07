<?php

        header("Location: http://127.0.0.1/formulario/ideep.html");
        //ini_set('max_execution_time', 2000);
        $dbconn = pg_connect("host=104.154.211.159 port=5432 dbname=Cucuta
        user=postgres password=gesstorB2017");
        $codigo = $_POST['codigo_catastral'];
        $recolector = $_POST['cod_recolector'];
        $supervisor = $_POST['cod_supervisor'];
        $tipo_predio = $_POST['tipo_predio'];
        $uso_predio = $_POST['uso_predio'];
        $via_acceso = $_POST['via_acceso'];
        $focos_contaminacion = $_POST['focos_contaminacion'];
        $observaciones = $_POST['observaciones'];
        $latitud = $_POST['latitud'];
        $longitud = $_POST['longitud'];
        date_default_timezone_set('America/Bogota');
        $fecha = date("d/M/Y H:i:s");
        $estado = "CAPTURADO";

                
        $query = "UPDATE seleccion_predios set recoletor = '$recolector', supervisor = '$supervisor', tipo_predio = '$tipo_predio', uso_predio =  '$uso_predio', via_acceso = '$via_acceso', focos_contaminacion = '$focos_contaminacion', observaciones = '$observaciones', latitud='$latitud', longitud='$longitud', fecha='$fecha', estado='$estado' where codigo = '$codigo'";
        //echo "<br>".$query;
        $result = pg_query($dbconn, $query) or die('error1<br>'.pg_last_error());
        $row = pg_affected_rows($result);

        $carpeta = "fotos/" .$codigo;
        if (!file_exists($carpeta)) {
            mkdir($carpeta, 0777, true);
        }


        $dir = 'fotos/';
	    $ruta = $dir.$codigo.'/';


       
        $target_path = "fotos/" .$codigo;
        $target_path = $target_path . basename( $_FILES['foto1']['name'] ); 
        if(move_uploaded_file($_FILES['foto1']['tmp_name'], $ruta .$codigo .'_1.jpg')) { echo "El archivo ". basename( $_FILES['foto1']['name']). " ha sido subido";
        } else{
        echo "Ha ocurrido un error, trate de nuevo!";
        }
        


        $target_path2 = "fotos/";
        $target_path2 = $target_path2 . basename( $_FILES['foto2']['name'] ); 
        if(move_uploaded_file($_FILES['foto2']['tmp_name'], $ruta .$codigo .'_2.jpg')) { echo "El archivo ". basename( $_FILES['foto2']['name']). " ha sido subido";
        } else{
        echo "Ha ocurrido un error, trate de nuevo!";
        }

        $target_path3 = "fotos/";
        $target_path3 = $target_path3 . basename( $_FILES['foto3']['name'] ); 
        if(move_uploaded_file($_FILES['foto3']['tmp_name'], $ruta .$codigo .'_3.jpg')) { echo "El archivo ". basename( $_FILES['foto3']['name']). " ha sido subido";
        } else{
        echo "Ha ocurrido un error, trate de nuevo!";
        }

        $target_path4 = "fotos/";
        $target_path4 = $target_path4 . basename( $_FILES['foto4']['name'] ); 
        if(move_uploaded_file($_FILES['foto4']['tmp_name'], $ruta .$codigo .'_4.jpg')) { echo "El archivo ". basename( $_FILES['foto4']['name']). " ha sido subido";
        } else{
        echo "Ha ocurrido un error, trate de nuevo!";
        }

        $target_path5 = "fotos/";
        $target_path5 = $target_path5 . basename( $_FILES['foto5']['name'] ); 
        if(move_uploaded_file($_FILES['foto5']['tmp_name'], $ruta .$codigo .'_5.jpg')) { echo "El archivo ". basename( $_FILES['foto5']['name']). " ha sido subido";
        } else{
        echo "Ha ocurrido un error, trate de nuevo!";
        }
       


        //echo $row."<br>";

?>



