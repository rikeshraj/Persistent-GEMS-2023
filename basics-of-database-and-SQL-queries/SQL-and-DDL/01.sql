create table building (id int not null,
                       owner_name varchar2(100) not null,
                       address varchar2(100),
                       building_type_id int,
                       contact_number varchar2(100),
                       email_address varchar2(100),
                       primary key(id),
                       foreign key(building_type_id) references building_type(id)
                       );
