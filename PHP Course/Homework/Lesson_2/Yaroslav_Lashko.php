<?php

function invertingLines($str) {

    function invertSubStr($matches) {
        return strrev($matches[1]);
    }

    while (strpos($str, "(")) {
        $str = preg_replace_callback(
                "/\(([^()]*)\)/", "invertSubStr", $str);
    }
    return $str;
}
