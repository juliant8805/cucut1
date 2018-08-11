<?php
//$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010302640018001';
$ref = '010200190023000';
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->acuerdoPagoPredio($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['acuerdoPagoPredioResult'];
$servicio=$wservice;

if (count($servicio)>0) {
    $Acuerdo = $servicio['Financia'];
    $ultimoA = count($Acuerdo);
    echo $ultimoA;
print_r(array_values($Acuerdo));    
    /*if ($ultimoA == 40) {
		echo "%%".$Abonos['recibo'];
		echo "%%".$Abonos['p_inicial'];
		echo "%%".$Abonos['p_final'];
		echo "%%".$Abonos['totalabono'];
        echo "%%".$Abonos['fecpago'];
        echo "%%".$Abonos['banco'];
    }
    else  {
        for ($i = 0; $i < $ultimoA; $i++ ) {
            echo "%%".$Abonos[$i]['recibo'];
            echo "%%".$Abonos[$i]['p_inicial'];
            echo "%%".$Abonos[$i]['p_final'];
            echo "%%".$Abonos[$i]['totalabono'];
            echo "%%".$Abonos[$i]['fecpago'];  
            echo "%%".$Abonos[$i]['banco'];
        }
    }*/
}
        
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