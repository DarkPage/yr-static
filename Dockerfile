FROM docker.io/node

COPY ./ /root/project

WORKDIR /root/project

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]