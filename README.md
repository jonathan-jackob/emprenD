# EmpreD app (frontend)

La finalidad de la aplicación es que sus usuarios puedan compartir sus ideas o mensajes, y que estos puedan ser leidos por todos los usuarios, por ello implementa un registro e inicio de sesión.

Para el desarrollo se utilizó _Laravel_ en su versión 8 como contenedor de la aplicación, la librería _ReactJS_ para el diseño de componentes, _Bootstrap 5_ librería de componentes css y _sass_.

## Instalación

### Requisitos

Proyecto backend [emprend-api](https://github.com/fakereto/emprend-api) en el cual se almacenan todos los usuarios, mensajes y que acepta todas las peticiones de este proyecto.

**Previamente** en su equipo deberá contar con las siguientes herramientas, PHP 7.3 ó superior, [Nodejs](https://nodejs.org/es/), [composer](https://getcomposer.org/) y [git](https://git-scm.com/) (opcional).

Descargar el **Proyecto** lo puede hacer de las siguientes formas

1.  Clonando el repositorio con git

        https://github.com/jonathan-jackob/emprenD.git

2.  Descargando el ZIP, en la parte superior
    ![](https://i.postimg.cc/g27qkMgC/imageedit-9-4620369683.jpg)

### Preparando el proyecto

Teniendo descargado en nuestro equipo el proyecto y habiendo cumplido con los requisitos previos, procedemos a posicionarnos desde una terminal en la carpeta raíz del proyecto para ejecutar el siguiente comando, el cual instalara todas las dependencias necesarias.

        composer install && npm install

### Configurando el proyecto

Abra el archivo **.env** y busque la siguiente variable **MIX_APP_API** y le asigna la url de la api, si esta es diferente a la configurada en el predeterminada.

    MIX_APP_API=http://localhost:8000/api/

### Ejecutando el proyecto

En una terminal ubicado en la carpeta raíz, ejecutar el comando, laravel creara un servidor en el cual se estará ejecutando el proyecto [http://localhost:8080/](http://localhost:8080/)

        php artisan serve --port=8080

### Testing

Ejecutando las pruebas unitarias de la aplicación se ejecuta en una terminal el siguiente comando

        npm run test
