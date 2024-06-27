<?php

$databaseHost = 'localhost';
$databaseName = 'shubham';
$databaseUsername = 'root';
$databasePassword = ""; 
$connect = mysqli_connect($databaseHost,
 $databaseUsername,$databasePassword, $databaseName); 

if($_SERVER["REQUEST_METHOD"]=="POST"){
$mail=$_POST['email'];
$pass=$_POST['pass'];

$query=mysqli_query($connect,
"SELECT email,password FROM kukshal 
WHERE email='$mail'and password='$pass'");
$row = mysqli_fetch_array($query);
if(($row["email"]==$mail)&&
($row["password"]==$pass)){
header('location:index.html');
}
else{
echo"Sorry, username and password does not match, Please try again.";   
}
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="title">
Login Form</div>
<form action="" method="post">
        <div class="field">
          <input type="text" name="email"  required>
          <label>Email Address</label>
        </div>
<div class="field">
          <input type="password" name="pass"  required>
          <label>Password</label>
        </div>
<div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me">
            <label for="remember-me">Remember me</label>
          </div>
<div class="pass-link">
<a href="#">Forgot password?</a></div>
</div>
<div class="field">
          <input type="submit"  value="Login">
        </div>
<div class="signup-link">
Not a member? <a href="index.php">Signup</a></div>
</form>
</div>
</body>
</html>
