# GIT Desarrollo Colaborativo

Esto es una guia para los alumnos de la capacitacion __GIT y GitHub__ que cursan los dias _Lunes, Miercoles y Viernes de 14hs a 17hs_.

## Areas de GIT

1. __Working Directory__: Corresponde al _Area de trabajo_, donde vamos a crear, editar y eliminar nuestros archivos. Muy rara vez vamos a utilizar la consola, pero existen varios comandos que son de utilidad.
    * __git init__: inicializa un repositorio en el directorio actual.
    * __git config user.name `<username>`__: define el nombre del usuario en el repositorio local.
    * __git config user.email `<email>`__: define el correo de contacto del repositorio local.
    * __rm -rf `.git`__: elimina el repositorio local, manteniendo los archivos.

1. __Staging Area (INDEX)__: Corresponde al _Area de control de cambios_ donde se realizan las capturas de codigo (snapshot), que pueden utilizarse para reestablecer archivos o preparse para su futura confirmacion.

    * __git status__: muestra el estado de los archivos comparandolos con la ultima captura de codigo realizada.
    * __git diff__: muestra las diferencias de codigo con respecto a la ultima captura registrada en el INDEX
    * __git add `<file>`__: agrega los cambios del archivo al area de control de cambios mediante una captura.

1. __Repository__: Corresponde al _Almacen de datos_ donde se guardan las confirmaciones realizadas mediante commits en archivos _BLOB (Binary Large Object)_ y sirven como punto de referencia para navegar en la historia del proyecto.

    * __git commit__: abre el editor para emitir una confirmacion de los cambios realizados.
    * __git log__: muestra el registro de confirmaciones realizadas en formato de commits.
    * __git push__: envia los cambios locales a la rama correspondiente de repositorio remoto.

## Apuntadores

Corresponden a referencias que señalan a un commit en particular, estos pueden ser de diferentes tipos y facilitan la navegacion dentro del _historial de confirmaciones_.

* __HEAD__: Apuntador Movil que indica donde nos encontramos actualmente en el _registro de cambios_.
* __BRANCH__: Apuntador Dinamico que siempre se corresponde con el ultimo commit de la historia actual.
* __TAG__: Apuntador Estatico que se corresponde con un commit especifico y facilita la navegacion del historial.
* __STASH__: Apuntador de la zona temporal, ideal para cuando tenes cambios pendientes que no ameritan un commit.

## Control de Cambios

Cuando trabajamos con el historial de cambios, existen diferentes operaciones que podemos ejecutar, entre las que se encuentran las siguientes.

* __restore__: reestablece un archivo a como se encuentra en la ultima captura registrada.
* __reset__: elimina commit del historial e incluso podemos reestablecer el working directory.
* __revert__: deshace los cambios de un commit, con otro que realiza las operaciones opuestas.
* __cherry-pick__: toma los cambios de un commit especifico y los aplica en la rama actual.
* __bisect__: analisis binario de commits que permite identificar en cual se introdujo un error.

## Colaboradores

Este proyecto es el resultado de la colaboracion y esfuerzo de los siquientes participantes quienes se encargaron de realizar la estructura, estilos y logica de las areas correspondientes.

| Area | Colaborador |
|--|--|
|Cabecera de Pagina     | Ferreira Josue |
|Navegacion             | Mauro Alori
|Contenido              | |
|Pie de Pagina          | Fernandez Lourdes |
|Mapa de Contacto       | Valentina Mayor|
|Repositorios Remotos   | |
|Tabla de Colaboradores | |
|Formulario de Contacto | Camila Arce |
|Redes Sociales         | Sofia Martinez |
|Derechos de Autor      | |