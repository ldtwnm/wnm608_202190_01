-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 09, 2021 at 06:09 PM
-- Server version: 5.7.35-cll-lve
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ldtproducts`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `date_create` datetime NOT NULL,
  `date_modify` datetime NOT NULL,
  `category` varchar(32) NOT NULL,
  `title` varchar(128) NOT NULL,
  `image_other` varchar(256) NOT NULL,
  `image_thumb` varchar(256) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(10) NOT NULL,
  `total` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `date_create`, `date_modify`, `category`, `title`, `image_other`, `image_thumb`, `price`, `description`, `quantity`, `total`) VALUES
(1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'UX/UI design', 'Mobile Design', 'mobiledesign1.jpg,mobiledesign2.jpg', 'mobiledesign1.jpg', 200.00, 'We offer mobile design package.', 0, 0),
(2, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'UX/UI Design', 'Web Design', 'webdesign1.jpg,webdesign2.jpg', 'webdesign1.jpg', 200.00, 'We offer web design package.', 0, 0),
(3, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Graphic Design', 'Social Media Graphic Design', 'socialmediagraphicdesign1.jpg,socialmediagraphicdesign2.jpg', 'socialmediagraphicdesign1.jpg', 200.00, 'We offer social media graphic design packages.', 0, 0),
(4, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Graphic Design', 'Packaging Graphic Design', 'packaginggraphicdesign1.jpg,packaginggraphicdesign2.jpg', 'packaginggraphicdesign1.jpg', 200.00, 'We offer packaging graphic design.', 0, 0),
(5, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Graphic Design', 'Stationery System Design', 'stationerysystemdesign1.jpg,stationerysystemdesign2.jpg', 'stationerysystemdesign1.jpg', 200.00, 'We offer Stationery System Design.', 0, 0),
(6, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Branding', 'Branding Design', 'brandingdesign1.jpg,brandingdesign2.jpg', 'brandingdesign1.jpg', 200.00, 'We offer branding design package.', 0, 0),
(7, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Branding', 'Brand Strategy', 'brandstrategy1.jpg,brandstrategy2.jpg', 'brandstrategy1.jpg', 200.00, 'We offer brand strategy package.', 0, 0),
(8, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Branding', 'Brand Planning', 'brandplanning1.jpg,brandplanning2.jpg', 'brandplanning1.jpg', 200.00, 'We offer brand planning.', 0, 0),
(9, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Video Editing', 'Motion Graphics', 'motiongraphics1.jpg,motiongraphics2.jpg', 'motiongraphics1.jpg', 200.00, 'We offer motion graphics design package.', 0, 0),
(10, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Video Editing', 'Video Editing', 'videoediting1.jpg,videoediting2.jpg', 'videoediting1.jpg', 200.00, 'We offer video editing package.', 0, 0),
(11, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Type Design', 'Type Design', 'typedesign1.jpg,typedesign2.jpg', 'typedesign1.jpg', 200.00, 'We offer type design package.', 0, 0),
(12, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Web Development', 'Web Development', 'webdevelopment1.jpg,webdevelopment2.jpg', 'webdevelopment1.jpg', 200.00, 'We offer web development package.', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD UNIQUE KEY `id` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
