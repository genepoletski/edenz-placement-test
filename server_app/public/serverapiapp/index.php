<?php
// Define global constant to prevent direct access to other app php scripts
define("SERVER_API_APP", "SEVER_API_APP");

// Load dependencies
include("./model.php");

// Get resourse path and http verb from api request
$apiPath = $_SERVER['QUERY_STRING'];
$apiVerb = $_SERVER['REQUEST_METHOD'];

// Process request parameters
switch ($apiPath) {
  case "test/1":
    if ($apiVerb == "GET") {
      try {
        $questions = readQuestions("questions.txt");
        $res = json_encode($questions);
      }
      catch (Exception $e) {

      }
    }
    else if ($apiVerb == "POST") {
      $res = "receiving answers from client (JSON)";
    }
    else {
      $err = $_SERVER["SERVER_PROTOCOL"] . " 405 Method Not Allowed";
    }
    break;
  default:
    // Generate error if request parameters did not match api
    $err = $_SERVER["SERVER_PROTOCOL"] . " 404 Not Found";
}

// Respond with an error if any
if ($err) {
  header($err);
  exit;
}

// Respond normally
header('Content-Type: application/json');
echo $res;

?>