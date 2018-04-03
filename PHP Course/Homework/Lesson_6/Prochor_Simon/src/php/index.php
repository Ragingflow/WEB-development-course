<?php
    include_once './config.php';
    include_once './db.php';

    new DbClass();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <link href="styles.css" rel="stylesheet">
    <title></title>
</head>
<body>
<div class="header">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <h2>HOME WORK PHP&nbsp;<span class="badge badge-pill badge-success">4</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content">
    <div class="container">
        <div class="content__form">
            <div class="row justify-content-center">
                <div class="col-10">
                    <form id="ticketby">
                        <div class="form-group row">
                            <div class="col-sm-4 col-form-label">Js Validation</div>
                            <div class="col-sm-8">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="inlineRadio1" type="radio" checked name="validation" value="1">
                                    <label class="form-check-label" for="inlineRadio1">on</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="inlineRadio2" type="radio" name="validation" value="0">
                                    <label class="form-check-label" for="inlineRadio2">off</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name1">First Name</label>
                            <input class="form-control" id="name1" type="text" name="firstname" placeholder="First Name">
                        </div>
                        <div class="form-group">
                            <label for="name2">Last name</label>
                            <input class="form-control" id="name2" type="text" name="lastname" placeholder="Last name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input class="form-control" id="email" type="text" name="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="type">Type Ticket</label>
                            <select class="form-control" id="type" name="type" required>
                                <option value="0" selected="">free</option>
                                <option value="1">standart</option>
                                <option value="2">premium</option>
                            </select>
                        </div>
                        <button class="btn btn-primary" type="submit">By Ticket</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="bundle.js"></script></body>
</html>