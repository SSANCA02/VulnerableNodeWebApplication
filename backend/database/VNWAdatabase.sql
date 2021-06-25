-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: vwatfm
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.31-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `idcomment` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`idcomment`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
INSERT INTO `message` VALUES (1,'sandra','first comment','sandra@sandra.es','2021-03-31 11:49:58',0),(2,'test','please unsuspend me','test@test.es','2021-03-31 11:52:09',0),(10,'XSS stored','<a onmouseover=alert(document.cookie)>click me!</a>','XSS stored','2021-05-11 10:19:11',0),(11,'asd','<img src=”#” onclick=alert(document.cookie)>','as','2021-05-11 14:01:58',0);
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `idpost` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(205) NOT NULL,
  `brief` varchar(511) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime NOT NULL,
  `status` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idpost`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Is you app secure?','You never know if your app is safe enough.','Vulnerable web applications helps you improve with your security skills!','2021-02-02 16:10:03',0,2),(2,'Do you have everything for your trip? ','Don\'t forget input validation!','Always try to think what you might need. Check twice.','2021-02-02 16:16:03',0,8),(3,'What is a blog and what is it for? ','An example is precisely this blog that you are reading right now.','A blog is a website in which content is published from time to time in the form of articles (also called posts) ordered by publication date, so the most recent article will appear first. ','2021-02-03 16:16:03',0,8),(4,'Stay informed of technology news. ','Bad guys are always up to date. Why aren\'t you? ','A story about escapades and tough men. To combat the rise in violent crime, the Chief of Police hires Detective Good Guy to form a team of criminals. The detective is suspended from the police force for the use of excessive force. But he he brings together the team members: Bad Boyl, who is a gangster, Really Bad Boy who is the youngest serial killer with extraordinary intelligence and Really Bad Boy who is a hit man. ','2021-02-03 16:17:03',0,2),(5,'Last year experience','Just a different story','Last Year is a 5 vs 1 multiplayer survival horror game where 5 players play as a group of classic high school characters and must survive against one player thats playing as the Killer. As the students your goal is to escape from East Side Highschool and make it out alive.','2021-03-03 16:18:03',1,4),(6,'From today\'s featured article','Typhoon Maemi ','Typhoon Maemi was the most powerful typhoon to strike South Korea since records began in 1904. Maemi formed on September 4, 2003 in the western Pacific and became a typhoon on September 8.','2021-03-11 14:37:51',1,2),(7,'Private post','just a private post','It looks good <3','2021-04-09 10:51:11',1,8),(8,'asd','asd','sad','2021-05-03 09:53:06',1,9),(9,'XSS stored','XSS stored','<a onmouseover=alert(document.cookie)>click me!</a>','2021-05-11 10:13:07',1,2);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(45) NOT NULL,
  `name` varchar(16) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'admin','Sr admin','admiez','admin','admin@email.es'),(3,'guest','Sr guest','guestez','user','guest@email.es'),(4,'test','test','test','user','test@test.es'),(5,'adandemain','Adan','Demain','suspended','adan@demain.es'),(7,'Gv6GcbnBu2uQcFX','Eve','Evette','admin','eve@email.es'),(8,'vulnerable','Vul','Nerable','user','vulnerable@email.es'),(9,'administrator','admin','admin','admin','admin@admin.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vwatfm'
--

--
-- Dumping routines for database 'vwatfm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-25 14:00:30
