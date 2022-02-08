-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: dinosaurios
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dinosaurio`
--

DROP TABLE IF EXISTS `dinosaurio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinosaurio` (
  `idDino` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `info` varchar(500) NOT NULL,
  `fuerza` varchar(45) NOT NULL,
  `fechaAlta` date NOT NULL,
  `fechaBaja` date DEFAULT '1900-01-01',
  `estado` varchar(45) DEFAULT '"activo"',
  PRIMARY KEY (`idDino`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinosaurio`
--

LOCK TABLES `dinosaurio` WRITE;
/*!40000 ALTER TABLE `dinosaurio` DISABLE KEYS */;
INSERT INTO `dinosaurio` VALUES (1,'Blue','blue.jpg','Es un ejemplar femenino de Velociraptor creada en Jurassic World.','7','2022-02-07','1900-01-01','activo'),(2,'Allosaurus','Allo.jpg','Allosaurus es un gran terópodo típico, con un cráneo grande y un cuello corto, una cola larga y miembros superiores reducidos','8','2022-02-07','1900-01-01','activo'),(3,'Carnotaurus','carno.jpg','Lo más notable de este dinosaurio son sus dos pequeños cuernos sobre los ojos en su pequeña cabeza, siendo el primer carnívoro que mostrara cuernos bien formados y definidos','8','2022-02-07','1900-01-01','activo'),(4,'Indominus Rex','indominus.jpg','(latín \"el rey indomable\") es un dinosaurio aveterópodo híbrido transgénico y única especie del género ficticio Indominus. La especie consistió de una hembra creada mediante ingeniería genética','9','2022-02-07','1900-01-01','activo'),(5,'Indoraptor','indoraptor.jpg','Este es el híbrido perfecto de las dos criaturas más peligrosas que alguna vez caminaron sobre la Tierra!','8','2022-02-07','1900-01-01','activo'),(6,'Tyrannosaurus Rex','Rex.jpg','La especie tipo y única especie válida donde rex significa rey en latín, comúnmente abreviado como T. rex','10','2022-02-07','1900-01-01','activo'),(7,'Spinosaurus','Spino.jpg','Spinosaurus pudo ser el más grande de todos los dinosaurios carnívoros, más grande aún que Tyrannosaurus rex y Giganotosaurus','9','2022-02-07','1900-01-01','activo'),(8,'Velociraptor','velociraptor.jpg','Fue un carnívoro bípedo, con una cola larga y rígida, y unas garras grandes con forma de hoz en cada pata, que probablemente le facilitaba el matar a sus presas.','6','2022-02-07','1900-01-01','activo'),(9,'Giganotosaurus','giganto.jpg','Es uno de los más grandes terópodos conocidos, mayor que el Tyrannosaurus','9','2022-02-07','1900-01-01','activo');
/*!40000 ALTER TABLE `dinosaurio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-07 19:31:20
