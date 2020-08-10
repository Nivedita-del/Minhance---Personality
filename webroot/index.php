<?php
declare(strict_types=1);

use PHPmailer\PHPmailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Faker\Factory;


// Faker Demo
$faker = Factory::create();
$fullName = $faker->name;

// run only on a post
if (!empty($_POST)) {
    try {
        // DEBUGGER DEMO: uncomment the following line.
        // throw new \PHPMailer\PHPMailer\Exception("This is an exception that has been caught.");

        // Mailer Configuration
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = $config['mail']['host'];
        $mail->SMTPAuth = $config['mail']['SMTPAuth'];
        $mail->Username = $config['mail']['username'];
        $mail->Password = $config['mail']['password'];
        $mail->SMTPSecure = $config['mail']['SMTPSecure'];
        $mail->Port = $config['mail']['port'];

        // Mail Information
        $mail->setFrom($config['mail']['username']);
        $mail->addAddress($_POST['email-to']);
        $mail->addReplyTo($config['mail']['username']);

        // Send Config
        $mail->isHTML(true);
        $mail->Subject = "This is a test email";
        $mail->Body = $_POST['message'];

        // Send mail
        $mail->send();
    } catch (Exception $e) {
        // This takes advantage of custom exceptions and error info but doesn't always trigger helpful.
        throw new Exception("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    } catch (Throwable $e) {
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
<?= "<p>Hello there ${fullName}. This is a dynamically created sentence using the Faker composer package. If you reload this page, the name will change. Check the source code for some fake error code that you can uncomment and see how THAT works.</p>" ?>
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


