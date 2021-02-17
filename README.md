# Tienda batoilogic
## Servidores (DDAW)
##SSH pem
```
DNS:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-3-87-12-100.compute-1.amazonaws.com
Base de datos:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-54-89-160-135.compute-1.amazonaws.com
Web:
ssh -i "ddaw-dns-g01.pem" ubuntu@ec2-3-87-71-72.compute-1.amazonaws.com
##SSH id_rsa.pub.
DNS:
ssh -i "id_rsa.pub" ubuntu@ec2-3-87-12-100.compute-1.amazonaws.com
Base de datos:
ssh -i "id_rsa.pub" ubuntu@ec2-54-89-160-135.compute-1.amazonaws.com
Web:
ssh -i "id_rsa.pub" ubuntu@ec2-3-87-71-72.compute-1.amazonaws.com
```
##IP publicas
```
-DNS: 3.87.12.100
-Servidor de aplicaciones:  54.89.160.135
-Servidor web: 3.87.71.72
```
##Páginas + Enlaces
[www.g01.batoilogic.es]: http:www.g01.batoilogic.es
[reparto.g01.batoilogic.es]: http:reparto.g01.batoilogic.es
[backoffice.g01.batoilogic.es]: http:backoffice.g01.batoilogic.es
##Versiones

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

### Imagenes de la aplicacón
#### Login:
![Log In](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Login.png)
#### Inicio:
![Inicio](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Inicio.png)
#### Acerca de:
![About us](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-AboutUs.png)
