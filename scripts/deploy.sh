#
# Developed by Artu, https://github.com/ArtuGit
#  Copyleft, 2020-2021.
#

git pull
npm install
npm run build
pm2 restart "My Word Cards"
