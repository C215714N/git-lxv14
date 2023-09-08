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
