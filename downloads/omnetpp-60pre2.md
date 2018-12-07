---
id: omnetpp-60pre2
download: true
layout: download-details
title: OMNeT++ 6.0 - Preview 2 - (Linux)
date: 2018-08-09
sortkey: "2018-08-09"
category: test
tabs:
- id: linux
  download-url: https://ipfs.omnetpp.org/release/test/omnetpp-6.0pre2-src-linux.tgz
  ipfs: ipfs get /ipns/ipfs.omnetpp.org/release/test/omnetpp-6.0pre2-src-linux.tgz
  filesize: 286763654
  md5: 3f0256cfc5171f5f3b3cc1bc2d87e129
---

This is a preview release demonstrating our completely revamped charting solution in the IDE. It is now completely based on Python3, with support for displaying Matplotlib charts right inside the IDE, accessing simulation results in the form of Pandas DataFrames, and using the built-in (older) charts from Python. Analysis files (.anf) created by older versions of the IDE (and vice versa) cannot be opened by this release, because the internal model changed substantially.

Samples:

  Added a new sample (pythoncharts) that contains the documentation, and some sample analysis files for the new Python-based plotting, using the data from the resultfiles sample.

IDE:

  A completely rewritten Charts interface in the Analysis Tool.

 Some of the most important changes in the Analysis Tool compared to the first similar preview release:

  PyDev ( http://www.pydev.org/ ) is now integrated into the OMNeT++ IDE. It provides a more usable editing experience for the chart scripts - without having to use external .py files. It includes syntax highlighting, autocomplete suggestions, documentation tooltips, 'go to definition' functionality and more.
  The chart scripts can now be 'live-edited'. Whenever the script changes in the source editor, it is executed again, and the chart is updated accordingly.
  The standard output of the chart scripts is now printed in a proper Console, as one would expect.
  Most Python runtime errors are now marked in the script editor and the Problems view.

Other changes, not related to the Analysis Tool:

  Tkenv, and all references to it, has been removed.
  Many deprecated classes and member functions in the simulation library have also been removed.
  The `--msg6` option of the message compiler is now turned on by default.
  The IDE now uses the GTK3 SWT backend. This means that for the built-in web browser engine to work, different WebKit-GTK packages need to be installed - `libwebkitgtk-3.0-0` instead of `libwebkitgtk-1.0-0`.

Some known issues with the new Analysis Tool:

  The first time the IDE is started, an error marker saying 'Python not configured' might appear under every open project. This should disappear once an .anf file is opened.
  An empty window named 'PartRenderingEngine's limbo' (that cannot be closed), might appear on first startup, when the first project is opened. This is Eclipse bug #473278 ( https://bugs.eclipse.org/bugs/show_bug.cgi?id=473278 ). This window closes when the IDE is closed, and does not appear again on further startups.
  The splitter between the chart source and the chart itself, after it has been moved, sometimes gets stuck, and cannot be grabbed again. This is most likely an SWT bug. Resize the editor (vertically) to fix it.
  There aren't any autocompletion suggestions for the built-in `results` or `chart` objects yet.
  The interpreter configuration of PyDev is not used for running chart scripts. The first available `python3` program (in $PATH) is used, regardless of the PyDev configuration.
  Clicking on an error marker in the Problems view does not reveal the corresponding chart in the editor.
  The debugging capabilities of PyDev cannot be used on chart scripts.
  Some runtime Python errors (especially ones occurring during rendering, or in custom event handlers) are not caught and marked in the editor. They are sometimes printed in the Console of the chart.
   Analysis files (.anf) created with any older version still cannot be opened.
   When a visual property of a built-in chart (i.e. one not using matplotlib) is edited using the dialog, its new value is instantly applied, even if the script should have overwritten it with a different value. The correct value (the one set programmatically by the script) is applied the next time the chart is refreshed (the script is executed).
