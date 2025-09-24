/*
  Warnings:

  - You are about to drop the column `originalPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `reviews` on the `Product` table. All the data in the column will be lost.
  - Added the required column `lens` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shape` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "originalPrice",
DROP COLUMN "rating",
DROP COLUMN "reviews",
ADD COLUMN     "lens" TEXT NOT NULL,
ADD COLUMN     "shape" TEXT NOT NULL;
