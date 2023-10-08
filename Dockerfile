FROM node:18-alpine

# Note /app belongs to root.
WORKDIR /home/node

COPY package.json ./

COPY package-lock.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY .env ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

COPY . .

EXPOSE 9000

USER node

# RUN npx prisma generate

CMD ["npm", "run", "start"]

 