SHELL := /bin/bash

.SILENT:

help:
	cat view/public/banner.txt   
	printf "\n    make <option> <optional path>\n"
	printf "\thelp            - show this menu\n"
	printf "\tpublish         - build the webview and publish to github\n"
	printf "\tadd <blog_path> - add/update a blog in the database\n"
	printf "\tlogs            - attache to the services logs\n"
	printf "\treboot          - blow up the docker containers and re builds/images\n"
	printf "\n\n"

add:
	node services/tools/blog.js --blog $(word 2, $(MAKECMDGOALS) )

publish:
	cd view && npm install && npm run build
	git add .
	git commit -m "Updating the blog"
	git push

logs:
	cd ./services && docker compose logs -f

reboot:
	source ~/.bashrc && cd services && docker compose down && yes y | docker-del -a && docker compose up -d