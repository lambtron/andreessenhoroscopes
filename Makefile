
#
# Binaries.
#

webpack = ./node_modules/.bin/webpack

#
# Default.
#

default: build

#
# Tasks.
#

# Remove shit.
clean:
	@rm index.js index.css

# Build client.
build:
	webpack

# Run server.
server:
	python -m SimpleHTTPServer 8000

# Deploy.
deploy:
	./deploy.sh

#
# Phonies.
#

.PHONY: clean build server deploy
