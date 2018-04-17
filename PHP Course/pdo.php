<pre>
<?php


// PHP Data Objects

foreach(PDO::getAvailableDrivers() as $driver){
    echo $driver.'<br />';
}


?>

</pre>
