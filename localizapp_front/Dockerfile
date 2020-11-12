FROM node:12
LABEL Natalia Laserna <nalaserna@poligran.edu.co>
WORKDIR /usr/src/app
EXPOSE 8100 8200
ADD package.json/ package-lock.json/ ./
RUN npm install -g @ionic/cli
RUN npm i @angular-devkit/build-angular@0.803.24
RUN npm ci
ADD . .

