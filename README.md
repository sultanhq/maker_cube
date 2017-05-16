
[![Stories in Ready](https://badge.waffle.io/sultanhq/maker_cube.svg?label=ready&title=Ready)](http://waffle.io/sultanhq/maker_cube)

# The Cube: An interactive hardware project by Rob Adams, George Seeger and Simon Conway


[Product](#product) | [Technologies](#technologies) | [Hardware](#hardware) | [Assembly](#assembly) | [Software configuration](#software-configuration) | [Using the mobile web app](#using-the-mobile-web-app) | [Sources](#sources) |

![The Cube](./readme/the_cube.png)

## The Cube is an art project to create a 6 sided LED cube which is *interactive*, *decorative* and *customisable*.


#### The Makers Cube will provider users with:

#### - A beautiful object
#### - Fun and interesting interactions and games
#### - An intuitive experience


### View the product video for The Cube

<a href="http://www.youtube.com/watch?feature=player_embedded&v=uHEIrmeGmOU
" target="_blank"><img src="http://img.youtube.com/vi/uHEIrmeGmOU/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

# Product

An interactive 6 sided battery powered LED cube
Powered by a raspberry pi miniature computer
Built on the NodeJS web framework
Languages and technologies used: NodeJS, SocketIO, HTML, CSS, JavaScript, PhazerJS, Linux.

## Features:

#### MVP 1:
* Display images
* Mood light

#### MVP 2:
* Displaying the time
* "Panels" can be customised by app/webpage to choose what panels are shown and what is shown on them

#### MVP 3:
* Multiplayer games:
 * Reaction Test
 * Simon-Says

#### MVP 4:
* Display slack mentions
* Display current weather forecast

#### Future Features:
* Orientation based layout selection

## Technologies:
* Linux
* NodeJS
* Javascript
* HTML5
* CSS
* PhaserJS
* SocketIO
* Slack api
* OpenWeather api

## Hardware:
  * 1 x Raspberry pi 3
  * 1 x MicroSD memory card (16gb minimum recommended)
  * 1 x Raspberry pi RGB Panel hat
  * 6 x 32x32 RGB LED Panels
  * 30cm of 16way IDC ribbon cable
  * 1 x 5v 30amp step-down convertor
  * 1 x 4s LiPo Battery (capacity is dependent on runtime required)
    * Optional 1x 5v 30a mains power supply
  * Mechano style right angle brackets to hold panels together
  * Mechano style strips to mount raspberry pi and battery to.
  * ~50 x m3 x 6mm screws
  * ~10 x m3 x 15mm screws
  * ~10 x m3 nylok nuts
  * Loctite (**not to be used on the nylok nuts**)
  * Battery connectors (XT60 or XT90 recommended)
  * 2.5mm jack plug with leads.

# Assembly:
  * Tools required:
    * Screwdriver
    * Wire Cutters
    * Soldering iron
    * Insulation tape

### View a time-lapse video of assembling The Cube
<a href="http://www.youtube.com/watch?feature=player_embedded&v=MILVvn658B0
" target="_blank"><img src="http://img.youtube.com/vi/MILVvn658B0/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

## Instructions:

Mount Right angle brackets to the 4 of the panels

![assembly_1](./readme/brackets.jpg)

Unscrew the 2 of the led panels from their frames to allow for mounting of the raspberry and battery mounts.

![brackets](./readme/bottom_plate.jpg)


Solder all the connectors to the Pi RGB Hat except the screw terminals as these are not required.

Disassemble one IDC connector to create a longer cable due to the distances between the panels being a little bit too short

![idc cables](./readme/idc_cables.jpg)

Join 3 of the power looms from the panels together (because the looms have 2 panel connectors on each you can save on lots of cables). add an XT60 connector to the end to allow you to switch between battery and desktop power supplies. Tap onto the power supply cables the 2.5mm jack plug to power the Pi through the Pi RGB Hat

![loom](./readme/loom.jpg)

Bolt the 4 side panels together and then bolt to the base.

![assembly_2](./readme/bottom_bracket.jpg)

Bolt four brackets to the top centre holes of the side panels.

![brackets](./readme/top_brackets.jpg)

Screw in four of the magnets into the top plate and fix the raspberry pi to this panel.

![top plate](./readme/top_plate.jpg)

-----------------


# Software configuration:

Install Noobs Rasbian onto a microSD card [(Link to Noobs) ](https://www.raspberrypi.org/downloads/noobs) and start up your raspberry pi.

Update your packages:
```
$ sudo apt-get update
$ sudo apt-get upgrade
```

## Clone the Repo

This git repository has two submodules. These are basically separate git repositories nested within this git repository.

The submodules are repositories that contain drivers for the LED screens.

To clone all of the nested repos run the following from the command line:

`$ git clone --recursive https://github.com/sultanhq/maker_cube.git`

If there has been a change to the submodules you can pull all the updated modules using:

`$ git submodule update --recursive`


## Node

Install Node by running:
```
$ wget http://node-arm.herokuapp.com/node_latest_armhf.deb
$ sudo dpkg -i node_latest_armhf.deb
```


Finally run npm install to install all the relevant node modules.

```
$ npm install
```

## LED Panels


Compile the led library executables

```
$ sudo apt-get install -y build-essential libconfig++-dev
$ cd rpi-fb-matrix
$ make
```

Copy the sample configuration file to the rpi-fb-matrix folder and rename removing the 'sample'

Setup chromium browser to autostart by copying the `autoChromium.desktop` file into the folder `~/.config/autostart/`

## rc.local file

To get the NodeJs webserver to run on start up along with the led matrix output, amend the following lines to ~/etc/rc.local (note the ***'&'***'s are important otherwise the Pi will lock up on boot) and make sure that is all before the `exit 0`

```
(sleep 5; cd /home/pi/maker_cube/; su pi -c 'node /home/pi/maker_cube/server.js < /dev/null &')&
(sleep 45; cd /home/pi/maker_cube/rpi-fb-matrix; sudo ./rpi-fb-matrix/matrix.cfg)&
```

## turning off screen blanking

sudo nano ~/etc/lightdm/lightdm.conf

In that file, look for:

[SeatDefault]

and insert this line below it:

`xserver-command=X -s 0 dpms`

# Using the mobile web app

When the cube is turned on, by default the first thing it displays is its local IP address:

eg: `192.168.0.14:8080`

Enter this address into a mobile device's browser, and you will be taken to the mobile web app that controls the cube.

From this page, you can select what appears on what panel! `^` and `v` represent top and bottom and `1-4` are the horizontal faces.

![panels](./readme/mobile-panels.png)

To send a message to the cube, use this page. Simply type into the bar and press submit.

![message](./readme/mobile-message.png)

To play the Reaction game, type in your name into the box and press enter on your phone.

![reaction-game](./readme/mobile-react.png)

Press the green `Reaction` button and four red circles will appear on the Cube. When the circles turn green, hit the blue `REACT` button and win the game!

![reaction-button](/readme/mobile-react-react.png)

To play Simon Says, enter your name and press the enter button.

![simon-button](./readme/mobile-simon.png)
Watch the arrow prompts on the cube, try to remember them and repeat the pattern on your phone. Press the send button when you have entered the pattern.

![simon-arrows](/readme/mobile-simon-arrows.png)

Play alone or with friends. Be careful, the pattern length increases by one after each attempt even if you get it wrong! (refresh your page to restart at the beginner level)


# sources:

http://weworkweplay.com/play/raspberry-pi-nodejs/

http://raspberrypi.stackexchange.com/questions/38515/auto-start-chromium-on-raspbian-jessie-11-2015

https://learn.adafruit.com/raspberry-pi-led-matrix-display

https://www.raspberrypi.org/forums/viewtopic.php?f=66&t=18200
