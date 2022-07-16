/*
  Warnings:

  - You are about to drop the column `title` on the `safeNotes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lable]` on the table `safeNotes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lable` to the `safeNotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "safeNotes_title_key";

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "label" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "safeNotes" DROP COLUMN "title",
ADD COLUMN     "lable" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cards_label_key" ON "cards"("label");

-- CreateIndex
CREATE UNIQUE INDEX "safeNotes_lable_key" ON "safeNotes"("lable");
