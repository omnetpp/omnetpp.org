---
layout: post
title: OMNeT++ 5.3 Released
category: Software
---
Highlights of this release are an improved message compiler (required for INET 4), 
much improved histogram support, a more powerful cMessagePrinter API and its implementation 
in Qtenv, and better support for smooth animation in Qtenv.

<!--more-->

Core:

  - Revised message compiler, added import support and more.
    See src/nedxml/ChangeLog for details. Use --msg6 to turn on
    the new features.
  - cPar: integer representation changed from long to int64_t.
    See src/include/omnetpp/ChangeLog for details.
  - Evaluation of NED expressions now uses integer arithmetic when operands
    are integers. Conversions that incur precision loss should now be explicit:
    converting a double to integer requires the int() cast; also, converting
    an int to double will raise an error if there is actual precision loss,
    and you can suppress that error by explicit double() cast. There are many
    smaller-scale changes related to this change -- see include/omnetpp/ChangeLog
    for details.
  - cHistogram has been replaced with new implementation. (The old one is still
    available under the name cLegacyHistogram.) The new cHistogram is more
    general (supports arbitrary bins), more configurable, and produces much
    higher quality histograms even in the default setup due to newly introduced
    techniques such as adaptive precollection, bin size rounding and bin edge
    snapping, auto-extension with new bins, bin merging to keep the number of
    bins optimal, etc. Histogram operation can be customized via histogram
    strategy classes (cIHistogramStrategy); several histogram strategies are
    provided.
  - In recording histograms with @statistic, the number of bins can be specified
    by adding numBins=nn: @statistic[x](record=histogram;numBins=100). The actual
    number of bins produced might slightly differ, due to auto-extension and
    bin merging during result collection.
  - cMessagePrinter: API was extended with tags and column names
  - cCanvas: added getAnimationSpeed(); better documentation for
    setAnimationSpeed() and holdSimulationFor().
  - cHistogram, cNedValue: minor changes in the public API
  - Result recorders: Added "timeWeightedHistogram" recorder

Qtenv:

  - Implemented support for the improved cMessagePrinter Options API, and added
    a respective configuration dialog.
  - The log viewer now supports ANSI control sequences for text styling:
    foreground/background color, and bold/italic/underline text. Styling is
    supported in both message history view and log view, i.e. it can be used
    in text returned from cMessagePrinter and logged by the EV and other logging
    macros.
  - Rewritten the controller for smooth animation. The new algorithm is now able
    to scale linearly, as long as the simulation can keep up.
  - Usability improvements in the Animation Parameters dialog, e.g. it now
    also displays the current simulation speed, and it is colored red if the
    simulation cannot keep up with the requested animation speed.
  - Histogram inspector: visualize outlier bins (drawn with a different
    color than normal bins), and show info about them. Setting up the bins while
    in the precollection phase can be forced from the GUI.
    Fix numeric overflow when large numbers (>= 2^64) are shown.
  - Histogram result objects are easier to locate on the GUI, and are now
    also found by the Find/Inspect dialog.
  - Made statistic recorders "findable" from Qtenv

Tkenv:

  - The Tcl/Tk based runtime interface is now deprecated and turned off by
    default. It will be removed in future OMNeT++ versions. You can still enable it
    in configure.user by setting WITH_TKENV = yes, but we strongly suggest using
    Qtenv instead.

Toolchain and dependencies:

  - Updated toolchain on Windows (clang 5.0.1, gcc 7.3, gdb 8, osgEarth 2.7)
  - Updated toolchain on macOS (OpenSceneGraph 3.2.3, osgEarth 2.7)
  - OMNeT++ now requires osgEarth 2.7 or later (check the Install Guide for
    further instructions on how to upgrade osgEarth.)

Tools:

  - opp_runall, opp_fingerprinttest, opp_test: portability fixes for Windows
    and macOS
  - opp_fingerprinttest: fix: error messages from the simulation did
    not appear
  - 'march=native' and 'mtune=native' compiler options are no longer used
    by default for a release build, because on certain CPUs this caused rounding
    differences so simulations ran on a different trajectory depending on the
    actual CPU used.

Samples:

  - canvas: Added smooth animation with CarAnimator::refreshDisplay().
  - osg-earth, osg-satellites: Switch from ObjectLocator to GeoTransform.
    The former was removed after osgEarth 2.8, and the latter has been
    around for quite some time now.

Documentation:

  - Documented smooth animation in detail, and updated the section on statistical
    data collection classes (cStdDev, cHistogram) in the Simulation Manual.

Plus several bug fixes.
