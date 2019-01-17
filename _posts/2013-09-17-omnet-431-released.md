---
layout: post
title: OMNeT++ 4.3.1 released
joomla_id: 3710
joomla_url: omnet-431-released
date: 2013-09-17 08:44:08.000000000 +02:00
author: Administrator
excerpt: 'OMNeT++ 4.3.1 is now available for download. With this update, we made it
  a lot easier for first-time users to get started with OMNeT++: on the first startup,
  the IDE shows some useful bits of information, and also offers installing the INET
  Framework. In addition, the update also contains some bug fixes and smaller improvements
  to the Simulation IDE. There is no change in the simulation kernel and tools. Read
  the ChangeLog (after the More link) for details, or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases"
  mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go
  directly to the download page</a>.<br />'
category: Software
---
OMNeT++ 4.3.1 is now available for download. With this update, we made it a lot easier for first-time users to get started with OMNeT++: on the first startup, the IDE shows some useful bits of information, and also offers installing the INET Framework. In addition, the update also contains some bug fixes and smaller improvements to the Simulation IDE. There is no change in the simulation kernel and tools. Read the ChangeLog (after the More link) for details, or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases" mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go directly to the download page</a>.<br /><br />The IDE was made more friendly to first-time users:<br />
<ul>
<li>When the IDE is started with an empty workspace (e.g. on first-time launch), it offers the user the following options: (1) Import the OMNeT++ sample simulations into the workspace; and (2) Download and install the INET Framework.</li>
<li>The latter function is also available via the Help &gt; Install Simulation Models... menu item. The menu item brings up a dialog with the list of simulation models available for automated installation, and lets the user choose. Currently only the INET Framework is listed there, but it is planned to add further models.</li>
<li>When the IDE is started for the first time, it now displays some helpful introductory pages in the editor area: "Getting Started" (practical advice for getting past the first 10 minutes spent in the IDE); "At a Glance" (explains the common file types like NED, msg and ini, and their purposes); "OMNeT++ Samples" (describes each example simulation in two sentences, then provides links for opening the project, viewing the README, launching the simulation, etc.) These pages are also available from the Help system (except the last one, which has a dedicated menu item under the Help menu.)</li>
</ul>
Further IDE improvements:<br />
<ul>
<li>IDE launcher script: fixed #670 (vmargs conflict between omnetpp.ini and the launcher script). This bug could cause IDE crashes by PermGenSpace exhaustion.</li>
<li>Analysis Tool, Output Vector View: show "Go to" actions in the context menu (instead of the view's pulldown menu)</li>
<li>Analysis Tool: fixed #389 (Useless items in the Statistic Name filter): The filter hints of combos is now computed from the result items filtered by the other 2 combos.</li>
<li>Analysis Tool: fixed #388 (add '*.host[*].*' variant to module filter hints)</li>
<li>Ability to import sample projects even if workspace is different from omnetpp/samples</li>
<li>Trying to launch a closed project will now offer opening it</li>
<li>NED documentation generator: fixed #672 (Illegal group reference error)</li>
<li>Changed default appearance of the main welcome page to be more user friendly</li>
<li>Some other bug fixes</li>
</ul>
