DROP TABLE ejemplo;
create table ejemplo (
	id INT PRIMARY KEY AUTO_INCREMENT,
    numero INT UNIQUE
);

insert into ejemplo(numero) values (1);
insert into ejemplo(numero) values (1);
