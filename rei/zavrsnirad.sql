-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2022 at 09:51 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zavrsnirad`
--

-- --------------------------------------------------------

--
-- Table structure for table `bodovi`
--

CREATE TABLE `bodovi` (
  `id_k` int(11) NOT NULL,
  `ime` char(20) DEFAULT NULL,
  `lozinka` varchar(200) NOT NULL,
  `brzinaklikanja` decimal(65,1) NOT NULL,
  `ciljanjemeta` int(200) NOT NULL,
  `punjenjebara` double(200,2) NOT NULL,
  `luckystreak` int(200) NOT NULL,
  `zapamcenouvecanihbr` int(200) NOT NULL,
  `zapamcenorandombr` int(200) NOT NULL,
  `reakcija` double(200,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bodovi`
--

INSERT INTO `bodovi` (`id_k`, `ime`, `lozinka`, `brzinaklikanja`, `ciljanjemeta`, `punjenjebara`, `luckystreak`, `zapamcenouvecanihbr`, `zapamcenorandombr`, `reakcija`) VALUES
(1, 'admin', '', '0.9', 6, 7.74, 0, 1, 1, 0.55),
(2, 'admin1', '', '10.0', 0, 0.00, 0, 0, 0, 0.00),
(3, 'admin2', '', '12.0', 0, 0.00, 0, 0, 0, 0.00),
(4, 'admin3', '', '12.0', 0, 0.00, 0, 0, 0, 0.00),
(5, 'admin4', '', '13.2', 0, 0.00, 0, 0, 0, 0.00),
(6, 'asd', 'asd', '13.2', 4, 4.95, 1, 4, 5, 0.57),
(7, 'Rei', 'KrstiÄ‡', '1.0', 1, 1.11, 0, 1, 1, 0.39),
(8, 'ante', '1234', '1.0', 2, 3.44, 1, 4, 5, 3.42);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bodovi`
--
ALTER TABLE `bodovi`
  ADD PRIMARY KEY (`id_k`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bodovi`
--
ALTER TABLE `bodovi`
  MODIFY `id_k` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
