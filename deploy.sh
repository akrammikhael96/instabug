#!/usr/bin/env/ sh

set -e

npm run build

cd dist

git init

git add -A

git commit -m "Deployment2"

git push -f git@github.com:akrammikhael96/instabug-login-page.git master:gh-pages

cd -