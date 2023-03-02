create database mensageiro;
create table usuarios (
  id serial primary key, 
  nome text not null,
  telefone text not null unique,
  email text not null unique, 
  senha text not null  
);

create table contatos (
  telefone text primary key not null, 
  nome text not null,   
  email text, 
  usuario_id integer references usuarios(id)  
);

create table mensagens (
id serial primary key,
 mensagem text,
  usuario_id integer references usuarios(id),
  telefone text references contatos (telefone)   
);

