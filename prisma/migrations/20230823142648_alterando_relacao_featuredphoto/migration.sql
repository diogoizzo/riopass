/*
  Warnings:

  - You are about to drop the column `featuredPhotoId` on the `Tour` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[featuredOfTourId]` on the table `Photo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_featuredPhotoId_fkey";

-- DropIndex
DROP INDEX "Tour_featuredPhotoId_key";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "featuredOfTourId" TEXT;

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "featuredPhotoId";

-- CreateIndex
CREATE UNIQUE INDEX "Photo_featuredOfTourId_key" ON "Photo"("featuredOfTourId");

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_featuredOfTourId_fkey" FOREIGN KEY ("featuredOfTourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
