---
layout: post
title: Welcome to our New Website
author: Andras
category: Article
---

Welcome to our new website! We have decided to re-create the OMNeT++ website
with a different technology, to improve its speed and usability. The new website
is statically generated and hosted on GitHub, which will considerably improve
its speed. Additionally, the download files are no longer hosted on the website
directly, but instead they are available on [IPFS (Interplanetary File
System)](https://ipfs.io/). We still provide an HTTP gateway for the file
downloads, to make it easy to download the files using only a browser. The
switch to IPFS also allowed us to remove the captcha requirement, making it
possible to perform downloads using command line tools like wget.


<!--more-->

Until now, the OMNeT++ website was running on Joomla and all OMNeT++ downloads
were hosted on our own website. This led to several issues that caused a lot of
pain in the past:

- Running a full blown CMS on the website constantly exposed us to security
  issues. Keeping the website up to date and clean required a lot effort on our
  side that could have been spent better elsewhere...
- As the downloads were hosted on the website, we were constantly the target of
  download abuse. Certain actors on the internet (khmm...) were continuously
  downloading the biggest files possible in a loop to cause harm and make the
  site struggle.

At the end, we have decided to host the website on github and move all the file
downloads to IPFS. This new setup will hopefully serve us much better in the
future. Please enjoy the new website and let us know if you find issues. Also,
if you happen to run an IPFS node (and have some extra storage and bandwidth),
you can help us mirroring the OMNeT++ download files by pinning them on IPFS:

> ipfs pin add /ipns/ipfs.omnetpp.org

