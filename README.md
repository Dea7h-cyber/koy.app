# koy.app

```sh
# Run postgres test DB

docker run -dp 5566:5432 \
    --name koy_database \
    -e POSTGRES_PASSWORD=secret \
    -e POSTGRES_USER=koy \
    -e POSTGRES_DB=koy \
    -v pgdata:/var/lib/postgresql/data \
    postgres:latest
```
