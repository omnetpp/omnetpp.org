---
layout: post
title: OMNeT++ 4.1b2 released
joomla_id: 3656
joomla_url: omnet-41b2-released
date: 2010-01-28 00:00:00.000000000 +01:00
author: Andras
excerpt: Dear users, we've just released the second beta of OMNeT++ 4.1. We have included
  new features, documentation and bugfixes for reported issues. Please report any
  issues you encounter.&nbsp;<a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it now</a>.<div><br /></div><div>
category: Software
---
Dear users, we've just released the second beta of OMNeT++ 4.1. We have included new features, documentation and bugfixes for reported issues. Please report any issues you encounter.&nbsp;<a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it now</a>.<div><br /></div><div><h2><span style="color: rgb(34, 34, 34); font-size: small; "><span class="Apple-style-span" style="font-size: 13px;" mce_style="font-size: 13px;"><span style="color: rgb(51, 51, 51); font-size: medium; "><span class="Apple-style-span" style="font-size: 14px;" mce_style="font-size: 14px;"><p><span style="color: rgb(51, 51, 51); font-size: medium; "></span></p><span style="color: rgb(51, 51, 51); font-size: medium; "><pre>Bugfixes since beta 1:</pre><pre>- Bug has fixed that caused that all connections in Tkenv was drawn as two-way
   two-way connections (without arrow-heads). Some connections were not drawn at all.</pre><pre>- In inherited modules the NED parameter assignment was not working correctly.</pre><pre>New since beta 1:</pre><pre>- The chart and graph usability enhancements.</pre><pre>- New signal API for notifications, statistics collection etc.</pre><pre>API:
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

  The simulation launcher now check for errors in the open project(s)
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
  Two way connections between modules are now represented with a single line
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


</pre></span><p><br /></p></span></span></span></span></h2></div>
