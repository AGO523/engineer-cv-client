# engineer cv client

## Getting started

### 1. Build container

```shell
docker compose build
```

### 2. Run container

#### Foreground

```shell
docker compose up
```

#### Background

```shell
docker compose up -d
```

### 3. Install modules

```shell
docker compose run --rm app npm install
```

### 4. Access localhost

```shell
open http://localhost:3030
```

## Install dependencies

```shell
docker compose run --rm app npm install <package>@<version>
```

## Format code

```shell
docker compose run --rm app npm run format
```
