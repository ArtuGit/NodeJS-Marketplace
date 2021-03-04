create table products
(
    id int auto_increment,
    title varchar(250) not null,
    price decimal(10,2) null,
    description text null,
    imageUrl varchar(2048) not null,
    constraint products_id_uindex
        unique (id)
);

alter table products
    add primary key (id);

