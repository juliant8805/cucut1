<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010401680003000';
//$ref = '010701950019000';
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->estadoCuentaPredio($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['estadoCuentaPredioResult'];
$servicio=$wservice;

if (count($servicio)>0) {
    $Liquidacion= $servicio['Liquidacion'];
    $ultimoE = count($Liquidacion);
    $vigencia = 0;
    $predial = 0;
    $interesP = 0;
    $dctoP = 0;
    $valorizacion = 0;
    $interesV = 0; 
    $dctoV = 0;
    $corpo = 0;
    $interesC = 0;   
    $dctoC = 0;
    $descuento = 0;
    $valorImp = 0;
    $interes = 0;
    for ($i = 0; $i <= $ultimoE-1; $i++) {
        if ($Liquidacion[$i]['concepto']=='00') {             
            $predial = $predial + (int) $Liquidacion[$i]['valor'];
            $interesP = $interesP + (int) $Liquidacion[$i]['interes'];
            $dctoP = $dctoP + (int) $Liquidacion[$i]['dscto_inter'];
            $vigencia = $vigencia + 1;
        }
        if ($Liquidacion[$i]['concepto']=='04') {                 
            $valorizacion = $valorizacion + (int) $Liquidacion[$i]['valor'];
            $interesV = $interesV + (int) $Liquidacion[$i]['interes'];
            $dctoV = $dctoV + (int) $Liquidacion[$i]['dscto_inter'];
        }
        if ($Liquidacion[$i]['concepto']=='05') {                 
            $valorizacion = $valorizacion + (int) $Liquidacion[$i]['valor'];
            $interesV = $interesV + (int) $Liquidacion[$i]['interes'];
            $dctoV = $dctoV + (int) $Liquidacion[$i]['dscto_inter'];
        }        
        if ($Liquidacion[$i]['concepto']=='02') {                 
            $corpo = $corpo + (int) $Liquidacion[$i]['valor'];
            $interesC = $interesC + (int) $Liquidacion[$i]['interes'];
            $dctoC = $dctoC + (int) $Liquidacion[$i]['dscto_inter'];
        }        
    }
        for ($i = 0; $i <= $ultimoE-1; $i++) {
            $descuento = $descuento + (int) $Liquidacion[$i]['dscto_inter'];
            $valorImp = $valorImp + (int) $Liquidacion[$i]['valor'];
            $interes = $interes + (int) $Liquidacion[$i]['interes'];
        }    
    echo "%%".$predial;
    echo "%%".$interesP;
    echo "%%".$dctoP;
    echo "%%".((int) $interesP + (int) $predial - (int) $dctoP);
    echo "%%".$valorizacion;
    echo "%%".$interesV;
    echo "%%".$dctoV;
    echo "%%".((int) $interesV + (int) $valorizacion - (int) $dctoV);
    echo "%%".$corpo;
    echo "%%".$interesC;   
    echo "%%".$dctoC;
    echo "%%".((int) $interesC + (int) $corpo - (int) $dctoC);
    echo "%%".$valorImp;
    echo "%%".$interes;
    echo "%%".$descuento;
    echo "%%".((int) $valorImp + (int) $interes - (int) $descuento + 2600);
    echo "%%".((int) $Liquidacion[$ultimoE-1]['vigencia'] - $vigencia + 1);
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