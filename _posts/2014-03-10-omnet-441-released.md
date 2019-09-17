---
layout: post
title: OMNeT++ 4.4.1 released
joomla_id: 3713
joomla_url: omnet-441-released
date: 2014-03-10 00:00:00.000000000 +01:00
author: Andras
excerpt: 'OMNeT++ 4.4.1 is now available for download.&nbsp;<span style="color: rgb(34,
  34, 34); font-family: Arial, Helvetica, sans-serif; font-size: 13.333333015441895px;
  line-height: 16px;">This is a bugfix release for OMNeT++ 4.4. The focus of version
  4.4 was to improve compatibility with the latest operating system and compilers
  releases. It also introduced features that help you debug and verify your simulation
  models more efficiently.</span>&nbsp;Read the ChangeLog (after the More link) for
  details, or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases"
  mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go
  directly to the download page</a>.<br />'
category: Software
---
OMNeT++ 4.4.1 is now available for download.&nbsp;<span style="color: rgb(34, 34, 34); font-family: Arial, Helvetica, sans-serif; font-size: 13.333333015441895px; line-height: 16px;">This is a bugfix release for OMNeT++ 4.4. The focus of version 4.4 was to improve compatibility with the latest operating system and compilers releases. It also introduced features that help you debug and verify your simulation models more efficiently.</span>&nbsp;Read the ChangeLog (after the More link) for details, or <a href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases" mce_href="http://omnetpp.org/component/docman/cat_view/17-downloads/1-omnet-releases">go directly to the download page</a>.<br />

<div class="sectionbody">
<div class="paragraph"><p>Sim:</p></div>
<div class="ulist"><ul>
<li>
<p>
    Support for optional signal checking. When signal checking is turned on,
    signals emitted by modules/channels must be declared with a @signal property
    in the module’s or channel’s NED description; undeclared signals will result
    in a runtime error. Signal declarations are of the form
</p>
<div class="listingblock">
<div class="content">
<pre><tt>@signal[&lt;signalName&gt;](type=&lt;dataType&gt;);</tt></pre>
</div></div>
<div class="paragraph"><p>&lt;signalName&gt; may contain wildcards (?,*). Type is optional; if present,
data type can be long, unsigned long, double, simtime_t, string, or a
registered class name. To allow NULL pointers, append a question mark to
the class name. Example:</p></div>
<div class="listingblock">
<div class="content">
<pre><tt>@signal[receivedPk](type=cPacket?);</tt></pre>
</div></div>
<div class="paragraph"><p>This feature is controlled by the check-signals=&lt;bool&gt; configuration
option, and it is turned off by default for now.</p></div>
</li>
<li>
  <p>
    Support for @statistic-style declarative result recording on dynamically
    registered signals (e.g. "conn-<n>" where n is an integer). Instead of
    @statistic, add a @statisticTemplate property in the NED file, and for
    each new signal call ev.addResultRecorders(...).
  </n></p>
</li>
<li>
  <p>
    Support for programmatically adding result filters and recorders on
    signals: cResultRecorder has been revised to allow result recorders
    to be used without a corresponding @statistic attribute, e.g. they
    can now be added to signals programmatically.
  </p>
</li>
<li>
<p>
Further signals-related changes:
</p>
<div class="ulist"><ul>
<li>
<p>
added emit(simsignal_t, const cObject*) to cComponent
</p>
</li>
<li>
<p>
added receiveSignal() overload for bool to cIListener
</p>
</li>
<li>
<p>
introduced SimsignalType which replaces the older cITimestampedValue::Type
</p>
</li>
<li>
<p>
added cObjectFactory::isInstance() method that effectively wraps a
      dynamic_cast
</p>
</li>
<li>
<p>
added Register_Abstract_Class() macro that allows abstract classes to be
      used in signal declarations as type.
</p>
</li>
</ul></div>
</li>
<li>
<p>
Added cNEDValue::parseQuantity()
</p>
</li>
<li>
<p>
New result filter: removeRepeats
</p>
</li>
<li>
<p>
Feature: Just-in-time debugging support.
</p>
<div class="ulist"><ul>
<li>
<p>
new configuration options: <i>debugger-attach-on-startup</i>, <i>debugger-attach-on-error</i>,
        <i>debugger-attach-command</i>, <i>debugger-attach-wait-time</i>.
</p>
</li>
<li>
<p>
the simulation kernel can invoke the debugger on an error (or on startup)
        using the command-line specified by the <i>debugger-attach-command</i> option.
</p>
</li>
</ul></div>
</li>
</ul></div>
<div class="paragraph"><p>NED:</p></div>
<div class="ulist"><ul>
<li>
<p>
More freedom in NED property syntax: (1) Hyphens, dots and colons are now
    allowed in property names and indices; and (2) values no longer need
    to be enclosed in quotes if they contain parens, provided that parens are
    balanced.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Tkenv:</p></div>
<div class="ulist"><ul>
<li>
<p>
Feature: Animation filters (right-click on any message, and select
    "Exclude messages like <i>…</i> from animation" from the context menu.)
</p>
</li>
<li>
<p>
Feature: "Debug Next Event" (Ctrl+F9). It causes the simulation program
    to stop in the debugger just before entering the handleMessage() call.
</p>
</li>
<li>
<p>
Fixes and workarounds for various issues on Mac OS X (poor animation speed,
    missing icons on OS X Mavericks, hang on the F5 key, etc.)
</p>
</li>
<li>
<p>
Fix: the "Filter Window Contents" dialog could lose state
</p>
</li>
<li>
<p>
Source cleanup (consistent naming style for Tcl procedures)
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE:</p></div>
<div class="ulist"><ul>
<li>
<p>
Use Eclipse 4.3 as base platform
</p>
</li>
<li>
<p>
Support for project-specific images: icons from the "images/" folder of the
    project and its dependencies are automatically used by the NED editor, and
    added to the Tkenv image path when the simulation is launched. (The folder
    name is currently hardcoded; it will become configurable in future versions.)
</p>
</li>
<li>
<p>
Sequence Chart: Fixed bug that caused including the same reuses multiple times.
    Fixed error handling when the error occurs in paint during startup.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Improved support for C++11, Mac OS X:</p></div>
<div class="ulist"><ul>
<li>
<p>
The source now compiles without any warning with both gcc and clang, using
    the "-std=c++11 -Wall" flags (clang is the default compiler on OS X since
    version 10.9 Mavericks).
</p>
</li>
<li>
<p>
Added proper support for cross-compilation using ./configure --host=i686-w64-mingw32
</p>
</li>
<li>
<p>
Updated install instructions for OS X 10.9 Mavericks. Specifically, gdb is
    no longer distributed with OS X; users are expected to install it themselves
    from MacPorts, and digitally sign it.
</p>
</li>
<li>
<p>
IDE: fixed the launcher not to throw error if the toolchain is clang.
</p>
</li>
<li>
<p>
Updated the source to compile with both Bison 2.3 and 3.0
</p>
</li>
</ul></div>
<div class="paragraph"><p>Bugs fixed in v4.4.1:&nbsp;<a href="http://tinyurl.com/omnetpp441-fixes" mce_href="http://tinyurl.com/omnetpp441-fixes">http://tinyurl.com/omnetpp441-fixes</a><br /><span style="line-height: 1.3em;">Bugs fixed in v4.4: </span><a href="http://tinyurl.com/omnetpp44-fixes" mce_href="http://tinyurl.com/omnetpp44-fixes" style="line-height: 1.3em;">http://tinyurl.com/omnetpp44-fixes</a></p></div>
</div>
