FROM node:18-alpine

EXPOSE 3000
WORKDIR /app

CMD ["node", "index.js"]