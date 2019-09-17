---
layout: post
title: OMNeT++ 4.2rc1 released
joomla_id: 3691
joomla_url: omnet-42rc1-released
date: 2011-09-12 00:00:00.000000000 +02:00
author: Andras
excerpt: We've just released the <b>first release candidate</b> of OMNeT++ 4.2. Please
  read the ChangeLog carefully to see what has changed since the 4.2b2 version. <a
  href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions"
  target="_self">Download and try it</a>  now. Please <a href="http://bugs.omnetpp.org"
  mce_href="http://bugs.omnetpp.org">report any issues</a> you encounter.
category: Software
---
We've just released the <b>first release candidate</b> of OMNeT++ 4.2. Please read the ChangeLog carefully to see what has changed since the 4.2b2 version. <a href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" mce_href="http://www.omnetpp.org/omnetpp/cat_view/1-omnet-releases/5-test-versions" target="_self">Download and try it</a>  now. Please <a href="http://bugs.omnetpp.org" mce_href="http://bugs.omnetpp.org">report any issues</a> you encounter.

<br />

<h2>OMNeT++ 4.2rc1 (Aug 2011)</h2>
<pre>Ini files:
 - Ini files: iterations (${...}) can now refer to other iteration variables,
   using the dollar or the dollar-brace syntax ($var or ${var}). This
   improvement makes it possible to have loops where the inner iteration range
   depends on the outer one. When needed, the default top-down nesting order
   of iteration loops is modified (loops are reordered) to ensure that
   expressions only refer to more outer loop variables, but not to inner ones.
   When this is not possible, an error is generated with the "circular
   dependency" message. Variables are substituted textually, and the text
   resulting from substitution is NOT evaluated except in the 'from..to
   step ...' syntax, and in the 'constraint=' ini file option. CAUTION:
   textual substitution means that variables in arithmetic expressions should
   be protected with parentheses. The text substitution model was chosen for
   greater flexibility as well as the ability to produce a more consistent
   semantics. See src/envir/ChangeLog for more details.

 - Incompatible change: In the constraint= configuration option, variables now
   MUST be referenced with the dollar sign ($foo or ${foo} syntax), and also
   be surrounded with parens (to ensure precedence after the textual variable
   substitution). For example, the expression x+y&lt;10 must be changed to
   $x+$y&lt;10, or for greater safety, to ($x)+($y)&lt;10.

 - Parallel iteration: it is now supported to use named iteration
   variables and parallel iteration together (${foo=...!bar} syntax.)
   This was not supported previously.

 - Some iteration-related error messages have been improved to provide
   more context.

Sim:
 - Result filter/recorder interfaces and registration macros made public
   (moved to src/sim), so that users can contribute their own result filters
   and recorders. Files: cresultlistener.h, cresultfilter.h  cresultrecorder.h.
   Result filters have to be subclassed from cResultFilter or the more specific
   cNumericResultFilter or cObjectResultFilter base classes and registered with
   the Register_ResultFilter() macro; result recorders have to be subclassed
   from cResultRecorder or the more specific cNumericResultRecorder, and
   registered with the Register_ResultRecorder() macro. After that, the new
   filter or recorder can be used in the source= and record= attributes of
   @statistic, and with the **.result-recording-modes configuration option.

 - The Define_Function() macros have been renamed to Define_NED_Math_Function().
   For backwards compatibility, the old macro definitions remain, but issue
   a deprecation warning. Note that the preferred way of defining new NED
   functions is now the Define_NED_Function() macro.

 - The API for custom NED functions defined via Define_NED_Function() has been
   changed. cDynamicExpression::Value (the old value class) has been factored
   out to a new cNEDValue class. Data members are no longer public, they can
   be manipulated via various methods. NOTE: This change is NOT backwards
   compatible: user-supplied NED functions will need to be revised.
   Look at src/sim/nedfunctions.cc for code examples.

 - Measurement unit support: added "mps" (m/s) and "kmph" (km/h) as recognized
   units; changed "Kbps" to more standards compilant "kbps"; changed byte
   multiples notation to use the now-standard IEC binary prefixes: KB -&gt; KiB,
   MB -&gt; MiB, GB -&gt; GiB, TB -&gt; TiB. The latter changes affect backwards
   compatibility, i.e. you may need to update existing models.

Tools:
 - opp_run: bugfix: release-mode simulation models compiled as shared libraries
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

 - Implemented number filter expressions using multiple inputs for statistics source
   expressions. For example:
      @statistic[dropRate](source="count(packetDropped)/count(packetSent)");

 - opp_msgc: improvement: announcements and type definitions now observe
   whether they are above the namespace declaration (=outside the namespace)
   or below it (=inside the namespace). This change makes it consistent with
   cplusplus blocks that had this behavior for quite some time. A related
   improvement is that type lookup in namespaces has been modified to make it
   possible to use unqualified names when declaring fields. See
   src/nedxml/ChangeLog for details.

 - Akaroa support improved; samples/aloha/akaroa.ini was added as example

IDE:
 - Upgraded to Eclipse 3.7

 - Added Eclipse Marketplace to the Help menu. You can now install
   additional features from the market.

 - Before running the simulations, the IDE will show the command line in
   the console view to help you execute the same simulation from the
   command line.

 - Ctrl-Tab now works on freshly opened NED files even if you do not explicitly
   select a simple module. In that case, the IDE opens the .h and .cc files
   associated with the first simple module in the NED file.

 - Improvement on the Manage Build Configurations dialog: newly created build
   configurations are now configured, by copying the source entries from one
   of the existing build configurations.

 - Project Makemake Options property page: overhaul for better usability.

 - Documentation generator: turn on JAVADOC_AUTOBRIEF in newly generated
   doxy.cfg files. (When this option is on, there is no need for @brief
   in C++ doxy comments; instead the first sentence of the comment is taken
   automatically as brief description.)

 - Bug fixes on: IDE makefile generator; the Project Features feature;
   the Inifile Editor (hover info, content assist, etc); the NED editor
   (display string proposals for connections and channels, etc.); Organize
   Imports feature; NED documentation generator; Simulation Launcher (e.g.
   launching folders with simulations in them works again);

 - SVN support removed from the IDE. It had very few users, and can be
   installed from the Market if needed.

 - Removed Animation Player as it was only a 'technology preview' bundled
   with the beta releases to gather feedback from the user community. The
   animator is scheduled to appear in the next major OMNeT++ release.
</pre>
<p>Several bugs have been fixed; you can see the detailed list at :
<a href="http://tinyurl.com/omnetpp42rc1-fixes" mce_href="http://tinyurl.com/omnetpp42rc1-fixes">http://tinyurl.com/omnetpp42rc1-fixes</a><br mce_bogus="1"></p>
