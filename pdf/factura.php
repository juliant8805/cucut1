<?php
require('html_table.php');
$ref = $_GET['ref'];
$estadoC = $_GET['estado'];
$ac = $_GET['ac'];
$ultimo = $_GET['ultimo'];
$liq = $_GET['liq'];
$servicio="http://201.245.170.148:8585/predial/wsPredial.svc?wsdl"; //url del servicio
$parametros=array(); //parametros de la llamada
$parametros['codigoPredial']=$ref;
$client = new SoapClient($servicio, $parametros);
$result = $client->datosBasicos($parametros);//llamamos al métdo que nos interesa con los parámetros
$result = obj2array($result);
$wservice=$result['datosBasicosResult'];
$servicio=$wservice;

$estadoCuenta = explode(",", $estadoC);
$liqu = explode(",", $liq);

//print_r(array_values($liqu));
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

$datosBasicos = array($ref, $servicio['areatet'], $servicio['avaluo'], $servicio['clasepredio'], $servicio['clasezona'], $servicio['codigo'], $servicio['dir'], $servicio['nombre'], $servicio['nombre_tipo_predio'], $servicio['estrato']);
$liquidacion = array($liqu[0], $liqu[1], $liqu[2], $liqu[3], $liqu[4], $liqu[5], $liqu[6]);

$pdf=new PDF();
$pdf->AddPage();
$pdf->SetFont('Arial','',12);
    
$html10='<table border="1">
<tr>
<td width="720" bgcolor="#D0D0FF">INFORMACION DEL CONTRIBUYENTE</td>
</tr>
</table>';

$html11='<table border="1">
<tr>
<td width="720" bgcolor="#D0D0FF">ESTADO DE CUENTA DETALLADO</td>
</tr>
</table>';

$html12='<table border="1">
<tr>
<td width="720" bgcolor="#D0D0FF">LIQUIDACION PREDIO</td>
</tr>
</table>';

$html='<table border="1">
<tr>
<td width="100" bgcolor="#D0D0FF">Codigo Predial: </td><td width="260">'.$datosBasicos[0].'</td>
<td width="100" bgcolor="#D0D0FF">Ultimo Pago:</td><td width="260">$'.number_format((int)$ultimo,"0",",",".").'</td>
</tr>
<tr>
<td width="100" bgcolor="#D0D0FF">Propietario: </td><td width="260">'.$datosBasicos[7].'</td>
<td width="100" bgcolor="#D0D0FF">Direccion:</td><td width="260">'.$datosBasicos[6].'</td>
</tr>
<tr>
<td width="100" bgcolor="#D0D0FF">Avaluo: </td><td width="260">$'.number_format($datosBasicos[2],"0",",",".").'</td>
<td width="100" bgcolor="#D0D0FF">Estrato:</td><td width="260">'.$datosBasicos[9].'</td>
</tr>
<tr>
<td width="100" bgcolor="#D0D0FF">Area terreno: </td><td width="260">'.$datosBasicos[1].' m2</td>
<td width="100" bgcolor="#D0D0FF">Area constr:</td><td width="260">'.$ac.' m2</td>
</tr>
</table>';

$html16='<table border="1">
<tr>
<td width="100" bgcolor="#D0D0FF">Codigo Predial: </td><td width="260">'.$datosBasicos[0].'</td>
<td width="100" bgcolor="#D0D0FF">Ultimo Pago:</td><td width="260">$'.number_format((int)$ultimo,"0",",",".").'</td>
</tr>
<tr>
<td width="100" bgcolor="#D0D0FF">Propietario: </td><td width="260">'.$datosBasicos[7].'</td>
<td width="100" bgcolor="#D0D0FF">Direccion:</td><td width="260">'.$datosBasicos[6].'</td>
</tr>
</table>';

$html2='<table border="1">
<tr>
<td width="60" bgcolor="#D0D0FF">Vigencia </td>
<td width="90" bgcolor="#D0D0FF">Avaluo</td>
<td width="45" bgcolor="#D0D0FF">Tarifa</td>
<td width="75" bgcolor="#D0D0FF">Predial</td>
<td width="75" bgcolor="#D0D0FF">Int Predial</td>
<td width="75" bgcolor="#D0D0FF">Corponor</td>
<td width="70" bgcolor="#D0D0FF">Int Corpo</td>
<td width="70" bgcolor="#D0D0FF">Valoriza</td>
<td width="70" bgcolor="#D0D0FF">Int Val</td>
<td width="90" bgcolor="#D0D0FF">Subtotal</td>
</tr>
</table>';
$html3='<table border="1">
<tr>
<td width="60" height="55">'.$liquidacion[6].'</td>
<td width="90" height="55">$'.number_format($datosBasicos[2],"0",",",".").'</td>
<td width="45" height="55">'.$liquidacion[5].'</td>
<td width="75" height="55">$'.number_format((int)$estadoCuenta[1],"0",",",".").'</td>
<td width="75" height="55">$'.number_format((int)$estadoCuenta[2],"0",",",".").'</td>
<td width="75" height="55">$'.number_format((int)$estadoCuenta[9],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[10],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[5],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[6],"0",",",".").'</td>
<td width="90" height="55">$'.number_format(($estadoCuenta[1] + $estadoCuenta[2] + $estadoCuenta[9] + $estadoCuenta[10] + $estadoCuenta[5] + $estadoCuenta[6]),"0",",",".").'</td>
</tr>
<tr>
<td width="195" bgcolor="#D0D0FF">Subtotales</td>
<td width="150" >'.number_format(($estadoCuenta[1] + $estadoCuenta[2]),"0",",",".").'</td>
<td width="145" >'.number_format(($estadoCuenta[9] + $estadoCuenta[10]),"0",",",".").'</td>
<td width="126" >'.number_format(($estadoCuenta[5] + $estadoCuenta[6]),"0",",",".").'</td>    
<td width="90">'.number_format(($estadoCuenta[1] + $estadoCuenta[2] + $estadoCuenta[9] + $estadoCuenta[10] + $estadoCuenta[5] + $estadoCuenta[6]),"0",",",".").'</td>
</tr>
</table>';

$html5='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Informacion del pago</td>
<td width="570" >'.strtolower($liquidacion[4]).'</td>
</tr>
</table>';

$html14='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Impuestos (+)</td>
<td width="570" >$'.number_format(($estadoCuenta[1] + $estadoCuenta[5] + $estadoCuenta[9]),"0",",",".").'</td>    
</tr>

</table>';

$html15='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Interes (+)</td>
<td width="570" >$'.number_format(($estadoCuenta[2] + $estadoCuenta[6] + $estadoCuenta[10]),"0",",",".").'</td>    
</tr>
</table>';

$html6='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Descuentos (-)</td>
<td width="570" >$'.number_format(($estadoCuenta[3] + $estadoCuenta[7] + $estadoCuenta[11]),"0",",",".").'</td>    
</tr>
</table>';

$html7='<table border="1">

<tr>
<td width="150" bgcolor="#D0D0FF">Costo Facturacion (+)</td>
<td width="570" >$2600</td>    
</tr>
</table>';

$html8='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total a Pagar</td>
<td width="570" >$'.number_format($estadoCuenta[16],"0",",",".").'</td>    
</tr>
</table>';

$html18='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Fecha de vencimiento</td>
<td width="570" >'.$liquidacion[2].'</td>    
</tr>
</table>';

$pdf->SetFont('Arial','',10);
$pdf->Cell(10,5,'--------------------------------------------------------------- copia usuario ----------------------------------------------------------------------');
$pdf->Ln(4);
    // Logo
$pdf->Image('cucutalogo.png',15,15,33);
    // Arial bold 15
$pdf->SetFont('Arial','B',15);
    // Movernos a la derecha
$pdf->Cell(80);
    // Título
$pdf->Cell(30,15,'Impuesto Predial Unificado LEY 44/90',0,0,'C');
    // Salto de línea
$pdf->Ln(2);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,38,'Factura de Venta No.'.$liquidacion[1]);
$pdf->Ln(22);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html10);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html11);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html2);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html3);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html12);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html5);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html14);
$pdf->Ln(1.1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html15);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html6);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html7);
$pdf->Ln(1);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html8);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html18);

$pdf->Ln(2);
$pdf->SetFont('Arial','',10);
$pdf->Cell(10,5,'--------------------------------------------------------------- copia tesoreria ----------------------------------------------------------------------');
$pdf->Ln(4);
    // Logo
$pdf->Image('cucutalogo.png',15,147,33);
    // Arial bold 15
$pdf->SetFont('Arial','B',15);
    // Movernos a la derecha
$pdf->Cell(80);
    // Título
$pdf->Cell(30,15,'Impuesto Predial Unificado LEY 44/90',0,0,'C');
    // Salto de línea
$pdf->Ln(4);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,33,'Factura de Venta No.'.$liquidacion[0]);
$pdf->Ln(20);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html10);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html16);
$pdf->SetFont('Arial','B',9);
$pdf->WriteHTML($html11);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html2);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html3);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html12);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html5);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html14);
$pdf->Ln(1.1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html15);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html6);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html7);
$pdf->Ln(1);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html8);
$pdf->Ln(1);
$pdf->SetFont('Arial','',9);
$pdf->WriteHTML($html18);


//$pdf->Output();
$pdf->Output('D','FacturaImpuestosAlcaldiaCucuta.pdf');

?>