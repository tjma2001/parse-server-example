FROM tensaibankai/node:8.12

RUN apt-get install -y git
COPY . .
RUN yarn install

CMD ['npm', 'start']