<?php

$recepient = "order@campmir.ru";
$sitename = "ЛАГЕРЬ БУДУЩИХ ЛИДЕРОВ";



$name2 = trim($_POST["name2"]);
$phone2 = trim($_POST["phone2"]);

$message = "Имя: $name2 \nТелефон: $phone2";

$pagetitle = "Новая заявка с сайта на получение программы \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");