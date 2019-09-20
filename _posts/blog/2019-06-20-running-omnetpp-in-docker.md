---
layout: post
title: Running OMNeT++ in Docker
author: Rudolf
date: 2019-06-20
category: blog
---
As OMNeT++ has several dependencies that can complicate the installation, we decided to make it available in an
additional form. We are providing now a docker image that contains a specific version of OMNeT++ compiled in
release mode.
<!--more-->
As this image is published on the Docker Hub registry, it is straightforward to deploy OMNeT++ on any machine that
has Docker. The only command you need:

    docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.5.1

This command will download OMNeT++ and start a shell on your machine, mounting the current working directory inside the
Docker container at `/root/models` and letting you edit your models outside of the container with your favorite editor
while allowing to build and run your models inside the container. This is great for creating reproducible model runs
and also for quickly deploying and running various versions of OMNeT++ (there are images for each last major version of
OMNeT++ i.e. 3.3, 4.6, 5.5.1).

While this is great for command line usage, sadly we cannot use this for development, debugging or even just running
the simulation in graphical mode. The problem is that the docker image is not prepared to run graphical applications
(it does not contain a display server like Xorg, and other graphical dependencies like Qt are also missing). This is a
great area for further research...
