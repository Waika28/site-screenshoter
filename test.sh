mkdir images

curl -v -H "Content-Type: application/json" -X POST \
     -d '{"selector": "body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img","url": "https://google.com"}' \
     http://localhost:3000 --output images/google_logo.png
