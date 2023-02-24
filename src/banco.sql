create database mensageiro;

create table contatos (
  telefone integer primary key,
  nome text not null,   
  email text
);

create table usuarios (
  id serial primary key, 
  nome text not null,
  telefone integer not null unique,
  email text not null unique, 
  senha text not null,
  contato_id integer references  contatos (telefone)
);

create table mensagens (
id serial primary key,
 mensagem text,
  usuario_id integer references usuarios(id),
  contato_id integer references contatos (telefone)   
);
