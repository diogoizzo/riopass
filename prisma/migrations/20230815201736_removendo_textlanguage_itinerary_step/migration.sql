/*
  Warnings:

  - You are about to drop the column `textLanguage` on the `ItineraryStep` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItineraryStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "time" TEXT,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tourId" TEXT NOT NULL,
    CONSTRAINT "ItineraryStep_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItineraryStep" ("createdAt", "description", "id", "name", "order", "time", "tourId", "updatedAt") SELECT "createdAt", "description", "id", "name", "order", "time", "tourId", "updatedAt" FROM "ItineraryStep";
DROP TABLE "ItineraryStep";
ALTER TABLE "new_ItineraryStep" RENAME TO "ItineraryStep";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
