<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

A continuación dejaré el setup por defecto que viene de nest (Omitiendo algunas cosas).

## Project setup

```bash
$ yarn install
```

## Base de datos

Levantar el servicio de docker compose para utilizar postgreSQL.

```
docker compose up -d
```

Utilizar algún cliente de base de datos para postgreSQL y dentro crear una nueva base de datos llamada **"tcit-db"** (de acuerdo al valor de **POSTGRES_DB** en el archivo **.env**).

Con ello ya podemos ejecutar **yarn run start** y debería crearse la tabla **posts** automáticamente.


## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```
