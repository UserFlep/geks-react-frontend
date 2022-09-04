## Приложение развернуто по адресу: http://geksagon-task.surge.sh/
Точка входа: /

При клике на заголовок столбца таблицы происходит
сортировка. Дополнительно добавил поиск в столбце длинных ссылок.
Реализовал пагинацию на стороне клиента,
т.к. сервер не предоставляет данных для пагинации.

## Локальный запуск:
## a) Запустить nа Nodejs
### 1. Скачать папку проекта с GiHub
В папке проекта выполнить команды:
### 2. `npm i` или `yarn`
### 3. `npm start` или `yarn start`

## b) Запустить в docker-е
### 1. Скачать папку проекта с GiHub
В папке проекта выполнить команды:
### 2. Билдим контейнер командой:
`docker build -f Dockerfile -t squeeze-app:latest`
### 3. Запускаем контейнер на 3000 порту командой:
`docker run -it -p 3000:80 --rm squeeze-app:latest`

Если без ошибок, приложение доступно по адресу:
`http://localhost:3000`