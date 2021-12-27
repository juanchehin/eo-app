-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eo-app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema eo-app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eo-app` DEFAULT CHARACTER SET utf8 ;
USE `eo-app` ;

-- -----------------------------------------------------
-- Table `eo-app`.`Marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eo-app`.`Marcas` (
  `IdMarca` INT NOT NULL,
  `Marca` VARCHAR(60) NULL,
  `Descripcion` VARCHAR(255) NULL,
  PRIMARY KEY (`IdMarca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eo-app`.`Depositos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eo-app`.`Depositos` (
  `IdDeposito` INT NOT NULL,
  `Deposito` VARCHAR(45) NULL COMMENT 'Posee el numero de deposito o si esta expuesto en los mostradores',
  `Observaciones` VARCHAR(255) NULL,
  PRIMARY KEY (`IdDeposito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eo-app`.`Categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eo-app`.`Categorias` (
  `IdCategoria` INT NOT NULL,
  `Categoria` VARCHAR(60) NULL,
  `Descripcion` VARCHAR(255) NULL,
  PRIMARY KEY (`IdCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eo-app`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eo-app`.`Productos` (
  `IdProducto` BIGINT NOT NULL,
  `IdMarca` INT NOT NULL,
  `IdDeposito` INT NOT NULL,
  `IdCategoria` INT NOT NULL,
  `Producto` VARCHAR(45) NULL,
  `Descripcion` VARCHAR(255) NULL,
  `Talle` VARCHAR(20) NULL COMMENT 'Contiene el talle del producto segun la categoria',
  `Articulo` VARCHAR(60) NULL COMMENT 'Articulo del producto',
  PRIMARY KEY (`IdProducto`, `IdMarca`, `IdDeposito`, `IdCategoria`),
  INDEX `fk_Productos_Marcas_idx` (`IdMarca` ASC) VISIBLE,
  INDEX `fk_Productos_Depositos1_idx` (`IdDeposito` ASC) VISIBLE,
  INDEX `fk_Productos_Categorias1_idx` (`IdCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Marcas`
    FOREIGN KEY (`IdMarca`)
    REFERENCES `eo-app`.`Marcas` (`IdMarca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_Depositos1`
    FOREIGN KEY (`IdDeposito`)
    REFERENCES `eo-app`.`Depositos` (`IdDeposito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_Categorias1`
    FOREIGN KEY (`IdCategoria`)
    REFERENCES `eo-app`.`Categorias` (`IdCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
