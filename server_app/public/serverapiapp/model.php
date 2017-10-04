<?php

if (!defined("SERVER_API_APP")) { die(); }

include_once('./debug.php');

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

function scoreTest($testId, $studentAnswers) {
	$answerKeys = readAnswerKeys('./answerKey.txt');
	$answersCount = 0;
	$correctAnswers = 0;
	$studentAnswers = json_decode( $studentAnswers );

	foreach( $answerKeys as $key => $correctAnswer ) {
		$questionId = (string)($key + 1);
		
		$studentAnswer = trim( (string)$studentAnswers->{$questionId});
		$correctAnswer = trim( (string)$correctAnswer );

		$answersCount++;
		
		if ( $studentAnswer === $correctAnswer ) {
	 		$correctAnswers++;
	 	}
	}

	$percentage = round((($correctAnswers / $answersCount) * 100), 1);

	$score = new stdClass();
	$score->testId = $testId;
	$score->grade = translateToGrade($percentage);
	$score->correctAnswers = $correctAnswers;

	return $score;
}

// Read answerkey.txt file for the answers to each of the questions.
function readAnswerKeys($filename) {
	$answerKeys = array();
	
	// If the answer key exists and is readable, read it into an array.
	if (file_exists($filename) && is_readable($filename)) {
		$answerKeys = file($filename);
	}
	
	return $answerKeys;
}

function translateToGrade($percentage) {

		if ($percentage >= 90.0) { return "A+"; }
		else if ($percentage >= 85.0) { return "A"; }
		else if ($percentage >= 80.0) { return "A-"; }
		else if ($percentage >= 75.0) { return "B+"; }
		else if ($percentage >= 70.0) { return "B"; }
		else if ($percentage >= 65.0) { return "B-"; }
		else if ($percentage >= 60.0) { return "C+"; }
		else if ($percentage >= 55.0) { return "C"; }
		else if ($percentage >= 50.0) { return "C-"; }
		else if ($percentage >= 40.0) { return "D"; }
		else { return "F"; }
	}

?>