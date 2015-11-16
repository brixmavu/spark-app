drop table if exists class;
create table class(
	class_id int not null auto_increment,
	class_name varchar(30),
	primary key (class_id)
);

drop table if exists staff;
create table staff(
	staff_id int not null auto_increment,
	first_name varchar(14),
	last_name varchar(15),
	primary key (staff_id)
);