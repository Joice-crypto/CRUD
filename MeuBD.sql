create database dbApiTarefas;

use dbApiTarefas;

create table tarefas (
codigo int primary key auto_increment,
nome varchar(50), 
conteudo varchar(70),
dataCriacao date,
autor varchar(50)
);

insert into tarefas (nome,conteudo,dataCriacao,autor) values ('cafe','fazer cafe','2021-05-05','Marcos');
insert into tarefas (nome,conteudo,dataCriacao,autor) values ('lixo','tirar o lixo','2021-09-02','Angelica');
insert into tarefas (nome,conteudo,dataCriacao,autor) values ('emails','verificar os emails recebidos','2021-12-07','Joao');

select * from tarefas