Base de datos:

```
docker-compose up -d
```

* MongoDB URL Local: 
```
mongodb://localhost:27017/entriesdb
```

Variables de entorno:
```
Renombrar el archivo __.env.template__ a __.env__
```

Llenar  la base con informacion de prueba:

```
http://localhost:3000/api/seed
```