-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2022 at 09:02 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igapecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_productpicture`
--

CREATE TABLE `business_productpicture` (
  `id` int(11) NOT NULL,
  `productid` int(11) NOT NULL,
  `title` varchar(11) NOT NULL,
  `picpath` varchar(11) NOT NULL,
  `srno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_productpicture`
--

INSERT INTO `business_productpicture` (`id`, `productid`, `title`, `picpath`, `srno`) VALUES
(13, 0, 'abc', 'businesspro', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business_productpicture`
--
ALTER TABLE `business_productpicture`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business_productpicture`
--
ALTER TABLE `business_productpicture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
