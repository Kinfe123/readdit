/*
  Warnings:

  - Added the required column `category` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ApporvalStatus" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FICTION', 'NONFICTION', 'CLASSICS', 'BIOGRAPHY', 'POETRY', 'HISTORY', 'SCIENCE', 'PHILOSOPHY', 'SELFHELP', 'TRAVEL');

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "approveStatus" "ApporvalStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Xp" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "coverPicture" TEXT,
ADD COLUMN     "profilePicture" TEXT;
