create table razas (
id int unsigned primary key auto_increment,
raza varchar(300),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table colores (
id int unsigned primary key auto_increment,
color varchar(300)
);

create table perros (
id int unsigned primary key auto_increment,
nombre varchar(300),
raza_id int unsigned,
color_id int unsigned,
foreign key (raza_id) references razas(id),
foreign key (color_id) references colores(id)
);

insert into razas (raza) values ('boxer');
insert into colores (color) values ('marron');
insert into perros (nombre, raza_id, color_id) 
values ('bobby', 1, 1);
insert into perros (nombre, raza_id, color_id) 
values ('firulais', 1, 1);
