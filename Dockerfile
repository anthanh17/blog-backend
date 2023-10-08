FROM node:18-alpine

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY .env ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

# COPY . .
COPY --chown=node:node . .

EXPOSE 9000

# USER node

# RUN npx prisma generate

CMD ["npm", "run", "start"]

 