PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_message_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`message` text NOT NULL,
	`user_id` integer NOT NULL,
	`talk_id` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`talk_id`) REFERENCES `talks_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_message_table`("id", "message", "user_id", "talk_id", "created_at") SELECT "id", "message", "user_id", "talk_id", "created_at" FROM `message_table`;--> statement-breakpoint
DROP TABLE `message_table`;--> statement-breakpoint
ALTER TABLE `__new_message_table` RENAME TO `message_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;