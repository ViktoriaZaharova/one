<?php

$recepient = "order@campmir.ru";
$sitename = "ЛАГЕРЬ БУДУЩИХ ЛИДЕРОВ";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);


$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");