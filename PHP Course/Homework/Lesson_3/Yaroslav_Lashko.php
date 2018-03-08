<?php

function checkPalindrome($str) {
    $odd = 0;
    foreach (count_chars($str, 1) as $value) {
        if ($value % 2 != 0) {
            $odd++;
        }
        if ($odd > 1) {
            return false;
        }
    }
    return true;
}
