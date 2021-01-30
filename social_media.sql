-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2021 at 09:41 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `social_media`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `friendId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `userId`, `friendId`, `createdAt`, `updatedAt`) VALUES
(5, 17, 16, '2021-01-30 18:51:40', '2021-01-30 18:51:40'),
(6, 16, 17, '2021-01-30 18:51:40', '2021-01-30 18:51:40'),
(7, 16, 18, '2021-01-30 18:55:32', '2021-01-30 18:55:32'),
(8, 18, 16, '2021-01-30 18:55:32', '2021-01-30 18:55:32'),
(9, 19, 21, '2021-01-30 20:32:22', '2021-01-30 20:32:22'),
(10, 21, 19, '2021-01-30 20:32:23', '2021-01-30 20:32:23');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `requestId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dob` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `dob`, `createdAt`, `updatedAt`) VALUES
(16, 'sovick', 'sovick@gmail.com', '$2b$10$dU7dDAH2.oVygidS0wBLRucgtSULil5z.bcHLkTECnQYWHrQhQd56', '1994-07-14 18:30:00', '2021-01-30 11:19:16', '2021-01-30 11:19:16'),
(17, 'mukesh', 'mukesh@gmail.com', '$2b$10$A.DruIXW.pSW08BDjG8/1.79yErNFS6bGBx.8f7Xf29JOOMwa1h8y', '1994-08-22 18:30:00', '2021-01-30 12:43:30', '2021-01-30 12:43:30'),
(18, 'kamal', 'kamal@gmail.com', '$2b$10$aAH2Xr7pQtG3aOz/UbKuwutTn5sxamL4Y0A085m5T77tw9TmBPEaK', '1996-09-13 18:30:00', '2021-01-30 17:22:32', '2021-01-30 17:22:32'),
(19, 'mohan', 'mohan@gmail.com', '$2b$10$Z1/.GTlV/GohLrYIR8e1aOuMJl05JtwPys76AIitCdhQ3WoEovPXi', '1991-01-11 18:30:00', '2021-01-30 18:17:24', '2021-01-30 18:17:24'),
(20, 'mohit pal', 'mohitpal@gmail.com', '$2b$10$P5tYFsvldHgW.M5i4.UNK.PTFkf6k.kcKUBHr67gLTsGWf2K3ZEVy', '1991-01-11 18:30:00', '2021-01-30 20:13:57', '2021-01-30 20:13:57'),
(21, 'karan sharma', 'karansharma@gmail.com', '$2b$10$u3CNrHcYDHE8q2T/TsMKc.H/oASpwzHlRvweSkik5o9NFXXoSC2k2', '1990-07-21 18:30:00', '2021-01-30 20:30:02', '2021-01-30 20:30:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
