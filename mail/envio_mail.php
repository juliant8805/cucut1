<html>
    <head>
        <title>PHPMailer - SMTP (Gmail) advanced test</title>
    </head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <body>
        <?php
        $UN_SALTO="\r\n"; 
        if (isset($_GET['c']) and isset($_GET['p']) and isset($_GET['u'])) {
            $correo = $_GET['c'];
            $contrasena = $_GET['p'];
            $usuario = $_GET['u'];
        }
        if (isset($_GET['ch'])) :
            $change = 'si';
        else :
            $change = 'no';
        endif;
        if ($change == 'si') {
            $asunto = 'Usuario Gesstor';
            $mensaje = 'Hemos recibido una solicitud para restablecer la contraseña asociada a esta dirección de correo electrónico, su nombre de usuario es: ' . $usuario . ' y su nueva contraseña: ' . $contrasena . ' se recomienda cambiarla, link de acceso: http://www.ideepcucuta.com/';
        } 
        elseif (isset($_GET['ref']) and isset($_GET['c'])) {
            $correo = $_GET['c'];
            $ref = $_GET['ref'];
            $re = str_replace('?', ' ', $ref);
            $mens = (explode(",", $re));
            $asunto = 'Información impuesto predial';
            $mensaje = 'El estado de cuenta que solicitó desde el punto de atención digital es la siguiente:'.$UN_SALTO.$UN_SALTO
                    . ' Referencia catastral : ' . $mens[0].$UN_SALTO;
            for ($i = 1; $i < count($mens) - 1; $i = $i + 6) {
                $mensaje = $mensaje.$UN_SALTO
                . ' Destino economico : '.$mens[$i].$UN_SALTO
                . ' Estrato : '.$mens[$i+1].$UN_SALTO
                . ' Valor capital impuesto predial : '.$mens[$i+2].$UN_SALTO
                . ' Valor intereses impuesto predial : '.$mens[$i+3].$UN_SALTO
                . ' Vigencia : '.$mens[$i+4].$UN_SALTO;
            }
        }
        else{
            $asunto = 'Usuario Gesstor';
            $mensaje = 'Bienvenido a Gesstor, su nombre de usuario es: ' . $usuario . ' y su contraseña: ' . $contrasena . ' link de acceso: http://www.ideepcucuta.com/';
        }
        $send = mail($correo, $asunto, $mensaje, 'From:soportegesstor@gmail.com');
        if ($send) :
            echo 'yes';
        else:
            echo 'no';
        endif;
        ?>
    </body>
</html>
