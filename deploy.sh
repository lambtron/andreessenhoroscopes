#!/bin/bash

# Validate branch.
if [[ $(git name-rev --name-only HEAD) != "master" ]]; then
  echo "Must be on master to make a release."
  exit 1
fi

# Validate that there are no uncommitted files.
if [[ $(git status 2> /dev/null | tail -n1) == "nothing to commit, working directory clean" ]]; then
  echo "Working directory clean. No changes were made."
  exit 1
fi

set -x

git config user.email 'andyjiang@gmail.com'
git config user.name 'Andy Jiang'

git add -A
git commit -m 'Updating site'

# For now, to deploy run `git push -u origin master:gh-pages`.
# Once we move it to segmentio.github.com, it will be automatically deployed on every push.
git push origin master:gh-pages