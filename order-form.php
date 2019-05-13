<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ /
        $to = 'info.giroservice@gmail.com';
        $subject = 'Заявка с сайта'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Email: '.$_POST['email'].'</p>  
                        <p>Устройство: '.$_POST['device'].'</p>  
                        <p>Сообщение: '.$_POST['message'].'</p>  

                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Giroservice.by\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>

