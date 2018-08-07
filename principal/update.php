<?php
    ini_set('max_execution_time', 9999);
	$dbconn = pg_connect("host=104.154.211.159 port=5432 dbname=Cucuta user=postgres password=gesstorB2017");
	$query = "SELECT codigo FROM hacienda_predial";
	$result = pg_query($dbconn, $query) or die('error1<br>'.pg_last_error());
	$row = pg_affected_rows($result);
	$service = "http://201.245.170.148:8585/predial/wsPredial.svc?wsdl";
    $c = $_GET["cant"];
    if (is_null($c)){
       $quer = "DROP TABLE haciendaweb; CREATE TABLE haciendaweb(codigo varchar(50), avaluo varchar(50), aldia varchar(50), areacon varchar(50), areatet varchar(50), cedula varchar(50))";
	   $resul = pg_query($dbconn, $quer) or die('error1<br>'.pg_last_error());
	   $param = array();
	   for ($i = 0; $i <= 100; $i++) {
		$param['codigoPredial']=pg_fetch_result($result,$i,0);
		$client = new SoapClient($service, $param);
		$res = $client->datosBasicos($param);
		$res = obj2array($res);
		$ws = $res['datosBasicosResult'];
		$co = $ws['codigo'];
		$av = $ws['avaluo'];
		$al = $ws['aldia'];
		$ar = $ws['areacon'];
		$at = $ws['areatet'];
		$ce = $ws['cedula'];
		$que = "INSERT INTO haciendaweb VALUES('$co', 'av', '$al', '$ar', '$at', '$ce')";
		$resu = pg_query($dbconn, $que) or die('error1<br>'.pg_last_error());
		echo "1 ".$i."<br>";		
	   }
        pg_close($dbconn);
        echo 'Actulizacion realizada con exito 1';
        header('Location: update.php?cant='."100"); 
    } else {
        $param = array();
        if ($c < $row){
            for ($i = $c+1; $i <= $c+100; $i++) {
                $param['codigoPredial']=pg_fetch_result($result,$i,0);
                $client = new SoapClient($service, $param);
                $res = $client->datosBasicos($param);
                $res = obj2array($res);
                $ws = $res['datosBasicosResult'];
                $co = $ws['codigo'];
                $av = $ws['avaluo'];
                $al = $ws['aldia'];
                $ar = $ws['areacon'];
                $at = $ws['areatet'];
                $ce = $ws['cedula'];
                $que = "INSERT INTO haciendaweb VALUES('$co', 'av', '$al', '$ar', '$at', '$ce')";
                $resu = pg_query($dbconn, $que) or die('error1<br>'.pg_last_error());
                echo "2 ".$i."<br>";
            }
        } else {
            for ($i = $c+1; $i <= $row; $i++) {
                $param['codigoPredial']=pg_fetch_result($result,$i,0);
                $client = new SoapClient($service, $param);
                $res = $client->datosBasicos($param);
                $res = obj2array($res);
                $ws = $res['datosBasicosResult'];
                $co = $ws['codigo'];
                $av = $ws['avaluo'];
                $al = $ws['aldia'];
                $ar = $ws['areacon'];
                $at = $ws['areatet'];
                $ce = $ws['cedula'];
                $que = "INSERT INTO haciendaweb VALUES('$co', 'av', '$al', '$ar', '$at', '$ce')";
                $resu = pg_query($dbconn, $que) or die('error1<br>'.pg_last_error());
                echo "3 ".$i."<br>";
            }
            exit;
        }
        pg_close($dbconn);
        echo 'Actulizacion realizada con exito 2<br>';
        $c = $c+100;
        header('Location: update.php?cant='.$c);
    }
	function obj2array($obj){
		$out = array();
		foreach($obj as $key => $val){
			switch(true){
				case is_object($val):
					$out[$key] = obj2array($val);
					break;
				case is_array($val):
					$out[$key] = obj2Array($val);
					break;
				default:
					$out[$key] = $val;
			}
		}
		return $out;
	}
?>