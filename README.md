# Roshi

## Setup with Docker
You'll need:
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/community-edition)
- [NodeJS](https://nodejs.org/en/)

> I recommend you install [Homebrew](https://brew.sh/) if you're a MAC user. Once installed, this command will install git, Node LTS and Docker `brew install git n; n lts; brew cask install docker`.

Once Docker's installed and set up:
1. Clone this repo.
2. install the project's dependencies by running `npm i` or `yarn` (from the root).
3. Run `docker-compose up --build` or `docker-compose up -d --build` if you're not interested in seeing the logs.
4. Navigate to [http://localhost:4040](http://localhost:4040)

> The mongodb can be accessed from [http://localhost:2020](http://localhost:2020)
> The server can be accessed from [http://localhost:3030](http://localhost:3030)
> The app can be accessed from [http://localhost:5050](http://localhost:5050)

## Setup without Docker
**wip**

## Webclient
**wip**
- architecture
- styling

## Server
**wip**
- architecture
- API

## Mongo DB
**wip**
- mongo container
- local mongo
- seed for the DB

### Access the container's mongo DB
Install [Robo 3T](https://robomongo.org). With [Homebrew](https://brew.sh/): `brew cask install robo-3t`. ALthough any other MongoDB GUI will work.

### Backup the DB from the container created
```
docker run --rm --link tab-edr-mongo:mongo --net edr_default \
-v /absolute/path/to/the/projects/root/folder/mongodump:/backup \
mongo bash -c 'mongodump --out /backup --host mongo:27017 -u root -p root'
```

### Restore the DB to the container created
```
docker run --rm --link tab-edr-mongo:mongo --net edr_default \
-v /absolute/path/to/the/projects/root/folder/mongodump:/backup \
mongo bash -c 'mongorestore /backup --drop --host mongo:27017 -u root -p root'
```

Notes:
- This creates a link to the mongo container (name in docker-compose.yml): `--link tab-edr-mongo:mongo`:

- This maps the host folder to the container's *(host:container)* (mongodump will be created in the root): `-v /absolute/path/to/the/projects/root/folder/mongodump:/backup`

- This specifies the network from the `docker-compose.yml` file instead of the default one: `--net edr_default`

- This is the user and password for the mongo process (defined in docker-compose.yml): `-u root -p root`

## FAQ
**wip**

## Contribute
**wip**
