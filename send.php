<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['time'])&&$_POST['time']!="")){
        $to = 'info.giroservice@gmail.com';
        $subject = 'Заказ звонка с сайта';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Желаемое время звонка: '.$_POST['time'].'</p>   

                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Giroservice.by\r\n";
        mail($to, $subject, $message, $headers);
}
?>