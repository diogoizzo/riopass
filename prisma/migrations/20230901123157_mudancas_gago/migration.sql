/*
  Warnings:

  - You are about to drop the column `description` on the `ItineraryStep` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `ItineraryStep` table. All the data in the column will be lost.
  - You are about to drop the column `placeOfReturn` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `timeOfDeparture` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `timeOfReturn` on the `Tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItineraryStep" DROP COLUMN "description",
DROP COLUMN "time";

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "placeOfReturn",
DROP COLUMN "timeOfDeparture",
DROP COLUMN "timeOfReturn",
ADD COLUMN     "moreInfo" TEXT;
