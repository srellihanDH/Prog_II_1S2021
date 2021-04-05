Create Table posts (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL
);

Create Table comments (
	id INT PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(200),
    post_id INT,
    FOREIGN KEY (post_id) references posts(id)
);

alter table posts
add text VARCHAR(2000) NOT NULL;

alter table posts
modify text VARCHAR(3000) NOT NULL;

alter table posts
drop text;

drop table comments;
drop table posts;

insert into posts (id,title) values (100, 'fijo');

insert into posts (title) values ('titulo');
insert into posts (title) values ('nuevo');

delete from posts where id = 2;

update posts set title = 'otro' where id = 1;

select * from posts;

insert into comments (text, post_id) values ('comentario', 1);
