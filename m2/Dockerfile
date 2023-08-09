# set node image with version
FROM node:16
RUN mkdir /m2
COPY . /m2
WORKDIR /m2
RUN npm i
CMD npm run start
