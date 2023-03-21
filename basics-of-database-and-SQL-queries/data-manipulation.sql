--01
--Table building - Insert
/*
insert into building_type values 
(1, 'Shopping Mall', 2);
insert into building_type values
(2, 'Hotel', 2);
*/
insert into building values
(1, 'Nicholas', 'Pune', 2, '123-4567890', 'nicholas@yahoo.com');
insert into building values
(2, 'Ron Sim', 'Mumbai', 2, '221-9876543', 'ronsim@gmail.com');
insert into building values
(3, 'Raghu', 'Delhi', 2, '332-1254386', 'raghu@outlook.com');

--02
--Table building - Update
update building
set owner_name = 'Alexander'
where owner_name = 'Nicholas';

--03
--Table building(delete)
delete from building where owner_name = 'Ron Sim';
