/*
  Warnings:

  - You are about to drop the `Photos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `duration` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `minNumberOfClients` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `featuredPhotoId` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalPrice` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longDescription` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Photos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TourCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "esName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "src" TEXT NOT NULL,
    "tourId" TEXT,
    CONSTRAINT "Photo_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TourToTourCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TourToTourCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Tour" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TourToTourCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "TourCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "destination" TEXT,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "durationHours" INTEGER,
    "price" REAL NOT NULL,
    "finalPrice" REAL NOT NULL,
    "obs" TEXT,
    "languages" TEXT,
    "restrictions" TEXT,
    "placeOfDeparture" TEXT,
    "placeOfReturn" TEXT,
    "timeOfDeparture" TEXT,
    "timeOfReturn" TEXT,
    "belongsTobring" TEXT,
    "availability" TEXT,
    "include" TEXT,
    "notInclude" TEXT,
    "textLanguage" TEXT NOT NULL,
    "partner" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "featuredPhotoId" TEXT NOT NULL,
    CONSTRAINT "Tour_featuredPhotoId_fkey" FOREIGN KEY ("featuredPhotoId") REFERENCES "Photo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tour" ("availability", "belongsTobring", "createdAt", "description", "destination", "id", "include", "languages", "name", "notInclude", "obs", "partner", "placeOfDeparture", "placeOfReturn", "price", "restrictions", "textLanguage", "timeOfDeparture", "timeOfReturn", "updatedAt") SELECT "availability", "belongsTobring", "createdAt", "description", "destination", "id", "include", "languages", "name", "notInclude", "obs", "partner", "placeOfDeparture", "placeOfReturn", "price", "restrictions", "textLanguage", "timeOfDeparture", "timeOfReturn", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
CREATE UNIQUE INDEX "Tour_featuredPhotoId_key" ON "Tour"("featuredPhotoId");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "cpf" TEXT,
    "phone" TEXT
);
INSERT INTO "new_User" ("cpf", "createdAt", "email", "id", "name", "password", "phone", "updatedAt") SELECT "cpf", "createdAt", "email", "id", "name", "password", "phone", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_name_cpf_idx" ON "User"("name", "cpf");
CREATE TABLE "new_ItineraryStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "time" TEXT,
    "description" TEXT NOT NULL,
    "textLanguage" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tourId" TEXT NOT NULL,
    CONSTRAINT "ItineraryStep_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItineraryStep" ("createdAt", "description", "id", "name", "order", "textLanguage", "time", "tourId", "updatedAt") SELECT "createdAt", "description", "id", "name", "order", "textLanguage", "time", "tourId", "updatedAt" FROM "ItineraryStep";
DROP TABLE "ItineraryStep";
ALTER TABLE "new_ItineraryStep" RENAME TO "ItineraryStep";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_TourToTourCategory_AB_unique" ON "_TourToTourCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_TourToTourCategory_B_index" ON "_TourToTourCategory"("B");
