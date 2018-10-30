FROM tensaibankai/node:8.12

RUN apt-get install -y git

WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD ["/usr/local/bin/npm", "start"]