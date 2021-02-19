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

``` prolog

    usuario: admin
    email:   admin@batoilogic.com
    contraseña: 1234
    
```

### Usuario Repartidor / Dealer

```prolog

    usuario: dealer
    email:   dealer@batoilogic.com
    contraseña: 1234
```

### Imagenes de la aplicacón
#### Login:
![Log In](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Login.png)
#### Inicio:
![Inicio](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Inicio.png)
#### Acerca de:
![About us](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-AboutUs.png)
### Versiones
La versión utilizada es:
```yaml
2.6.12
```
![About us](https://github.com/leshrike/tienda-batoilogic/blob/master/imagenes/BatoiLogic-Version.png)

**Nota:** No se muestran todas las capturas de pantalla de todas las vistas debido a que el diseño está para refinar.

