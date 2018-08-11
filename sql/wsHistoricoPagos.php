<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010401680003000';
//$ref = '011000670013000';
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->pagosFacturasPredio($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['pagosFacturasPredioResult'];
$servicio=$wservice;

if (count($servicio)>0) {
    $Pagos= $servicio['Factura'];
    $ultimoP = count($Pagos);
    
    if ($ultimoP == 59) {
        $contador = 1;
        echo "%%".$contador;        
		echo "%%".$Pagos['factura'];
		echo "%%".$Pagos['periodo_i'];
		echo "%%".$Pagos['periodo_f'];
		echo "%%".$Pagos['valor'];
        echo "%%".$Pagos['fecpago'];
        echo "%%".$Pagos['nbanco'];
    }
    else  {
        echo "%%".$ultimoP;
        for ($i = 0; $i < $ultimoP; $i++ ) {
            echo "%%".$Pagos[$i]['factura'];
            echo "%%".$Pagos[$i]['periodo_i'];
            echo "%%".$Pagos[$i]['periodo_f'];
            echo "%%".$Pagos[$i]['valor'];
            echo "%%".$Pagos[$i]['fecpago'];  
            echo "%%".$Pagos[$i]['nbanco'];
        }
    }
}

if (count($servicio)==0) {
    $contador = 1;
    echo "%%".$contador;
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