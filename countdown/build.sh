#!/bin/sh
# Builds two standalone files from index.html:
#   Countdown-Timer.html  the full, unlimited version buyers download
#   Countdown-Trial.html  the free 5-minute trial with sign-up and paywall (host it on your website)
cd "$(dirname "$0")"
wrap() {
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
  sed -n '1,/<\/style>/p' "$1"
  printf '</head>\n<body>\n'
  sed -n '/<\/style>/,$p' "$1" | sed '1d'
  printf '</body>\n</html>\n'
}
wrap index.html > Countdown-Timer.html
sed 's#/\*TRIAL_ENABLED\*/false#true#' index.html > .trial.tmp
grep -q 'enabled: true,' .trial.tmp || { echo "trial switch not found" >&2; rm -f .trial.tmp; exit 1; }
wrap .trial.tmp > Countdown-Trial.html
rm -f .trial.tmp
