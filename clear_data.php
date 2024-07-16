<?php
// clear_data.php

file_put_contents('webhook_data.txt', '');

echo json_encode(['status' => 'success', 'message' => 'Data cleared']);