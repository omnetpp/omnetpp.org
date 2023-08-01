---
layout: post
title: OMNeT++ 4.2.1 released
joomla_id: 3695
joomla_url: omnet-421-released
date: 2012-01-19 00:00:00.000000000 +01:00
author: Andras
excerpt: "<div>\r\nWe're happy to announce the release of OMNeT++ 4.2.1, a maintenance
  release of OMNeT++ 4.2. This release contains <a href=\"http://tinyurl.com/omnetpp421-fixes\"
  mce_href=\"http://tinyurl.com/omnetpp421-fixes\" target=\"_blank\">bug fixes</a>
  only. Read the ChangeLog (after the More link) to see what 4.2.1/4.2 has to offer
  compared to version 4.1; also check&nbsp;the <a href=\"doc/omnetpp/ide-changelog/ide-changelog.html\"
  mce_href=\"doc/omnetpp/ide-changelog/ide-changelog.html\" target=\"_blank\">Visual
  ChangeLog</a>&nbsp;to see the changes in the IDE.&nbsp;<a href=\"/download/old\"
  mce_href=\"/download/old\" target=\"_self\">Download
  link</a>.\r\n</div>"
category: Software
---
<div>
We're happy to announce the release of OMNeT++ 4.2.1, a maintenance release of OMNeT++ 4.2. This release contains <a href="http://tinyurl.com/omnetpp421-fixes" mce_href="http://tinyurl.com/omnetpp421-fixes" target="_blank">bug fixes</a> only. Read the ChangeLog (after the More link) to see what 4.2.1/4.2 has to offer compared to version 4.1; also check&nbsp;the <a href="doc/omnetpp/ide-changelog/ide-changelog.html" mce_href="doc/omnetpp/ide-changelog/ide-changelog.html" target="_blank">Visual ChangeLog</a>&nbsp;to see the changes in the IDE.&nbsp;<a href="/download/old" mce_href="/download/old" target="_self">Download link</a>.
</div>


<div id="header">
<h1>What’s New</h1>
</div>
<div id="content">
<div id="preamble">
<div class="sectionbody">
<div class="paragraph"><p>This file summarizes OMNeT++ changes in each release. For changes related to
simulation model compatibility, see doc/API-Changes. For more detailed info
about all changes, see include/ChangeLog, src/*/ChangeLog, and ide/ChangeLog.</p></div>
</div>
</div>

<div class="sect1">
<h2 id="_omnet_4_2_nov_2011"></h2><h2 id="_omnet_4_2_nov_2011">OMNeT++ 4.2.1 (Jan 2012) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h2><ul><li>Bugs fixed: <a href="http://tinyurl.com/omnetpp421-fixes" mce_href="http://tinyurl.com/omnetpp421-fixes" target="_blank">http://tinyurl.com/omnetpp421-fixes</a><br mce_bogus="1"></li></ul><h2 id="_omnet_4_2_nov_2011">OMNeT++ 4.2 (Nov 2011)</h2>
<div class="sectionbody">
<div class="paragraph"><p>Changes after 4.2rc2:</p></div>
<div class="ulist"><ul>
<li>
<p>Several bug fixes.
</p>
</li>
</ul></div>
</div></div></div>

<div class="sect1">
<h2 id="_omnet_4_2rc2_nov_2011">OMNeT++ 4.2rc2 (Nov 2011)</h2>
<div class="sectionbody">
<div class="paragraph"><p>Documentation:</p></div>
<div class="ulist"><ul>
<li>
<p>
Revised and significantly expanded the "C++ Development" chapter in the
    User Guide to better assist model developers; smaller improvements in
    other chapters
</p>
</li>
</ul></div>
<div class="paragraph"><p>Tools:</p></div>
<div class="ulist"><ul>
<li>
<p>
Updated MSYS and MinGW binaries in the Windows distribution.
</p>
</li>
<li>
<p>
The build system now creates 64-bit binaries on Mac OS X 10.6 and 10.7
    (if your processor supports it). Previously the -m32 flag was added to
    the GCC command line to force the creation of 32-bit binaries. (This
    was necessary because earlier versions of CDT did not support 64-bit
    debugging).
</p>
</li>
<li>
<p>
Enabled pretty-printing of variables in gdb (see below)
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE:</p></div>
<div class="ulist"><ul>
<li>
<p>
Better C++ debugging experience: std::string, std::vector, std::map and
    other standard classes as well as simtime_t are now displayed in a
    meaningful way; simulation objects (cObject) display their full paths.
    This functionality is enabled by gdb pretty printer extensions written
    in Python, and is thus available for command-line gdb debugging too.
    For activating the pretty printers, see misc/gdb/README.
</p>
</li>
<li>
<p>
NED documentation generator improvements: better-looking tables in the
    generated documentation; running Doxygen is now cancellable; etc.
</p>
</li>
<li>
<p>
Dropped PowerPC support for the IDE because Mac OS X 10.7 no longer
    supports this architecture.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Sim:</p></div>
<div class="ulist"><ul>
<li>
<p>
Refactored operator= and copy constructor in all classes. Now they
    delegate to the same function in the super class, and the common
    part of the two is factored out to private copy() functions.
</p>
</li>
<li>
<p>
Fixed all warnings to make it compile using -Wall -Werror.
</p>
</li>
<li>
<p>
Coroutines used for 'activities' are now implemented using the
swapcontext() POSIX call (if it is available on the system).
</p>
</li>
</ul></div>
<div class="paragraph"><p>Sample simulations:</p></div>
<div class="ulist"><ul>
<li>
<p>
Database example revived. It demonstrates using database as configuration
    source, as storage for output scalars and vectors, and as source of
    network topology. Currently it works with MySQL.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Countless bug fixes and smaller improvements.</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_omnet_4_2rc1_aug_2011">OMNeT++ 4.2rc1 (Aug 2011)</h2>
<div class="sectionbody">
<div class="paragraph"><p>Ini files:</p></div>
<div class="ulist"><ul>
<li>
<p>
Ini files: iterations (${…}) can now refer to other iteration variables,
   improvement makes it possible to have loops where the inner iteration range
   depends on the outer one. When needed, the default top-down nesting order
   of iteration loops is modified (loops are reordered) to ensure that
   expressions only refer to more outer loop variables, but not to inner ones.
   When this is not possible, an error is generated with the "circular
   dependency" message. Variables are substituted textually, and the text
   resulting from substitution is NOT evaluated except in the '&lt;from&gt;..&lt;to&gt;
   step &lt;step&gt;' syntax, and in the 'constraint=' ini file option. CAUTION:
   textual substitution means that variables in arithmetic expressions should
   be protected with parentheses. The text substitution model was chosen for
   greater flexibility as well as the ability to produce a more consistent
   semantics. See src/envir/ChangeLog for more details.
</p>
</li>
<li>
<p>
Incompatible change: In the constraint= configuration option, variables now
   be surrounded with parens (to ensure precedence after the textual variable
   substitution). For example, the expression x+y&lt;10 must be changed to
   $x+$y&lt;10, or for greater safety, to ($x)+($y)&lt;10.
</p>
</li>
<li>
<p>
Parallel iteration: it is now supported to use named iteration
   variables and parallel iteration together ($…!bar syntax.)
   This was not supported previously.
</p>
</li>
<li>
<p>
Some iteration-related error messages have been improved to provide
   more context.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Sim:</p></div>
<div class="ulist"><ul>
<li>
<p>
Result filter/recorder interfaces and registration macros made public
   (moved to src/sim), so that users can contribute their own result filters
   and recorders. Files: cresultlistener.h, cresultfilter.h  cresultrecorder.h.
   Result filters have to be subclassed from cResultFilter or the more specific
   cNumericResultFilter or cObjectResultFilter base classes and registered with
   the Register_ResultFilter() macro; result recorders have to be subclassed
   from cResultRecorder or the more specific cNumericResultRecorder, and
   registered with the Register_ResultRecorder() macro. After that, the new
   filter or recorder can be used in the source= and record= attributes of
   @statistic, and with the **.result-recording-modes configuration option.
</p>
</li>
<li>
<p>
The Define_Function() macros have been renamed to Define_NED_Math_Function().
   For backwards compatibility, the old macro definitions remain, but issue
   a deprecation warning. Note that the preferred way of defining new NED
   functions is now the Define_NED_Function() macro.
</p>
</li>
<li>
<p>
The API for custom NED functions defined via Define_NED_Function() has been
   changed. cDynamicExpression::Value (the old value class) has been factored
   out to a new cNEDValue class. Data members are no longer public, they can
   be manipulated via various methods. NOTE: This change is NOT backwards
   compatible: user-supplied NED functions will need to be revised.
   Look at src/sim/nedfunctions.cc for code examples.
</p>
</li>
<li>
<p>
Measurement unit support: added "mps" (m/s) and "kmph" (km/h) as recognized
   units; changed "Kbps" to more standards compilant "kbps"; changed byte
   multiples notation to use the now-standard IEC binary prefixes: KB -&gt; KiB,
   MB -&gt; MiB, GB -&gt; GiB, TB -&gt; TiB. The latter changes affect backwards
   compatibility, i.e. you may need to update existing models.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Tools:</p></div>
<div class="ulist"><ul>
<li>
<p>
opp_run: bugfix: release-mode simulation models compiled as shared libraries
   could not be run using a debug-mode opp_run program (they either crashed
   or reported that a module was not registered with the Register_Module()
   macro.) As part of the fix, a new opp_run_release program has been
   introduced, and opp_run (which is now always compiled as debug) delegates
   to it when necessary.
      Due to makefile changes related to the fix, you may need to re-create the
   makefiles of your simulation when upgrading to OMNeT++ 4.2. (You only need
   to do that when working on the command line. The IDE automatically recreates
   the makefiles, so no action is needed on your part if you are using only the
   IDE.) See src/envir/ChangeLog for details of this change.
</p>
</li>
<li>
<p>
Implemented number filter expressions using multiple inputs for statistics source
   expressions. For example:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>@statistic[dropRate](source="count(packetDropped)/count(packetSent)");</tt></pre>
</div></div>
</li>
<li>
<p>
opp_msgc: improvement: announcements and type definitions now observe
   whether they are above the namespace declaration (=outside the namespace)
   or below it (=inside the namespace). This change makes it consistent with
   cplusplus blocks that had this behavior for quite some time. A related
   improvement is that type lookup in namespaces has been modified to make it
   possible to use unqualified names when declaring fields. See
   src/nedxml/ChangeLog for details.
</p>
</li>
<li>
<p>
Akaroa support improved; samples/aloha/akaroa.ini was added as example
</p>
</li>
</ul></div>
<div class="paragraph"><p>Documentation:</p></div>
<div class="ulist"><ul>
<li>
<p>
Several chapters in the User Manual have been updated; especially, the
   Message Definitions section was turned into a separate chapter, and
   was completely revised.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE:</p></div>
<div class="ulist"><ul>
<li>
<p>
Upgraded to Eclipse 3.7
</p>
</li>
<li>
<p>
Added Eclipse Marketplace to the Help menu. You can now install
   additional features from the market.
</p>
</li>
<li>
<p>
Before running the simulations, the IDE will show the command line in
   the console view to help you execute the same simulation from the
   command line.
</p>
</li>
<li>
<p>
Ctrl-Tab now works on freshly opened NED files even if you do not explicitly
   select a simple module. In that case, the IDE opens the .h and .cc files
   associated with the first simple module in the NED file.
</p>
</li>
<li>
<p>
Improvement on the Manage Build Configurations dialog: newly created build
   configurations are now configured, by copying the source entries from one
   of the existing build configurations.
</p>
</li>
<li>
<p>
Project Makemake Options property page: overhaul for better usability.
</p>
</li>
<li>
<p>
Documentation generator: turn on JAVADOC_AUTOBRIEF in newly generated
   doxy.cfg files. (When this option is on, there is no need for @brief
   in C++ doxy comments; instead the first sentence of the comment is taken
   automatically as brief description.)
</p>
</li>
<li>
<p>
Bug fixes on: IDE makefile generator; the Project Features feature;
   the Inifile Editor (hover info, content assist, etc); the NED editor
   (display string proposals for connections and channels, etc.); Organize
   Imports feature; NED documentation generator; Simulation Launcher (e.g.
   launching folders with simulations in them works again);
</p>
</li>
<li>
<p>
SVN support removed from the IDE. It had very few users, and can be
   installed from the Market if needed.
</p>
</li>
<li>
<p>
Removed Animation Player as it was only a "technology preview" bundled
   with the beta releases to gather feedback from the user community. The
   animator is scheduled to appear in the next major OMNeT++ release.
</p>
</li>
</ul></div>
</div>
</div>
<div class="sect1">
<h2 id="_omnet_4_2b2_may_2011">OMNeT++ 4.2b2 (May 2011)</h2>
<div class="sectionbody">
<div class="paragraph"><p>Most important feature: "Project Features" (see below).</p></div>
<div class="paragraph"><p>NED:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added support for conditional submodules. Syntax:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>udp: UDP if needsUDP {...}
tcp: &lt;tcpType&gt; like ITCP if needsTCP {...}</tt></pre>
</div></div>
</li>
<li>
<p>
Added the xml() NED function, which accepts a string argument and parses
   it as XML. Its most notable use is eliminating "empty.xml" files from INET:
   one can use xml("&lt;root/&gt;") in NED files instead.
</p>
</li>
<li>
<p>
Implemented default value for parametric submodule and channel types.
   NED now supports the following syntax:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>mobility: &lt;default("NullMobility")&gt; like IMobility;</tt></pre>
</div></div>
<p>The effect is that the NullMobility NED type will be used for the mobility
submodule if the type name is not specified otherwise, e.g. in the config-
uration with something like</p>
<div class="literalblock">
<div class="content">
<pre><tt>**.mobility.type-name = "ConstSpeedMobility"</tt></pre>
</div></div>
</li>
<li>
<p>
Added the firstAvailable() NED function, which is helpful with the Project
   Features feature (see below). It accepts any number of strings (see new
   varargs support for NED functions), interprets them as NED type names
   (either short names or fully qualified names), and returns the first one
   that exists and is also "available" (its C++ implementation class exists).
   Example usage:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>tcp: &lt;default(firstAvailable("TCP_lwIP", "TCP_NSC", "TCP"))&gt; {..}</tt></pre>
</div></div>
<p>It chooses the TCP_lwIP, TCP_NSC or TCP module type for the tcp submodule,
in this order, unless the type is explicitly defined to be something else
in the configuration.</p>
</li>
<li>
<p>
Parametric submodule type can now also be specified in NED files, using
   patterns that end in the new "typename" keyword. An example:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>network Net {
    parameters:
        host[*].tcp.typename = "TCP_lwIP";
    ...
}</tt></pre>
</div></div>
</li>
</ul></div>
<div class="paragraph"><p>Ini files:</p></div>
<div class="ulist"><ul>
<li>
<p>
The "type-name" per-object configuration option (**.typename=) has been
   renamed in to "typename", for consistency with the similar new NED feature.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Sim:</p></div>
<div class="ulist"><ul>
<li>
<p>
Implemented varargs support for NED functions. If the signature (see
   Define_NED_Function() and Define_NED_Function2() macros) ends in ", …",
   then the function will accept any number of additional arguments of any type.
   At runtime, the implementation has access to both the actual number and
   types of args. When passing extra args, optional arguments (those marked
   with '?' in the signature) must all be present, i.e. varargs can only come
   when all typed args are there.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE:</p></div>
<div class="ulist"><ul>
<li>
<p>
Upgraded to Eclipse 3.6.2
</p>
</li>
<li>
<p>
Implemented the "Project Features" feature, which makes it possible to
   disable unused parts ("features") of a project to reduce compilation time
   and complexity. It has been invented to help INET Framework users and
   developers deal with the growing size of the framework. Features are
   described in the project’s .oppfeatures file, authored by INET developers.
   Users can activate/deactivate features in the Project Features page of
   the Project Properties dialog (this page is directly accessible from the
   Project menu and from the Build Configurations submenu of the project’s
   context menu in Project Explorer). Features map to NED packages and C++
   source folders; disabling a feature maps to NED package exclusion, and
   folder exclusion in CDT (C++ Development) configuration. Features can also
   define C/C++ symbols (for #ifdefs), and extra libraries to link with.
   At build time, the IDE checks the project’s configuration (NED, CDT) and
   if it is inconsistent with the selected features, it offers fixing it.
   Features can also be used from the command line by exporting Makefiles
   (or opp_makemake commands) that reflect a particular enablement of features.
</p>
</li>
<li>
<p>
Support for excluding (disabling) NED packages. This feature is needed for
   the Project Features feature. Exclusions can be edited on the NED Source
   Folders project property page, and are saved into the project’s .nedfolders
   file.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Animation Player:</p></div>
<div class="ulist"><ul>
<li>
<p>
Implemented lazy loading of the eventlog file: the tool can now animate
   large eventlog files with acceptable performance.
</p>
</li>
<li>
<p>
Animation effects refined, e.g. packet transmission on a datarate channel.
</p>
</li>
<li>
<p>
Heavy bugfixing. Note that the tool is still being actively developed, and
   it is generally not yet ready for everyday use.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Inifile Editor:</p></div>
<div class="ulist"><ul>
<li>
<p>
Usability: the editor now comes up with the page (text or form) that was
   used last time, and not always with the form editor. (When you flip the
   editor to the other page, the page type is stored in the preferences.
   When an editor is opened, the setting is read from the preferences and
   the corresponding page is activated.)
</p>
</li>
<li>
<p>
Improved text hover (F2) and hyperlink (Ctrl+click) support: the editor
   can now show information and go to the definition of modules that occur
   in the inifile key. For example, for a **.host[*].tcp.sackSupport = true
   line, the user can hover over (or Ctrl+click) the host[*] part, and the
   editor will show relevant information and go to the definition of the
   host[] submodule vector in the NED network description.
</p>
</li>
<li>
<p>
Improved content assist: per-object configuration options are now filtered
   by the type of object that the key refers to; for example, if you type
   **.ppp[*].txPkBytes.&lt;Ctrl+Space&gt;, the editor will know from the NED files
   that txPkBytes is a statistic, and offer completions accordingly.
</p>
</li>
<li>
<p>
Content assist: different types of completions (modules, parameters,
   statistics, configuration options, etc) are now marked with icons.
</p>
</li>
<li>
<p>
Markers on included inifiles are now removed when the main inifile is
   closed. (Fix for #176)
</p>
</li>
<li>
<p>
Added the Copy action to the Module Parameters view context menu: you can
   now select the key for an unassigned parameter in the view, and copy/paste
   it into the editor area.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Wizards:</p></div>
<div class="ulist"><ul>
<li>
<p>
New Tictoc Example and New Source-Sink Example wizards: fix: the root
   Makefile executed opp_makemake in the src/ folder at each build,
   overwriting the IDE-generated Makefile.
</p>
</li>
<li>
<p>
New OMNeT++ Project wizard template: now it is possible to set "custom make"
   for a folder: specify &lt;foldername&gt;:CUSTOM in the makemakeOptions= template
   variable in template.properties. Use "." to name the project root folder.
   Example: makemakeOptions = .: CUSTOM, src: --deep -meta:recurse…
</p>
</li>
<li>
<p>
New option for template.properties: preRunTemplate=&lt;fti-file-name&gt;. Example:
   preRunTemplate = main.fti. The option causes the given template file to be
   evaluated for its side effects, just after the user hits Finish but before
   any file is copied or template is evaluated. It is not allowed to produce
   text output, but the variables it sets will be substituted into other
   template.properties variables, and will also be available in other template
   files. (Note: all other templates are run in isolation, and cannot change
   variables for other templates!) The preRunTemplate option is the only way
   to programmatically set the value of makemakeOptions and similar
   template.properties options.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Graphical Editor:</p></div>
<div class="ulist"><ul>
<li>
<p>
Switched back double-click behaviour to Open NED Type action. The Properties
   dialog can now opened with Ctrl+Enter (Alt+Enter was unavailable.)
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Sequence Chart and Event Log:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added show/hide options for arrows that represent mixed dependencies.
   (Such arrows are drawn when the sequence chart is filtered, and represent
   e.g. a sequence of message sendings and self-messages)
</p>
</li>
<li>
<p>
Eventlog: enhanced performance of event tracing filter
</p>
</li>
<li>
<p>
Simulations now record the termination message and result code into the
   eventlog file
</p>
</li>
<li>
<p>
Note: eventlog file format has changed (in order to better serve the
   Animation Tool) — .elog files recorded with any prior version of OMNeT++
   have to be re-recorded.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Many bug fixes, mostly in the IDE; you can see the detailed list at:
<a href="http://tinyurl.com/omnetpp42b2-fixes" mce_href="http://tinyurl.com/omnetpp42b2-fixes">http://tinyurl.com/omnetpp42b2-fixes</a><br mce_bogus="1"></p></div>
</div>
</div>
<div class="sect1">
<h2 id="_omnet_4_2b1_feb_2011">OMNeT++ 4.2b1 (Feb 2011)</h2>
<div class="sectionbody">
<div class="paragraph"><p>Partial list of changes since 4.1 (see ChangeLog files in individual folders
for a more complete list):</p></div>
<div class="paragraph"><p>Simulation runtime:</p></div>
<div class="ulist"><ul>
<li>
<p>
Removed #include &lt;winsock.h&gt; from &lt;platdep/timeutil.h&gt;; the reason
   is that it conflicted with lwIP code recently integrated into INET.
   &lt;platdep/sockets.h&gt; still includes &lt;winsock.h&gt;, but now
   &lt;platdep/sockets.h&gt; (and &lt;platdep/timeutil.h&gt;) MUST precede &lt;omnetpp.h&gt;
   in all source files.
</p>
</li>
<li>
<p>
Ini files: implemented multiple inheritance for sections. Syntax:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>[Config Foobar]
extends = Foo, Bar</tt></pre>
</div></div>
<p>When the runtime looks for a config option or param assignment, sections
are examined in a "fallback order" until the first match is found. In the
above example the order would be: Foobar, Foo, Bar, General.
OMNeT++ uses C3 lineratization to compute the section fallback order,
see e.g. http://en.wikipedia.org/wiki/C3_linearization</p>
</li>
<li>
<p>
Ini files: better parsing for iteration variables, e.g. the value in
   $uniform(1,2) is now parsed as one item, not as "uniform(1" and "2)".
   Nested parens/brackets/braces and string literals are recognized;
   escaping commas and close-braces is now possible using backslash.
</p>
</li>
<li>
<p>
NED: fixed deep parameter assignments: parameter references were
   interpreted in the wrong context. Deep parameter assignments are when
   an inifile-like pattern is used to name the parameter(s) to be set, as in:
</p>
<div class="literalblock">
<div class="content">
<pre><tt>network Inet {
    parameters:
        host[*].tcp.nagleEnabled = true;
    ...
}</tt></pre>
</div></div>
</li>
<li>
<p>
Resolved spurious errors: 'Class "…" not found — perhaps its code
   was not linked in, or the class wasn’t registered with Register_Class()'
   Added a check to ensure that the debug and the release versions of
   the simulation library are not loaded at the same time. This problem
   occurred when a model was built as 'release' and the debug version of
   'opp_run' was used to start it. As a result, the simulation seemingly
   started but complained about missing classes.
</p>
</li>
<li>
<p>
Fix: Some classes were thrown out by the linker if OMNeT++ was statically
   built, and the simulation was complaining at runtime about the missing
   cCompoundModule class.
</p>
</li>
<li>
<p>
Eventlog recording: .elog file format change: message creations and
   duplications (cloning) are now recorded; MC (ModuleCreated) entries now
   precede GC (GateCreated) entries. IMPORTANT: The sequence chart in the
   IDE will only work on .elog files in the new format, existing event logs
   need to be re-recorded!
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Animation Player:</p></div>
<div class="ulist"><ul>
<li>
<p>
This is a new component in the IDE, you can access it by right-clicking
   an .elog file and selecting "Open With / OMNeT++ Animation Player" from
   the context menu. This is a preliminary implementation (Technology
   Preview) not yet optimized for large files, the practical maximum file
   size it can handle is about 10MB.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/C++ Development:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added a new "Clean Local" item to the project’s context menu that does
   not clean referenced projects. This resolves the problem that CDT’s
   "Clean Project" command also cleans the referenced projects, e.g. if
   you have a Foo project that depends on INET, cleaning Foo also cleans
   INET which takes a long time to recompile. Now you can use the
   "Clean Local" command to clean Foo only.
</p>
</li>
<li>
<p>
Added new "OMNeT++ Code Formatter" profile. This coding convention follows
   the rules used in the OMNeT++ kernel and the INET Framework. (No tabs, etc.)
</p>
</li>
<li>
<p>
Added MachO64 binary parsers and error parsers. This makes it possible to
   debug a 64-bit executable on Mac OS X 10.6
</p>
</li>
<li>
<p>
Linux only: Added support for profiling with Valgrind. To activate this
   feature, select "Profile as… / OMNeT++ Simulation" from the Project
   Exporer context menu. This feature requires Valgrind to be installed
   on your system. (Note: the main IDE toolbar does not show a Profile button
   next to the Run and Debug buttons at this time, but profiling is still
   available via the Project Explorer context menu.)
</p>
</li>
<li>
<p>
The Makemake page in Project Properties can now fix the "Source Folders
   differ across configurations" problem in the project setup, which usually
   occurs when you add a build configuration to an existing project later.
   The dialog now displays a "Fix it" link.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Graphical Editor:</p></div>
<div class="ulist"><ul>
<li>
<p>
Several performance optimizations for the NED Editor. It can open much larger
   files than before. NED validation is done now in a background thread and
   does not block the UI.
</p>
</li>
<li>
<p>
Select 'NED Type Selection' dialog now works correctly on first open. It
   shows the defining projects for the types.
</p>
</li>
<li>
<p>
Enhanced drag and drop capabilities in NED Graphical Editor. You can
   drop NED types into a compound module either to create submodules
   (if you drop it into the submodule area), or to turn it into
   an inner type (if you drop on the title of the compound module).
</p>
</li>
<li>
<p>
The Graphical Editor now displays the file’s package name at the top.
</p>
</li>
<li>
<p>
Graphical Editor displays self-connections as arcs in the module’s upper
   right corner.
</p>
</li>
<li>
<p>
The resize/move feedback figures have been changed from a simple outline
   to translucent blue.
</p>
</li>
<li>
<p>
Added a 'Properties' dialog that can edit one or several objects
   at a time, and allows you to change graphical and type information.
   It also has a preview panel.
</p>
</li>
<li>
<p>
Enhanced editing of type fields in the 'Property View'. The editor correctly
   enumerates the possible choices and adds an import statement if necessary.
</p>
</li>
<li>
<p>
'Open Type' and 'Open Supertype' have been reassigned to the F3 function key.
   Double-click now opens the 'Properties' dialog.
</p>
</li>
<li>
<p>
The IDE now uses the use native (C++) layouter code for placing unpinned
   submodules, which means better performance and consistency with the
   simulation runtime (Tkenv).
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Inifile Editor:</p></div>
<div class="ulist"><ul>
<li>
<p>
Support for inifile improvements in this release, namely multiple section
   inheritance and better parsing for iteration variables
</p>
</li>
<li>
<p>
Performance improvements: inifile is now analyzed in the background so that
   it does not block the UI, and features that need its results (hover text,
   content assist, etc) have a timeout how long they are willing to wait for it
   (see bug #132 for details). It is now also possible to disable inifile
   analysis. Further performance and UI responsiveness improvements are planned.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Sequence Chart:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added 'Goto Simulation Time' and 'Goto Event Number' in the context menu.
</p>
</li>
<li>
<p>
'Go to Simulation Time' in the 'Event Log' view now supports relative values.
</p>
</li>
<li>
<p>
The Sequence Chart tool now knows about message creations and duplications
   (cloning), and as a result, in certain situations it is now able to better
   identify relationships between events and draw a better sequence chart.
   NOTE: Due to changes in the .elog file format, the tool will only work with
   newly recorded files. Existing event logs need to be re-recorded!
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Launcher:</p></div>
<div class="ulist"><ul>
<li>
<p>
The command-line for launching the simulation now uses relative paths instead
   of absolute ones. This makes the starting command-line easier to understand.
</p>
</li>
</ul></div>
<div class="paragraph"><p>IDE/Documentation Generator:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added tilde notation as an alternative to automatic hyperlinking of module
   names in comments. The latter was often too agressive (e.g. linking to the
   IP module in the phrase "IP address" is wrong). Automatic hyperlinking can
   now be turned off in the generator, and then the user is expected to mark
   words to be hyperlinked with a tilde: "the ~IP module". The INET Framework
   has already been converted to use the tilde notation.
</p>
</li>
<li>
<p>
Added Javascript to autoload frameset page if a content page is opened by
   itself. This is useful when URLs to specific content pages are posted on
   the mailing list or sent over email.
</p>
</li>
<li>
<p>
Implemented @include in NED comments. Lines in the included file don’t have
   to start with "//", but otherwise they are processed exactly as NED comment
   text.
</p>
</li>
<li>
<p>
Fix: External pages (@externalpage) now appear unded the "Selected Topics"
   node of the navigation tree in the generated documentation.
</p>
</li>
<li>
<p>
Several minor fixes: recognize the &lt;u&gt; (underline) HTML tag; sanitize the
   file names for @page; added/refined test cases
</p>
</li>
</ul></div>
<div class="paragraph"><p>Tkenv:</p></div>
<div class="ulist"><ul>
<li>
<p>
Parallel simulation: Placeholder modules are now displayed with a semi-
   transparent icon (or if it’s a rectangle or oval, with dotted border).
</p>
</li>
<li>
<p>
Fix (bug #248): compute coordinates (and sizes) in double and not int;
   necessary if background scaling (bgs display string tag) is set up.
</p>
</li>
<li>
<p>
Better choice of default user interface font, especially on Linux.
</p>
</li>
<li>
<p>
The generic UI font and the font used in graphics are now configurable
   in the Simulation Options dialog.
</p>
</li>
<li>
<p>
The default font for log text is now proportional (same as the generic UI
   font), for better readability and space efficiency. It can be customized
   (switched back to a monospace font, etc) in the Simulation Options dialog.
</p>
</li>
<li>
<p>
Minor: menu items have been changed to title case
</p>
</li>
<li>
<p>
Tcl errors are now logged into .tkenvlog instead of dumping them on stdout.
</p>
</li>
</ul></div>
<div class="paragraph"><p>Misc:</p></div>
<div class="ulist"><ul>
<li>
<p>
Added -g option to 'scavetool scalar' command. You can specify how the
   scalars are grouped into columns/variables.
</p>
</li>
<li>
<p>
The build system can now build large projects on windows. The 32K command-line
   limitation has been resolved.
</p>
</li>
<li>
<p>
Updated base system to Eclipse 3.6.1
</p>
</li>
<li>
<p>
Added a detailed IDE change log file doc/IDE-Changes
</p>
</li>
</ul></div>
<div class="paragraph"><p>Several bugs have been fixed; you can see the detailed list at:
<a href="http://tinyurl.com/omnetpp42b1-fixes" mce_href="http://tinyurl.com/omnetpp42b1-fixes">http://tinyurl.com/omnetpp42b1-fixes</a><br mce_bogus="1"></p></div>
</div>
</div>
