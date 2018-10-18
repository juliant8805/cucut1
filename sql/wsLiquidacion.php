<?php
$ref = $_POST['ref'];//referencia catastral enviada
//$ref = '010401680003000';
//$ref = '010814550011000';
$servicio = "http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros = array(); //parametros de la llamada
$parametros['codigoPredial'] = $ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->liquidacionPredio($parametros); //llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice = $result['liquidacionPredioResult'];
$servicio = $wservice;

if (count($servicio) > 0) {
    $Factura = $servicio['Factura'];
    $ultimaF = count($Factura);
    if ($ultimaF == 60) {
        echo "%%" . $Factura['factura'];
        echo "%%" . $Factura['fecven'];
        echo "%%" . $Factura['pagar1'];
        echo "%%" . $Factura['tarifa'];
        echo "%%" . $Factura['vigactual'];
    } else {
        echo "%%" . $Factura[$ultimaF - 1]['factura'];
        echo "%%" . $Factura[$ultimaF - 1]['fecven'];
        echo "%%" . $Factura[$ultimaF - 1]['pagar1'];
        echo "%%" . $Factura[$ultimaF - 1]['tarifa'];
        echo "%%" . $Factura[$ultimaF - 1]['vigactual'];
    }
}

function obj2array($obj) {
    $out = array();
    foreach ($obj as $key => $val) {
        switch (true) {
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