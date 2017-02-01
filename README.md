
[![Stories in Ready](https://badge.waffle.io/sultanhq/maker_cube.svg?label=ready&title=Ready)](http://waffle.io/sultanhq/maker_cube)



# The Maker Cube:


## The Makers Cube is an art project to create a 6 sided LED cube which is a *interactive*, *decorative* and *customisable*.

#### The Makers Cube will provider users with:

#### - A beautiful object
#### - Fun and interesting interactions and games
#### - An intuitive experience



# View the video for the Makers Cube

[Makers Cube Video](Add video link here - use a link to the computer)



# Product

an interactive 6 sided battery powered LED cube
Powered by a raspberry pi miniature computer
Built on the Django web framework
Languages and technologies used: Python, HTML, CSS, JavaScript, Linux, Django channels (websockets)



## Features:

#### MVP:
* display images
* mood light
* display slack mentions
* display makers tweet messages
* displaying the time
* IMU based display selection

#### MVP 2:
* Currency ticker
*


#### MVP 3:
* multiplayer games
 * reaction test
 * breakout - style game

#### Bonus features:
* "Panels" can be customised by app/webpage to choose what panels are shown and what is shown on them
* games: Pacman

* Battery Gauge
* bluetooth control
* music sequencer based game

## Technologies:
* Linux
* Swift
* PWA
* Websockets
* Python
* twitter api
* slack api

## Hardware:
* LED's
* Lithium Battery
* IMU
* Speaker


# Technical notes

This git repository has two submodules. These are basically separate git repositories nested within this git repository.

The sub modules are repositories that contain drivers for the LED screens. These can be used in a number of projects and should kept up to date.

To clone all of the nested repos run the following form the command line:

`$git clone --recursive https://github.com/sultanhq/maker_cube.git`

If there has been a change to the sub modules you can pull all the updated modules using:

`$git submodule update --recursive`
