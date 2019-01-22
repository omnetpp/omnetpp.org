---
layout: page
title: Screenshots
screenshots:
- url: /images/screenshots/ned-graphical-editor.png
  caption: "Graphical NED editor"
- url: /images/screenshots/ned-src-editor.png
  caption: "NED Source editor"
- url: /images/screenshots/launcher.png
  caption: "Launching a simulation"
- url: /images/screenshots/seqchart.png
  caption: "Sequence chart"
- url: /images/screenshots/eventlog.png
  caption: "Event log"
- url: /images/screenshots/scave-editor.png
  caption: "Analysis design"
- url: /images/screenshots/scave-linechart.png
  caption: "Line chart"
- url: /images/screenshots/scave-barchart.png
  caption: "Bar chart"
- url: /images/screenshots/qtenv-main.png
  caption: "Qtenv Simulation Runtime Environment"
---

<ul style="display: flex; flex-wrap: wrap; justify-content: space-evenly; align-items: flex-end">
{% for item in page.screenshots %}
  <li style="margin: 20px; list-style: none;">
    <p><img class="materialboxed" data-caption="{{item.caption}}" src="{{item.url}}" alt="{{item.caption}}" width="320" /></p>
    <p>{{item.caption}}</p>
  </li>
{% endfor %}
</ul>
