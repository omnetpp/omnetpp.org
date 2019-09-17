---
layout: post
title: OMNeT++ 4.2b2 released
joomla_id: 3689
joomla_url: omnet-42b2-released
date: 2011-05-05 00:00:00.000000000 +02:00
author: Andras
excerpt: Dear users, we've just released the <b>second</b> beta of OMNeT++ 4.2. Please
  read the ChangeLog carefully to see what has changed since the 4.1 version. <a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it now</a>.
category: Software
---
Dear users, we've just released the <b>second</b> beta of OMNeT++ 4.2. Please read the ChangeLog carefully to see what has changed since the 4.1 version. <a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it now</a>.

<br /><br />

<pre><b>OMNeT++ 4.2b2 (May 2011)</b><br /><br />Most important feature: "Project Features" (see below).<br /><br />NED:
 - Added support for conditional submodules. Syntax:
     udp: UDP if needsUDP {...}
     tcp: <tcptype> like ITCP if needsTCP {...}

 - Added the xml() NED function, which accepts a string argument and parses
   it as XML. Its most notable use is eliminating "empty.xml" files from INET:
   one can use xml("<root>") in NED files instead.

 - Implemented default value for parametric submodule and channel types.
   NED now supports the following syntax:
     mobility: <default("nullmobility")> like IMobility;
   The effect is that the NullMobility NED type will be used for the mobility
   submodule if the type name is not specified otherwise, e.g. in the config-
   uration with something like
     **.mobility.type-name = "ConstSpeedMobility"

 - Added the firstAvailable() NED function, which is helpful with the Project
   Features feature (see below). It accepts any number of strings (see new
   varargs support for NED functions), interprets them as NED type names
   (either short names or fully qualified names), and returns the first one
   that exists and is also "available" (its C++ implementation class exists).
   Example usage:
     tcp: <default(firstavailable("tcp_lwip", "tcp_nsc",="" "tcp"))=""> {..}
   It chooses the TCP_lwIP, TCP_NSC or TCP module type for the tcp submodule,
   in this order, unless the type is explicitly defined to be something else
   in the configuration.

 - Parametric submodule type can now also be specified in NED files, using
   patterns that end in the new "typename" keyword. An example:
     network Net {
         parameters:
             host[*].tcp.typename = "TCP_lwIP";
         ...
     }

Ini files:
 - The "type-name" per-object configuration option (**.typename=) has been
   renamed in to "typename", for consistency with the similar new NED feature.

Sim:
 - Implemented varargs support for NED functions. If the signature (see
   Define_NED_Function() and Define_NED_Function2() macros) ends in ", ...",
   then the function will accept any number of additional arguments of any type.
   At runtime, the implementation has access to both the actual number and
   types of args. When passing extra args, optional arguments (those marked
   with '?' in the signature) must all be present, i.e. varargs can only come
   when all typed args are there.

IDE:
 - Upgraded to Eclipse 3.6.2

 - Implemented the "Project Features" feature, which makes it possible to
   disable unused parts ("features") of a project to reduce compilation time
   and complexity. It has been invented to help INET Framework users and
   developers deal with the growing size of the framework. Features are
   described in the project's .oppfeatures file, authored by INET developers.
   Users can activate/deactivate features in the Project Features page of
   the Project Properties dialog (this page is directly accessible from the
   Project menu and from the Build Configurations submenu of the project's
   context menu in Project Explorer). Features map to NED packages and C++
   source folders; disabling a feature maps to NED package exclusion, and
   folder exclusion in CDT (C++ Development) configuration. Features can also
   define C/C++ symbols (for #ifdefs), and extra libraries to link with.
   At build time, the IDE checks the project's configuration (NED, CDT) and
   if it is inconsistent with the selected features, it offers fixing it.
   Features can also be used from the command line by exporting Makefiles
   (or opp_makemake commands) that reflect a particular enablement of features.

 - Support for excluding (disabling) NED packages. This feature is needed for
   the Project Features feature. Exclusions can be edited on the NED Source
   Folders project property page, and are saved into the project's .nedfolders
   file.

IDE/Animation Player:
 - Implemented lazy loading of the eventlog file: the tool can now animate
   large eventlog files with acceptable performance.

 - Animation effects refined, e.g. packet transmission on a datarate channel.

 - Heavy bugfixing. Note that the tool is still being actively developed, and
   it is generally not yet ready for everyday use.

IDE/Inifile Editor:
 - Usability: the editor now comes up with the page (text or form) that was
   used last time, and not always with the form editor. (When you flip the
   editor to the other page, the page type is stored in the preferences.
   When an editor is opened, the setting is read from the preferences and
   the corresponding page is activated.)

 - Improved text hover (F2) and hyperlink (Ctrl+click) support: the editor
   can now show information and go to the definition of modules that occur
   in the inifile key. For example, for a **.host[*].tcp.sackSupport = true
   line, the user can hover over (or Ctrl+click) the host[*] part, and the
   editor will show relevant information and go to the definition of the
   host[] submodule vector in the NED network description.

 - Improved content assist: per-object configuration options are now filtered
   by the type of object that the key refers to; for example, if you type
   **.ppp[*].txPkBytes.<ctrl+space>, the editor will know from the NED files
   that txPkBytes is a statistic, and offer completions accordingly.

 - Content assist: different types of completions (modules, parameters,
   statistics, configuration options, etc) are now marked with icons.

 - Markers on included inifiles are now removed when the main inifile is
   closed. (Fix for #176)

 - Added the Copy action to the Module Parameters view context menu: you can
   now select the key for an unassigned parameter in the view, and copy/paste
   it into the editor area.

IDE/Wizards:
 - New Tictoc Example and New Source-Sink Example wizards: fix: the root
   Makefile executed opp_makemake in the src/ folder at each build,
   overwriting the IDE-generated Makefile.

 - New OMNeT++ Project wizard template: now it is possible to set "custom make"
   for a folder: specify <foldername>:CUSTOM in the makemakeOptions= template
   variable in template.properties. Use "." to name the project root folder.
   Example: makemakeOptions = .: CUSTOM, src: --deep -meta:recurse...

 - New option for template.properties: preRunTemplate=<fti-file-name>. Example:
   preRunTemplate = main.fti. The option causes the given template file to be
   evaluated for its side effects, just after the user hits Finish but before
   any file is copied or template is evaluated. It is not allowed to produce
   text output, but the variables it sets will be substituted into other
   template.properties variables, and will also be available in other template
   files. (Note: all other templates are run in isolation, and cannot change
   variables for other templates!) The preRunTemplate option is the only way
   to programmatically set the value of makemakeOptions and similar
   template.properties options.

IDE/Graphical Editor:
 - Switched back double-click behaviour to Open NED Type action. The Properties
   dialog can now opened with Ctrl+Enter (Alt+Enter was unavailable.)

IDE/Sequence Chart and Event Log:
 - Added show/hide options for arrows that represent mixed dependencies.
   (Such arrows are drawn when the sequence chart is filtered, and represent
   e.g. a sequence of message sendings and self-messages)

 - Eventlog: enhanced performance of event tracing filter

 - Simulations now record the termination message and result code into the
   eventlog file

 - Note: eventlog file format has changed (in order to better serve the
   Animation Tool) -- .elog files recorded with any prior version of OMNeT++
   have to be re-recorded.

Many bug fixes, mostly in the IDE; you can see the detailed list at:
http://tinyurl.com/omnetpp42b2-fixes


<b>OMNeT++ 4.2b1 (Feb 2011)
</b>
Partial list of changes since 4.1 (see ChangeLog files in individual folders
for a more complete list):

Simulation runtime:
 - Removed #include <winsock.h> from <platdep timeutil.h="">; the reason
   is that it conflicted with lwIP code recently integrated into INET.
   <platdep sockets.h=""> still includes <winsock.h>, but now
   <platdep sockets.h=""> (and <platdep timeutil.h="">) MUST precede <omnetpp.h>
   in all source files.

 - Ini files: implemented multiple inheritance for sections. Syntax:
     [Config Foobar]
     extends = Foo, Bar
   When the runtime looks for a config option or param assignment, sections
   are examined in a "fallback order" until the first match is found. In the
   above example the order would be: Foobar, Foo, Bar, General.
   OMNeT++ uses C3 lineratization to compute the section fallback order,
   see e.g. http://en.wikipedia.org/wiki/C3_linearization

 - Ini files: better parsing for iteration variables, e.g. the value in
   ${x=uniform(1,2)} is now parsed as one item, not as "uniform(1" and "2)".
   Nested parens/brackets/braces and string literals are recognized;
   escaping commas and close-braces is now possible using backslash.

 - NED: fixed deep parameter assignments: parameter references were
   interpreted in the wrong context. Deep parameter assignments are when
   an inifile-like pattern is used to name the parameter(s) to be set, as in:
      network Inet {
          parameters:
              host[*].tcp.nagleEnabled = true;
          ...
      }

 - Resolved spurious errors: 'Class "..." not found -- perhaps its code
   was not linked in, or the class wasn't registered with Register_Class()'
   Added a check to ensure that the debug and the release versions of
   the simulation library are not loaded at the same time. This problem
   occurred when a model was built as 'release' and the debug version of
   'opp_run' was used to start it. As a result, the simulation seemingly
   started but complained about missing classes.

 - Fix: Some classes were thrown out by the linker if OMNeT++ was statically
   built, and the simulation was complaining at runtime about the missing
   cCompoundModule class.

 - Eventlog recording: .elog file format change: message creations and
   duplications (cloning) are now recorded; MC (ModuleCreated) entries now
   precede GC (GateCreated) entries. IMPORTANT: The sequence chart in the
   IDE will only work on .elog files in the new format, existing event logs
   need to be re-recorded!

IDE/Animation Player:
 - This is a new component in the IDE, you can access it by right-clicking
   an .elog file and selecting "Open With / OMNeT++ Animation Player" from
   the context menu. This is a preliminary implementation (Technology
   Preview) not yet optimized for large files, the practical maximum file
   size it can handle is about 10MB.

IDE/C++ Development:
 - Added a new "Clean Local" item to the project's context menu that does
   not clean referenced projects. This resolves the problem that CDT's
   "Clean Project" command also cleans the referenced projects, e.g. if
   you have a Foo project that depends on INET, cleaning Foo also cleans
   INET which takes a long time to recompile. Now you can use the
   "Clean Local" command to clean Foo only.

 - Added new "OMNeT++ Code Formatter" profile. This coding convention follows
   the rules used in the OMNeT++ kernel and the INET Framework. (No tabs, etc.)

 - Added MachO64 binary parsers and error parsers. This makes it possible to
   debug a 64-bit executable on Mac OS X 10.6

 - Linux only: Added support for profiling with Valgrind. To activate this
   feature, select "Profile as... / OMNeT++ Simulation" from the Project
   Exporer context menu. This feature requires Valgrind to be installed
   on your system. (Note: the main IDE toolbar does not show a Profile button
   next to the Run and Debug buttons at this time, but profiling is still
   available via the Project Explorer context menu.)

 - The Makemake page in Project Properties can now fix the "Source Folders
   differ across configurations" problem in the project setup, which usually
   occurs when you add a build configuration to an existing project later.
   The dialog now displays a "Fix it" link.

IDE/Graphical Editor:
 - Several performance optimizations for the NED Editor. It can open much larger
   files than before. NED validation is done now in a background thread and
   does not block the UI.

 - Select 'NED Type Selection' dialog now works correctly on first open. It
   shows the defining projects for the types.

 - Enhanced drag and drop capabilities in NED Graphical Editor. You can
   drop NED types into a compound module either to create submodules
   (if you drop it into the submodule area), or to turn it into
   an inner type (if you drop on the title of the compound module).

 - The Graphical Editor now displays the file's package name at the top.

 - Graphical Editor displays self-connections as arcs in the module's upper
   right corner.

 - The resize/move feedback figures have been changed from a simple outline
   to translucent blue.

 - Added a 'Properties' dialog that can edit one or several objects
   at a time, and allows you to change graphical and type information.
   It also has a preview panel.

 - Enhanced editing of type fields in the 'Property View'. The editor correctly
   enumerates the possible choices and adds an import statement if necessary.

 - 'Open Type' and 'Open Supertype' have been reassigned to the F3 function key.
   Double-click now opens the 'Properties' dialog.

 - The IDE now uses the use native (C++) layouter code for placing unpinned
   submodules, which means better performance and consistency with the
   simulation runtime (Tkenv).

IDE/Inifile Editor:
 - Support for inifile improvements in this release, namely multiple section
   inheritance and better parsing for iteration variables

 - Performance improvements: inifile is now analyzed in the background so that
   it does not block the UI, and features that need its results (hover text,
   content assist, etc) have a timeout how long they are willing to wait for it
   (see bug #132 for details). It is now also possible to disable inifile
   analysis. Further performance and UI responsiveness improvements are planned.

IDE/Sequence Chart:
 - Added 'Goto Simulation Time' and 'Goto Event Number' in the context menu.

 - 'Go to Simulation Time' in the 'Event Log' view now supports relative values.

 - The Sequence Chart tool now knows about message creations and duplications
   (cloning), and as a result, in certain situations it is now able to better
   identify relationships between events and draw a better sequence chart.
   NOTE: Due to changes in the .elog file format, the tool will only work with
   newly recorded files. Existing event logs need to be re-recorded!

IDE/Launcher:
 - The command-line for launching the simulation now uses relative paths instead
   of absolute ones. This makes the starting command-line easier to understand.

IDE/Documentation Generator:
 - Added tilde notation as an alternative to automatic hyperlinking of module
   names in comments. The latter was often too agressive (e.g. linking to the
   IP module in the phrase "IP address" is wrong). Automatic hyperlinking can
   now be turned off in the generator, and then the user is expected to mark
   words to be hyperlinked with a tilde: "the ~IP module". The INET Framework
   has already been converted to use the tilde notation.

 - Added Javascript to autoload frameset page if a content page is opened by
   itself. This is useful when URLs to specific content pages are posted on
   the mailing list or sent over email.

 - Implemented @include in NED comments. Lines in the included file don't have
   to start with "//", but otherwise they are processed exactly as NED comment
   text.

 - Fix: External pages (@externalpage) now appear unded the "Selected Topics"
   node of the navigation tree in the generated documentation.

 - Several minor fixes: recognize the &lt;u&gt; (underline) HTML tag; sanitize the
   file names for @page; added/refined test cases

Tkenv:
 - Parallel simulation: Placeholder modules are now displayed with a semi-
   transparent icon (or if it's a rectangle or oval, with dotted border).

 - Fix (bug #248): compute coordinates (and sizes) in double and not int;
   necessary if background scaling (bgs display string tag) is set up.

 - Better choice of default user interface font, especially on Linux.

 - The generic UI font and the font used in graphics are now configurable
   in the Simulation Options dialog.

 - The default font for log text is now proportional (same as the generic UI
   font), for better readability and space efficiency. It can be customized
   (switched back to a monospace font, etc) in the Simulation Options dialog.

 - Minor: menu items have been changed to title case

 - Tcl errors are now logged into .tkenvlog instead of dumping them on stdout.

Misc:
 - Added -g option to 'scavetool scalar' command. You can specify how the
   scalars are grouped into columns/variables.

 - The build system can now build large projects on windows. The 32K command-line
   limitation has been resolved.

 - Updated base system to Eclipse 3.6.1

 - Added a detailed IDE change log file doc/IDE-Changes

Several bugs have been fixed; you can see the detailed list at:
http://tinyurl.com/omnetpp42b1-fixes
</omnetpp.h></platdep></platdep></winsock.h></platdep></platdep></winsock.h></fti-file-name></foldername></ctrl+space></default(firstavailable("tcp_lwip",></default("nullmobility")></root></tcptype></pre>
