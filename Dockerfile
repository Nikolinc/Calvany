FROM node:18-alpine

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]