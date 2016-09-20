---
layout: post
title:  "Beaconator App"
date:   2016-08-06
excerpt: "Swift app made to interact with iBeacons and a Node.JS API"
project: true
tag:
- project 
- app
- swift
comments: false
---
# Beaconator App
* GitHub Repo [Beacon App](https://github.com/garrettogrady/BeaconApp)
![Beacon Icon](/assets/img/beacon-app-icon.png)    

This was an app I built for Fusionary during my internship there in the summer of 2015. They had a client approach them about a way to track which employees came to meetings and when they arrived at the office and left at night. It seemed a bit big-brother ish to me but nonetheless a sweet app! I got to work playing with the Estimote SDK for iBeacons since we have 6 iBeacons. 

## Step One - Getting the iBeacons to talk to the iPhones
The first step was to make an app that could talk to the beacons. I used the SDK and made a push notification every time someone entered the beacon ranging area. 
![Beacon Icon](/assets/img/goal.png) 

## Step Two - Sending the data somewhere
Next I wanted to send that data somewhere so I created a slack channel in the office and sent the requests there. It was my first time dealing with JSON in swift and I got to learn how to use Cocoapods.

## Step Three: Creating a web app
With the help of one of the senior JS developers, we created a Node.JS application that functioned as the backend API for the app. It not only received the data of where people were in the office but the front end of the application pulled the data from it as well in to a table. 
![Beacon Icon](/assets/img/beaconator-api.png) 

## Step Four: Creating the front end of the app
With data being pulled from the API I was free to start making the frontend. I created a table view that pulled each users location and displayed where they were in the office. I then added segues to get more information on people and see where they had been. The third set of segues led to clicking on a room and seeing who was currently there and who had been there.
<figure class="half">
    <img src="/assets/img/beacon-screenshot1.png">
    <img src="/assets/img/beacon-screenshot2.png">
</figure>
