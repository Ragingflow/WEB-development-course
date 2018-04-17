<?php

$db = new DbManager(DB, $visitor);
if ($db->addNewVisitor()) {
    echo "success";
} else {
    echo $error;
}