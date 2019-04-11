#!/bin/bash

docker build -t water-jug-cli ./water-jug-riddle-cli/.
docker run --rm -it water-jug-cli npm run start