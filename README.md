### Build docker image
docker build -t todo-rest-api:0.0.1 .

### run docker container
docker container run -d -p 3001:3001 todo-rest-api:0.0.1