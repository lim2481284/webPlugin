<?php
include  "./classes/mysql.php";

$database_server = "localhost";
$database_port = 3306;
$database_database ="chatbot";
$database_user = "root";
$database_password = "";
$database = new mysql;
$database->Connect($database_server,$database_port,$database_database,$database_user,$database_password);

session_start();
error_reporting(0);	
?>