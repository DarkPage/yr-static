# 基础镜像
# FROM docker.io/node
FROM base/yr-static:v1

COPY ./build /root/project

WORKDIR /root/project

RUN npm i

EXPOSE 3000

CMD ["node", "app.js"]