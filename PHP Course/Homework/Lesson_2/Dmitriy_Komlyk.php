<?php
$someString = "a(bc(def(ghi)jk)l(mno)p)q";
function reverseString($someString)
{
    $regex = '/\(([^()]+)\)/';
    while (true) {
        $found = preg_match_all($regex, $someString, $matches);
        if ($found) {
            $someString = preg_replace_callback($regex, function ($matches) {
                return strrev($matches[1]);
            }, $someString);
            continue;
        }
        break;
    }
    return $someString;
}
reverseString($someString);
?>
