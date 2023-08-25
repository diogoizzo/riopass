/*
  Warnings:

  - Added the required column `awsFileName` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_featuredPhotoId_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "awsFileName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tour" ALTER COLUMN "featuredPhotoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_featuredPhotoId_fkey" FOREIGN KEY ("featuredPhotoId") REFERENCES "Photo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
