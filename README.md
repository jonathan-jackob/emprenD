# EmpreD app (frontend)

La finalidad de la aplicación es que sus usuarios puedan compartir sus ideas o mensajes, y que estos puedan ser leidos por todos los usuarios, por ello implementa un registro e inicio de sesión.

Para el desarrollo se utilizó _Laravel 8_ como contenedor de la aplicación, la librería _ReactJS_ para la creación de componentes y asi modular mejor la aplicación, _Bootstrap 5_ librería de componentes css y _sass_ para transpilar los archivos de bootstrap.

La parte de testing se realizó con las librerías [mochasjs](https://mochajs.org/), [chaijs](https://www.chaijs.com/) y [enzyme](https://enzymejs.github.io/enzyme/)

## Instalación

### Requisitos

Proyecto backend [emprend-api](https://github.com/fakereto/emprend-api) en el cual se almacenan todos los usuarios, mensajes y que acepta todas las peticiones de este proyecto.

**Previamente** en su equipo deberá contar con las siguientes herramientas, PHP 7.3 ó superior, [Nodejs](https://nodejs.org/es/), [composer](https://getcomposer.org/) y [git](https://git-scm.com/) (opcional).

Descargar el **Proyecto** lo puede hacer de las siguientes formas

1.  Clonando el repositorio con git

        git clone https://github.com/jonathan-jackob/emprenD.git

2.  Descargar el proyecto en ZIP
    ![download zip repository github](https://i.postimg.cc/g27qkMgC/imageedit-9-4620369683.jpg)

### Preparando el proyecto

Teniendo descargado en nuestro equipo el proyecto y habiendo cumplido con los requisitos previos, procedemos a posicionarnos desde una terminal en la carpeta raíz del proyecto para ejecutar el siguiente comando, el cual instalara todas las dependencias necesarias.

    composer install && npm install

### Configurando el proyecto

Abra el archivo **.env** y busque la siguiente variable **MIX_APP_API** y le asigna la url de la api, si esta es diferente a la configurada por default.

    MIX_APP_API=http://localhost:8000/api/

si modificó la url de la api, tiene que ejecutar el siguiente comando, el cual compilara los archivos js (con la url de api actualizada) y css necesarios para la aplicación

    npm run prod

### Ejecutando el proyecto

En una terminal ubicado en la carpeta raíz, ejecutar el comando siguiente comando, laravel creara un servidor en el cual se estará ejecutando el proyecto [http://127.0.0.1:8001](http://127.0.0.1:8001), se monta el servidor en el puerto 8001 para evitar conflictos con la api, si esta corriendo el el puerto 8000, pude correrse n cualquier otro puerto siempre y cuando este esté libre.

    php artisan serve --port=8001

### Testing

Para ejecutar las pruebas al proyecto en una terminal se ejecuta el siguiente comando

    npm run test
