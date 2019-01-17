---
layout: post
title: OMNeT++ 4.2b1 released
joomla_id: 3686
joomla_url: omnet-42b1-released
date: 2011-02-23 00:00:00.000000000 +01:00
author: Administrator
excerpt: Dear users, we've just released the first beta of OMNeT++ 4.2. Please read
  the ChangeLog carefully to see what has changed since the 4.1 version. <a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it now</a>.
category: Software
---
Dear users, we've just released the first beta of OMNeT++ 4.2. Please read the ChangeLog carefully to see what has changed since the 4.1 version. <a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it now</a>.



<h2>OMNeT++ 4.2b1 (Feb 2011)</h2>

<p>Partial list of changes since 4.1 (see ChangeLog files in individual folders
for a more complete list) :
</p>
<p>Simulation runtime :
</p><ul>
  <li>Ini files: implemented multiple inheritance for sections. Syntax :
<pre>     [Config Foobar]
     extends = Foo, Bar
</pre>
   When the runtime looks for a config option or param assignment, sections
   are examined in a "fallback order" until the first match is found. In the
   above example the order would be: Foobar, Foo, Bar, General.
   OMNeT++ uses C3 lineratization to compute the section fallback order,
   see e.g. <a href="http://en.wikipedia.org/wiki/C3_linearization" mce_href="http://en.wikipedia.org/wiki/C3_linearization">http://en.wikipedia.org/wiki/C3_linearization</a>
  </li><li>Ini files: better parsing for iteration variables, e.g. the value in
   ${x=uniform(1,2)} is now parsed as one item, not as "uniform(1" and "2)".
   Nested parens/brackets/braces and string literals are recognized;
   escaping commas and close-braces is now possible using backslash.
  </li><li>NED: fixed deep parameter assignments: parameter references were
   interpreted in the wrong context. Deep parameter assignments are when
   an inifile-like pattern is used to name the parameter(s) to be set, as in :
<pre>      network Inet {
          parameters :
              host[*].tcp.nagleEnabled = true;
          ...
      }
</pre>
  </li><li>Resolved spurious errors: 'Class "..." not found -- perhaps its code
   was not linked in, or the class wasn't registered with Register_Class()'
   Added a check to ensure that the debug and the release versions of
   the simulation library are not loaded at the same time. This problem
   occurred when a model was built as 'release' and the debug version of
   'opp_run' was used to start it. As a result, the simulation seemingly
   started but complained about missing classes.
  </li><li>Fix: Some classes were thrown out by the linker if OMNeT++ was statically
   built, and the simulation was complaining at runtime about the missing
   cCompoundModule class.
  </li><li>Eventlog recording: .elog file format change: message creations and
   duplications (cloning) are now recorded; MC (ModuleCreated) entries now
   precede GC (GateCreated) entries. IMPORTANT: The sequence chart in the
   IDE will only work on .elog files in the new format, existing event logs
   need to be re-recorded!
</li></ul>
<p>IDE/Animation Player :
</p><ul>
  <li>This is a new component in the IDE, you can access it by right-clicking
   an .elog file and selecting "Open With / OMNeT++ Animation Player" from
   the context menu. This is a preliminary implementation (Technology
   Preview) not yet optimized for large files, the practical maximum file
   size it can handle is about 10MB.
</li></ul>
<p>IDE/C++ Development :
</p><ul>
  <li>Added a new "Clean Local" item to the project's context menu that does
   not clean referenced projects. This resolves the problem that CDT's
   "Clean Project" command also cleans the referenced projects, e.g. if
   you have a Foo project that depends on INET, cleaning Foo also cleans
   INET which takes a long time to recompile. Now you can use the
   "Clean Local" command to clean Foo only.
  </li><li>Added new "OMNeT++ Code Formatter" profile. This coding convention follows
   the rules used in the OMNeT++ kernel and the INET Framework. (No tabs, etc.)
  </li><li>Added MachO64 binary parsers and error parsers. This makes it possible to
   debug a 64-bit executable on Mac OS X 10.6
  </li><li>Linux only: Added support for profiling with Valgrind. To activate this
   feature, select "Profile as... / OMNeT++ Simulation" from the Project
   Exporer context menu. This feature requires Valgrind to be installed
   on your system. (Note: the main IDE toolbar does not show a Profile button
   next to the Run and Debug buttons at this time, but profiling is still
   available via the Project Explorer context menu.)
  </li><li>The Makemake page in Project Properties can now fix the "Source Folders
   differ across configurations" problem in the project setup, which usually
   occurs when you add a build configuration to an existing project later.
   The dialog now displays a "Fix it" link.
</li></ul>
<p>IDE/Graphical Editor :
</p><ul>
  <li>Several performance optimizations for the NED Editor. It can open much larger
   files than before. NED validation is done now in a background thread and
   does not block the UI.
  </li><li>Select 'NED Type Selection' dialog now works correctly on first open. It
   shows the defining projects for the types.
  </li><li>Enhanced drag and drop capabilities in NED Graphical Editor. You can
   drop NED types into a compound module either to create submodules
   (if you drop it into the submodule area), or to turn it into
   an inner type (if you drop on the title of the compound module).
  </li><li>The Graphical Editor now displays the file's package name at the top.
  </li><li>Graphical Editor displays self-connections as arcs in the module's upper
   right corner.
  </li><li>The resize/move feedback figures have been changed from a simple outline
   to translucent blue.
  </li><li>Added a 'Properties' dialog that can edit one or several objects
   at a time, and allows you to change graphical and type information.
   It also has a preview panel.
  </li><li>Enhanced editing of type fields in the 'Property View'. The editor correctly
   enumerates the possible choices and adds an import statement if necessary.
  </li><li>'Open Type' and 'Open Supertype' have been reassigned to the F3 function key.
   Double-click now opens the 'Properties' dialog.
  </li><li>The IDE now uses the use native (C++) layouter code for placing unpinned
   submodules, which means better performance and consistency with the
   simulation runtime (Tkenv).
</li></ul>
<p>IDE/Inifile Editor :
</p><ul>
  <li>Support for inifile improvements in this release, namely multiple section
   inheritance and better parsing for iteration variables
  </li><li>Performance improvements: inifile is now analyzed in the background so that
   it does not block the UI, and features that need its results (hover text,
   content assist, etc) have a timeout how long they are willing to wait for it
   (see bug #132 for details). It is now also possible to disable inifile
   analysis. Further performance and UI responsiveness improvements are planned.
</li></ul>
<p>IDE/Sequence Chart :
</p><ul>
  <li>Added 'Goto Simulation Time' and 'Goto Event Number' in the context menu.
  </li><li>'Go to Simulation Time' in the 'Event Log' view now supports relative values.
  </li><li>The Sequence Chart tool now knows about message creations and duplications
   (cloning), and as a result, in certain situations it is now able to better
   identify relationships between events and draw a better sequence chart.
   NOTE: Due to changes in the .elog file format, the tool will only work with
   newly recorded files. Existing event logs need to be re-recorded!
</li></ul>
<p>IDE/Launcher :
</p><ul>
  <li>The command-line for launching the simulation now uses relative paths instead
   of absolute ones. This makes the starting command-line easier to understand.
</li></ul>
<p>IDE/Documentation Generator :
</p><ul>
  <li>Added tilde notation as an alternative to automatic hyperlinking of module
   names in comments. The latter was often too agressive (e.g. linking to the
   IP module in the phrase "IP address" is wrong). Automatic hyperlinking can
   now be turned off in the generator, and then the user is expected to mark
   words to be hyperlinked with a tilde: "the ~IP module". The INET Framework
   has already been converted to use the tilde notation.
  </li><li>Added Javascript to autoload frameset page if a content page is opened by
   itself. This is useful when URLs to specific content pages are posted on
   the mailing list or sent over email.
  </li><li>Implemented @include in NED comments. Lines in the included file don't have
   to start with "//", but otherwise they are processed exactly as NED comment
   text.
  </li><li>Fix: External pages (@externalpage) now appear unded the "Selected Topics"
   node of the navigation tree in the generated documentation.
  </li><li>Several minor fixes: recognize the &lt;u&gt; (underline) HTML tag; sanitize the
   file names for @page; added/refined test cases
</li></ul>
<p>Tkenv :
</p><ul>
  <li>Parallel simulation: Placeholder modules are now displayed with a semitransparent 
   icon (or if it's a rectangle or oval, with dotted border).
  </li><li>Fix (bug #248): compute coordinates (and sizes) in double and not int;
   necessary if background scaling (bgs display string tag) is set up.
  </li><li>Better choice of default user interface font, especially on Linux.
  </li><li>The generic UI font and the font used in graphics are now configurable
   in the Simulation Options dialog.
  </li><li>The default font for log text is now proportional (same as the generic UI
   font), for better readability and space efficiency. It can be customized
   (switched back to a monospace font, etc) in the Simulation Options dialog.
  </li><li>Minor: menu items have been changed to title case
  </li><li>Tcl errors are now logged into .tkenvlog instead of dumping them on stdout.
</li></ul>
<p>Misc :
</p><ul>
  <li>Added -g option to 'scavetool scalar' command. You can specify how the
   scalars are grouped into columns/variables.
  </li><li>The build system can now build large projects on windows. The 32K command-line
   limitation has been resolved.
  </li><li>Updated base system to Eclipse 3.6.1
  </li><li>Added a detailed IDE change log file doc/IDE-Changes
</li></ul>
<p>Several bugs have been fixed; you can see the detailed list at :
<a href="http://tinyurl.com/omnetpp42b1-fixes" mce_href="http://tinyurl.com/omnetpp42b1-fixes">http://tinyurl.com/omnetpp42b1-fixes</a>
</p>
