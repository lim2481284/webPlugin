<link rel="stylesheet" type="text/css" href="assets/css/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php
include "assets/config/settings.php";
include "assets/config/config.php";
include "../classes/data.php";
include "../classes/html.php";
include "../classes/unknown_inputs.php";

if (ISSET($_GET['delete'])) {
	$obj = new data;
	$obj->DeleteUnknownInput($_GET['id']);
}

if (ISSET($_POST['template'])) {

	$obj_ui = new unknown_inputs;
	$obj_ui->SetParameters($_POST['id']);
	$pattern = $obj_ui->GetInfo("input");

	$data = new data;
	$data->AddToAIMLRandom($pattern,$_POST['template']);
	$data->DeleteUnknownInput($_POST['id']);
}

$resp = new html;
echo $resp->ShowUnknownInputs();
?>