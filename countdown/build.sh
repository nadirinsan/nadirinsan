#!/bin/sh
# Wraps index.html in a full HTML document so it can be downloaded and opened offline.
cd "$(dirname "$0")"
{
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
  sed -n '1,/<\/style>/p' index.html
  printf '</head>\n<body>\n'
  sed -n '/<\/style>/,$p' index.html | sed '1d'
  printf '</body>\n</html>\n'
} > Countdown-Timer.html
