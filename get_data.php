<?php
// get_data.php

header('Content-Type: application/json');
$data = file_get_contents('webhook_data.txt');
echo $data;

?>