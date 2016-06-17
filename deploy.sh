#!/bin/bash

# Validate branch.
if [[ $(git name-rev --name-only HEAD) != "master" ]]; then
  echo "Must be on master to make a release."
  exit 1
fi

set -x

git config user.email 'andyjiang@gmail.com'
git config user.name 'lambtron'

git add -A
git commit -m 'Updated site'
git push origin master:gh-pages