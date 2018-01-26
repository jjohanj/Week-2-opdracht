<?php

    $mykey = $_GET['mykey'];
    $value = $_GET['value'];
    $allData = $mykey . " - " . $value . "</br>";

    $myFile = "tekst.txt";
    $fh = fopen($myFile, 'a');

    fwrite($fh, $allData);
    fclose($fh);

 ?>
