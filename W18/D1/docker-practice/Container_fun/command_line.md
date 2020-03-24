Sets up three different containers with different ports and images. The mysql image contanier having a password with it.
docker container run -d -p 80:80 --name nginx nginx
docker container run -d -p 8080:80 --name httpd httpd
docker container run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=coconut mysql

Run this to check and see if the correct password is found under the ENV key.
docker container inspect mysql

Checks to see if the correct response shows up in the terminal when going to the port setup.
curl localhost:80

Stops running container.
docker container stop <NAME_OF_CONTAINERS_HERE>

Removes containers.
docker container rm <NAME_OF_CONTAINERS_HERE>

Stops and removes all containers.
docker container rm -f <NAME_OF_CONTAINERS_HERE>

To see whats inside a container.
docker container run -it <IMAGENAME> <ARG>

-it Are two seperate flags.
-t simulates a terminal(like what SSH does)
-i keeps a session open to receive terminal input
<ARG> is where we can pass an argument for what we'd like this container to do