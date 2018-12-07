---
download: true
layout: download-details
title: Google Earth Demo
date: 2010-07-23
sortkey: "2010-07-23"
category: models-dep
download-url: https://ipfs.omnetpp.org/models/google-earth-demo.tgz
website-url: http://www.youtube.com/watch?v=cFPJPVh3ouQ
---

DEPRECATED - OMNeT++ now supports osg and osgEarth for 3D visualization.

This is a demo for visualizing a simulation using Google Earth. There is a video of this demo running as well on YouTube (see home page)

This download is for OMNeT++ 4.1 only -- later versions [will] contain this demo as an example simulation.

The demo simulates a wireless mobile ad-hoc network. The model contains a number of mobile nodes (cars) that move about randomly over a 2km-by-2km area. The nodes have identical radios, with a transmission range of about 500m; for simplicity, we assume that the area covered by each radio is a perfect circle. When two modes move within range of each other, they can communicate with each other, forming a (usually disconnected) ad-hoc network. The purpose of the simulation study could be to measure how long it takes to disseminate some piece of information to all nodes of the network. The communication itself is not modeled in this demo.

Visualization shows the mobile nodes themselves (a 3D car model), their recent trails, their transmission ranges (semi-transparent filled circles on the terrain), and the current connectivity of the network (cars that are closer than 500m are connected with a white line).

