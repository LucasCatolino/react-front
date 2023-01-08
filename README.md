# Adoptemos Todos (front)

Repositorio del proyecto React+Bootstrap para el final de la materia '72.38- Proyecto de Aplicaciones Web'.

## Prerrequisitos
* [Node.js](https://nodejs.org/es/)

## Scaffolding
PAW-2022A-07

|_src/

|__assets/: imágenes, logos, etc

|__components/: componentes para ser reutilizados

|__config/: i18n para internacionalización

|__pages/: páginas principales de la aplicación

## Levantar el proyecto

En el directorio raíz correr los siguientes comandos:
### `npm install`
Si no se cuenta con el directorio node_modules este comando lo generará instalando las dependencias listadas en el archivo 'package.json'.

### `npm start`
Levanta el proyecto que podrá verse desde cualquier navegador en [http://localhost:3000](http://localhost:3000)

### `npm run build`
Construye el proyecto para ser deployado en la carpeta `build`.

### `npx json-server --watch .\data\db.json --port 8000`
Hasta no tener el back desarrollado puede jugarse con una Mock DB (se encuentra en /data/db.json). Este comando levanta el servidor en el puerto 8000.