DROP procedure IF EXISTS `bsp_listar_marcas_categoria`;
DELIMITER $$
CREATE PROCEDURE `bsp_listar_marcas_categoria`(pIdCategoria INT)
BEGIN
	/*
	Permite listar las marcas de una categoria especifica seleccionada
    */
    SELECT		m.IdMarca,m.Marca,cm.IdCategoria
    FROM		marcas m
	JOIN		categoriamarcas cm
    ON			m.IdMarca = cm.IdMarca
    WHERE		cm.IdCategoria = pIdCategoria;
    -- ORDER BY	1;
END$$
DELIMITER 