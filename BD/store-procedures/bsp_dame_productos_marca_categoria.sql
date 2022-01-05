DROP procedure IF EXISTS `bsp_dame_productos_marca_categoria`;
DELIMITER $$

CREATE PROCEDURE `bsp_dame_productos_marca_categoria`(pIdMarca int,pIdCategoria int)
BEGIN
	/*
    Procedimiento que devuelve todos los productos de la BD de una marca y una categoria
	*/
    SELECT p.Producto,p.Descripcion,p.Talle,p.Articulo,d.Deposito
    FROM productos p
    inner join depositos d
    WHERE p.IdMarca = pIdMarca and p.IdCategoria = pIdCategoria
    GROUP BY p.IdProducto;
    
END$$
DELIMITER ;