-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306:3306
-- Generation Time: Apr 02, 2023 at 05:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `UserID` int(11) NOT NULL,
  `AddressLine1` varchar(25) NOT NULL,
  `AddressLine2` varchar(25) NOT NULL,
  `Town` varchar(20) NOT NULL,
  `County` varchar(20) NOT NULL,
  `Eircode` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`UserID`, `AddressLine1`, `AddressLine2`, `Town`, `County`, `Eircode`) VALUES
(12344, '12 Rose Road', 'Main Street', 'Clontarf', 'Dublin', 'D12A1B2'),
(12345, '363 Big Street', 'Little Road', 'Finglas', 'Dublin', 'D11C1D2'),
(12346, 'Buckingham Palace', 'Royals', 'Ballyfermot', 'Dublin', 'D15 Y7F2'),
(12347, '742 House', 'Road', 'Dunboyne', 'Dublin', 'D12 X1Y'),
(12348, '123 House', 'Road', 'Clonee', 'Dublin', 'D13 X1Y'),
(12349, '456 House', 'Street', 'Dublin', 'Dublin', 'D12 YX3'),
(12350, '789 House', 'Avenue', 'Cork', 'Cork', 'C23 ZA5'),
(12351, '234 House', 'Lane', 'Galway', 'Galway', 'H91 WB7'),
(12352, '567 House', 'Drive', 'Limerick', 'Limerick', 'V94 XC1');

-- --------------------------------------------------------

--
-- Table structure for table `personalinfo`
--

CREATE TABLE `personalinfo` (
  `UserID` int(11) NOT NULL,
  `Title` char(5) NOT NULL,
  `FirstName` varchar(20) NOT NULL,
  `Surname` varchar(20) NOT NULL,
  `Mobile` varchar(10) NOT NULL,
  `Email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personalinfo`
--

INSERT INTO `personalinfo` (`UserID`, `Title`, `FirstName`, `Surname`, `Mobile`, `Email`) VALUES
(12344, 'Dr', 'Frank', 'Smith', '123456443', 'frank.smith@example.com'),
(12345, 'Mx', 'Harry', 'Smith', '123234234', 'harry.smith@example.com'),
(12346, 'Mrs', 'Jessica', 'Jay', '0839000000', 'jessica.jay@example.com'),
(12347, 'Mr', 'Paul', 'Parsh', '1234393890', 'paul.parsh@example.com'),
(12348, 'Mr', 'Patrick', 'Foe', '1234567890', 'patrick.foe@example.com'),
(12349, 'Mrs', 'Jane', 'Smith', '0987654321', 'jane.smith@example.com'),
(12350, 'Ms', 'Emily', 'Jones', '0123456789', 'emily.jones@example.com'),
(12351, 'Mr', 'David', 'Brown', '2345678901', 'david.brown@example.com'),
(12352, 'Dr', 'Sarah', 'Lee', '3456789012', 'sarah.lee@example.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `personalinfo`
--
ALTER TABLE `personalinfo`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56810;

--
-- AUTO_INCREMENT for table `personalinfo`
--
ALTER TABLE `personalinfo`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12388;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
