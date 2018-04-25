<?php

// Text Response
$textResponse = "Submission is successful";


// XML Response
$xmlResponse = '
<?xml version="1.0" ?>
<message id="234">
 <from>Bob</from>
 <to>Janette</to>
 <subject>Hi Janette</subject>
 <content>Janette, let\'s grab lunch today.</content>
</message>';


// JSON response
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
$jsonResponse = json_encode($arr);


echo  $jsonResponse;
