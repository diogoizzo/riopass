/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Tour` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tour_url_key" ON "Tour"("url");

-- CreateIndex
CREATE INDEX "Tour_url_idx" ON "Tour"("url");
