--01
--Create building
create table building (id int not null,
                       owner_name varchar2(100) not null,
                       address varchar2(100),
                       building_type_id int,
                       contact_number varchar2(100),
                       email_address varchar2(100),
                       primary key(id),
                       foreign key(building_type_id) references building_type(id)
                       );

--02
--Alter building
alter table building rename column email_address to email;

--03
--Alter building(Add Column)
alter table building add description varchar(255) not null;

--04
--Remove column from building table
alter table building drop column address;

--05
--Change column type in building table
alter table building drop column address;
