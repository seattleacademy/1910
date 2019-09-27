<?php
$upload_dir = "faces/";
$img = $_POST['hidden_data'];
$person = $_POST['person'];
$img = str_replace('data:image/jpeg;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$counter = 1;
$imageFileType = 'jpeg';

while(file_exists($upload_dir . $person . "." . $counter . "."  . $imageFileType)) {
    $counter++;
}

$file = $upload_dir . $person . "." . $counter . "."  . $imageFileType;
$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
  header( "refresh:1; url=faces/" ); 


?>