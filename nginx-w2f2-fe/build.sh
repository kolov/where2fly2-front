#!/usr/bin/env bash

cp nginx-w2f2-fe/* dist

NAME=eu.gcr.io/iconic-setup-91510/w2f2-fe
VERSION=10

docker build -t $NAME:$VERSION dist
echo Built $NAME:$VERSION
#docker push eu.gcr.io/iconic-setup-91510/w2f2-fe