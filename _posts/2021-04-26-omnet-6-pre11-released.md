---
layout: post
title: OMNeT++ 6.0 Preview 11 Available
category: Software
---
We are very happy to announce that [OMNeT++ 6.0 preview 11 has been released](/download/preview) (along with some compatibility updates in INET). Please use INET 3.7.1, INET 4.2.3 or INET 4.3.1 if you are working with preview 11 or later.

This prerelease contains many small changes and improvements. The highlight of this release is the Sequence Chart tool in the IDE which has been revised and significantly extended with new functionality. NOTE: the eventlog (.elog) file format has changed in a non-backward-compatible way.

<!--more-->

The summary of changes since 6.0pre10:

Core:

  - Added display name support to modules. Display name is a string that optionally appears in Qtenv next to (or instead of) the normal module name, in order to help the user distinguish between similarly-named submodules. For example, application-layer modules app[0], app[1], etc. in INET may be given descriptive names like "file transfer", "video", "voice", or "CBR", and have them displayed in Qtenv. Display names may be set using the **.display-name per-module configuration option, or programmatically by calling setDisplayName().
  - Added the "g" (layout group) display string tag, which makes it possible to apply predefined arrangements like row, column, matrix or ring to a group of unrelated submodules. This layouting feature was previously only available for submodule vectors. When "g" tags are used, submodules in the same group are now regarded for layouting purposes as if they were part of the same submodule vector.
  - Made it possible to specify display strings in the configuration. The value given in the **.display-string per-component configuration option is merged into the component's display string in the same way inheritance or submodule display strings are: it may add, overwrite or remove items from it.
  - Change in the parameter change notification mechanism: Calls to the handleParameterChange() method during initialization are no longer suppressed. Because now every change results in a notification, the umbrella handleParameter(nullptr) call at the end of the initialization is no longer needed and has been removed. The consequence is that handleParameterChange() methods need to be implemented more carefully, because they may be called at a time when the module may not have completed all initialization stages. Also, if an existing model relied on handleParameter(nullptr) being called, it needs to be changed.
  - Module name and full name (i.e. name[index]) are now stringpooled, which reduces memory usage in exchange for a small build-time extra cost. In addition, string pools now use std::unordered_map instead of std::map, which results in a performance improvement.
  - Signature change of the cVisitor::visit(cObject *obj) virtual method: it can now request end of iteration via returning false (hence, return type changed from void to bool) instead of throwing EndTraversalException. Existing cVisitor subclasses in model code will need to be adjusted.
  - cValue's doubleValue() and intValue() methods now throw an exception when called on a value that has a measurement unit, in order to reduce usage mistakes. If the value has a unit, call either doubleValueInUnit() / intValueInUnit(), or doubleValueRaw()/intValueRaw() plus getUnit().
  - The setPerformFinalGC() method was removed. It was meant for internal use, and pretty much unused by model code.
  - cHasher: add(const std::string&) changed to be consistent with the add(const char *) overload. This may cause fingerprint changes in models that use it.
  - Eventlog recording: Implemented snapshot and incremental index support. This introduces significant (breaking) changes in the elog file format. Several new configuration options to control eventlog recording: eventlog-max-size, eventlog-min-truncated-size, eventlog-snapshot-frequency, eventlog-index-frequency, eventlog-options. See also changes in the Sequence Chart Tool below.
  - Many other bug fixes and improvements; see the ChangeLog files under src/ for details.

Qtenv:

  - Added support for showing a submodule's display name under the icon instead of, or in addition to, the normal name. The format can be selected in the context menu.
  - Added support for new columns in the packet log view: TxUpdate, Durations, Length, Info. This was implemented in the cDefaultMessagePrinter class which is part of the simulation library. This change makes it possible to see if a packet is a transmission update (except if the simulation installs its own packet printer like INET does).

Eventlog:

  - The eventlog file format has been changed substantially. You won't be able to open older eventlog files with this version of the IDE, nor new files in previous IDE versions.
  - The most prominent change is the introduction of snapshot and index chunks in addition to the already recorded event chunks. The former contains a complete snapshot of the relevant simulation state without referring to any other line in the file. The latter provides the set of changes in the relevant simulation state since the last index or snapshot chunk. The contents of the index chunk is expressed as references to other lines of the eventlog file. This change in the eventlog format provides the foundation for a better user experience in the IDE especially for large eventlog files.
  - Several new eventlog recording related configuration options have been added to the INI file format.

    - the 'eventlog-snapshot-frequency' configuration option specifies how often snapshots are recorded in the eventlog file. Snapshots help various tools to handle large eventlog files more efficiently. Specifying greater value means less help, while smaller value means bigger eventlog files.
    - the 'eventlog-index-frequency' configuration option specifies how often indices are recorder in the eventlog file. An index is much smaller than a full snapshot, but it only contains the differences since the last index. Specifying greater value means less help, while smaller value means bigger eventlog files.
    - the 'eventlog-max-size' configuration option specifies the maximum size of the eventlog file in bytes. The eventlog file is automatically truncated when this limit is reached.
    - the 'eventlog-min-truncated-size' configuration options specifies the minimum size of the eventlog file in bytes after the file is truncated. Truncation means older events are discarded while newer ones are kept.
    - the 'eventlog-options' configuration option allows to record only certain categories reducing the eventlog file size (e.g. text, message, module, methodcall, displaystring).

Sequence Chart:

  - The visualization of events have been horizontally expanded on the chart, now it uses long rounded rectangles instead of small circles. This change allows the separate visualization of method calls without overlapping. If method calls are hidden then the chart falls back to the old behavior where events are small circles.
  - The set of displayed axes can be explicitly configured independently from the set of displayed events. The chart now also supports displaying events on a compound module axis if the corresponding submodule axis is hidden. Collapsing and expanding module axes can be done using the mouse.
  - The chart now also displays a set of axis headers on the left side that shows the module hierarchy in a compact and interactive way.
  - All parts of the sequence chart can be separately shown/hidden.
  - The selection has been extended with support for axis and method calls.
  - A new time measurement feature has been added that allows measuring the time difference between multiple events and other interesting points in time.
  - Several automatic configuration presets have been added (e.g. network level, full detail, default) to make the configuration for the most common chart use cases easier.
  - A new pattern matching based user defined colorization (e.g. message sends, method calls, axes, events) feature has been added. This feature allows creating more easily understandable sequence charts by encoding certain model properties as colors.
  - The chart can display eventlog file statistics and operation statistics.

Analysis Tool:

  - Allow editing the pages of the "Configure Chart" dialog. The "Edit pages" button in the dialog brings up the new "Edit Chart Dialog Pages" dialog.
  - Chart template gallery improvements: improved dialog and content.
  - "Reset Chart To Template": added dialog for choosing which elements to reset.
  - Properties view to show chart properties when chart is selected.
  - Vector Operations: on selecting the operation from the context menu, ask the filter's parameters before adding it.
  - In the "Configure Chart" dialog, added content assist to the "Vector Operations" field.
  - Make native plot legend background and border semi-transparent.
  - Automatically refresh open chart when set of loaded result files change.
  - Chart page toolbar: added "Refresh Result Files" icon; zoom icons redesigned; other improvements.
  - Improved scatterchart and boxplots chart templates.
  - Fix: Don't move the cursor upon error when the source editor is focused.
  - Many more bugfixes and improvements; see the ChangeLog files under ui/ for details.

Inifile Editor:

  - Added support for ignorable options. User can mark custom config options as ones to be ignored by the editor.
  - Get rid of asynchronous/delayed form page reread in FormPage.

IDE General:

  - Install Simulation Models dialog: Added support for changing the project name and location on download. The (default) project name is now coming from the descriptor file even if INET is installed on the Welcome screen.
  - Turned on showing line numbers ruler in source editors by default.
  - Added an XML editor, language server, terminal, and marketplace client to the IDE.

Tools:

  - opp_charttool: The functionality of opp_charttool has been made available for Python programs as a library module called "omnetpp.scave.analysis".


[Download it here](/download/preview).
