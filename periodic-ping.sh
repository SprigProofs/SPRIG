#!/bin/bash

sleep 60
# request /everything every ~5 minutes for the three sprig servers
# so that they update their instances
while true; do
    date
    printf "Origin\n"
    curl -s http://localhost:8601/everything
    printf "\nViazovska\n"
    curl -s http://localhost:8602/everything
    printf "\nGrothendieck\n"
    curl -s http://localhost:8603/everything
    echo
    sleep 300
done