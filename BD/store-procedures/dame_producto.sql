DROP procedure IF EXISTS `dame_producto`;
DELIMITER $$

CREATE PROCEDURE `dame_producto`(pIdProducto int)
BEGIN
	/*
    Procedimiento que devuelve el producto de la BD dado un id
	*/
    SELECT *
    FROM productos
    WHERE IdProducto = pIdProducto;
    
END$$
DELIMITER ;