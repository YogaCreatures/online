<?php

// Replace this with your own email address
$to = 'hiren.websitedeveloper@gmail.com';

function url(){
  return sprintf(
    "%s://%s",
    isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
    $_SERVER['SERVER_NAME']
  );
}

if($_POST) {

   $fname = trim(stripslashes($_POST['fname']));
   $lname = trim(stripslashes($_POST['lname']));
   $phonenum = trim(stripslashes($_POST['phonenum']));
   $emailaddrs = trim(stripslashes($_POST['emailaddrs']));
   $comment = trim(stripslashes($_POST['comment']));

   
	if ($subject == '') { $subject = "Contact Form Submission from migrantgroup"; }

   // Set Message
   $message .= "Email from: " . $fname . " " . $lname . "<br />";
	$message .= "Phone Number: " . $phonenum . "<br />";
	$message .= "Email address: " . $emailaddrs . "<br />";
   $message .= "Message: ";
   $message .= nl2br($comment);
   $message .= "<br /> ----- <br /> This email was sent from your site " . url() . " contact form. <br />";

   // Set From: header
   $from =  $name . " <" . $email . ">";

   // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   ini_set("sendmail_from", $to); // for windows server
   $mail = mail($to, $subject, $message, $headers);

	if ($mail) { echo "OK"; }
   else { echo "Something went wrong. Please try again."; }

}

?>