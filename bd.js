conn= new Mongo();

db=conn.getDB('foodbd');
db.usuarios.insert(
    [
        {id_usuario:1,
        nombre:'Katherine',
        apellido:'Carrera',
        dni:'123456789',
        telefono:'998420157',
        direccion:'AV Camino Real 1234',
        id_persona:100, 
        created_at: new Date ('07/01/2020')}
    ]
);
db.recetas.insert(
    [
        {id_receta:1,
        nombre:'Receta 1',
        cant_ingredientes:6,
        pasos:'1 Mezclar el ingrediente con ....',
        id_imagene:1,
        tiempo:'2 horas',
        modo:'Activo',
        id_categoria:100,
        id_comentario:1,
        created_at: new Date ('07/01/2020')}
    ]
);
db.comentarios.insert(
    [
        {id_comentario:1,
        editor:'Juan Perez',
        mensaje:'mensaje mensaje mensaje ....',
        created_at: new Date ('07/01/2020')}
    ]
);
db.categorias.insert(
    [
        {id_categoria:100,
        nombre:'Categoria 1',
        descripcion:'descripcion 1',
        created_at: new Date ('07/01/2020')}
    ]
);

