<?php

if (!defined("SERVER_API_APP")) { die(); }

// Read the questions file and return an array of arrays (questions and choices)
// Each element of $displayQuestions is an array where first element is the question 
// and second element is the choices.

function readQuestions($filename) {
	$displayQuestions = new stdClass();

	function trimConvert($option) {
		$optionProps = array_map("trim", explode(")", $option));
		$option = new stdClass();
		$option->id = $optionProps[0];
		$option->text = $optionProps[1];

		return $option;
	}
	
	if (file_exists($filename) && is_readable($filename)) {
		$questions = file($filename);
	
		// Loop through each line and put question data in an object for storing
		foreach ($questions as $key => $value) {
			$value = str_replace(array("\r", "\n", "\t"), "", $value);
			// Start parsing question parts from txt file
			preg_match("/^(\d+)[\.|\s]*(.+)\:(.+)$/", $value, $matches);
			// Create new object for storing a question
			$question = new stdClass();
			// Get question id
			$questionId = trim($matches[1]);
			// Get question text
			$question->text = trim($matches[2]);
			// Get question options
			$options = new stdClass();
			foreach( array_map("trimConvert", explode(";", $matches[3])) as $option ) {
				$options->{$option->id} = $option->text;
			}
			$question->options = $options;
			// $question->options = array_map("trimConvert", explode(";", $matches[3]));
			$displayQuestions->{$questionId} = $question;
		}
	}
	else { echo "Error finding or reading questions file."; }
	
	return $displayQuestions;
}

?>