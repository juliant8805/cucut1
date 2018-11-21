<?php
require('pdf/html_table.php');
$datosBasicos = array("010401680003000", "199", "16611000", "PARTICULARES", "HABITACIONAL", "010401680003000", "C 18N 26A 26 BR MOTILONES ", "SODEVA-LTDA ", "Urbano", "ESTRATO 2");
$estadoCuenta = array(309500, 251000, 175600, 384900, 45900, 37700, 26500, 57100, 150800, 118600, 0, 269400, 506200, 407300, 202100, 714000, 2012);
$liquidacion = array("5678863", "2018-06-27", "PARA PAGO CON CHEQUE DE GERENCIA, A NOMBRE DE: BBVA Fiduciaria S.A. NIT 860048608-5", "3", "2018");
$historico = array("1839100", "2018-11-07");

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
<td width="180" bgcolor="#D0D0FF">Codigo Predial: </td><td width="180">'.$datosBasicos[0].'</td>
<td width="180" bgcolor="#D0D0FF">Ultimo Pago:</td><td width="180">$'.number_format((int)$historico[0],"0",",",".").'</td>
</tr>
<tr>
<td width="180" bgcolor="#D0D0FF">Propietario: </td><td width="180">'.$datosBasicos[7].'</td>
<td width="180" bgcolor="#D0D0FF">Direccion:</td><td width="180">'.$datosBasicos[6].'</td>
</tr>
<tr>
<td width="180" bgcolor="#D0D0FF">Avaluo: </td><td width="180">$'.number_format((int)$datosBasicos[2],"0",",",".").'</td>
<td width="180" bgcolor="#D0D0FF">Estrato:</td><td width="180">'.$datosBasicos[9].'</td>
</tr>
<tr>
<td width="180" bgcolor="#D0D0FF">Area terreno: </td><td width="180">'.$datosBasicos[1].' m2</td>
<td width="180" bgcolor="#D0D0FF">Area constr:</td><td width="180">falta</td>
</tr>
</table>';

$html16='<table border="1">
<tr>
<td width="180" bgcolor="#D0D0FF">Codigo Predial: </td><td width="180">'.$datosBasicos[0].'</td>
<td width="180" bgcolor="#D0D0FF">Ultimo Pago:</td><td width="180">$'.number_format((int)$historico[0],"0",",",".").'</td>
</tr>
<tr>
<td width="180" bgcolor="#D0D0FF">Propietario: </td><td width="180">'.$datosBasicos[7].'</td>
<td width="180" bgcolor="#D0D0FF">Direccion:</td><td width="180">'.$datosBasicos[6].'</td>
</tr>
</table>';

$html2='<table border="1">
<tr>
<td width="70" bgcolor="#D0D0FF">Vigencia </td>
<td width="90" bgcolor="#D0D0FF">Avaluo</td>
<td width="50" bgcolor="#D0D0FF">Tarifa</td>
<td width="70" bgcolor="#D0D0FF">Predial</td>
<td width="70" bgcolor="#D0D0FF">Int Predial</td>
<td width="70" bgcolor="#D0D0FF">Corponor</td>
<td width="70" bgcolor="#D0D0FF">Int Corpo</td>
<td width="70" bgcolor="#D0D0FF">Valoriza</td>
<td width="70" bgcolor="#D0D0FF">Int Val</td>
<td width="90" bgcolor="#D0D0FF">Subtotal</td>
</tr>
</table>';
$html3='<table border="1">
<tr>
<td width="70" height="55">'.$liquidacion[4].'</td>
<td width="90" height="55">$'.number_format((int)$datosBasicos[2],"0",",",".").'</td>
<td width="50" height="55">'.$liquidacion[4].'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[0],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[1],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[8],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[9],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[4],"0",",",".").'</td>
<td width="70" height="55">$'.number_format((int)$estadoCuenta[5],"0",",",".").'</td>
<td width="90" height="55">$'.number_format(($estadoCuenta[0] + $estadoCuenta[1] + $estadoCuenta[8] + $estadoCuenta[9] + $estadoCuenta[4] + $estadoCuenta[5]),"0",",",".").'</td>
</tr>
<tr>
<td width="210" bgcolor="#D0D0FF">Subtotales</td>
<td width="140" >'.number_format(($estadoCuenta[0] + $estadoCuenta[1]),"0",",",".").'</td>
<td width="140" >'.number_format(($estadoCuenta[8] + $estadoCuenta[9]),"0",",",".").'</td>
<td width="125" >'.number_format(($estadoCuenta[4] + $estadoCuenta[5]),"0",",",".").'</td>    
<td width="89">'.number_format(($estadoCuenta[0] + $estadoCuenta[1] + $estadoCuenta[8] + $estadoCuenta[9] + $estadoCuenta[4] + $estadoCuenta[5]),"0",",",".").'</td>
</tr>
</table>';

$html5='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Informacion del pago</td>
<td width="570" >'.strtolower($liquidacion[2]).'</td>
</tr>
</table>';

$html14='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Impuestos (+)</td>
<td width="570" >$'.number_format(($estadoCuenta[0] + $estadoCuenta[4] + $estadoCuenta[8]),"0",",",".").'</td>    
</tr>

</table>';

$html15='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Interes (+)</td>
<td width="570" >$'.number_format(($estadoCuenta[1] + $estadoCuenta[5] + $estadoCuenta[9]),"0",",",".").'</td>    
</tr>
</table>';

$html6='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Total Descuentos (-)</td>
<td width="570" >$'.number_format(($estadoCuenta[2] + $estadoCuenta[6] + $estadoCuenta[10]),"0",",",".").'</td>    
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
<td width="570" >$'.number_format($estadoCuenta[15],"0",",",".").'</td>    
</tr>
</table>';

$html18='<table border="1">
<tr>
<td width="150" bgcolor="#D0D0FF">Fecha de vencimiento</td>
<td width="570" >'.$liquidacion[1].'</td>    
</tr>
</table>';

$pdf->Image('imagenes/cucutalogo.png',10,15,33);
$pdf->Ln(18);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,10,'--------------------------------------------------------------- copia usuario ----------------------------------------------------------------------');
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,22,'Impuesto Predial Unificado LEY 44/90');
$pdf->Ln(2);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,33,'Factura de Venta No.'.$liquidacion[0]);
$pdf->Ln(20);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html10);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html11);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html2);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html3);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html12);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html5);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html14);
$pdf->Ln(1.1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html15);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html6);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html7);
$pdf->Ln(1);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html8);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html18);

$pdf->Ln(2);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,10,'-------------------------------------------------------------- copia tesoreria --------------------------------------------------------------------');
$pdf->SetFont('Arial','B',16);
$pdf->Cell(40,22,'Impuesto Predial Unificado LEY 44/90');
$pdf->Ln(2);
$pdf->SetFont('Arial','',10);
$pdf->Cell(40,33,'Factura de Venta No.'.$liquidacion[0]);
$pdf->Ln(20);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html10);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html16);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html11);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html2);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html3);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html12);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html5);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html14);
$pdf->Ln(1.1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html15);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html6);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html7);
$pdf->Ln(1);
$pdf->SetFont('Arial','B',10);
$pdf->WriteHTML($html8);
$pdf->Ln(1);
$pdf->SetFont('Arial','',10);
$pdf->WriteHTML($html18);



$pdf->Output();

?>