---
id: omnetpp-33p1-ubuntu1804
download: true
layout: download-details
title: OMNeT++ 3.3p1 for GCC 7.3 (Ubuntu 18.04)
date: 2008-10-30
sortkey: "2008-10-30"
category: omnetpp
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-3.3-ubuntu18.04/omnetpp-3.3-src-gcc73.tgz

- id: docker
  download-page-url: https://cloud.docker.com/u/omnetpp/repository/docker/omnetpp/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" omnetpp/omnetpp:u18.04-3.3
---

This release patches OMNeT++ 3.3 to compile with GCC 7.3. It can be used
for porting models written for OMNeT++ 3.3. It was tested only on Ubuntu 18.04, however
other Linux distributions with up to date GCC compiler should work, too.
