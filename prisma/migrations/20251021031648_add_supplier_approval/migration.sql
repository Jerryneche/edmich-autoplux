/*
  Warnings:

  - You are about to drop the column `image` on the `LogisticsRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LogisticsRequest" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "image" TEXT;
