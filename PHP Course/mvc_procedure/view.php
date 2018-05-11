<?php include 'controller.php'; ?>
<html>
<head>
    <link rel="stylesheet" href="style.css" /> </head>
<body>
<?php
echo $output;
if(is_string($dbresult)){
    echo $dbresult;
}
else{
    foreach ($dbresult as $record) {
        foreach ($record as $k => $v) {
            echo $k . ": " . $v . "<br>";
        }
    }
}
?>
</body>
</html>