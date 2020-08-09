<?php
declare(strict_types=1);

require dirname(__DIR__) . '/config/variables.php';
require dirname(__DIR__) . '/vendor/autoload.php';

use PHPmailer\PHPmailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Whoops\Run;
use Whoops\Handler\PrettyPageHandler;

// Debugger
$whoops = new Run();
$whoops->pushHandler(new PrettyPageHandler());
$whoops->register();

// run only on a post
if (isset($_POST)) {
    // You can add your own handler or just use my debugger
    try {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = $config['mail']['host'];
        $mail->SMTPAuth = $config['mail']['SMTPAuth'];
        $mail->Username = $config['mail']['username'];
        $mail->Password = $config['mail']['password'];
        $mail->SMTPSecure = $config['mail']['SMTPSecure'];
        $mail->Port = $config['mail']['port'];
        $mail->setFrom($config['mail']['username']);
    } catch (Exception $e) {
        throw $e;
    }
}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Mail Example</title>
</head>
<body>
<h1>PHP Mailer</h1>
<form action="index.php" method="post">
    <label for="email_to">To:</label>
    <input id="email_to" name="email-to" type="email">
    <hr>
    <label for="message">Message:</label>
    <textarea name="message" id="message" cols="30" rows="10"></textarea>
    <input type="submit" value="Send Email">
</form>
</body>
</html>


