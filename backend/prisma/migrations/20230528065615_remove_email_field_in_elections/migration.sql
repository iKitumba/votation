/*
  Warnings:

  - You are about to drop the column `email` on the `elections` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `elections_email_key` ON `elections`;

-- AlterTable
ALTER TABLE `elections` DROP COLUMN `email`;
