CREATE TABLE `topic_to_talk_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`topic_id` integer NOT NULL,
	`talk_id` integer NOT NULL,
	FOREIGN KEY (`topic_id`) REFERENCES `topic_table`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`talk_id`) REFERENCES `talks_table`(`id`) ON UPDATE no action ON DELETE no action
);
