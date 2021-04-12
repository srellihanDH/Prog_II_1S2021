CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (10)
);

CREATE TABLE comentarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (10),
    usuario_id INT,
    foreign key (usuario_id) 
    references usuarios (id)
);

insert into usuarios (nombre) values ('eze');
insert into usuarios (nombre) values ('seba');
insert into usuarios (nombre) values ('ale');

select * from usuarios;

insert into comentarios (nombre, usuario_id)
 values ('coment 4', 2);

select * from comentarios;

select usuarios.nombre AS 'Usuario', 
comentarios.nombre AS 'Comentario'
from usuarios inner join comentarios
on comentarios.usuario_id = usuarios.id;
--  foreign key (usuario_id)     references usuarios (id)
