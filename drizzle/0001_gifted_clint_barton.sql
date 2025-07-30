PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_talks_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` integer NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`state` text NOT NULL,
	`user_id` integer NOT NULL,
	`hour` integer NOT NULL,
	`duration` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_talks_table`("id", "date", "name", "description", "state", "user_id", "hour", "duration") SELECT "id", "date", "name", "description", "state", "user_id", "hour", "duration" FROM `talks_table`;--> statement-breakpoint
DROP TABLE `talks_table`;--> statement-breakpoint
ALTER TABLE `__new_talks_table` RENAME TO `talks_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;