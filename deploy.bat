ECHO OFF

npm run build

scp -r ./dist/* batoilogic@3.87.71.72:/var/www/batoilogic/001-batoilogic-home