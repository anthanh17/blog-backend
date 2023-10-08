FROM node:18-alpine

# RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node

# USER node

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node

COPY package.json ./

COPY package-lock.json ./

# COPY --chown=node:node package.json .
# COPY --chown=node:node package-lock.json .

# generated prisma files
COPY prisma ./prisma/

# COPY .env ./

RUN npm install 

RUN npm install -g @babel/core @babel/cli

COPY . .
# COPY --chown=node:node . .

EXPOSE 9000

USER node

# RUN npx prisma generate

CMD ["npm", "run", "start"]

 