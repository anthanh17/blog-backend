FROM node:18-alpine

RUN mkdir -p /home/node/node_modules && chown -R node:node /home/node/

WORKDIR /home/node

COPY --chown=node:node package.json .

COPY --chown=node:node package-lock.json .

# generated prisma files
COPY prisma ./prisma/

RUN npm install 

RUN npm install -g @babel/core @babel/cli

COPY --chown=node:node . .

EXPOSE 9000

USER node

# RUN npx prisma generate

CMD ["npm", "run", "start"]

 