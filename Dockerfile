FROM kolov/node-gulp

WORKDIR /app
COPY bower_components /app
COPY gulp /app
COPY src /app

EXPOSE 3000

ENTRYPOINT ["gulp", "serve"]