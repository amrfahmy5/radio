-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 28, 2020 at 09:06 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `radio`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `episode_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `post_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `episode`
--

CREATE TABLE `episode` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `duration` int(11) NOT NULL,
  `program_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `episode_content` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `episode`
--

INSERT INTO `episode` (`id`, `title`, `description`, `duration`, `program_id`, `user_id`, `episode_content`) VALUES
(1, 'test', 'bcdbwhchjwdvcjhwc  cjwhcjhwcjhw jhvcjvwhdvchwcj cwwvchwvhcw', 22, 1, 1, 'bhefhgefhegfhegfhe'),
(2, 'asd', 'ASDASD', 5, 35, 3, 'ASD'),
(3, 'asd', 'asd', 15, 1, 1, '/Audio/episodes/3.mp3'),
(4, 'asd', 'asd', 5, 1, 1, '/Audio/episodes/4.mp3'),
(5, 'asd', 'asd', 5, 1, 1, '/Audio/episodes/5.mp3'),
(6, 'asd', 'asd', 5, 1, 1, '/Audio/episodes/6.mp3'),
(7, 'asd', 'asd', 5, 1, 1, '/Audio/episodes/7.mp3'),
(8, 'asd', 'asd', 5, 1, 1, '/Audio/episodes/8.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `user_follow_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `follow`
--

INSERT INTO `follow` (`id`, `user_id`, `user_follow_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `state` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(100) NOT NULL,
  `program_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `content`, `img`, `program_id`) VALUES
(1, 'mkkkkkkkkkkkkkkkk', ',,,,,,,,,,,', 1);

-- --------------------------------------------------------

--
-- Table structure for table `preference`
--

CREATE TABLE `preference` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `program_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preference`
--

INSERT INTO `preference` (`id`, `user_id`, `program_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `promo` varchar(100) DEFAULT NULL,
  `show_date` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`id`, `title`, `description`, `cover`, `promo`, `show_date`, `user_id`) VALUES
(1, 'test', 'ncbdchdhcvshvchsvhcvshvcsdhvchwvdhchwdvhcv', 'nh xv svx hsvjhvsx hvsh vh vhsv hs ', NULL, 'jhdjehdhjdhwdjwx wjsx hsvxhjswvx wshvxjhws', 1),
(2, 'email', 'password', 'password', NULL, 'password', 1),
(3, 'email', 'password', 'password', NULL, 'password', 1),
(6, 'email', 'password', '/public/images/programImage/6', NULL, 'password', 1),
(7, 'email', 'password', '/public/images/programImage/7', NULL, 'password', 1),
(9, 'email', 'password', '/public/images/programImage/9', NULL, 'password', 1),
(10, 'email', 'password', '/public/images/programImage/10', NULL, 'password', 1),
(11, 'asdasd', 'asdad', '/public/images/programImage/11', NULL, 'asd', 1),
(12, 'asd', 'asd', '/public/images/programImage/12', NULL, 'asd', 1),
(13, 'asd', 'asd', '/public/images/programImage/13', NULL, 'asd', 1),
(14, 'asd', 'asd', '/public/images/programImage/14', NULL, 'asd', 1),
(15, 'asd', 'asd', '/public/images/programImage/15', NULL, 'asd', 1),
(16, 'asd', 'asd', '/public/images/programImage/16', NULL, 'asd', 1),
(17, 'asd', 'asdas', '/public/images/programImage/17', NULL, 'asdasd', 1),
(18, 'asd', 'asdas', '/public/images/programImage/18', NULL, 'asdasd', 1),
(19, 'asd', 'asd', '/public/images/programImage/19', NULL, 'asd', 1),
(20, 'asd', 'asd', '/public/images/programImage/20', NULL, 'asdsd', 1),
(21, 'asd', 'asd', '/public/images/programImage/21', NULL, 'asd', 1),
(22, 'asd', 'asd', '/public/images/programImage/22', NULL, 'asd', 1),
(23, 'asd', 'asd', '/public/images/programImage/23', NULL, 'asd', 1),
(24, 'asd', 'asd', '/public/images/programImage/24', NULL, 'asd', 1),
(25, 'asd', 'asd', '/public/images/programImage/25', NULL, 'asd', 1),
(26, 'asd', 'asd', '/public/images/programImage/26', NULL, 'asd', 1),
(27, 'asd', 'asd', '/public/images/programImage/27', NULL, 'asd', 1),
(28, 'asd', 'asd', '/public/images/programImage/28', NULL, 'asd', 1),
(29, 'asd', 'asd', '/public/images/programImage/29', NULL, 'asd', 1),
(30, 'asd', 'asd', '/public/images/programImage/30', NULL, 'asd', 1),
(31, 'asd', 'asd', '/public/images/programImage/31', NULL, 'asd', 1),
(32, 'asd', 'asd', '/public/images/programImage/32', NULL, 'asd', 1),
(33, 'asd', 'asd', '/public/images/programImage/33', NULL, 'asd', 1),
(34, 'asd', 'asd', '/public/images/programImage/34', NULL, 'asd', 1),
(35, 'aaaaaaaaaa', 'aaaaaaaaasd', '/public/images/programImage/35', NULL, 'aaaaaaaaasd', 1),
(36, 'amr', 'amr', '/images/programImage/36', NULL, 'amr', 1),
(37, 'amr', 'amr', '/images/programImage/37', NULL, 'amr', 1),
(38, 'amr', 'amr', '/images/programImage/38', NULL, 'amr', 1),
(39, 'amr', 'amr', '/images/programImage/39', NULL, 'amr', 1),
(40, 'amr', 'amr', '/images/programImage/40', NULL, 'amr', 1),
(41, 'amr', 'amr', '/images/programImage/41', NULL, 'amr', 1),
(42, 'asdasd', 'asdasd', '/images/programImage/42', NULL, 'asdsd', 1),
(43, 'asdasd', 'asdasd', '/images/programImage/43', NULL, 'asdsd', 1),
(44, 'asdasd', 'asdasd', '/images/programImage/44', NULL, 'asdsd', 1),
(45, 'asdasd', 'asdasd', '/images/programImage/45', NULL, 'asdsd', 1),
(46, 'asdasd', 'asdasd', '/images/programImage/46', NULL, 'asdsd', 1),
(47, 'asdasd', 'asdasd', '/images/programImage/47', NULL, 'asdsd', 1),
(48, 'asdasd', 'asdasd', '/images/programImage/48', NULL, 'asdsd', 1),
(49, 'asdasd', 'asdasd', '/images/programImage/49', NULL, 'asdsd', 1),
(50, 'asdasd', 'asdasd', '/images/programImage/50', NULL, 'asdsd', 1),
(51, 'asdasd', 'asdasd', '/images/programImage/51', NULL, 'asdsd', 1),
(52, 'amr', 'amr', '/images/programImage/52', NULL, 'amr', 1),
(53, 'amr', 'amr', '/images/programImage/53', NULL, 'amr', 1),
(54, 'asd', 'asd', '/images/programImage/54js', NULL, 'asdasd', 1),
(55, 'asd', 'asd', '/images/programImage/55.js', NULL, 'asd', 1),
(56, 'amr', 'amr', '/images/programImage/56.', NULL, 'amr', 1),
(57, 'amr', 'amr', '/images/programImage/57.js', NULL, 'amr', 1),
(58, 'amr', 'amr', '/images/programImage/58.sql', NULL, 'amr', 1),
(59, 'asd', 'asd', '/images/programImage/59.jpg', NULL, 'asd', 1),
(60, 'sd', 'asd', '/images/programImage/60.jpg', NULL, 'asd', 1),
(61, 'asd', 'asd', '/images/programImage/61.js', NULL, 'asd', 1),
(62, 'asd', 'asd', '/images/programImage/62.js', NULL, 'asd', 1),
(63, 'asd', 'asd', '/images/programImage/63.js', NULL, 'asd', 1),
(64, 'asd', 'asd', '/images/programImage/64.jpg', NULL, 'asd', 1),
(65, 'asd', 'asd', '/images/programImage/65.jpg', NULL, 'asd', 1),
(66, 'asd', 'asd', '/images/programImage/66.jpg', NULL, 'asd', 1),
(67, 'asd', 'asd', '/images/programImage/67.jpg', NULL, 'asd', 1),
(68, 'asd', 'asd', '/images/programImage/68.js', NULL, 'asd', 1),
(69, 'asd', 'asd', '/images/programImage/69.js', NULL, 'asd', 1),
(70, 'asd', 'asd', '/images/programImage/70.js', NULL, 'asd', 1),
(71, 'asd', 'asd', '/images/programImage/71.js', NULL, 'asd', 1),
(72, 'asd', 'asd', '/images/programImage/72.js', NULL, 'asd', 1),
(73, 'asd', 'asd', '/images/programImage/73.js', NULL, 'asd', 1),
(74, 'asd', 'asd', '/images/programImage/74.jpg', NULL, 'asd', 1),
(75, 'asd', 'asd', '/images/programImage/75.jpg', NULL, 'asd', 1),
(76, 'asd', 'asd', '/images/programImage/76.jpg', NULL, 'asd', 1),
(77, 'asd', 'asd', '/images/programImage/77.js', NULL, 'asd', 1),
(78, 'asd', 'asd', '/images/programImage/78.js', NULL, 'asd', 1),
(79, 'asd', 'asd', '/images/programImage/79.js', NULL, 'asd', 1),
(80, 'asd', 'asd', '/images/programImage/80.js', NULL, 'asd', 1),
(81, 'asd', 'asd', '/images/programImage/81.js', NULL, 'asd', 1),
(82, 'asd', 'asd', '/images/programImage/82.js', NULL, 'asd', 1),
(83, 'asd', 'asd', '/images/programImage/83.js', NULL, 'asd', 1),
(84, 'asd', 'asd', '/images/programImage/84.js', NULL, 'asd', 1),
(85, 'asd', 'asd', '/images/programImage/85.js', NULL, 'asd', 1),
(86, 'asd', 'asd', '/images/programImage/86.js', NULL, 'asd', 1),
(87, 'asd', 'asd', '/images/programImage/87.jpg', NULL, 'asd', 1),
(88, 'asd', 'asd', '/images/programImage/88.jpg', NULL, 'asd', 1),
(89, 'asd', 'asd', '/images/programImage/89.jpg', NULL, 'asd', 1),
(90, 'asd', 'asd', '/images/programImage/90.js', NULL, 'asd', 1),
(91, 'asd', 'asd', '/images/programImage/91.js', NULL, 'asd', 1),
(92, 'asd', 'asd', '/images/programImage/92.js', NULL, 'asd', 1),
(93, 'asd', 'asd', '/images/programImage/93.js', NULL, 'asd', 1),
(94, 'asd', 'asd', '/images/programImage/94.js', NULL, 'asd', 1),
(95, 'asd', 'asd', '/images/programImage/95.js', NULL, 'asd', 1),
(96, 'asd', 'asd', '/images/programImage/96.js', NULL, 'asd', 1),
(97, 'asd', 'asd', '/images/programImage/97.js', NULL, 'asd', 1),
(98, 'asd', 'asd', '/images/programImage/98.js', NULL, 'asd', 1),
(99, 'asd', 'asd', '/images/programImage/99.js', NULL, 'asd', 1),
(100, 'asd', 'asd', '/images/programImage/100.js', NULL, 'asd', 1),
(101, 'asd', 'asd', '/images/programImage/101.js', NULL, 'asd', 1),
(102, 'asd', 'asd', '/images/programImage/102.js', NULL, 'asd', 1),
(103, 'asd', 'asd', '/images/programImage/103.js', NULL, 'asd', 1),
(104, 'asd', 'asd', '/images/programImage/104.jpg', NULL, '5', 1),
(105, 'asd', 'asd', '/images/programImage/105.jpg', NULL, '5', 1),
(106, 'asd', 'asd', '/images/programImage/106.jpg', NULL, '5', 1),
(107, 'amrr', 'amrr', '/images/programImage/107.jpg', '/Audio/programPromo/107.mp3', 'amrrr', 1),
(108, 'amrr', 'amrr', '/images/programImage/108.jpg', '/Audio/programPromo/108.mp3', 'amrrr', 1),
(109, 'amrr', 'amrr', '/images/programImage/109.jpg', '/Audio/programPromo/109.mp3', 'amrrr', 1),
(110, 'aaa', 'aaa', '/images/programImage/110.jpg', '/Audio/programPromo/110.mp3', 'aaa', 1),
(111, 'asd', 'asd', '/images/programImage/111.jpg', '/Audio/programPromo/111.mp3', 'asd', 1),
(112, '', '', '/images/programImage/112.', '/Audio/programPromo/112.mp3', '', 1),
(113, '', '', '/images/programImage/113.', '/Audio/programPromo/113.mp3', '', 1),
(114, 'asd', 'asd', '/images/programImage/114.jpg', '/Audio/programPromo/114.mp3', 'ad', 1),
(115, 'sq', 'sq', '/images/programImage/115.jpg', '/Audio/programPromo/115.mp3', 'sq', 1),
(116, 'sq', 'sq', '/images/programImage/116.jpg', '/Audio/programPromo/116.mp3', 'sq', 1),
(117, 'asd', 'asd', '/images/programImage/117.', '/Audio/programPromo/117.mp3', 'asd', 1),
(118, 'asd', 'asd', '/images/programImage/118.', '/Audio/programPromo/118.mp3', 'asd', 1),
(119, 'asd', 'asd', '/images/programImage/119.', '/Audio/programPromo/119.mp3', 'asd', 1),
(120, 'asd', 'asd', '/images/programImage/120.', '/Audio/programPromo/120.mp3', 'asd', 1),
(121, 'asd', 'asd', '/images/programImage/121.', '/Audio/programPromo/121.mp3', 'asd', 1),
(122, 'asd', 'asd', '/images/programImage/122.jpg', '/Audio/programPromo/122.mp3', 'asd', 1),
(123, 'we', 'we', '/images/programImage/123.jpg', '/Audio/programPromo/123.mp3', 'we', 1),
(124, 'asd', 'asd', '/images/programImage/124.', '/Audio/programPromo/124.mp3', 'asd', 1),
(125, 'asd', 'asd', '/images/programImage/125.', '/Audio/programPromo/125.mp3', 'asd', 1),
(126, 'asd', 'asd', '/images/programImage/126.', '/Audio/programPromo/126.mp3', 'asd', 1),
(127, 'asd', 'asd', '/images/programImage/127.js', '/Audio/programPromo/127.mp3', 'asd', 1),
(128, 'asd', 'asd', '/images/programImage/128.js', '/Audio/programPromo/128.mp3', 'asd', 1),
(129, 'asd', 'asd', '/images/programImage/129.', '/Audio/programPromo/129.mp3', 'asd', 1),
(130, 'asd', 'asd', '/images/programImage/130.', '/Audio/programPromo/130.mp3', 'asd', 1),
(131, 'asd', 'asd', '/images/programImage/131.', '/Audio/programPromo/131.mp3', 'asd', 1),
(132, 'asd', 'asd', '/images/programImage/132.', '/Audio/programPromo/132.mp3', 'asd', 1),
(133, 'asd', 'asd', '', '/Audio/programPromo/133.mp3', 'asd', 1),
(134, 'asd', 'asd', '', '', 'asd', 1),
(135, 'aaaaa', 'aaaaaaaaaaaaa', '/images/programImage/135.png', '', 'aaaaaaaaaa', 1),
(136, 'asd', 'asd', '/images/programImage/136.png', '/Audio/programPromo/136.mp3', 'asd', 1),
(137, 'asd', 'asd', '/images/programImage/137.jpg', '/Audio/programPromo/137.mp3', 'asd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `user_id` int(11) NOT NULL,
  `episode_id` int(11) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `watch` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`user_id`, `episode_id`, `rate`, `watch`) VALUES
(1, 1, 0, 0),
(1, 2, 5, NULL),
(1, 3, 5, NULL),
(1, 4, 5, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `facebookID` varchar(500) DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `accessToken` varchar(500) DEFAULT NULL,
  `role` tinyint(4) NOT NULL DEFAULT 0,
  `age` int(11) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `facebookID`, `user_name`, `email`, `password`, `accessToken`, `role`, `age`, `img`) VALUES
(1, NULL, 'يييييي', 'ييييييييييييي', 'ثثثث', NULL, 0, 23, 'ييييييييييييييييييييييييي'),
(2, NULL, '1', 'email', 'password', NULL, 1, 4, 'img'),
(7, NULL, 'amr', 'amr', '123', NULL, 1, 15, 'undefined'),
(55, NULL, 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAAZCOG3GgZBMY3ZBDZBiBX9ecXGX2f5QR0UoLiYLDrkAL26daWXn79jZBfZBoNnUW4LSIAAVZC02yFUGhcSV31hdjmUVHT11NfRJLRFEDSKPAR0KZB3MZAzMaPsYspRAPsrLCYv3bzbGmztknLs1s6hGIZC0U1n6SHOAZDZD', NULL, 1, 1, 'img'),
(56, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAC1tZC2wiykbsHAu2ylrAERsMtelMose0m99Vfh3darHszwIZB2h7EUaUOrBmVMUZAxLSwRgsb0zvijpfmJ5TfFw8aRieZC5Yn5DKZBJm5sAgTxbuLVZBHzKMKo3pTo7Y46eWZBgNhY55ncYvUkuoQdRbplJEwZABAZDZD', 'EAAJOU4KET3MBAC1tZC2wiykbsHAu2ylrAERsMtelMose0m99Vfh3darHszwIZB2h7EUaUOrBmVMUZAxLSwRgsb0zvijpfmJ5TfFw8aRieZC5Yn5DKZBJm5sAgTxbuLVZBHzKMKo3pTo7Y46eWZBgNhY55ncYvUkuoQdRbplJEwZABAZDZD', 1, 1, 'img'),
(57, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAER43YgOxZCWuZBhCy6HixB7SUbJmQMTXOoIPPHmd9dRoX7q9JO0P5J2ZBHp0BFScJ4A7ZCOYxMqpoapsdYtywWWRtxfRkZCPbmqlaw3Cf2KPKZBFQauronbTgu0CCorpeYsrYscOFJ9XvvxwyZCdVysYKfLydkrQZDZD', 'EAAJOU4KET3MBAER43YgOxZCWuZBhCy6HixB7SUbJmQMTXOoIPPHmd9dRoX7q9JO0P5J2ZBHp0BFScJ4A7ZCOYxMqpoapsdYtywWWRtxfRkZCPbmqlaw3Cf2KPKZBFQauronbTgu0CCorpeYsrYscOFJ9XvvxwyZCdVysYKfLydkrQZDZD', 1, 1, 'img'),
(58, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAD3aYaOyWHR8XbwTjohxizbiBYlC8CLP5uOtYRiwEkfJrUalx0aUa7VclQkawKb0xiN4rpT8G06Y8oH6QD9SJRrnbV8VkcsbMNUMYMgOzC236JEenyTODGVcO1DZAR3zYOXKnYcZBoAndVEQ0nOtGf9Xf05AZDZD', 'EAAJOU4KET3MBAD3aYaOyWHR8XbwTjohxizbiBYlC8CLP5uOtYRiwEkfJrUalx0aUa7VclQkawKb0xiN4rpT8G06Y8oH6QD9SJRrnbV8VkcsbMNUMYMgOzC236JEenyTODGVcO1DZAR3zYOXKnYcZBoAndVEQ0nOtGf9Xf05AZDZD', 1, 1, 'img'),
(59, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAMXE85g8MDU8veVoushA8rVfGUeZBtAGLVE1hZAZAPWRZAo4uov9ZCj0RJboaXeJw0S2O6W1k7UDd71lv53llTGiz7tYwxwSggapFqPhr8q8d7HzJSB3d6yXAdHKBEs9QSItiJgYsrsuzhWWh6ThSzpfeQ2ZAthgZDZD', 'EAAJOU4KET3MBAMXE85g8MDU8veVoushA8rVfGUeZBtAGLVE1hZAZAPWRZAo4uov9ZCj0RJboaXeJw0S2O6W1k7UDd71lv53llTGiz7tYwxwSggapFqPhr8q8d7HzJSB3d6yXAdHKBEs9QSItiJgYsrsuzhWWh6ThSzpfeQ2ZAthgZDZD', 1, 1, 'img'),
(60, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAEUeSWGr5uBJofuHNHsFA7eAyl9duOcKZAtYbNiwo4gZBCppErVvjiGnHLnbs8tCViRJD8uDCHtkOYhfIBsHjuxV9v2sWnMjAyMyFyzmgeNZCXC3syyhtc2ZA0xgXEQTVOUVctZCGwdCLT1iHPN8n14jgQvNTkQZDZD', 'EAAJOU4KET3MBAEUeSWGr5uBJofuHNHsFA7eAyl9duOcKZAtYbNiwo4gZBCppErVvjiGnHLnbs8tCViRJD8uDCHtkOYhfIBsHjuxV9v2sWnMjAyMyFyzmgeNZCXC3syyhtc2ZA0xgXEQTVOUVctZCGwdCLT1iHPN8n14jgQvNTkQZDZD', 1, 1, 'img'),
(61, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAOWKVfo9SKELRJvqzha2MBuB9tqsVZBnbb6lVaKtzJGOIYjgSGIzOeiGSZCFiV4DbazWGSRbcD4hB7G8kniC7dMI6dtjWeXrzVQltjlhZBD8IvUEnTgVeGJeiHlun4AZAd8lZAZAp3ewC60G0W0deefPZCJKGZCfKAZDZD', 'EAAJOU4KET3MBAOWKVfo9SKELRJvqzha2MBuB9tqsVZBnbb6lVaKtzJGOIYjgSGIzOeiGSZCFiV4DbazWGSRbcD4hB7G8kniC7dMI6dtjWeXrzVQltjlhZBD8IvUEnTgVeGJeiHlun4AZAd8lZAZAp3ewC60G0W0deefPZCJKGZCfKAZDZD', 1, 1, 'img'),
(62, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBAKR6i3RacqyDIKN10aHZCecly61GOhpHI1lH5SMIy6AfCZAr3BtzpDSXcnTnZAiZCddoa2LXmfCF6paDf723eQ54rfXW6L4KWjZA6GhTxZAQbFLs9sWubR54ApFNDmOyjFJvVb813ni7EhidBZCZC2xVjXSJJsr08QZDZD', 'EAAJOU4KET3MBAKR6i3RacqyDIKN10aHZCecly61GOhpHI1lH5SMIy6AfCZAr3BtzpDSXcnTnZAiZCddoa2LXmfCF6paDf723eQ54rfXW6L4KWjZA6GhTxZAQbFLs9sWubR54ApFNDmOyjFJvVb813ni7EhidBZCZC2xVjXSJJsr08QZDZD', 1, 1, 'img'),
(63, NULL, 'asd', 'asd', 'asd', NULL, 1, 1, 'undefined'),
(64, '3305143482873498', 'Amr Fahmy', 'elkingamr46@yahoo.com', 'EAAJOU4KET3MBACe78ImRdNlgM8UY1glFEPvrqS3LYm4h8EO7EaSE3FbKFLSFVXzYPsNM0RV5hXlYZAM0J4vWrNiOhamEySKb85jFnONnrGtF9Rj1FkGQJcjAX71HuNvl92DBgxh0N5jdSSDLqOJdcRGRRd487GZAlASDZAvCgZDZD', 'EAAJOU4KET3MBACe78ImRdNlgM8UY1glFEPvrqS3LYm4h8EO7EaSE3FbKFLSFVXzYPsNM0RV5hXlYZAM0J4vWrNiOhamEySKb85jFnONnrGtF9Rj1FkGQJcjAX71HuNvl92DBgxh0N5jdSSDLqOJdcRGRRd487GZAlASDZAvCgZDZD', 1, 1, 'img');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_ibfk_1` (`episode_id`),
  ADD KEY `comment_ibfk_2` (`user_id`),
  ADD KEY `comment_ibfk_3` (`post_id`);

--
-- Indexes for table `episode`
--
ALTER TABLE `episode`
  ADD PRIMARY KEY (`id`),
  ADD KEY `episode_ibfk_1` (`program_id`),
  ADD KEY `episode_ibfk_2` (`user_id`);

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `follow_ibfk_1` (`user_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notif_to_user` (`user_id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_to_program` (`program_id`);

--
-- Indexes for table `preference`
--
ALTER TABLE `preference`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pref_ipfk_1` (`program_id`),
  ADD KEY `pref_ibfk_2` (`user_id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`),
  ADD KEY `program_ipfk_1` (`user_id`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`user_id`,`episode_id`) USING BTREE,
  ADD KEY `user_id` (`user_id`),
  ADD KEY `episode_id` (`episode_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `episode`
--
ALTER TABLE `episode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `preference`
--
ALTER TABLE `preference`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`episode_id`) REFERENCES `episode` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_3` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `notif_to_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_to_program` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `preference`
--
ALTER TABLE `preference`
  ADD CONSTRAINT `pref_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pref_ipfk_1` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `program_ipfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`episode_id`) REFERENCES `episode` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
