SHELL = /bin/sh

FOLDER=$(shell pwd)
USER_ID=$(shell id -u)
GROUP_ID=$(shell id -g)

create:
	@docker run -it --rm -u $(USER_ID):$(GROUP_ID) -v "$(FOLDER):/srv" -w /srv node:22.0.0 bash -c \
	"npm config set prefix /tmp/.npm-global && export PATH=/tmp/.npm-global/bin:\$$PATH && \
	npm install -g @angular/cli@19.0.4 && ng new todoapp --defaults --skip-git --directory=."
start:
	@docker-compose -f ./docker/docker-compose.yml -p angular up -d
stop:
	@docker-compose -f ./docker/docker-compose.yml -p angular down
in:
	@docker exec -it angular bash