<?php
declare(strict_types=1);

use Whoops\Handler\PrettyPageHandler;
use Whoops\Run;

require_once 'config/variables.php';
require_once 'vendor/autoload.php';

// Debugger
$whoops = new Run;
$whoops->pushHandler(new PrettyPageHandler);
$whoops->register();

try {
    require 'webroot' . DIRECTORY_SEPARATOR . 'index.php';
} catch (Throwable $e) {
    $whoops->handleException($e);
}