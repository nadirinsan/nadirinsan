#!/bin/sh
# Builds the website into landing/site/, ready to upload to any web host:
#   site/index.html      the landing page
#   site/app/index.html  the free 5-minute trial (built from countdown/index.html)
#   site/img/            the page images
cd "$(dirname "$0")"
../countdown/build.sh || exit 1
mkdir -p site/app
{
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
  sed -n '1,/<\/style>/p' index.html
  printf '</head>\n<body>\n'
  sed -n '/<\/style>/,$p' index.html | sed '1d'
  printf '</body>\n</html>\n'
} > site/index.html
cp ../countdown/Countdown-Trial.html site/app/index.html
rm -rf site/img && cp -r img site/img
