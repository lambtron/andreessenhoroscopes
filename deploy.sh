#!/bin/bash

# Validate branch.
if [[ $(git name-rev --name-only HEAD) != "gh-pages" ]]; then
  echo "Must be on gh-pages to make a release."
  exit 1
fi

# Validate that there are no uncommitted files.
if [[ $(git status 2> /dev/null | tail -n1) == "nothing to commit, working directory clean" ]]; then
  echo "Working directory clean. No changes were made."
  exit 1
fi

set -x

git config user.email 'andyjiang@gmail.com'
git config user.name 'lambtron'

git add -A
git commit -m 'Updated site'
git push origin gh-pages:gh-pages