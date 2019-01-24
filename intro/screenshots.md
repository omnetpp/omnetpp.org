---
layout: page
title: Screenshots
screenshots:
- url: /images/screenshots/ned-graphical-editor.png
  caption: "IDE - NED editing in graphical mode"
- url: /images/screenshots/ned-src-editor.png
  caption: "IDE - Editing NED source code"
- url: /images/screenshots/ide-inieditor.png
  caption: "IDE - Editing a simulation configuration"
- url: /images/screenshots/ide-launcher.png
  caption: "IDE - Launching a simulation campaign"
- url: /images/screenshots/ide-ana-qam-pkloss.png
  caption: "IDE - Analysis Tool"
- url: /images/screenshots/eventlog.png
  caption: "IDE - Viewing the event log of a simulation"
- url: /images/screenshots/seqchart.png
  caption: "IDE - Visualizing interactions on a sequence chart"
- url: /images/screenshots/ide-seqchart-1.png
  caption: "IDE - Another sequence chart"
- url: /images/screenshots/qtenv-main.png
  caption: "The Qtenv simulation runtime"
- url: /images/screenshots/qtenv-inet-sensornetwork.png
  caption: "Qtenv - An INET sensor network simulation"
- url: /images/screenshots/qtenv-inet-standardhost.png
  caption: "Qtenv - Internals of an INET host"
- url: /images/screenshots/qtenv-inet-networkpath.png
  caption: "Qtenv - Visualizing packet paths in an INET simulation"
- url: /images/screenshots/qtenv-inet-radiostate.png
  caption: "Qtenv - Showing radio states in an INET simulation"
- url: /images/screenshots/qtenv-inet-signalpropagation.png
  caption: "Qtenv - Signal propagation in an INET simulation"
- url: /images/screenshots/qtenv-osg-rovers.png
  caption: "Qtenv - 3D visualization using osgEarth"
- url: /images/screenshots/qtenv-osg-drones.png
  caption: "Qtenv - 3D visualization using osgEarth"
- url: /images/screenshots/qtenv-osg-satellites.png
  caption: "Qtenv - 3D visualization using osgEarth"
---

<ul style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: flex-end">
{% for item in page.screenshots %}
  <li style="margin: 20px; list-style: none;">
    <p><img class="materialboxed" data-caption="{{item.caption}}" src="{{item.url}}" alt="{{item.caption}}" width="320" /></p>
    <p>{{item.caption}}</p>
  </li>
{% endfor %}
</ul>
