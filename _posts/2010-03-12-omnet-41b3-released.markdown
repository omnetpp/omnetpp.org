---
layout: post
title: OMNeT++ 4.1b3 released
joomla_id: 3658
joomla_url: omnet-41b3-released
date: 2010-03-12 00:00:00.000000000 +01:00
author: Administrator
excerpt: Dear users, we've just released the third beta of OMNeT++ 4.1. Please report
  any issues you encounter. We cannot fix a bug that we don't know about.&nbsp;<meta
  http-equiv="content-type" content="text/html; charset=utf-8">Thank you and have
  fun with the new release.<div><a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it now</a>.<div><br /></div><div>
category: Software
---
Dear users, we've just released the third beta of OMNeT++ 4.1. Please report any issues you encounter. We cannot fix a bug that we don't know about.&nbsp;<meta http-equiv="content-type" content="text/html; charset=utf-8">Thank you and have fun with the new release.<div><a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it now</a>.<div><br /></div><div><h2><span style="color: rgb(34, 34, 34); font-size: small; " mce_style="color: #222222; font-size: small; "><span class="Apple-style-span" style="font-size: 13px;" mce_style="font-size: 13px;"><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "><span class="Apple-style-span" style="font-size: 14px;" mce_style="font-size: 14px;"><p><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "></span></p><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "><pre><font class="Apple-style-span" color="#222222" face="Arial, Helvetica, sans-serif" size="3"><span class="Apple-style-span" style="font-size: 13px; white-space: normal;"><font class="Apple-style-span" color="#000000" face="Verdana, Arial, Helvetica, sans-serif" size="2"><span class="Apple-style-span" style="font-size: 10px; white-space: pre;">O</span><font class="Apple-style-span" size="2"><span class="Apple-style-span" style="font-size: 10px; white-space: pre;">MNeT++ 4.1 beta 3 (March 2010)
API (see include/ChangeLog for more info):
  New channel programming model

  New cHistogram class (by merging cDoubleHistogram and cLongHistogram functionality) 

  New statistic recording framework using signals: The module's C++ code only emits
  signals containing important module variables and events. Statistic collector
  objects are attached to the signals from the NED file or from the INI file allowing
  to configure the statistic collection without modifying any C++ code.

  New simTime() NED function returning the current simulation time. It is possible
  now to create time dependent distributions e.g.:
  interArrivalTime = exponential(simTime()&lt;10s ? 0.5s : 2s)

NED:
  @signal property is used to define the signals emitted by the module
  
  @statistic property is used to define the default statistics gathered 
  in the module by the new statistical framework.

IDE:
  The IDE is now based on Eclipse 3.5.2 and CDT 6.0.2.

  NED editor now has content assist for display string tags.
  Icons and colors are displayed inside the content assist window.

  Content assist is supported for channel parameters in NED Editor.

  Content assist is supported for @signal and @statistic in NED Editor.

  Statistic and signal declarations are shown in the Module Hierarchy View

  INI File Editor now supports content assist for statistic names.

  Several usability enhancement in the Analysis Editor
  - SVG export for charts.
  - Redesigned filter interface on the browse data page provides more space.
  - Tree view in the Browse Data page.
  - It is now possible to group and explore the collected results in
    several different way on the Dataset page.
  - Charts in the Chart Sheet fill the editor window automatically. 
  - Number of columns can be configured on the Chart Sheet.

  Direct method calls can be visualised in Sequence charts.

  Generated NED documentation now includes signal and statistic declarations.
  
  New Freemarker template editor used during wizad creation ('*.ftl' files).

Tooling:
  The git package is updated to version 1.6.5  

Documentation:
  Extensive documentation review and proofreading.

Bugfixes since beta 2:

  Fixed regressions related to parameter handling.

  The IDE no longer crashes on multi-processor Windows machines.

  git commands are working correctly now on Windows (git merge etc.)

  The new version of Eclipse platform (3.5.2) solves the 'dead button' problem
  found on Linux systems with the latest version of GTK.

  Documentation generator now correctly generates docs from NED files containing
  the @titlepage property.

  Boolean parameters now can be recorded as scalars.


OMNeT++ 4.1 beta 2 (Jan 2010)
-----------------------------
API:
  No breaking changes to the API since 4.0. Every model created for 4.0 
  should work without a problem on 4.1. See include/ChangeLog for details.

  Added a 'signal mechanism' to support emitting signals from a model. Signals 
  can be used to gather statistics, send notifications about model changes etc.
  Consumers can subscribe to a signal and recive notifications whenever the 
  signal is emitted. Signals can carry basic data elements so it is possible 
  to implement data collection or other notification related features using them.
  The OMNeT++ kernel is now using the same signal mechanism to emit signals when
  the NED topology is changing. See include/ChangeLog for details.

NED:
  Deep parameter assignments: It is now possible to assign a parameter of a 
  submodule inside the parent (or any ancestor) in 'submodule.parameter = value' form.
  Wildcards (like in INI) files are allowed too.

  Re-assigning a parameter, that has an already assigned non-default value
  in an ancestor is no longer allowed.

IDE:
  The IDE is now based on Eclipse 3.5.1 and CDT 6.0.1.

  Palette in NED editor has been enhanced with auto sorting, filtering and
  recently used items.

  Connection chooser enhancements: When two modules are connected with a
  connection, the editor tries to guess which gates must be connected.
  The NED model can be annotated with '@labels' properties to support this
  functionality. e.g. If a gate is annotated with label 'AAA' then only 
  gates annotated with the same 'AAA' label will be offered as the other 
  endpoint.

  New Parameter editor dialog has been added for channel and module
  parameters.

  Content assist is working now for connection parameters.

  Looped and conditional connections are rendered differently by the IDE.

  NED file validation has been enhanced in the NED Editor.

  Parameters can be grouped now in the ModuleHierarchyView.

  The simulation launcher now checks for errors in the open project(s) 
  (and warns if any) before starting a simulation.

  Attaching vectors to a Sequence Chart is more intuitive now.

  The usability of the result analysis charts and chart-sheets has been 
  greatly enhanced. It is now possible to group and explore the collected 
  results in several different way on the Dataset page.

  Result charts and sequence diagrams can be exported in SVG format. This
  allows the creation of publication quality charts and diagrams.

  The IDE now automatically discovers and activates all eclipse plugins copied
  into a project's 'plugins' folder. This mechanism allows the creation and
  easy distribution of model specific IDE extensions. Check the IDE-DevelopersGuide
  document for more information.

  Simulation models may add their own 'New...' wizards to the IDE when their
  projects are opened. The wizards will appear automatically in the 'New...' menu.
  Wizards are simple template files that are expanded on wizard execution.
  No Java programming is required. Check the IDE-CustomizationGuide for
  more information.

Tkenv:
  Two-way connections between modules are now represented with a single line 
  (without arrow heads). One way connetions are unaffected.

  Connection layouting has been optimized for connections between long shaped 
  modules. YOu will see better results if modules are horizontally or vertically
  overlapping.

  Right clicking on a point covered by several objects brings up a popup menu 
  containing an item for each object under the mouse. Previously only the 
  topmost object was accessible, making crowded areas hard to inspect.

Tooling:
  The bundled MINGW GCC compiler and MSYS binaries have been updated
  to their latest version (on Windows).

Simulation kernel:
  Source files are now compatible with GCC 4.4 version

  Several performance and memory optimization.

Documentation:
  A very detailed Installation Guide has been created. It provides step by
  step installation instruction for the most popular operating systems.

  An IDE Developers Guide has been created describing how to enhance the 
  OMNeT++ IDE itself and extend it with new functionality.

</span></font><span class="Apple-style-span" style="font-size: 10px; white-space: pre;">
</span></font></span></font></pre></span></span></span></span></span></h2></div></div>
