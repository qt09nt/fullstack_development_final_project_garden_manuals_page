CREATE DATABASE `gardening_manuals`;

-- make the users info table --
CREATE TABLE `gardening_manuals`.`users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(50) NOT NULL DEFAULT '',
	`password` VARCHAR(50) NOT NULL DEFAULT '',
	`username` VARCHAR(50) NOT NULL DEFAULT '',
	 PRIMARY KEY  (`user_id`),
);

INSERT INTO `gardening_manuals`.`users` VALUES 
	(12345, 'sriley@robogarden.ca', 'testpass89334', 'sriley'),
	(12346, 'glliala@robogarden.ca', 'wieruwoeirue', 'glliala'),
	(12347, 'rbenet@robogarden.ca', 'weroewreq343', 'rbenet'),
	(12348, 'morsharshy@robogarden.ca', '23oq2u9ue', 'morsharshy');

-- make the plant categories table
CREATE TABLE `gardening_manuals`.`plant_categories` (
	`plant_category_ID` INT NOT NULL AUTO_INCREMENT,
	`plant_category_name` VARCHAR(50) NOT NULL DEFAULT '',
	 PRIMARY KEY (`plant_category_ID`));	

INSERT INTO `gardening_manuals`.`plant_categories` VALUES 
	(98090, 'vegetables'),
	(98091, 'fruits'),
	(98092, 'herbs'),
	(98093, 'cacti and succulents'),
	(98094, 'house plants'),
	(98095, 'shrubs'),
	(98096, 'ferns'),
	(98097, 'flowers'),
	(98098, 'trees');

-- make the table that holds the plant information --
CREATE TABLE `gardening_manuals`.`plant_info` (
	`plant_name` VARCHAR(50) NOT NULL DEFAULT '',
	`plant_id` INT NOT NULL AUTO_INCREMENT,
	`water` VARCHAR(50) NOT NULL DEFAULT '',
	`sunlight` VARCHAR(50) NOT NULL DEFAULT '',
	`spacing` VARCHAR(50) NOT NULL DEFAULT '',
	`soil` VARCHAR(50) NOT NULL DEFAULT '',
	`optimal_time_plant_infoto_plant` VARCHAR(50) NOT NULL DEFAULT '',
	`video_tutorial_link` VARCHAR(50) NOT NULL DEFAULT '',
	`how_to_plant` VARCHAR(50) NOT NULL DEFAULT '',
	`best_time_to_plant`	VARCHAR(50) NOT NULL DEFAULT '',
	`how_to_harvest` VARCHAR(50) NOT NULL DEFAULT '',
   `plant_category_ID` INT NOT NULL,
   PRIMARY KEY (`plant_id`));

	
-- change the plant_category_ID column in the plant_info table to be a foreign key --
-- ? ERROR:"Foreign key constraint is incorrectly formed"  --
ALTER TABLE gardening_manuals.plant_info
	ADD CONSTRAINT FOREIGN KEY (plant_category_ID) REFERENCES plant_categories(plant_category_ID);

 
-- create a table to store plants favourited by users
CREATE TABLE `gardening_manuals`.`user_faves` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`plant_id` INT NOT NULL,
	PRIMARY KEY  (`user_id`)
	);

-- change the plant_id column to be a foreign key in the users_faves table which references the plant_id in the plant_info table
ALTER TABLE `gardening_manuals`.`user_faves`
	ADD CONSTRAINT FOREIGN KEY (`plant_id`) REFERENCES `plant_info` (`plant_id`); 
	

