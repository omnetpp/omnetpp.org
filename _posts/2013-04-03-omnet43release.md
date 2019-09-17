---
layout: post
title: OMNeT++ 4.3 released
joomla_id: 3704
joomla_url: omnet43release
date: 2013-04-03 00:00:00.000000000 +02:00
author: Andras
excerpt: <p>OMNeT++ 4.3 final version is now available for download. This release
  contains several bugfixes and usability improvements compared to 4.2.2. Among other
  improvements, indexing of big C++ projects got considerably faster and it is now
  possible to create scalar statistics from other statistic values. Read the ChangeLog
  (after the More link) to see the complete list what 4.3 has to offer compared to
  version 4.2 or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases"
  mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go
  directly to the download page</a> and test it.</p><div>
category: Software
---
<p>OMNeT++ 4.3 final version is now available for download. This release contains several bugfixes and usability improvements compared to 4.2.2. Among other improvements, indexing of big C++ projects got considerably faster and it is now possible to create scalar statistics from other statistic values. Read the ChangeLog (after the More link) to see the complete list what 4.3 has to offer compared to version 4.2 or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases" mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go directly to the download page</a> and test it.</p><div><p>IDE:</p></div><div class="sectionbody">
<div class="ulist"><ul>
<li>
<p>
Analysis tool: added support for computed scalars. Read the updated the
    User Guide for further details.
</p>
</li>
<li>
<p>
Analysis tool: added <em>Logarithmic X axis</em> option to scatter chart.
</p>
</li>
<li>
<p>
Added NED editor support for named channels.
</p>
</li>
<li>
<p>
Added support for opening files from the command line, i.e. use:
    $ omnetpp Aloha.ned
</p>
</li>
<li>
<p>
Added full screen mode (Ctrl-Shift-F11).
</p>
</li>
<li>
<p>
Usability improvements in the Analysis Tool.
</p>
</li>
<li>
<p>
Better error reporting in the Sequence Chart and Event Log views.
</p>
</li>
<li>
<p>
The CDT C++ code analyzer has been turned off as it was reporting
    too many false positives.
</p>
</li>
<li>
<p>
The IDE has been switched over to use CDT’s DSF debugger instead of
    the older CDI.
</p>
</li>
<li>
<p>
The IDE no longer runs the C/C++ Indexer before build (the code now
    collects the information for makefile dependency generation by other
    means)
</p>
</li>
<li>
<p>
Added pretty printing of STL containers (std::map, etc), simtime_t
    and other objects to the debugger; see the updated User Guide for
    details.
</p>
</li>
<li>
<p>
Updated the bundled MinGW (GCC, linker and GDB).
</p>
</li>
<li>
<p>
Updated to Eclipse 3.8.1; the IDE now requires Java 1.6+.
</p>
</li>
</ul></div>
<div class="paragraph"><p>NED:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added named channels support, e.g. "…←→ eth1: EthernetChannel ←→…",
    with the purpose of making it easier to address channel objects when
    assigning parameters from ini files. Channel definitions can now specify
    a default name (via the @defaultname property), too.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Sim:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added the cPatternMatcher and cMatchExpression utility classes to the API.
    cPatternMatcher is a glob-style pattern matching class. cMatchExpression
    builds on top of cPatternMatcher and lets you combine patterns with AND,
    OR, NOT for matching fields of arbitrary objects.
</p>
</li>
<li>
<p>
Added hasEncapsulatedPacket() to cPacket.
</p>
</li>
<li>
<p>
Implemented calculateWeightedSingleShortestPathsTo() in cTopology.
</p>
</li>
<li>
<p>
Signals implementation now allows static initialization of simsignal_t
    variables.
</p>
</li>
<li>
<p>
Fixed a bug in Expression where <em>-2m</em> was evaluated to <em>2</em> (meter was lost)
</p>
</li>
</ul></div>
<div class="paragraph"><p>Tools:</p></div>
<div class="ulist"><ul>
<li>
<p>
The simulator now supports Mac OS X 10.8 (you need to install XQuartz; see
    the Install Guide)
</p>
</li>
<li>
<p>
Simplified makefile output: Makefiles now output only the filenames to the
    console instead of whole commands. This makes the build output less noisy.
    If you need the old behavior, use the <em>V=1</em> (verbose on) option on
    the make command line.
</p>
</li>
</ul></div>
</div>
