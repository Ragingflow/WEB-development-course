CREATE DATABASE IF NOT EXISTS `registration_base`;
USE `registration_base`;

CREATE TABLE `registration_ticket` (
	`user_id` INT AUTO_INCREMENT,
	`first_name` VARCHAR(30),
	`last_name` VARCHAR(30),
	`email` VARCHAR(60),
	`ticket_type` VARCHAR(30),
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`user_id`)
);