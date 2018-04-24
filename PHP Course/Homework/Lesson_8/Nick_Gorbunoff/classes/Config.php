<?php

	class Config{

		public function config_reg($selectSaveWay){

			$userDataClean = DATA;

			switch($selectSaveWay) {

				case 'text':
				$txt = new SaveToTxt();
				$txt->text_save($userDataClean);
				break;

				case 'db':
				$db = new SaveToDB();
				$db->db_save($userDataClean);
				break;

				case 'xml':
				$xml = new SaveToXML();
				$xml->xml_save($userDataClean);
				break;

			}
		}
	}