FROM node:20.15.1

WORKDIR /app

COPY ./app/package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]