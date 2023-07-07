build:
	docker compose -f docker-compose.yml build 

stop:
	docker compose -f docker-compose.yml down

start:
	docker compose -f docker-compose.yml up -d --build

debug:
	docker compose -f docker-compose.yml up --build

restart: stop start

volume: stop
	docker volume prune -af

image: stop
	docker images prune -a

network: stop
	docker network rm dockertranscendant_default

front:
	docker exec -it angularJs bash

back:
	docker exec -it nestJS bash
	
clean: stop volume image

re: stop clean build