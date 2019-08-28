---
layout: post
title: Official OMNeT++ Docker Containers
category: Articles
---
We are now providing official docker images for [various OMNeT++ versions on Docker Hub](https://hub.docker.com/r/omnetpp/omnetpp). These images are useful for compiling, testing and running your model either locally or remotely in the cloud. They also provide a reproducible environment for your simulations so we highly recommend using them if you intend to publish a paper based on simulation results.

The images are based on Ububtu 18.04 and use clang 6.0 as the compiler. OMNeT++ is built in release mode for Cmdenv execution so graphical tools are not available.

Supported OMNeT++ versions: **3.3**, **4.6**, **5.4.1** and **5.5.1**

<!--more-->

## Usage

Create a shell script with the name `opp_docker_shell` and the following content

    #!/bin/sh
    docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.5.1

and make it executable

    $ chmod +x opp_docker_shell

Make sure that you replace the `u18.04-5.5.1` tag with your desired version. The first part of the version name encodes the base operating system of the image (u18.04 being Ubuntu 18.04 ) and the second part is the OMNeT++ version (5.5.1 in this case).

Go to your model directory or the workspace directory that contains the model directory and execute the above shell script. It will mount the actual directory inside the container at the `/root/models` directory. You can now build your model just like you would do in a normal OMNeT++ installation.

## Tip for Publishing Papers

We highly recommend that simulations for your published paper(s) are run in this image so your work will be easily reproducible by other researchers.

You should fully document the exact process to re-create your work which could be something like this:

    $ git clone git@github.com:mygithubuser/mymodel.git   # clone your model repo
    $ git checkout 0fd783bd6426b5c5cc2b3ef721ef957f83bf3043    # exact version of your model
    $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-5.5.1   # start the docker container for OMNeT++ 5.5.1
    omnetpp-5.5.1$ cd mymodel   # now you are inside the container. Go to the model directory.
    omnetpp-5.5.1$ opp_makemake -f && make   # create the makefile and build your model
    omnetpp-5.5.1$ ./runmymodel   # execute your simulation campaign

## Source

The docker file for building this image is available [here](https://github.com/omnetpp/dockerfiles/tree/master/omnetpp). If you need additional software in your container, feel free to base your container on any of [these images](https://cloud.docker.com/u/omnetpp/repository/docker/omnetpp/omnetpp).
