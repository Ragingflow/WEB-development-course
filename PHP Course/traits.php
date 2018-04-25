<?php

/*
trait first_trait {
    function first_method() {  }
    function second_method() {  }
}


class firstClass {

    use first_trait;
}

$obj = new firstClass();
// Executing the method from trait
$obj->first_method(); // valid
$obj->second_method(); // valid

*/


/*
trait first_trait
{
    function first_method() { echo "method1"; }
}

trait second_trait
{
    function second_method() { echo "method2"; }
}


class first_class
{
    // now using more than one trait
    use first_trait, second_trait;
}
$obj= new first_class();

$obj->first_method();
$obj->second_method();
*/




// Traits Contains the Trait

/*
trait first_trait
{
    function first_method() { echo "method1"; }
}


trait second_trait
{
    use first_trait;
    function second_method() { echo "method2"; }
}

class first_class
{
    // now using
    use second_trait;
}

// Valid
$obj->first_method(); // Print : method1
// Valid
$obj->second_method(); // Print : method2
*/




// Abstract Methods in Traits
/*
trait first_trait
{
    function first_method() { echo "method1"; }
    // any class which use this trait must
    // have to implement below method.
    abstract public function second_method();
}

class first_class
{
    use first_trait;

    function second_method() {

    }
}
*/


// Conflicts in Traits
trait first_trait
{
    function first_function()
    {
        echo "From First Trait";
    }
}


trait second_trait
{
    function first_function()
    {
        echo "From Second Trait";
    }
}


class first_class
{
    use first_trait, second_trait {
        // This class will now call the method
        // first function from first_trait only
        first_trait::first_function insteadof second_trait;

        // first_function of second_traits can be
        // accessed with second_function
        second_trait::first_function as second_function;

    }
}

$obj = new first_class();
$obj->first_function();
$obj->second_function();





