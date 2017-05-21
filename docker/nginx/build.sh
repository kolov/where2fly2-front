#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DIST_DIR=$DIR/../../dist

echo $DIST_DIR
cp $DIR/Dockerfile $DIST_DIR
cp $DIR/nginx.conf $DIST_DIR

NAME=eu.gcr.io/iconic-setup-91510/w2f2-fe
VERSION=10

docker build -t $NAME:$VERSION $DIST_DIR
echo Built $NAME:$VERSION
#docker push eu.gcr.io/iconic-setup-91510/w2f2-fe