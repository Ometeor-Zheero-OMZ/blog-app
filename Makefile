DATABASE_URL=postgres://root:root@db:5432/db

.PHONY: i
i:
	cargo install cargo-edit
	cargo add actix-web
	cargo add actix-cors
	cargo add serde_json
	cargo add serde --features derive
	cargo add chrono --features serde
	cargo add env_logger
	cargo add dotenv
	cargo add uuid --features "serde v4, v7, fast-rng"
	cargo add sqlx --features "runtime-async-std-native-tls postgres chrono uuid"
	cargo add lazy_static
	cargo add jsonwebtoken
# SQLX-CLI
	cargo install sqlx-cli
# SeaORM
	cargo add sea-orm --features sqlx-postgres,runtime-tokio-rustls,macros,debug-print,with-chrono,with-uuid,with-json

# cargo
.PHONY: run
run:
	cargo run

# docker
.PHONY:
build:
	docker-compose up -d --build

.PHONY: build-no-cache
	docker-compose build --no-cache

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: stop
stop:
	docker-compose stop

.PHONY: clean
clean:
	docker system prune -a --volumes

# SQLX
.PHONY: create-migrations
create-migrations:
	sqlx migrate add -r init

.PHONY: migrate-up
migrate-up:
	sqlx migrate run --database-url ${DATABASE_URL}

.PHONY: migrate-down
migrate-down:
	sqlx migrate revert --database-url ${DATABASE_URL}