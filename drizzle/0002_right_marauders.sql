CREATE TABLE `message_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`message` text NOT NULL,
	`user_id` integer NOT NULL,
	`talk_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`talk_id`) REFERENCES `talks_table`(`id`) ON UPDATE no action ON DELETE no action
);
