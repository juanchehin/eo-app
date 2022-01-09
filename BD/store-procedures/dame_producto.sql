DROP procedure IF EXISTS `bsp_dame_producto`;
DELIMITER $$

CREATE PROCEDURE `bsp_dame_producto`(pIdProducto int)
BEGIN
	/*
    Procedimiento que devuelve el producto de la BD dado un id
	*/
    SELECT p.IdProducto,p.Producto,p.Descripcion,p.Talle,p.Articulo,p.Precio,d.Deposito
    FROM productos p
    inner join depositos d on p.IdDeposito = d.IdDeposito
    WHERE IdProducto = pIdProducto;
    
END$$
DELIMITER ;