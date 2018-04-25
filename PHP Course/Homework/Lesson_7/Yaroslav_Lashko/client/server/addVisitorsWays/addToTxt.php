<?php

$file = new TextFileManager($visitor);
if ($file->addNewVisitor()) {
    echo "success";
} else {
    echo $error;
}