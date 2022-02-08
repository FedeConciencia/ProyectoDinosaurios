create database dinosaurios;

#Restablecer auto_incremento de columna =>
alter table dinosaurio auto_increment = 1;

use dinosaurios;

select * from dinosaurio;

delete from dinosaurio;

SET SQL_SAFE_UPDATES = 0;

UPDATE dinosaurio SET imagen = "velociraptor.jpg" where idDino = 1;