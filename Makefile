IMAGE ?= registry.digitalocean.com/anubis/marketing-site
TAG ?= latest

help:
	@echo 'For convenience'
	@echo
	@echo 'Available make targets:'
	@grep PHONY: Makefile | cut -d: -f2 | sed '1d;s/^/make/'

all: build push

.PHONY: build      # Build docker image
build:
	docker build -t $(IMAGE):$(TAG) .

.PHONY: push       # Push docker image
push: build
	docker push $(IMAGE):$(TAG)
