FROM node:16.7.0

LABEL version="1.0"
LABEL description="Development image for test"

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]