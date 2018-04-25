<?php


// Facade

// Процесс оформления заказа
/*
$productID = $_GET['productId'];

$qtyCheck = new productQty();

if($qtyCheck->checkQty($productID) > 0) {

    // Добавление продукта в корзину
    $addToCart = new addToCart($productID);

    // Расчёт стоимости доставки
    $shipping = new shippingCharge();
    $shipping->updateCharge();

    // Расчёт скидки
    $discount = new discount();
    $discount->applyDiscount();


    $order = new order();
    $order->generateOrder();

}
*/


class productOrderFacade {


    public $productID = '';


    public function __construct($pID) {
        $this->productID = $pID;
    }

    public function generateOrder() {

        if($this->qtyCheck() > 0) {

            // Добавление продукта в корзину
            $this->addToCart();

            // Расчёт стоимости доставки
            $this->calulateShipping();

            // Расчёт скидки
            $this->applyDiscount();

            // Генерация заказа
            $this->placeOrder();
        }

    }




    private function addToCart () {
        /* .. добавление продукта в корзину ..  */
    }

    private function qtyCheck() {
        $qty = 'get product quantity from database';
        if($qty > 0) {
            return true;
        } else {
            return false;
        }
    }


    private function calulateShipping() {
        $shipping = new shippingCharge();
        $shipping->calculateCharge();
    }

    private function placeOrder() {
        $order = new order();
        $order->generateOrder();
    }

}


$productID = $_GET['productId'];

$order = new productOrderFacade($productID);
$order->generateOrder();


