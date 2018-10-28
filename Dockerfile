FROM tensaibankai/node:8.12

RUN apt-get install -y git
COPY . .
RUN yarn install
RUN which npm

CMD ["/usr/local/bin/npm", "start"]