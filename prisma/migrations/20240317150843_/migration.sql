/*
  Warnings:

  - The primary key for the `details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `details` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `measurements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `measurements` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `news` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `color` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `products` table. All the data in the column will be lost.
  - Changed the type of `A` on the `_detailsToproducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_measurementsToproducts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_detailsToproducts" DROP CONSTRAINT "_detailsToproducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_measurementsToproducts" DROP CONSTRAINT "_measurementsToproducts_A_fkey";

-- AlterTable
ALTER TABLE "_detailsToproducts" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "_measurementsToproducts" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "details" DROP CONSTRAINT "details_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "details_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "measurements" DROP CONSTRAINT "measurements_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "measurements_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "news" DROP CONSTRAINT "news_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "news_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "products" DROP COLUMN "color",
DROP COLUMN "rating";

-- CreateTable
CREATE TABLE "colors" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_colorsToproducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ratingTousers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_productsTorating" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_colorsToproducts_AB_unique" ON "_colorsToproducts"("A", "B");

-- CreateIndex
CREATE INDEX "_colorsToproducts_B_index" ON "_colorsToproducts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ratingTousers_AB_unique" ON "_ratingTousers"("A", "B");

-- CreateIndex
CREATE INDEX "_ratingTousers_B_index" ON "_ratingTousers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_productsTorating_AB_unique" ON "_productsTorating"("A", "B");

-- CreateIndex
CREATE INDEX "_productsTorating_B_index" ON "_productsTorating"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_detailsToproducts_AB_unique" ON "_detailsToproducts"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_measurementsToproducts_AB_unique" ON "_measurementsToproducts"("A", "B");

-- AddForeignKey
ALTER TABLE "_measurementsToproducts" ADD CONSTRAINT "_measurementsToproducts_A_fkey" FOREIGN KEY ("A") REFERENCES "measurements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_detailsToproducts" ADD CONSTRAINT "_detailsToproducts_A_fkey" FOREIGN KEY ("A") REFERENCES "details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_colorsToproducts" ADD CONSTRAINT "_colorsToproducts_A_fkey" FOREIGN KEY ("A") REFERENCES "colors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_colorsToproducts" ADD CONSTRAINT "_colorsToproducts_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ratingTousers" ADD CONSTRAINT "_ratingTousers_A_fkey" FOREIGN KEY ("A") REFERENCES "rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ratingTousers" ADD CONSTRAINT "_ratingTousers_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTorating" ADD CONSTRAINT "_productsTorating_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTorating" ADD CONSTRAINT "_productsTorating_B_fkey" FOREIGN KEY ("B") REFERENCES "rating"("id") ON DELETE CASCADE ON UPDATE CASCADE;
