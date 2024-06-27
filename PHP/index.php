<?php

$databaseHost = 'localhost';
$databaseName = 'shubham';
$databaseUsername = 'root';
$databasePassword = ""; 
$mysqli = mysqli_connect($databaseHost,
 $databaseUsername,$databasePassword, $databaseName); 
 
 if(isset($_POST['reg'])){

$user=$_POST['user'];
$mail=$_POST['email'];
$pass=$_POST['pass'];

$query = mysqli_query($mysqli, 
"insert into kukshal(username,email,password)values('$user','$mail','$pass')");
    
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <link rel="stylesheet" href="style1.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="title">
Register</div>
<form action="" method="post">
    <div class="field">
          <input type="text" name="user" >
          <label>Username</label>
        </div>
        <div class="field">
          <input type="text" name="email" >
          <label>Email Address</label>
        </div>
<div class="field">
          <input type="password" name="pass" >
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
          <input type="submit" value="Register" name="reg">
        </div>
<div class="login-link">
Already a member? <a href="log.php">Login now</a></div>
</form>
</div>
</body>
</html>
