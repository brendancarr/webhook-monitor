<?php
/* webhook.php

For receiving data without the extension, add this to your .htaccess:

RewriteEngine On

# Handle /webhook
RewriteRule ^webhook$ webhook.php [L]

*/


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = file_get_contents('php://input');
    file_put_contents('webhook_data.txt', $data);
}