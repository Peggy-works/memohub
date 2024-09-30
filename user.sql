-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 21, 2024 at 08:29 PM
-- Server version: 8.3.0
-- PHP Version: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `memohub`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE IF NOT EXISTS `User` (
  `userid` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL DEFAULT '',
  `email` varchar(200) NOT NULL DEFAULT '',
  `password` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Foods`;
CREATE TABLE IF NOT EXISTS `Foods` (
  `foodid` bigint NOT NULL AUTO_INCREMENT,
  `idnumber` bigint NOT NULL,
  `name` varchar(200) NOT NULL DEFAULT '',
  `dateAdded` DATE,
  `calories` bigint NOT NULL DEFAULT 0,
  `timeOfDay` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`foodid`),
  CONSTRAINT fk_user_idnumber FOREIGN KEY (`idnumber`) REFERENCES `User`(`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Water`;
CREATE TABLE IF NOT EXISTS `Water` (
  `waterid` bigint NOT NULL AUTO_INCREMENT,
  `idnumber` bigint NOT NULL,
  `totalWater` bigint NOT NULL DEFAULT 0,
  `dateAdded` DATE NOT NULL DEFAULT '',
  PRIMARY KEY (`waterid`),
  CONSTRAINT fk_user_idnumber FOREIGN KEY (`idnumber`) REFERENCES `User`(`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Notes`;
CREATE TABLE IF NOT EXISTS `Notes` (
  `noteid` bigint NOT NULL AUTO_INCREMENT,
  `idnumber` bigint NOT NULL,
  `content` MEDIUMTEXT NOT NULL DEFAULT 0,
  `dateAdded` DATE NOT NULL DEFAULT '',
  PRIMARY KEY (`waterid`),
  CONSTRAINT fk_user_idnumber FOREIGN KEY (`idnumber`) REFERENCES `User`(`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- (CURRENT_TIME) works

--
-- Dumping data for table `user`
--

INSERT INTO `User` (`name`, `email`, `password`) VALUES
('Angel', 'samoraangel26@gmail.com', 'Password');

INSERT INTO `User` (`name`, `email`, `password`) VALUES
('Test1', 'test1@gmail.com', 'test1');

INSERT INTO `User` (`name`, `email`, `password`) VALUES
('Test2', 'test2@gmail.com', 'test2'); 

INSERT INTO `Water` (`idnumber`, `totalWater`, `dateAdded`) VALUES 
(2, 4, `2024-09-24`)

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
