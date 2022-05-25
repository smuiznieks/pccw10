# Week 23

## Dockerize Full-Stack

# Before you get started, make sure to update the node version in both Dockerfiles to `FROM node:16`

1. `docker-compose up`
2. `docker ps` to list running containers, `docker ps -a` to list ALL containers (including stopped containers)
3. `docker exec -it [container-id or container-name] bash` to open terminal for container
4. `docker-compose down`
5. To remove all containers: `docker rm $(docker ps -a -q)`
(Add `-f` if need to force it)
6. To view all images: `docker images`
7. To remove all images: `docker rmi $(docker images -a -q)` -- don't do this as frequently

More info: https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes 

## Docker Hub

https://hub.docker.com/

1. Create a new repository (e.g. `smuiznieks/demo`)
2. Create docker image: `docker build -t smuiznieks/demo .`
3. Run docker container: `docker run -p 8080:3000 --name myExample -t smuiznieks/demo` or `docker run smuiznieks/demo` after first execution
4. To push a new tag to this repository: `docker push smuiznieks/demo`
5. If you get the following error `denied: requested access to the resource is denied`, make sure to log in by executing `docker login` and entering your username and password, then push again
6. Delete container and images
7. `docker pull smuiznieks/demo`


## React app

Download Heroku CLI if needed. Login using `heroku login`.

1. `docker build -t [WHATEVER_YOU_WANT_TO_NAME_THE_IMAGE] .`
2. `docker run -p 8080:3000 -t [WHATEVER_YOU_WANT_TO_NAME_THE_IMAGE]`
3. `git init`
4. `heroku git:remote -a [APP_NAME_IN_HEROKU]`
5. `heroku container:login`
6. `heroku container:push web`
7. `heroku container:release web`


`docker system prune --volumes`