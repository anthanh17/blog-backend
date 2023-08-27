FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

# RUN npm config rm proxy

# RUN npm config rm https-proxy

# RUN npm config set registry https://registry.npmjs.org/

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

# RUN npm run build-src

# CMD ["npm", "run", "build"]

EXPOSE 9090

CMD ["nodemon", "server.js"]