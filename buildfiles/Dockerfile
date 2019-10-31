FROM node:8-alpine

EXPOSE 3000

RUN mkdir /zencol
COPY ./ /zencol/
WORKDIR /zencol
RUN yarn
RUN yarn build
CMD ["yarn", "start"]