<?php
function reverseString($string)
{
    $count = substr_count($string, '(');
    $output = $string;
    for ($i = 0; $i < $count; $i++) {
        $position_start = strripos($output, '(');
        $position_finish = strpos($output, ')', $position_start);
        $substr = strrev(substr($output, $position_start + 1, $position_finish - $position_start - 1));
        $output = substr($output, 0, $position_start) . $substr . substr($output, $position_finish+1);
    }
    return $output;
}
