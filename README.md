# Water Jug

## Objective
Build an application that solves the Water Jug Riddle for dynamic inputs (X, Y, Z). The simulation
should have a UI to display state changes for each state for each jug (Empty, Full or Partially Full).
You have an X-gallon and a Y-gallon jug that you can fill from a lake. (Assume lake has unlimited
amount of water.) By using only an X-gallon and Y-gallon jug (no third jug), measure Z gallons of
water.

## CLI TOOL
This project provides the CLI interface to execute the Water Jug algorithm implemented in the water-jug-riddle-core module. 

## Dependencies
The Water Jug CLI app depends on the following project:
- water-jug-core: Please visit the following link for more info: https://github.com/gonzalodenari/water-jug-riddle-core

## Requirements
In order to build and run the application, make sure to have Docker version 17.03 or greater installed on your local machine.

If not please visit https://www.docker.com

## Installation

In order to install and run the app, please follow these steps:
- `git clone https://github.com/gonzalodenari/water-jug-riddle.git`
- `cd water-jug-riddle`
- `./buildAndStartCLI.sh`

## Run
Once installed you can just run the cli tool with:
- `./startCLI.sh`

## Uninstall
To uninstall the app (remove docker image) just type:
- `./uninstallCLI.sh`

## Run tests
In order to run the CLI tool tests, please type the following command:
- `docker run --rm -it water-jug-cli npm run test`