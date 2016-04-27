server:
	python -m SimpleHTTPServer 8000

deploy:
	./deploy.sh

.PHONY: server deploy