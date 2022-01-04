DROP procedure IF EXISTS `bsp_listar_categorias`;
DELIMITER $$
CREATE PROCEDURE `bsp_listar_categorias`()
BEGIN
	/*
	Permite listar las categorias ordenadas por nombre.
    */
    SELECT		*
    FROM		categorias
    ORDER BY	1;
END$$
DELIMITER ;