# node.js + rabbitmq + docker compose

Проект сделан в течении 5 часов, с минимальными требованиями

![Требования](https://github.com/selimdev00/nodejs-rabbit-docker/assets/69434200/9adc37ce-73a2-455d-9871-e7ac0408a72c)

## Необходимые зависимости
`docker` `docker-compose` `node`


## Screenshots

![App Screenshot](https://github.com/selimdev00/nodejs-rabbit-docker/assets/69434200/a1edaa9f-f899-4124-b0b0-f41463d699cc)


## Deployment

To deploy this project run

```bash
npm run start
```


## Run Locally

Clone the project

```bash
git clone https://github.com/selimdev00/nodejs-rabbit-docker
```

Go to the project directory

```bash
cd nodejs-rabbit-docker
```

Start microservices on docker

```bash
npm run start
```

1. M1 (producer) receives only 1 request (POST /message) and sends it to rabbit mq queue

![image](https://github.com/selimdev00/nodejs-rabbit-docker/assets/69434200/87c34c0f-87f4-4abd-b7ec-1698bd388959)

3. M2 (consumer) receives message from rabbit mq queue and handles it
4. RabbitMQ works!



## Authors

- [@selimdev](https://github.com/selimdev00)


## License

[MIT](https://choosealicense.com/licenses/mit/)

