<?php
	session_start();
	include ($_SERVER['DOCUMENT_ROOT'].'/scripts/connect.php');
	include ($_SERVER['DOCUMENT_ROOT'].'/scripts/functions.php');

	if(checkSession()){header('location:/');}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>CauseHub. | New Password</title>
    <link rel="stylesheet" href="/css/style.css">

    <link rel="stylesheet" href="/plugins/alertify/alertify.core.css" />
    <link rel="stylesheet" href="/plugins/alertify/alertify.default.css" />

    <link rel="stylesheet" href="/plugins/nprogress/nprogress.css" />
</head>
<body class="index">
    <header>
        <h1><a href="/">CauseHub.</a></h1>
    </header>
    <main>
    <form method='post' class='login' action='/scripts/processing/newpass.php'>
          Reset Code: <input type="text" id='resetcode' name="resetcode" size="15" /><br />
          New Password: <input type="password" id='password' name="password" size="15" /><br />
        <div align="center">
         <p><input type="submit" value="Save New Password"/></p>
        </div>
    </form>
    </main>
    <?php include ($_SERVER['DOCUMENT_ROOT'].'/scripts/feedback-include.php'); ?>
</body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script><script src="/scripts/extra.js"></script>
    <script src="/plugins/alertify/alertify.js"></script>
    <script src="/plugins/nprogress/nprogress.js"></script>
    <?php
        if($_SESSION['forgot_msg']!=''){
            $parts = explode(':', $_SESSION['forgot_msg']);
            echo '<script>';
            echo 'alertify.log("'.$parts[1].'","'.$parts[0].'");';
            echo '</script>';
            unset($_SESSION['forgot_msg']);
        }
    ?>
</html>