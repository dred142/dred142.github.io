<?php
if(isset( $_POST['phone']))
$phone = $_POST['phone'];
if(isset( $_POST['area']))
$area = $_POST['area'];
$subject = "dredinvest@gmail.com";

$content="Новая заявка!\n Номер: $phone \n Район: $area";
$recipient = "slavatret98@gmail.com";
$mailheader = "Новая заявка! \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Ошибка!");
echo "Отправлено!";
?>