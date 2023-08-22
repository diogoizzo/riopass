-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT,
    "phone" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "birthday" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "observation" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "destination" TEXT,
    "description" TEXT NOT NULL,
    "longDescription" TEXT NOT NULL,
    "durationHours" INTEGER,
    "price" DOUBLE PRECISION NOT NULL,
    "finalPrice" DOUBLE PRECISION NOT NULL,
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "featuredPhotoId" TEXT NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enName" TEXT NOT NULL,
    "esName" TEXT NOT NULL,

    CONSTRAINT "TourCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItineraryStep" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tourId" TEXT NOT NULL,

    CONSTRAINT "ItineraryStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "src" TEXT NOT NULL,
    "tourId" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TourToTourCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_name_cpf_idx" ON "User"("name", "cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Tour_featuredPhotoId_key" ON "Tour"("featuredPhotoId");

-- CreateIndex
CREATE UNIQUE INDEX "_TourToTourCategory_AB_unique" ON "_TourToTourCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_TourToTourCategory_B_index" ON "_TourToTourCategory"("B");

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_featuredPhotoId_fkey" FOREIGN KEY ("featuredPhotoId") REFERENCES "Photo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItineraryStep" ADD CONSTRAINT "ItineraryStep_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TourToTourCategory" ADD CONSTRAINT "_TourToTourCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TourToTourCategory" ADD CONSTRAINT "_TourToTourCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "TourCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
