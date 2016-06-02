FROM node:4-onbuild

MAINTAINER Chuka Ebi <chukaebi@yahoo.com>

ADD /unicorn /unicorn

EXPOSE 5000

WORKDIR /unicorn

RUN npm install

CMD node app.js

