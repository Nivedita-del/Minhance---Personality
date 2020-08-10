<?php

require_once dirname(__DIR__) . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';

use PHPMailer\PHPMailer\PHPMailer;

$config = [
    'mail' => [
        'host' => 'smtp1.example.com',
        'SMTPAuth' => true,
        'username' => 'user@example.com',
        'password' => 'secret',
        'SMTPSecure' => PHPMailer::ENCRYPTION_STARTTLS,
        'port' => 587,
    ]
];