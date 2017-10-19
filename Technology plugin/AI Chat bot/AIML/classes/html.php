<?php
class html {
	public function DrawChatBox($input="") {
		$c  = "<div class='header'><img src='public/assets/img/logo.png'/><label> BinaryChat</label> </div><form onsubmit='return checkContract()' method='post' id='question-form' action='index.php'>\n";
	
		$c .= " <div class='question-input'> <div class='sample-question-list'><div class='sample-question'><label class='question-content contract'>I want to buy contract.</label></div><div class='sample-question'><label class='question-content'> I want to view stock market statistic. </label></div><div class='sample-question'> <label class='question-content'> Give me some stock market advice.</label></div><div class='sample-question'> <label class='question-content'> I want to view some stock market news.</label></div> 
		<div class='contract-list sample-question'><label class='question-content'> FOREX </label></div>
		<div class='contract-list sample-question'><label class='question-content'> USD/JPY </label></div>
		<div class='news-list active sample-question'><label class='question-content'> 1 </label></div>		
		<div class='news-list sample-question'><label class='question-content'> 2 </label></div>
		<div class='news-list sample-question'><label class='question-content'> 3 </label></div>
		<div class='news-list sample-question'><label class='question-content'> 4 </label></div>
		<div class='news-list sample-question'><label class='question-content'> 5 </label></div>
		<div class='news-list sample-question'><label class='question-content'> ... </label></div>	
		</div> <input id='message-input-field' placeholder='Type here ... ' type='text' name='message' required><input type='submit' value='Send' size=10> </div>\n";
		$c .= "</form>\n";
		return $c;
	}
	public function DrawResponse($input="") {
		$c = "<div class='speech-bubble'>". $input . "</div>";
		return $c;
	}

	
	public function ShowUnknownInputs() {
		$db = $GLOBALS['database'];
		$c = "";
		$sql = "SELECT id, input
						FROM unknown_inputs
						WHERE input <> ''
						LIMIT 10
						";
		$result = $db->Query($sql);
		if ($db->NumRows($result) == 0) {
			$this->Errors("No inputs");
			return false;
		}
		else {
			$c .= "<table cellspacing='0'>\n";
			$c .="
				<th> 
					Message pattern
				</th>
				<th> 
					Answer option 
				</th>
				<th> 
					Action
				</th>
			";
			while ($row = $db->FetchArray($result)) {
				$c .= "<form method='post' action='index.php'>\n";
				$c .= "<tr class='table-tr'>\n";
					$c .= "<td class='message-title' valign=top>\n";
					if (EMPTY($row['input'])) {
						$c .= "EMPTY";
					}
					else {
						$c .= $row['input'];
					}
					$c .= "</td>\n";
					$c .= "<td class='message-input' valign=top>\n";
					for ($i=0;$i<10;$i++) {
						$c .= " Answer $i : <input type=text name=template[]><br />\n";
					}
					$c .= "<input type='submit' value='Save'>\n";
					$c .= "</td>\n";
					$c .= "<td class='message-delete' valign=top>\n";
					$c .= "<a href=index.php?delete=y&id=".$row['id']."><img style='width:50%;' src='../admin/assets/img/delete.png'/></a>\n";
					$c .= "</td>\n";
				$c .= "</tr>\n";
				$c .= "<input type=hidden name=id value='".$row['id']."'>\n";
				$c .= "</form>\n";
			}

			$c .= "</table>\n";
		}
		return $c;
	}
	private function Errors($err) {
		$this->errors.=$err."<br>";
	}

	public function ShowErrors() {
		return $this->errors;
	}
}
?>