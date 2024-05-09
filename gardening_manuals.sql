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
	`water` VARCHAR(200) NOT NULL DEFAULT '',
	`sunlight` VARCHAR(50) NOT NULL DEFAULT '',
	`spacing` VARCHAR(200) NOT NULL DEFAULT '',
	`soil` VARCHAR(50) NOT NULL DEFAULT '',
	`optimal_time_plant_to_plant` VARCHAR(50) NOT NULL DEFAULT '',
	`video_tutorial_link` VARCHAR(50) NOT NULL DEFAULT '',
	`how_to_plant` VARCHAR(1000) NOT NULL DEFAULT '',
	`how_to_harvest` VARCHAR(1000) NOT NULL DEFAULT '',
   `plant_category_ID` INT NOT NULL,
   PRIMARY KEY (`plant_id`));

INSERT INTO `gardening_manuals`.`plant_info` VALUES 
	('broccoli', 789, 'regular watering, at least 1 to 1 1/2 inches per week', 'full sun', 'space rows 3 ft apart', 'slightly acidic to neutral', 'early to mid spring or mid to late summer', 'https://youtu.be/AiGeofg_AbY',
	'Start broccoli seeds indoors in early April or July. Use sterile, soilless seedling mix. Press the seeds one-fourth to one-half inch deep.
Do not use bottom heat. The seeds will germinate and the plants will grow well in regular summer temperatures.
Seeds should germinate in about two weeks. Turn on bright grow lights above them once the seedlings emerge.
Use fertilizer on developing seedlings when the first true leaf appears. Use a half-strength starter solution once a week. After two true leaves are present, use fertilizer twice a week.
When the plants have four or five true leaves, after about four weeks, reduce watering. Place plants outside where they will receive wind protection and a couple hours of sunlight.', 'After you harvest the main head, smaller side shoots will grow for another harvest.',
   98090),
	('radish', 790, 'Water seeds thoroughly, down to 6 inches deep.','full sun', 'plant seeds 1/2 - 1 inch deep. Thin radishes to 1-3 inches apart in row with rows 12 inches apart','slightly acidic to neutral', 'just after last frost and at end of summer', 'https://youtu.be/v-j5holM8Es', 'sowing radishes directly where they are to grow is the easiest way to start them off. As cool-season crops, some radishes can germinate at temperatures as low as 41 Fahrenheit or five degrees Celsius. Sow from very early spring, initially under row covers or hoop houses, spacing rows about 8in or 20cm apart. Sow thinly along the row—ideally, so seeds end up spaced around half an inch or one centimeter apart. Water if it’s dry, and then, about a week after germination, thin the seedlings to leave them an inch or 2cm apart within the row.
Add organic matter before sowing, but also avoid fresh manure or fertilizers high in nitrogen; overly rich soil will encourage lush foliage at the expense of radish roots.', '    To harvest, check your seed packet! Different types of radishes have different growth times. Some varieties are pulled as soon as 3 weeks after planting, when roots are approximately 1 inch in diameter. Pull one out as a test. 
    Harvest roots as soon as they have reached their final size. Don’t delay, as they can go from crisp and crunchy to woody and excessively spicy within a matter of days. Lift the biggest roots each time you harvest, so the remainder can continue to swell.
    Another good sign that your radish root is doing well is that the green growth above the soil is 6 to 8 inches tall. 
    Finally, you should see or feel the “shoulder” or top part of the radish pushing up against the topsoil.', 98090);
    
INSERT INTO `gardening_manuals`.`plant_info` VALUES 
	('Echeveria Hen and chicks', 791, 'drought tolerant. water only after the soil has dried completely', '4-6 hours direct sun', 'pot which is 10% wider than the width of the plant', 'porous well draining', 'any time when indoors', 'https://youtu.be/7P1UdPES_nI', 'Growing hens and chicks is easy. The plants are readily available in most nurseries. They require full sun and well drained, even gritty soil. As succulents, hens and chicks plants are accustomed to very little water. Hens and chicks require very little soil and can be made to grow even in rock crevasses. The ideal temperature for hens and chicks is between 65 and 75 degrees F. (18-24 C.). When temperatures zoom upwards or plummet down, the plants become semi-dormant and will cease growing.', 'NA', 98093);

-- change the plant_category_ID column in the plant_info table to be a foreign key --
-- ? ERROR:"Foreign key constraint is incorrectly formed"  --
ALTER TABLE gardening_manuals.plant_info
	ADD CONSTRAINT FOREIGN KEY (plant_category_ID) REFERENCES plant_categories(plant_category_ID);

 
-- create a table to store plants favourited by users
CREATE TABLE `gardening_manuals`.`user_faves` (
	`user_id` INT NOT NULL,
	`plant_id` INT NOT NULL
	);

-- change the plant_id column to be a foreign key in the users_faves table which references the plant_id in the plant_info table
ALTER TABLE `gardening_manuals`.`user_faves`
	ADD CONSTRAINT FOREIGN KEY (`plant_id`) REFERENCES `plant_info` (`plant_id`); 

ALTER TABLE `gardening_manuals`.`user_faves`
	ADD CONSTRAINT FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`); 
	

INSERT INTO `gardening_manuals`.`user_faves` VALUES
	(12345, 790),
	(12345, 791),
	(12346, 791),
	(12348, 789),
	(12347, 789);
	
	
	