<?php
	
	require_once('configDB.php');

	spl_autoload_register(function ($class) {
		include $class . '.php';
	});

	$userData = $_POST;

	$validate = new Valid();
	$validate->config_valid($userData); 
	
	class Config{

		public function config_reg($selectSaveWay){

			$userData = $_POST;

			switch($selectSaveWay) {

				case 'text':
				$txt = new SaveToTxt();
				$txt->text_save($userData);
				break;

				case 'db':
				$db = new SaveToDB();
				$db->db_save($userData);
				break;

				case 'xml':
				$xml = new SaveToXML();
				$xml->xml_save($userData);
				break;

			}
		}
	}

	// To select the save path, change the value in the config_reg(''), 
	// text, db, xml

	$regVisitor = new Config();
	$regVisitor->config_reg('xml'); 
	
?>