FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY ./src .

# RUN npm run build-src

# CMD ["npm", "run", "build"]

EXPOSE 9000

CMD ["node", "server.js"]