---
layout: post
title: OMNeT++ 6.0 Release Candidate 1 Available
category: Software
---
Please welcome the [OMNeT++ 6.0 Release Candidate 1](/download/preview). This prerelease contains several features, changes, improvements and bug fixes for the message compiler, improvements in C++ debugging support, an update of the Simulation Manual, and several fixes in preparation to the final 6.0 release.

<!--more-->

Message compiler:

  - Changes in method names of the generated class. The `drop` method generated for owned pointer fields was renamed to `remove`; the single-argument `insert` method for arrays was changed to `append`.
  - Allow the `namespace;` syntax to make it possible to return to the toplevel C++ namespace.
  - Added the `@abstract` field and class property. For a field, it is equivalent to the `abstract` keyword; for classes it marks the whole class as abstract.
  - Abstract fields not to require the class to be marked with `@customize`.
  - Added the `@customImpl` field property. When specified, it suppresses generating implementations for the field's accessor methods, allowing custom implementations to be supplied by the user.
  - Introduced the `@datamemberType` property, and `@cppType` now serves as a default, for `@datamemberType`, `@argType`, and `@returnType`.
  - The generated class descriptors no longer use `operator<<` for converting field values to string in `getFieldValueAsString()`. Instead, `@toString` is used if the class has one, or the `str()` member if the type has one; otherwise the empty string is returned.
  - Many bug fixes and improvements.

C++ Debugging Support:

  - Allow "Debug on Error" and "Debug Next Event" functionality to use the integrated debugger of the Simulation IDE. This required multiple changes. First, the IDE was extended to accept an URL which, when opened in the IDE, causes the integrated debugger to start a debug session and attach to a process given with its PID. This URL is:

    `omnetpp://cdt/debugger/attach?pid=<pid>`

    The URL can also opened from the command line, by running the `omnetpp` command with it as argument. The command opens the URL in the existing IDE instance if it is already running, or starts a new one if it does not.

    The second change was to update the default value of the `debugger-attach-command` configuration option to use the above command. (Previously it has used various other debuggers which were likely to be found on the host OS: GDB, Nemiver, VS Code, etc.)

Analysis Tool:

  - Ask whether to keep temporary charts upon editor close, and only then.
  - Overhaul of the Bar Chart, Scatter Plot, and Box-and-Whiskers Plot chart templates.
  - Use an authentication token and explicit addresses for the Py4J connections between the IDE and Python processes, to improve security.
  - Added a version number to the `omnetpp.scave.*` Python modules.
  - Restore error marker functionality in the chart script editor, better error reporting from vector operations, and several further improvements and bug fixes.

Documentation Generator:

  - Changed the XML format in which extra content for the generated NED documentation can be provided.

Documentation:

  - Simulation Manual has been mostly updated for the current state. There are some remaining sections that need more work.

Tools:

  - Added a new command named `opp_ide` to start the IDE, and made `omnetpp` and `omnest` to be its aliases.
  - `opp_charttool`: Added the `templates` command which lists the available chart templates.
  - `opp_run`: Added new `-h` topics: `latexconfigvars`, `sqliteschema`. They are mainly used for producing info for the Appendices in the manual.


[Download it here](/download/preview).
