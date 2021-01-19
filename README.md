<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://josh.house/projects/sundance">
    <img src="https://josh-house.s3-ap-southeast-2.amazonaws.com/sundance/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Sundance</h3>

  <p align="center">
    A fun project to open up a small part of my office to the public.
    <br />
    <a href="https://josh.house"><strong>Come try out the project »</strong></a>
    <br />
    <br />
    <a href="https://josh.house">My blog</a>
    ·
    <a href="https://josh.house/projects">Other projects</a>
    ·
    <a href="https://stackoverflow.com">My saviour</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [About The Project](#about-the-project)
- [Contributing](#contributing)
- [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project
I wanted to play with LED strips for the hell of it. I also wanted to have something where I can be reminded of my friends and family in my office (be it in a good, or slightly unwarranted humorous way Jake). I also wanted to try something out and see what happens if I have a publicly accessible drawing space on my own personal wall in the office. 

```
Sundance is inspired by our primary source of light, the sun, and the dancing nature of the pixels. It's also inspired by adance performed by the North American Plains Indians in honour of the sun and to prove bravery by overcoming pain because, no doubt, this project will involve a few growing pains. 
```

## Architecture

The project contains three components that together produce sundance.
- The [Hardware](#Hardware)
- The [Firmware](#Firmware)
- The [Web](#Web)

### The Hardware

This project runs on a *Raspberry Pi Zero* running custom lightweight firmware (see below) and the *WS2812B LED* in an LED strip format. I selected the WS2812B due to it's robust addressable scheme and affordability with respect to large installations. In this project we're creating a **30x15** LED arrangement which will require 450 LEDs. The power usage of each LED is approximately **200mW (0.2W)** at full brightness which equates to roughly **90W** of total power usage. To cover our bases we'll be using a 150W power supply running at 5V and 30A. The frame will be fitted inside an aluminium based casing to act as a heatsink with the dividers between each pixel made out of opaque acrylic. A translucent sheet of white acrylic will be placed on the front to soften the LED light and create a panel.

### The Firmware

The firmware for the Raspberry Pi Zero will be embedded linux compiled using buildroot containing the minimum requirements of Python 3.8. The device will connect to my home network over WiFi. The specifics from this point forward are obfuscated for security purposes. The firmware is provided in this repository under *firmware*.

### The Software

The software will be provided on my personal website (the source code is available (here)[https://github.com/designedbyjosh/house]) which will interface with a microservice backend provided in this repository under *software*.

<!-- CONTRIBUTING -->
## Contributing

I'll be honest, this project is just for me so no I won't be taking anything other than wacky ideas from the audience.

<!-- LICENSE -->
## License

Distributed under the DWTFYWBIFGWIAMP (do what the hell you want but if it goes wrong it ain't my problem) licence.
