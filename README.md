docker pull postgres:alpine

docker run 
    --name postgres-0 
    -e POSTGRES_USER=user 
    -e POSTGRES_PASSWORD=passwd 
    -p 5432:5432 
    -d 
    postgres:alpine
 
    docker exec -it postgres-0 bash