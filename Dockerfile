FROM ghcr.io/puppeteer/puppeteer:latest

run mkdir /home/pptruser/app \
    && chown pptruser:pptruser /home/pptruser/app

WORKDIR /home/pptruser/app

COPY package*.json ./
RUN npm ci

COPY --chown=pptruser:pptruser index.js ./

CMD ["npm", "start"]
