---
layout: post
title: OMNeT++ 4.1b4 released
joomla_id: 3661
joomla_url: omnet-41b4-released
date: 2010-04-20 00:00:00.000000000 +02:00
author: Andras
excerpt: 'Dear users, we''ve just released the fourth (last) beta of OMNeT++ 4.1.
  This is your last chance to report issues. Please read the ChangeLog carefully to
  see what has changed since the 4.0 version or check&nbsp;the visual&nbsp;<a href="/documentation/visualchangelog/#4.1"
  mce_href="/documentation/visualchangelog/#4.1" target="_blank">change
  log</a>&nbsp;to see the changes in the IDE.&nbsp;<span class="Apple-style-span"
  style="color: rgb(34, 34, 34); font-family: Arial, Helvetica, sans-serif; line-height:
  16px; font-size: 13px; " mce_style="color: #222222; font-family: Arial, Helvetica,
  sans-serif; line-height: 16px; font-size: 13px; "><a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it now</a>.</span><div><div><br /></div><div>'
category: Software
---
Dear users, we've just released the fourth (last) beta of OMNeT++ 4.1. This is your last chance to report issues. Please read the ChangeLog carefully to see what has changed since the 4.0 version or check&nbsp;the visual&nbsp;<a href="/documentation/visualchangelog/#4.1" mce_href="/documentation/visualchangelog/#4.1" target="_blank">change log</a>&nbsp;to see the changes in the IDE.&nbsp;<span class="Apple-style-span" style="color: rgb(34, 34, 34); font-family: Arial, Helvetica, sans-serif; line-height: 16px; font-size: 13px; " mce_style="color: #222222; font-family: Arial, Helvetica, sans-serif; line-height: 16px; font-size: 13px; "><a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it now</a>.</span><div><div><br /></div><div><h2><span style="color: rgb(34, 34, 34); font-size: small; " mce_style="color: #222222; font-size: small; "><span class="Apple-style-span" style="font-size: 13px;" mce_style="font-size: 13px;"><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "><span class="Apple-style-span" style="font-size: 14px;" mce_style="font-size: 14px;"><p><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "></span></p><span style="color: rgb(51, 51, 51); font-size: medium; " mce_style="color: #333333; font-size: medium; "><pre>OMNeT++ 4.1 beta 4 (April 2010)
-------------------------------
Simulation kernel:
 - Added statistics to the built-in channel types, ned.DatarateChannel and
   ned.DelayChannel. They are not recorded by default; recording can be turned
   on with "**.channel.result-recording-modes = all" in the configuration.
   DatarateChannel records the following: busy state (as vector);
   utilization (time average as scalar); number of packets (as scalar);
   number of bytes (as scalar); number of packets discarded in channel
   disabled state (as scalar); throughput (bps, as scalar). You can see the
   declarations of these statistics by running "opp_run -h neddecls".

 - handleParameterChange() is now called for each component with NULL
   as the parameterName after the last stage of the initialization phase.
   This allows the components to refresh their cached parameter values
   if some parameters were changed during the initialization phase.
   Existing code needs to be updated to accept name=NULL and interpret
   it as "any parameter".

 - signals framework: changes in the cIListener interface since the previous
   beta; changed cTimestampedValue class (which is used to emit a signal for
   statistics purposes with a different timestamp than the current simulation
   time) to support all data types

 - histogram classes: added getters getNumFirstVals() and getRangeExtension-
   Factor(); for integer histograms, cell boundaries are now at whole numbers,
   not halfs; implemented dup(); default number of cells changed

 - cChannel's process() method (which was introduced in the previous beta)
   was renamed to processMessage()

NED:
 - Inner types can now refer to the parameters of their enclosing type.

 - Statistics recording: introduced the source= key within the @statistic
   property, which lets you use a derived value as statistic. For example:
   @statistic[dropPercent](source=100*dropRatio;record=vector,last),
   where dropRatio is a signal emitted from the module. This feature also
   lets one emit message or packet objects as signals, and record some
   property of them as statistics. For example:
   @statistic[bytesSent](source=packetBytes(pkSent);record=sum).

 - The @signal property can now be used to declare signals, for example
   those that can be used as source for @statistic. An example:
   @signal[pkSent](type=cPacket).

 - Introduced optional statistic recording modes: now you can add optional
   items to the record= key of the the @statistic property, by appending "?"
   to them. For example: @statistic[eed](record=vector?,histogram?,mean).
   By default, only non-optional items are active; optional ones can be
   turned on with **.result-recording-modes = all (see below).

 - Implemented the @dynamic property. When a submodule is marked with @dynamic
   or @dynamic(true) inside a compound module, the submodule will not be
   instantiated at network setup; rather, it is expected that it will be
   instantiated at runtime, using dynamic module creation. A module created
   this way will pick up parameter values from the submodule declaration in
   the NED file as well as from the ini file. @dynamic submodules are
   displayed in the graphical NED editor as semi-transparent, but otherwise
   can be edited (and configured in the inifile editor) like other submodules.

Envir:
 - The result-recording-mode= configuration option was renamed to
   result-recording-modes=.

 - result-recording-modes now has support for optional recording modes (those
   marked with "?" in @statistic(record=..), see above). The value "default"
   selects non-optional modes from @statistic(record=..), and "all" selects
   all of them. The list can be fine-tuned by adding recording modes prefixed
   with "+" or "-" (for "add" and "remove", respectively). A lone "-" disables
   all recording modes. Some examples:
     **.result-recording-modes = default,+vector,-histogram
     **.result-recording-modes = all,-vector
     **.result-recording-modes = last
   The first one selects non-optional recording modes plus records everything
   as output vector, but disables histogram recording. The second one selects
   all recording modes but disables vector recording. The third one only
   records the last value from all statistics. There are further examples in
   src/envir/ChangeLog.

 - Created a result filter and result recorder API, for filters/recorders
   that can be used in the source= and record= keys of @statistic.
   Result filters must subclass from ResultFilter, recorders subclass from
   ResultRecorder; classes must be registered with the Register_ResultFilter()
   and Register_ResultRecorder() macros.

 - New command-line options: -h neddecls prints the NED declarations for
   built-in types (ned.DatarateChannel, etc); -h resultfilters and -h
   resultrecorders prints the list of available result filters and
   result recorders (such as min, max, mean, timeavg, last, histogram,
   vector, packetBytes, packetBits, etc).

 - Result file change: integer histograms are now marked with "attr type int"
   instead of "attr isDiscrete 1" in output scalar files.

IDE:
 - NED editor: added banner comment for module/channel types created
   graphically

 - Ini file editor usability: more specific names for table columns in form
   editor; split "Output Files" page into "Result Recording" and "Event Log"
   pages in form editor

 - Analysis editor: separate horizontal and vertical zoom controls;
   more usable context menu for charts; result file reading made more
   robust (better error messages on errors); at the same time, removed
   support for reading old-syle (3.x) vector files

 - Sequence Chart: more usable context menu; display of method calls and
   message reuse arrows turned off by default

 - Improved the display of @statistic and @signal properties in Module
   Hierarchy view

 - Dozens of bugfixes and other improvements

Tooling:
 - Updated MinGW and MSYS tools in the Windows distribution. The new MSYS
   now should work on Win64 (although the compiler still produces 32bit code).
   The GCC compiler is updated to a pre-release version of MinGW 4.5 (this
   solves the debugging issues on Windows platform).

Build system:
 - Extra long command lines are supported now for the MinGW linker. (Uses a
   temporary file to pass args to the linker if the command line is &gt;32K.)

Tkenv:
 - It is now possible to turn eventlog recording on/off interactively, not only
   via omnetpp.ini options; see "Toggle eventlog recording" toolbar button.

 - Module initialization messages are now not printed; we added an option to
   turn them back on in the Simulation Options dialog.

Cmdenv:
 - Printing of module initialization messages is now suppressed in express mode

Bugfixes since beta 3:
 - in express mode, log messages (ev&lt;&lt;) were not recorded into the eventlog
 - NED graphical editor added explicit "ned.IdealChannel" to connections
 - NED editor failed to add blank lines between components created graphically
 - pack/unpack error for "long long" type fixed (on MinGW compiler)
 - fixed (reduced) the size of filter text field in the NED editor palette
 - Go To C++ Definition in NED file is working again
 - opp_test: %subst to understand backrefs ($1) in the replacement string
 - many other bug fixes

OMNeT++ 4.1 beta 3 (March 2010)
-------------------------------
Simulation library:
 - New channel programming model. The user needs to override the process()
   method of cChannel, which has the following parameters: the message;
   the time the message will reach the source gate of the connection; and
   a reference to a struct (cChannel::result_t) in which the method should
   return the results. result_t fields to be filled in are the propagation
   delay, the transmission duration, and a flag to indicate whether to model
   that the message got lost in the channel (when this is set, the simulation
   kernel will delete the message after process() returns).

 - New class: cHistogram. It is a merger of cDoubleHistogram and cLongHistogram
   (which have been kept for compatibility). cHistogram can work in "integers"
   or "doubles" mode; the difference is that in "integers mode", cell boundaries
   will be chosen to be integers. The default behavior is to automatically
   choose the mode after precollecting some (by default 100) observations.
   The significance of cHistogram is that the "histogram" recording mode
   of the new statistics framework (see below) uses cHistogram in its default
   setup.

 - New statistics recording framework using signals. The module's C++ code
   emits statistics as signals, and collector objects are attached externally,
   by the simulation framework. Statistics are declared in NED files using
   @statistic properties, and actual recording (whether to record values as
   output vector, or as histogram, or the average/minimum/maximum etc value
   as scalars) can be configured from ini files. The runtime cost of
   statistics that are not recorded is minimal, which allows module authors
   to emit lots of statistics in the code, and let the end users decide which
   statistics they want to record and in what form. Earlier, such functionality
   would have required extensive C++ programming in module.

 - Added a simTime() NED function that returns the current simulation time.
   simTime() makes it possible to create time-dependent distributions, e.g.:
   interArrivalTime = exponential(simTime()&lt;10s ? 0.5s : 2s)

Envir:
 - New configuration option: warmup-period. This is associated with the new
   statistics recording framework: when specified, values produced during
   the first X seconds of the simulation will not be calculated in the
   results. For existing statistics that are calculated manually inside
   modules and recorded e.g. as recordScalar() in finish(), the module C++
   code of course needs to be modified to respect the warmup period; the
   length of the warmup period can be obtained from C++ code as
   simulation.getWarmupPeriod().

 - New configuration option: result-recording-mode (renamed to ~-modes in
   beta4); this option specifies what to record from statistics declared
   in NED. Example value: vector,histogram,timeavg,min,max.

 - New configuration option: debug-statistics-recording. When turned on,
   the simulation program will dump what result recorders have been attached
   to which module signals.

 - Renamed "vector-recording-interval" configuration option to
   "vector-recording-intervals" (plural) which is a more precise name, plus
   more consistent with eventlog-recording-intervals.

NED:
 - New properties associated with the statistics recording framework (above):
   @signal defines a signal emitted by the module, and @statistic defines
   a statistic that is available for recording. (A statistic can use a signal
   "as is", or can be some function of it; for example, a signal can be
   a packet, and a corresponding statistic can be the length of the packet.)

IDE:
 - The IDE is now based on Eclipse 3.5.2 and CDT 6.0.2.

 - Content assist for icons (with preview!), colors and other display string
   tags in the NED source editor. Content assist is now also supported
   for channel parameters, and @signal and @statistic properties.

 - Statistic and signal declarations are now shown in the Module Hierarchy view.

 - Content assist for statistics names in the ini file editor.

 - Several usability enhancement in the Analysis Editor:
   - SVG export for charts.
   - Redesigned filter interface on the Browse Data page provides more space.
   - Tree view in the Browse Data page: it shows results in a tree organized
     along runs, modules, results and result properties as tree levels.
     Tree levels can be freely configured.
   - Charts in the Chart Sheet are resized fill the editor window automatically.
   - The number of columns can be configured on the Chart Sheet.

 - Direct method calls can be visualized in Sequence Charts (needs to be
   turned on manually)

 - Generated NED documentation now includes signal and statistic declarations.

 - New FreeMarker template editor for editing of ".ftl" files, used for the new
   templated wizards feature (see 4.1b1).

Tooling:
 - The git package has been updated to version 1.6.5.

Documentation:
 - Extensive documentation review and proofreading.

Bugfixes since beta 2:
 - Fixed regressions related to parameter handling.
 - The IDE no longer crashes on multi-processor Windows machines.
 - git commands are working correctly now on Windows (git merge etc.)
 - The new version of Eclipse platform (3.5.2) solves the 'dead button' problem
   found on Linux systems with the latest version of GTK.
 - Documentation generator now correctly generates docs from NED files
   containing the @titlepage property.
 - Boolean parameters now can be recorded as scalars.


OMNeT++ 4.1 beta 2 (Jan 2010)
-----------------------------
API:
 - Added a "signal mechanism" to support emitting signals from a model. Signals
   can be used to decouple production of simulation results (statistics) from
   recording them, for model change notifications, publish-subscribe style
   module communication, and several other purposes. See the Manual for more
   information.

Simulation kernel:
 - Source files are now compatible with GCC 4.4 version.

 - Performance and memory optimizations.

IDE:
 - Result charts and sequence diagrams can now be exported in SVG format. This
   allows the creation of publication quality charts and diagrams.

Tooling:
 - The bundled MinGW GCC compiler and MSYS binaries have been updated
   to their latest version (on Windows).

Documentation:
 - A very detailed Installation Guide has been created. It provides step-by-step
   installation instructions for the most popular operating systems.

 - An IDE Developers Guide has been created that describes how to enhance the
   OMNeT++ IDE and extend it with new functionality.

OMNeT++ 4.1 beta 1 (Jan 2010)
-----------------------------
Simulation kernel:
 - Added setCapacity()/getCapacity() to cArray. setCapacity() can be used
   to trim back the internally allocated array after a large number of
   items have been removed from it.

 - cGate: added getNameSuffix() method.

 - FES performance improvement: cMessageHeap was changed to more efficiently
   handle the insertion and removal of events scheduled for the current
   simulation time. Such events are actually quite common due to plain
   (zero delay, zero datarate) connections between modules.

 - Performance improvement: cMessage::getArrivalTime() was consuming
   10-20% of CPU time in many configurations. Solution is return
   a reference (const simtime_t&amp;) instead of a value.

 - Fixed cPacketQueue::remove() incorrect behavior when called
   with a packet that was not in the queue

 - Dynamic module creation: modules now pick up parameter values from the
   parent compound module's submodules section in the NED file. This will be
   useful with the @dynamic() submodule property (see later beta releases).

 - Fix: parse() and some other cPar methods did not cause handleParameter-
   Changed() to be called on the owner module

 - Many other bugfixes and improvements; see include/ChangeLog and
   src/sim/ChangeLog

NED:
 - Deep parameter assignments: it is now possible to assign parameters of
   sub-submodules, sub-sub-submodules, etc. from a compound module, using
   inifile-like wildcards. For example, **.tcp.mss=1024 may be used in a
   network NED file to configure TCPs inside all hosts in the network.
   This feature also involves a slight NED DTD change (doc/ned2.dtd).

 - Re-assigning a parameter that has an already assigned non-default value
   in an ancestor is no longer allowed.

 - Compound modules may now have a custom C++ implementation class,
   i.e. the @class() property is now understood for compound modules as well

 - Fix: operands of the '%' (integer modulo) NED operator now must be
   dimensionless (otherwise the result of truncation depends on the choice
   of the measurement unit)

Msg files:
 - opp_msgc: fixed namespace support. It is now possible to use types
   from other namespaces as base class, field type, or field enum.
   The src/nedxml/ChangeLog file contains some examples for this.

 - opp_msgc: improved cplusplus {…} blocks: their contents can be placed
   into or outside the namespace {…} block in the generated header file,
   depending on whether the block occurs before or after the namespace
   declaration in the msg file.

 - opp_msgc: removed support for enum inheritance (which was an undocumented
   and generally unused feature, with several issues)

 - opp_msgc: the message compiler can now be used to generate reflection info
   (cClassDescriptor) for existing classes. If you add @existingClass(true)
   into a message/class/struct, opp_msgc will not generate code for the class,
   only a descriptor object. (Corresponds to -Xnc command-line option.)

 - opp_msgc: generating descriptors can also be controlled via properties now.
   @descriptor(false) instructs opp_msgc not to generate a cClassDescriptor,
   and @descriptor(readonly) instructs it not to generate field setters into
   the cClassDescriptor. (Corresponds to -Xnd, -Xns command-line options.)

Envir:
 - When parallel simulation is enabled, host name and process ID will be
   included by default in the output file names.

 - A related fix: host name and PID are now inserted before default file
   extension instead of appending them at the end.

IDE:
 - The IDE is now based on Eclipse 3.5.1 and CDT 6.0.1.

IDE features:
 - NED editor:
    o adaptive palette: items with matching @labels properties and those
      already in the compound module are shown at the top
    o palette filtering: easily accessible text field to filter palette
      contents (case insensitive substring search)
    o when creating connections, connection chooser now offers connections
      with matching gates, using @labels properties of gates
    o new parameter editor dialog for channels and modules
    o completion proposals for connection parameters
    o visual feedback for multiple and conditional connections
    o better validation of NED files in the editor

 - Parameter grouping in the Module Hierarchy view

 - The simulation launcher now check for errors (and warns if any) before
   launching simulations

 - Sequence Chart: attaching vectors to axes made more intuitive

 - Analysis Tool: many chart sheet and chart usability enhancements

IDE extensibility:
 - Support for easy creation of templated wizards that can contribute to
   the New OMNeT++ Project, New OMNeT++ Simulation, New Simple Module,
   New NED File, etc. dialogs. Such wizards are simple text files inside
   the templates/ folders of OMNeT++ projects. Wizards for creating wizards
   have also been provided. Templated wizards is one of the killer features
   of OMNeT++ 4.1. Read the IDE Customization Guide for further info!

 - Automatic discovery and activation of Eclipse plugins dropped into the
   plugins/ folders of OMNeT++ projects. This allows easy deployment of
   project-specific IDE extensions. Check the IDE Developers Guide for more
   information.

Tkenv:
 - Two-way connections are now rendered as a single line (without arrows)

 - Enhanced connection layouting for modules with a large width or height.

 - Right-clicking on a point covered by several objects now brings up a
   popup menu that contains a submenu for each object under the mouse.
   Previously only the topmost object was accessible, making crowded areas
   hard to inspect.

Tooling:
 - Source files are now compatible with GCC 4.4 version (fixed missing #includes)
 - Updated MinGW GCC compiler to 4.4 (on Windows)
 - Updated MSYS binaries (on Windows)
</pre></span></span></span></span></span></h2></div></div>
