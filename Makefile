
#
# Binaries.
#

metalsmith := ./node_modules/.bin/metalsmith

#
# Default.
#

default: build

#
# Tasks.
#

# Remove shit.
clean:
	@rm -rf ./horoscopes
	find . -type f -name '*.html' ! -path './node_modules/*' ! -path './template/*' ! -path './horoscopes/*' -delete
	find . -empty -type d -delete

# Build client.
build:
	@node ./lib/build.js
	@$(metalsmith)

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
