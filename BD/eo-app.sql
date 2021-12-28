-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.31 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para procedimiento eo-app.bsp_listar_marcas_categoria
DELIMITER //
CREATE PROCEDURE `bsp_listar_marcas_categoria`(pIdCategoria INT)
BEGIN
	/*
	Permite listar las marcas de una categoria especifica seleccionada
    */
    SELECT		m.Marca
    FROM		marcas m
	JOIN		categoriamarcas cm
    ON			m.IdMarca = cm.IdMarca
    WHERE		cm.IdCategoria = pIdCategoria;
    -- ORDER BY	1;
END//
DELIMITER ;

-- Volcando estructura para tabla eo-app.categoriamarcas
CREATE TABLE IF NOT EXISTS `categoriamarcas` (
  `IdCategoria` int(11) NOT NULL,
  `IdMarca` int(11) NOT NULL,
  PRIMARY KEY (`IdCategoria`,`IdMarca`),
  KEY `fk_Categorias_has_Marcas_Marcas1_idx` (`IdMarca`),
  KEY `fk_Categorias_has_Marcas_Categorias1_idx` (`IdCategoria`),
  CONSTRAINT `fk_Categorias_has_Marcas_Categorias1` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Categorias_has_Marcas_Marcas1` FOREIGN KEY (`IdMarca`) REFERENCES `marcas` (`IdMarca`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla eo-app.categoriamarcas: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `categoriamarcas` DISABLE KEYS */;
INSERT INTO `categoriamarcas` (`IdCategoria`, `IdMarca`) VALUES
	(1, 1),
	(3, 1),
	(3, 2),
	(4, 5);
/*!40000 ALTER TABLE `categoriamarcas` ENABLE KEYS */;

-- Volcando estructura para tabla eo-app.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `IdCategoria` int(11) NOT NULL,
  `Categoria` varchar(60) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla eo-app.categorias: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` (`IdCategoria`, `Categoria`, `Descripcion`) VALUES
	(1, 'Camisas', NULL),
	(2, 'Pantalones', NULL),
	(3, 'Chombas', NULL),
	(4, 'Shorts', NULL),
	(5, 'Botines', NULL),
	(6, 'Sandalias', NULL),
	(7, 'Remeras', NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;

-- Volcando estructura para tabla eo-app.depositos
CREATE TABLE IF NOT EXISTS `depositos` (
  `IdDeposito` int(11) NOT NULL,
  `Deposito` varchar(45) DEFAULT NULL COMMENT 'Posee el numero de deposito o si esta expuesto en los mostradores',
  `Observaciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdDeposito`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla eo-app.depositos: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `depositos` DISABLE KEYS */;
INSERT INTO `depositos` (`IdDeposito`, `Deposito`, `Observaciones`) VALUES
	(1, 'Planta baja', NULL),
	(2, 'Planta alta', NULL),
	(3, 'Oficina', NULL),
	(4, 'Ultimo piso 1', NULL),
	(5, 'Ultimo piso 2', NULL);
/*!40000 ALTER TABLE `depositos` ENABLE KEYS */;

-- Volcando estructura para tabla eo-app.marcas
CREATE TABLE IF NOT EXISTS `marcas` (
  `IdMarca` int(11) NOT NULL,
  `Marca` varchar(60) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdMarca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla eo-app.marcas: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` (`IdMarca`, `Marca`, `Descripcion`) VALUES
	(1, 'Bando', NULL),
	(2, 'Taverniti', NULL),
	(3, 'Dromo', NULL),
	(4, 'Scotfield', NULL),
	(5, 'Mitre', NULL);
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;

-- Volcando estructura para tabla eo-app.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `IdProducto` bigint(20) NOT NULL,
  `IdMarca` int(11) NOT NULL,
  `IdDeposito` int(11) NOT NULL,
  `IdCategoria` int(11) NOT NULL,
  `Producto` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(255) DEFAULT NULL,
  `Talle` varchar(20) DEFAULT NULL COMMENT 'Contiene el talle del producto segun la categoria',
  `Articulo` varchar(60) DEFAULT NULL COMMENT 'Articulo del producto',
  PRIMARY KEY (`IdProducto`,`IdMarca`,`IdDeposito`,`IdCategoria`),
  KEY `fk_Productos_Marcas_idx` (`IdMarca`),
  KEY `fk_Productos_Depositos1_idx` (`IdDeposito`),
  KEY `fk_Productos_Categorias1_idx` (`IdCategoria`),
  CONSTRAINT `fk_Productos_Categorias1` FOREIGN KEY (`IdCategoria`) REFERENCES `categorias` (`IdCategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_Depositos1` FOREIGN KEY (`IdDeposito`) REFERENCES `depositos` (`IdDeposito`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_Marcas` FOREIGN KEY (`IdMarca`) REFERENCES `marcas` (`IdMarca`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla eo-app.productos: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
