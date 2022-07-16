/*
  Warnings:

  - You are about to drop the column `lable` on the `safeNotes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[label]` on the table `safeNotes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `safeNotes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "safeNotes_lable_key";

-- AlterTable
ALTER TABLE "safeNotes" DROP COLUMN "lable",
ADD COLUMN     "label" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "safeNotes_label_key" ON "safeNotes"("label");
