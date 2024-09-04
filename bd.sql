create database academia;

use academia;

create table cadastrar(
    id integer primary key auto_increment,
    dadosNome varchar(100) not null,
    dadosRG varchar(20) not null,
    dadosCPF varchar(15) not null,
    dadosTelefone varchar(20) not null,
    dadosEndereco varchar(250) not null,
    dadosfomadadePagamento varchar(100) not null
);


