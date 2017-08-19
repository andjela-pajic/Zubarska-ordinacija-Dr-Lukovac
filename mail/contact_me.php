<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'lukovaclj29@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Poruka od korisnika:  $name";
$email_body = "Dobili ste novu poruku sa sajta stomatologijanovibeograd.rs.\n\n"."Detalji:\n\nIme: $name\n\nmail: $email_address\n\ntelefon: $phone\n\nporuka:\n$message";
$headers = "From: stomatologijanovibeograd\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Odgovori: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
