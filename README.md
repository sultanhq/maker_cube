
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


#### MVP 2:
* Currency ticker

#### MVP 3:
* Multiplayer games
 * Reaction Test
 * Simon-Says

#### Bonus features:
* "Panels" can be customised by app/webpage to choose what panels are shown and what is shown on them

## Technologies:
* Linux
* Javascript
* HTML5
* Python
* Django
* Websockets
* Slack api
* OpenWeather api

## Hardware:
* LED's
* Lithium Battery
* IMU
* Speaker


# Technical notes

## Hardware:
  * 1 x Raspberry pi 3
  * 1 x MicroSD memory card (16gb minimum recommended)
  * 1 x Raspberry pi RGB Panel hat
  * 6 x 32x32 RGB LED Panels
  * 30cm of 16way IDC ribbon cable
  * 1 x 5v 30amp step-down convertor
  * 1 x 4s LiPo Battery (capacity is dependant on runtime required)
    * Optional 1x 5v 30a mains power supply
  * Mechano style right angle brackets to hold panels together
  * Mechano style strips to mount raspberry pi and battery to.
  * ~50 x m3 x 6mm screws
  * ~10 x m3 x 15mm screws
  * ~10 x m3 nylok nuts
  * Loctite (**not to be used on the nylok nuts**)
  * Battery connectors (XT60 or XT90 recommended)
  * 2.5mm jack plug with leads.


## Assembly:
  * Tools required:
    * Screwdriver
    * Wire Cutters
    * Soldering iron
    * Insulation tape

Mount Right angle brackets to the 4 of the panels

![assembly_1](./readme/brackets.jpg =800x)

unscrew the 2 of the led panels from their frames to allow for mounting of the raspberry and battery mounts.

![brackets](./readme/bottom_plate.jpg =800x)


Solder all the connectors to the Pi RGB Hat except the screw terminals as these are not required.

Disassemble one idc connector to create a longer cable due to the distances between the panels being a little bit too short

Join 3 of the power looms from the panels together (because the looms have 2 panel connectors on each you can save on lots of cables). add an XT60 connector to the end to allow you to switch between battery and desktop power supplies. Tap onto the power supply cables the 2.5mm jack plug plug to power the Pi through the Pi RGB Hat

![loom](./readme/loom.jpg =800x)

Bolt the 4 side panels together and then bolt to the base

![assembly_2](./readme/loom.jpg =800x)



## Software configuration:

Install Noobs Rasbian onto a microSD card [(Link to Noobs) ](https://www.raspberrypi.org/downloads/noobs) and start up your raspberry pi.

Update your packages:
```
sudo apt-get update
sudo apt-get upgrade
```

*** does package come with python??? *** Install Python 2.7

Install Python PIP

```
sudo apt-get install python-pip
```

Install Python package manager,
```
sudo pip install -U python-dotenv
```

Install and setup virtualenv
```
sudo pip install virtualenv

mkdir -p ~/maker_cube/django-rpi
cd ~/maker_cube/django-rpi/

virtualenv venv && source venv/bin/activate
```

Install and start Django Package
```
pip install django
django-admin startproject maker_cube_app
```

Finally run a Python migrate to complete the django setup.
```
python manage.py migrate
```

## Clone the Repo

This git repository has two submodules. These are basically separate git repositories nested within this git repository.

The sub modules are repositories that contain drivers for the LED screens. These can be used in a number of projects and should kept up to date.

To clone all of the nested repos run the following form the command line:

`git clone --recursive https://github.com/sultanhq/maker_cube.git`

If there has been a change to the sub modules you can pull all the updated modules using:

`git submodule update --recursive`


compile the led library executables

```
sudo apt-get install -y build-essential libconfig++-dev
cd rpi-fb-matrix
make
```

Copy the sample configuration file to the rpi-fb-matrix folder and rename removing the 'sample'

Setup chromium browser to autostart by copying the `autoChromium.desktop` file into the folder `~/.config/autostart/`

## rc.local file

to get the django webserver to run on start up along with the led matrix output, add the following lines to ~/etc/rc.local (note the ***'&'***'s are important otherwise the Pi will lock up on boot)

```
(sleep 15; cd /home/pi/maker_cube/django-rpi/maker_cube_app; /home/pi/maker_cube/django-rpi/venv/python /home/pi/maker_cube/django-rpi/maker_cube_app/manage.py runserver 0.0.0.0:8080)&
(sleep 45; cd /home/pi/maker_cube/rpi-fb-matrix; sudo ./rpi-fb-matrix/matrix.cfg)&
...

exit 0
```

## turning off screen blanking

sudo nano ~/etc/lightdm/lightdm.conf

In that file, look for:

[SeatDefault]

and insert this line below it:

`xserver-command=X -s 0 dpms`

## using the mobile software

When the cube is turned on, by default the first thing it displays is its local IP address:

`192.168.XXX.YYY:8080`

where XXX and YYY are any numbers between 0 and 255.

Enter this address into a mobile device's browser, and you will be taken to the mobile web app that controls the cube!





# sources:

http://raspberrypituts.com/raspberry-pi-django-tutorial-2017/

http://raspberrypi.stackexchange.com/questions/38515/auto-start-chromium-on-raspbian-jessie-11-2015

https://learn.adafruit.com/raspberry-pi-led-matrix-display

https://www.raspberrypi.org/forums/viewtopic.php?f=66&t=18200
