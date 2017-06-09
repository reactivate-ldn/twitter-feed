FROM node:boron

ENV CONSUMER_KEY=ntQ7zCpadMv0vTuOshWj6bx6w
ENV CONSUMER_SECRET=X1Lg0uHIHcKYs8WTQX01x8vOs8WSbxfFo1V285FTRmXJjpDzDQ
ENV ACCESS_TOKEN_KEY=629330603-lnc8oMNU4klNkiGFaAjKNnvfZs3Ljf9fbNpjOBlA
ENV ACCESS_TOKEN_SECRET=NGzYR3I1raW2CJVwqYntT1cFgqyi2sBdQIoYZgNeoQnFA

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build

EXPOSE 8080
CMD [ "npm", "start" ]
