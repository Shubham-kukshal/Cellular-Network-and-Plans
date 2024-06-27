<?php
$hostname="localhost";
$user="root";
$password=" ";
$db="studentdetails";

$connect=mysqli_connect("localhost","root","");
if($connect){
echo"connected";
}
$dbsel=mysqli_select_db($connect,"studentdetails");
if($dbsel){
echo"selected";

}
?>