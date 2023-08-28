FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

EXPOSE 9000

CMD ["npm", "run", "start"]

