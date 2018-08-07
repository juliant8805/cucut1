<?php

header('Content-Type: text/xml');
header("Cache-Control: no-store, no-cache, must-revalidate");

$host = "104.154.211.159";
$port = "5432";
$data = "Cucuta";
$user = "postgres"; //usuario de postgres
$pass = "gesstorB2017"; //password de usuario de postgres

if (isset($_GET['c']) and isset($_GET['p'])) {
    $command = $_GET['c'];
    $params = $_GET['p'];
    if (isset($_GET['db'])) {
        $db = $_GET['db'];
    }
    $resp = processcommand($command, $params);
    //echo "rsp".$resp."</br>";
} else {
    $resp = createResponse(0, "ERROR", "Parametros HTTPGET incorrectos");
}
echo $resp;
return $resp;

function processCommand($command, $params) {

    // processCommand
    // procesa un comando válido recibido en la llamada a la página. 
    // Es llamado desde el flujo principal
    // Distribuye el trabajo a la rutina correspondiente y
    // devuelve una respuesta en formato xml
    // Declarar la respuesta
    $respxml = null;
    //echo strcmp("selectQuery", $command)."</br>";
    // Derivar a la rutina adecuada
    if (strcmp("updateQuery", $command) == 0) {
        //echo $params."</br>";
        $respxml = updateQuery($params);
    } else if (strcmp("selectQuery", $command) == 0) {
        //echo $params."</br>";
        $respxml = selectQuery($params);
        //echo $respxml."</br>";
    } else if (strcmp("getColNames", $command) == 0) {
        $respxml = getColNames($params);
    } else {
        $respxml = createResponse(0, "ERROR", "El comando no existe");
    }
    return $respxml;
}

function updateQuery($query) {
// Ejecuta un comando tipo UPDATE, INSERT, DELETE,... en la base de datos
// $query = String con el comando	
// devuelve: xmlresponse con el resultado
    GLOBAL $host, $port, $data, $user, $pass, $db;
    // Abrir la conexión con mysql
    //echo "update"."</br>";
    $conn = "host=" . $host . " port=" . $port . " dbname= " . $data . " user=" . $user . " password=" . $pass;
    $dbconn = pg_connect($conn) or die;
    if (!$dbconn) {
        return createResponse(-2, "ERROR", "Error de conexión.-$dbconn");
    }
    // Realizar la consulta a la B.D.
    $result = pg_query($dbconn, $query);
    $ar = pg_affected_rows($result);
    $cod = 0;
    $text = "ERROR";
    $desc = "-1";

    if ($result == true) {
        $cod = 0;
        $text = "OK";
        $desc = $ar;
    }
    $response = createResponse($cod, $text, $desc);
    // Cerrar la conexión
    pg_close($dbconn);
    // Devolver el resultado
    return $response;
}

function selectQuery($query) {
// Ejecuta un comando tipo SELECT en la base de datos
// query = String con el comando	
// devuelve: xmlresponse con el resultado
    GLOBAL $host, $port, $data, $user, $pass, $db;
    //echo "select"."</br>";
    $conn = "host=" . $host . " port=" . $port . " dbname= " . $data . " user=" . $user . " password=" . $pass;
    //echo "conn".$conn."</br>";
    $dbconn = pg_connect($conn) or die;
    //echo "dbconn= ".$dbconn."</br>";
    // Realizar la consulta a la B.D.
    $result = pg_query($dbconn, $query);
    //echo "query = ".$query."</br>";
    //echo "result= ".$result."</br>";
    $nc = pg_affected_rows($result);
    $nf = pg_num_fields($result);

    $cad = "";
    for ($i = 0; $i < $nc; $i++) {
        $cad .= "<item>";
        for ($j = 0; $j < $nf; $j++) {
            $cad .= pg_fetch_result($result, $i, $j);
            if ($j < $nf - 1) {
                $cad .= ",";
            }
        }
        $cad .= "</item>";
    }
 
    $response = createResponse(1, "OK", $cad);
    // Cerrar la conexión
    pg_close($dbconn);
    // Devolver el resultado
    return $response;
}

function createResponse($code, $text, $content) {
    // createResponse($code, $descrip, $content)
    // 		Genera un documento XML del tipo <regataResponse>.
    // 		(Ver su constitución en la documentación del programa)
    // Parámetros:
    //
	// Devuelve:
    //
	$doc = new DOMDocument('1.0');
    $cadxml = "<wsResponse>";
    $cadxml = $cadxml . "<statusCode>$code</statusCode>";
    $cadxml = $cadxml . "<statusText>$text</statusText>";
    $cadxml = $cadxml . "<content>$content</content>";
    $cadxml = $cadxml . "</wsResponse>";
    $doc->loadXML($cadxml);
    return $doc->saveXML();
}

?>