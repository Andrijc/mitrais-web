-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2019 at 01:28 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mitrais_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20190601064056-create-users.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `mobileNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `gender` char(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `mobileNumber`, `email`, `dob`, `gender`, `created_at`, `updated_at`) VALUES
(1, 'andy', 'warthog', '0872324422', 'andy.warthog@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Tony', 'Robbins', '08925232', 'tony.rob@gmail.com', '0000-00-00 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Dina', 'Mardhiana', '0872862234', 'dina.mardhiana@yahoo.com', '0000-00-00 00:00:00', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Magina', 'Drewstone', '0978232', 'magina@hotmail.com', '1989-01-04 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Vee', 'Gary', '0252132', 'garyvee@gmail.com', '0000-00-00 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'test', 'test2', '12312', 'test@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Potter', 'Harry', '08232123', 'hogawart@msn.com', '0000-00-00 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'a', 'a', 'a', 'andrijc@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'ruby', 'shin', '09232', 'ruby.shin@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'Matt', 'Maher', '0823232', 'matt@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'Alex', 'Fergusion', '0823223', 'alex@fergusion.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'a', 'a', '123', 'tes2t@gmail.com', '0000-00-00 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'rina', 'rhein', '0829222', 'rina.rhein@gmail.com', '1990-03-03 00:00:00', '2', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'Henry', 'Ronney', '08723232', 'henry@gmail.com', '0000-00-00 00:00:00', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'Rendy', 'Tanos', '08242323', 'rendy@gmail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'a', 'a', '23423', 'test@gmaail.com', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
