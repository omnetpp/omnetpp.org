---
layout: post
title: 'Tkenv: layouting and icon colorization'
joomla_id: 3558
joomla_url: "-sp-988835630"
date: 2003-12-22 19:15:00.000000000 +01:00
author: Andras
excerpt: "<P>Good news if you're doing routing simulations with OMNeT++: in&nbsp;the
  next release, Tkenv will be able to lay out the network graphics automatically,
  so it'll be a lot easier to follow the route of packets. You'll also be able to
  colorize module icons&nbsp;at runtime (via display string changes)&nbsp;to visualize
  node state&nbsp;or just to improve the look of the model. Read on for screenshots.</P>"
category: News
---
<P>Good news if you're doing routing simulations with OMNeT++: in&nbsp;the next release, Tkenv will be able to lay out the network graphics automatically, so it'll be a lot easier to follow the route of packets. You'll also be able to colorize module icons&nbsp;at runtime (via display string changes)&nbsp;to visualize node state&nbsp;or just to improve the look of the model. Read on for screenshots.</P><FONT size=2>
<P><U>Automatic layouting:</U> all modules that don't have explicit coordnates in the "p=" tag will be arranged automatically in the graphics so that they don't overlap, connected ones are close to one another, etc. You can also mix it with explicit positioning of some nodes and with specifying row, matrix, ring, etc layout for some module vectors -- the "clusters" laid out as ring,etc will be moved as one. The algorithm is based on attraction and repulsion among nodes (a.k.a Spring Embedder).</P>
<P><U>Icon colorization:</U> the "i=" display string tag has been extended -- it supports things like "i=server1,gold" or "i=pc,cyan". The degree of colorization in percentages is also a parameter: "i=pc,red,70" is the "pc" icon in 70% red (default is 20%). It can also be used to brighten, darken or grayscale an icon. This feature can be useful to encode status info in the icon (e.g. red=overloaded, grey=down, green=idle, etc.), to group modules (e.g. all web servers are yellow) or just to make the graphics look better.</P>
<P align=center><A href="http://whale.hit.bme.hu/misc/screenshots/anchors.gif"><img width="200" height="146" src="/images/omnetpp/20031222191549636_1.jpg" alt=""></A><BR>Mixing layouting with submodule vectors arranged in ring, row and matrix (also shows colorization of "pc" icon)</P>
<P align=center><A href="http://whale.hit.bme.hu/misc/screenshots/coloring.gif"><img width="121" height="124" src="/images/omnetpp/20031222191549636_2.jpg" alt=""></A><BR>The well-known stock OMNeT++ icons, colorized</P>
<P align=center><A href="http://whale.hit.bme.hu/misc/screenshots/net.gif"><img width="154" height="122" src="/images/omnetpp/20031222191549636_3.jpg" alt=""></A><BR>A ~60-node network (from the AntNet simulation)</P>
<P align=center><A href="http://whale.hit.bme.hu/misc/screenshots/bintree63.gif"><img width="156" height="122" src="/images/omnetpp/20031222191549636_4.jpg" alt=""></A><BR>63-node binary tree</P>
<P align=center><A href="http://whale.hit.bme.hu/misc/screenshots/bintree1023.gif"><img width="190" height="147" src="/images/omnetpp/20031222191549636_5.jpg" alt=""></A><BR>1023-node binary tree -- this is a bit crowded</FONT></P>
