FROM nikolaik/python-nodejs:latest

USER pn
WORKDIR /home/pn/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn global add gatsby-cli

CMD gatsby develop