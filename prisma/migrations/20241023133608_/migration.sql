/*
  Warnings:

  - You are about to drop the column `original` on the `Url` table. All the data in the column will be lost.
  - You are about to drop the column `short` on the `Url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shortUrl]` on the table `Url` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `originalUrl` to the `Url` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortUrl` to the `Url` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Url_short_key";

-- AlterTable
ALTER TABLE "Url" DROP COLUMN "original",
DROP COLUMN "short",
ADD COLUMN     "originalUrl" TEXT NOT NULL,
ADD COLUMN     "shortUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Url_shortUrl_key" ON "Url"("shortUrl");
