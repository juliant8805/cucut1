<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010401680003000';
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);

//ini_set('max_execution_time', 200);
//for($i=50000; $i>1; $i--){
$result = $client->datosBasicos($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['datosBasicosResult'];
//print_r($wservice);
//$n=count($wservice);
    $servicio=$wservice;
    $codigo=$servicio['codigo'];
    $avaluo=$servicio['avaluo'];
    $aldia=$servicio['aldia'];
    $areacon=$servicio['areacon'];
    $areatet=$servicio['areatet'];
    $cedula=$servicio['cedula'];


    echo $codigo;
    echo "%%".$avaluo;
    echo "%%".$aldia;
    echo "%%".$areacon;
    echo "%%".$areatet;
    echo "%%".$cedula;
//}
    
        
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





