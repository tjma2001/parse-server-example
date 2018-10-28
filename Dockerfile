FROM tensaibankai/node:latest

RUN apt-get install -y git
COPY . .
RUN yarn install

CMD ['npm', 'start']