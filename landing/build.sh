#!/bin/sh
# Builds the website into landing/site/, ready to upload to any web host:
#   site/index.html               landing page
#   site/app/index.html           free trial with sign-up, paywall and license unlock
#   site/config.js                all settings (checkout, CRM, Google sign-in, analytics)
#   site/privacy.html, terms.html legal pages
#   site/img/                     page images
cd "$(dirname "$0")"
../countdown/build.sh || exit 1
rm -rf site && mkdir -p site/app
{
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
  sed -n '1,/<\/style>/p' index.html
  printf '</head>\n<body>\n'
  sed -n '/<\/style>/,$p' index.html | sed '1d'
  printf '</body>\n</html>\n'
} > site/index.html
cp ../countdown/Countdown-Trial.html site/app/index.html
cp config.js privacy.html terms.html site/
cp -r img site/img
