-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_featuredOfTourId_fkey";

-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_tourId_fkey";

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_featuredOfTourId_fkey" FOREIGN KEY ("featuredOfTourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
