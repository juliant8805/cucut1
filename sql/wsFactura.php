<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010600570030000';
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);
//ini_set('max_execution_time', 200);
//for($i=50000; $i>1; $i--){
$result = $client->factura($parametros);//llamamos al métdo que nos interesa con los parámetros
//print_r(array_values($result));
//$result2 = $result;  
$result = obj2array($result);
$wservice=$result['facturaResult'];
//print_r($wservice);
//$n=count($wservice);
    $servicio=$wservice;

/*header('Content-type: application/pdf');
header('Content-Length: $length');
header('Content-Disposition: attachment; filename="factura.pdf"');*/

$fichero = $_SERVER["DOCUMENT_ROOT"].'/facturas/'.$ref.'factura.pdf';
//$fichero = "/facturas/factura.pdf";
file_put_contents($fichero, $servicio);

header("Content-Disposition: attachment; filename=" . urlencode ('factura.pdf'));
header("Content-type: application/octet-stream");
header("Content-type: application/download");
header("Content-Description: File Transfer");
header("Content-Length: " . filesize($servicio));
//header("Location: http://www.ideepcucuta.com/facturas/factura.pdf");
exit($servicio);



//echo $servicio;
//exit;



//Método Datos básicos
/*
    $areatet=       $servicio['areatet'];
    $avaluo=        $servicio['avaluo'];
    $clasepredio=   $servicio['clasepredio'];
    $clasezona=     $servicio['clasezona'];
    $codigo=        $servicio['codigo'];
    $dir=           $servicio['dir'];
    $nombre=        $servicio['nombre'];
    $nombre_tipo_predio=    $servicio['nombre_tipo_predio'];
    $predialestrato=        $servicio['predialestrato'];

    echo $codigo;
    echo "%%".$areatet;
    echo "%%".$avaluo;
    echo "%%".$clasepredio['descripcion'];
    echo "%%".$clasezona['nombre'];
    echo "%%".$codigo;
    echo "%%".$dir;
    echo "%%".$nombre;
    echo "%%".$nombre_tipo_predio['nombre'];
    echo "%%".$predialestrato['nombre'];*/
 
function obj2array($obj) {
  $out = array();
  foreach ($obj as $key => $val) {
    switch(true) {
        case is_object($val):
         $out[$key] = obj2array($val);
         break;
      case is_array($val):
         $out[$key] = obj2array($val);
         break;
      default:
        $out[$key] = $val;
    }   
  }
  return $out; 
}
?>