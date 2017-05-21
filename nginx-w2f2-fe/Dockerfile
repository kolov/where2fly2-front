FROM nginx:alpine


WORKDIR /app
COPY . /app

EXPOSE 80

USER root
COPY nginx.conf /etc/nginx/nginx.conf

