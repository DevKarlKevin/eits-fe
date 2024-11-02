FROM node:21-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli


RUN ng build

FROM nginx:alpine

COPY --from=build app/dist/eits-fe/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
