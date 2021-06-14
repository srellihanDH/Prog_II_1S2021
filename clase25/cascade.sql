drop table perros;
drop table razas;

create table razas (
id int unsigned primary key auto_increment,
raza varchar(300),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

create table perros (
id int unsigned primary key auto_increment,
nombre varchar(300),
raza_id int unsigned,
color_id int unsigned,
foreign key (raza_id) references razas(id) ON DELETE CASCADE
);

insert into razas (raza) values ('boxer');
insert into perros (nombre, raza_id, color_id) values ('bobby', 1, 1);
insert into perros (nombre, raza_id, color_id) values ('firulais', 1, 1);

-- delete from razas where id = 1;
-- select * from razas;
-- select * from perros;
