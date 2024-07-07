# MySQL using Docker

## What is MySQL?

MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, covering the entire range from personal projects and websites, via e-commerce and information services, all the way to high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.

For more information and related downloads for MySQL Server and other MySQL products, please visit www.mysql.com.

_source_: [docker](https://hub.docker.com/_/mysql)

## Configuration

Edit the `.env` file

| Variable | Datatype | Description |
| --- | :---: | --- |
| MYSQL_DOCKER_IMAGE | `string` | MySQL version ([see][docker-hub]) |
| MYSQL_DOCKER_CONTAINER_NAME | `string` | Container name |
| MYSQL_DOCKER_RESTART_POLICY | `string` | Container restart policy upon failure ([see][docker-restart-policy]) |
| MYSQL_PORT_EXTERNAL | `number` | _External_ connection port number |
| MYSQL_PORT_INTERNAL | `number` | _Internal_ connection port number |
| MYSQL_ROOT_PASSWORD | `string` | _root_ user password |
| MYSQL_DATABASE | `string` | Database name |
| MYSQL_USER | `string` | Service operator username |
| MYSQL_PASSWORD | `string` | Service operator password |

## Initialize

> [!WARNING]
> You need to have `docker` and `docker-compose` installed.

```bash
cd database
docker-compose up -d
```

### View logs

```bash
docker-compose logs --tail=50 -f
```

### Drop instance

> [!CAUTION]
> If you start this process, the data is permanently deleted.
>
> The data cannot be recovered.

```bash
docker-compose down -v
```

## Resources

- [docker](https://docs.docker.com/engine/)
- [docker compose](https://docs.docker.com/compose/)

[docker-hub]: https://hub.docker.com/_/mysql
[docker-restart-policy]: https://docs.docker.com/config/containers/start-containers-automatically/
