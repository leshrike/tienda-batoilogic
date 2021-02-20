# Tienda batoilogic

Desde la aplicación de la tienda de batoilogic, los usuarios podrán visionar todos los productos que se encuentran a su disposición, además de poder hacer pedidos, de los mismos pedidos podríamos consultar sus datos. Podremos también consultar la información de contacto de la empresa.

## Servidores (DDAW)
### SSH pem
```
DNS:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-3-87-12-100.compute-1.amazonaws.com
Base de datos:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-54-89-160-135.compute-1.amazonaws.com
Web:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-3-87-71-72.compute-1.amazonaws.com
```
### SSH id_rsa.pub.
```
DNS:
ssh batoilogic@ec2-3-87-12-100.compute-1.amazonaws.com // ssh batoilogic@3.87.12.100
Base de datos:
ssh batoilogic@ec2-54-89-160-135.compute-1.amazonaws.com // ssh batoilogic@54.89.160.135
Web:
ssh batoilogic@ec2-3-87-71-72.compute-1.amazonaws.com // ssh batoilogic@3.87.71.72
```
### IP publicas
- DNS: 3.87.12.100
- Servidor de aplicaciones:  54.89.160.135
- Servidor web: 3.87.71.72
### Páginas + Enlaces
[www.g01.batoilogic.es](http:www.g01.batoilogic.es)  
[reparto.g01.batoilogic.es](http:reparto.g01.batoilogic.es)  
[backoffice.g01.batoilogic.es](http:backoffice.g01.batoilogic.es) 


## Todos los repositorios del proyecto


[CRUD y Backoffice -- Laravel](https://github.com/leshrike/batoilogic)  
[App de repartidor -- Vue JS](https://github.com/leshrike/repartidor_batoilogic)  
[App de tienda -- Vue JS](https://github.com/leshrike/tienda-batoilogic)  
[Estilos y Guia de estilos](https://github.com/olbapgit/BatoiLogicDiw)  

## Aplicación Vue
### Descargar
Primero tendremos que descargar el repositorio que contiene nuestros archivos.

### Instalación
Primero lanzaremos el siguiente comando: 
```prolog
npm install
```
Esto lo que hará es que se instalen todos los módulos necesarios.

### Librerias adicionales.
También necesitaremos las siguientes librerías si no hay partes de la aplicación que no funcionaran. 

#### Libreria de bootstrap
Esta libreria le dara un mejor aspecto a nuestra pagina web.
```prolog
vue add bootstrap-cli
```

#### Libreria de vee-validate
Esta libreria nos permitira validar los formularios.
```prolog
npm install -S vee-validate
```

#### Libreria de axios
Esta libreria nos dara acceso a nuestro mysql
```prolog
npm install -S axios
```

## Usuarios para probar las funcionalidades


Dentro de esta aplicación tendremos diferentes funcionalidades que son exclusivas para cada rol usuario. Para probarlas, podremos hacer uso de los siguientes usuarios:

### Usuario Administrador

```yaml

    usuario: admin
    email:   admin@batoilogic.com
    contraseña: 1234
    
```

### Usuario Repartidor / Dealer

```yaml

    usuario: dealer
    email:   dealer@batoilogic.com
    contraseña: 1234
```

### Versiones
La versión utilizada es:
```yaml
-vue: 2.11
-vue-template-compiler: 2.6.12
-bootstrap: 4.5.2 // bootstrap base
-bootstrap-vue: 2.17.3 // bootstrap adaptado a VUE JS 
-sass: 1.26.11
-sass loader: 10.0.2
-popper.js: 1.16.1
-eslint: 6.7.2
-portal.vue: 2.1.7
-vuex: 3.4.0
-vue-router: 3.2.0 // redirecciones de VUE
-core-js: 3.6.5 
-vee-validate: 3.4.5 // validación de formularios
-axios: 0.21.1 // peticiones AJAX
```
Hemos utilizado también la extensión de chrome que nos permite hacer debug de un forma más ágil.
```
Vue.js devtools: 5.3.4

```
![Vue.js devtools](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Version.png)

### Imagenes de la aplicacón
#### Login:
![Log In](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Login.png)
#### Inicio:
![Inicio](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Inicio.png)
#### Acerca de:
![About us](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-AboutUs.png)



**Nota:** No se muestran todas las capturas de pantalla de todas las vistas debido a que el diseño está para refinar.

## ¿Cómo desplegar esta página?

Para desplegar esta aplicación haremos uso de un script bash, el cual encontraremos en el directorio raíz del proyecto.Para ejecutar el despliegue deberemos situarnos en el directorio raíz y deberemos introducir en nuestra consola o terminal el siguiente comando:

```prolog
    
    deploy.bat
       
```
Este script ejecutará la directiva npm run build, la cual compilará la aplicación y la llevará al directorio dist. Es desde aquí que ejecutaremos un scp con el cual copiaremos el contenido de la carpeta dist a la dirección que nos interese de nuestro servidor web.

## Datos a resaltar sobre los servidores

Para poder configurar los servidores hemos tenido que abrir los siguientes puertos:

 Servidor de resolución de nombres de dominio -- DNS :
 
```prolog

Entrada: 80,22,21,443 (TCP) y 53 UDP

Salida: 53(TCP) 53(UDP), Todos

```
### Servidor de Base de datos:
 
 
 ```prolog
 
 Entrada: 80, 22, 21, 3306, 443 
 
 Salida: Todos, Mysql (3306, TCP) 
 
 ```


### Servidor web o servidor de aplicaciones:


```prolog

Entrada: 80,22,21,3306,443

Salida: 3306 (TCP), Todos

```

### Usuario de despliegue

En todos los servidores hemos usado el mismo usuario para realizar los despliegues y  tareas de administración.

```prolog
    usuario: batoilogic
    contraseña: 2468 
```

Por lo tanto, para acceder a los servidores haremos uso de las siguientes directivas:

**La clave pública de Alex está solo habilitada para el usuario batoilogic en los 3 servidores, en caso de necesitar acceso como el usuario "ubuntu", comunícanoslo**


```prolog

    Servidor de Base de Datos => ssh batoilogic@54.89.160.135
    
    Servidor web => ssh batoilogic@3.87.71.72
    
    Servidor DNS => ssh batoilogic@3.87.12.100

```
