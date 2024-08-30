-- CreateEnum
CREATE TYPE "Breed" AS ENUM ('HOLSTEIN', 'MONTBELIARDE');

-- CreateTable
CREATE TABLE "Cow" (
    "id" SERIAL NOT NULL,
    "cowNumber" TEXT NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "breed" "Breed" NOT NULL,

    CONSTRAINT "Cow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalExam" (
    "id" SERIAL NOT NULL,
    "examDate" TIMESTAMP(3) NOT NULL,
    "disease" TEXT,
    "cowId" INTEGER NOT NULL,

    CONSTRAINT "MedicalExam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Birth" (
    "id" SERIAL NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "cowId" INTEGER NOT NULL,

    CONSTRAINT "Birth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyProduction" (
    "id" SERIAL NOT NULL,
    "productionDate" TIMESTAMP(3) NOT NULL,
    "milkAmount" DOUBLE PRECISION NOT NULL,
    "cowId" INTEGER NOT NULL,

    CONSTRAINT "DailyProduction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cow_cowNumber_key" ON "Cow"("cowNumber");

-- AddForeignKey
ALTER TABLE "MedicalExam" ADD CONSTRAINT "MedicalExam_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Birth" ADD CONSTRAINT "Birth_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyProduction" ADD CONSTRAINT "DailyProduction_cowId_fkey" FOREIGN KEY ("cowId") REFERENCES "Cow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
