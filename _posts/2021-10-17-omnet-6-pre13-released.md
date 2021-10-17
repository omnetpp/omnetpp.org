---
layout: post
title: OMNeT++ 6.0 Preview 13 Available
category: Software
---
Please welcome the [OMNeT++ 6.0 preview 13 release](/download/preview). Along withe this OMNeT++ preview we are releasing INET 3.8, 4.2.7 and 4.3.4. These INET versions are meant to be compatible with OMNeT++ 5.7 and 6.0. Do NOT use earlier versions of INET with these latest versions on OMNeT++.

<!--more-->

The summary of changes since 6.0pre12:

Core:
  - Introduced `cEnvir::pausePoint()`
  - `cValue` changed to hold `any_ptr` instead of cObject. This change involves several changes, e.g. type `OBJECT` renamed to `POINTER`, and `pointerValue()` added.
  - `cClassDescriptor`: Added `getFieldValue()/setFieldValue()` methods to allow accessing fields in a typed way, using `cValue`. Previously existing methods `getFieldValueAsString()/setFieldValueAsString()` only allowed string-based access.
  - Message compiler: Follow `cClassDescriptor` change: generate `getFieldValue()` and `setFieldValue()` methods. Added new properties `@toValue()/@fromValue()` so that user can define how to implement those.
  - `cPar`: added cValue-based generic access: `getValue()`, `setValue()`
  - `cProperty`: added `getNumKeys()` method; `updateWith()` made public
  - `cResultFilter`, `cResultRecorder`: grouped `init()` args into a Context struct, The old `init()` methods have been preserved as deprecated (and invoked from the new `init()`) in case an existing filter/recorder overrides them. Note that potential external calls to the old `init()` method won't work any more (they will have no effect), and need to be changed to the new version.
  - Added `MergeFilter`, a result filter that allows multiple inputs, and multiplexes them onto its singe output. It is available (as the `merge()` function) in the `source=` part of `@statistic`.
  - Fixed histogram loading issue in the output scalar file (`.sca`). Bin edges that are very close could become equal in the file if insufficient printing precision was set, rendering the file unreadable. The issue is now handled both during result file writing (if such condition is detected, bin edges are written with full (16-digit) precision) and reading (zero-width bins are merged into adjacent nonzero-width bin).
  - Further bug fixes and minor improvements.

Qtenv:
  - Object Inspector: Added possibility to select display mode (Children/Grouped/Flat/Inheritance) per-node. If display mode override is specified for a node, it will affect the whole subtree. The display mode for the selected tree can be changed via hotkey (Ctrl+B) or via the context menu.
  - Log: Show component init stages as banners, but hide empty ones.
  - Prevent manually enabled "Debug on Errors" setting to be turned off by (lack of) configuration option.
  - Various bug fixes.

IDE:
  - Analysis Tool: Multiple UI improvements:
      - When plotting results from the Browse Data page, prefer native plotting to Matplotlib. Native plots are both more scalable and also arguably more convenient to use.
      - In the Scatter Plot config dialog, the "Iso line" terminology changed to "Group by" (suggested by Edward Longman).
      - When setting the name of a chart, also set its title, if it was empty before.
      - Improve focus handling on tab switching in the Chart Properties dialog.
      - Fix the bug where middle-click closing a chart tab would discard changes silently.
      - Added `timewinthruput` vector operation
      - Python API: The `plot` module (`omnetpp.scave.plot`) was renamed to `ideplot`. Charts in existing ANF files need to be either recreated, or the import line and usages of the plot module in the chart script need to be changed accordingly.
  - Added support for ARM-based Linux distros
  - JustJ: Use stripped version of JDK 15 instead of JDK 11
  - Update to Eclipse 4.21, CDT 10.4 and PyDev 9.0.

Build:
  - `setenv` is used now on Windows to set up the build environment. It is automatically sourced when `mingwenv.cmd` is started.
  - If `setenv_local` file is present in the installation root, it is automatically sourced from the `setenv` script. This can be used to set up user specific environment variables.

Documentation:
  - Install Guide updated. New sections in the macOS chapter: "Enabling Development Mode in the Terminal", "Running OMNeT++ on Apple Silicon"

[Download it here](/download/preview).
