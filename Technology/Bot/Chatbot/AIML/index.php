<link rel="stylesheet" type="text/css" href="public/assets/css/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="public/assets/js/main.js"></script>
<?php
include "config/settings.php";
include "config/config.php";
include "classes/data.php";
include "classes/html.php";

$obj = new data;
$resp = new html;

if (!ISSET($_SESSION['userid'])) {
	$obj->StartSession();
}

echo $resp->DrawChatBox();

if (ISSET($_POST['message'])) {
	$obj->setParameters($_POST['message']);
	$obj->ProcessInput();
	$input = $obj->getResponse();

	echo $resp->DrawResponse($input);
	
	$_SESSION["check"] = $_SESSION["check"]+1;
	if($_SESSION["check"]%30==0)
	{	
		echo "<div class='speech-bubble'><center><img style='width:10%;' src='public/assets/img/warning.png'/></center><br>Hi, your contract prediction are rising now </label> </div>";
		
	}
}
else 
{
	echo "<div class='speech-bubble'>Hi there, how can I help you ? </div>";
}

?>