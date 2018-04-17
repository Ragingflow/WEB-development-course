<?php

$xml = new XMLFileManager($visitor);
if ($xml->addNewVisitor()) {
    echo "success";
} else {
    echo $error;
}
