GIT_REVISION=$(shell git rev-parse HEAD | cut -c 1-7)
IMG_TAG=zencol-$(GIT_REVISION)

build: 
	docker image build -f buildfiles/Dockerfile -t $(IMG_TAG) .
run:
	docker container run -p 3000:3000 ${IMG_TAG}