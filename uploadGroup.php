<?php 
error_reporting(E_ALL);
$upload_dir = "images/";  //implement this function yourself
    error_log("Failed to connect to database!", 0);

error_log("hello",0);
error_log($_POST,0);
error_log("You messed up!", 3, "my-errors.log");
$img = $_POST["theImage"];
$img = str_replace("data:image/png;base64,", "", $img);
$img = str_replace(" ", "+", $img);
$data = base64_decode($img);
error_log($data, 3, "my-errors.log");

$file = $upload_dir."image_name1.png";
$success = file_put_contents($file, $data);
?>