---
layout: post
title: OMNeT++ 6.0 Preview 15 Available
category: Software
---
Please welcome the [OMNeT++ 6.0 preview 15 release](/download/preview). This prerelease contains minor fixes and cleanups in preparation to the final 6.0 release.

<!--more-->

Core:

  - Allow expressions in config option values to use NED operators, module
    parameters and other NED expression features. The immediate motivation
    was to be able use e.g. index in the `display-name` option, e.g.:
    `**.app[0..3].display-name = "cbr-" + string(index)`

  - The `displayName` field was moved from `cModule` to `cComponent`.

  - Result filters: The `count` and `sum` filter now record the initial zero
    value. This necessitated adding two methods to the `cResultListener` interface:
    added `emitInitialValue()` and `callEmitInitialValue()`.

  - Result files now include two new result attributes for each item: recording
    mode (the item in the `@statistic(record=...)` list that produced the given
    result item), and module/channel display names (`recordingmode`,
    `moduledisplaypath`).

  - In result files, the ", vector" suffix is now suppressed from the titles of
    vector results (similarly also "histogram" and "stats"), as they simply echo
    the result item's type. (They were there in the first place because
    recording mode is automatically appended to result titles `@statistic(title=...)`
    after a comma; it is now suppressed for the mentioned recording modes.)

  - SumPerDurationFilter: fix `getSumPerDuration()` behavior when invoked
    during warmup period.

Analysis Tool:

  - Added the possibility to organize charts into a hierarchical folder
    structure. This can be very useful if the number of charts in the analysis
    exceeds a certain number. Charts can be moved between folders using
    copy/paste. Note that `.anf` files that contain folders are not understood by
    previous versions.

  - The "Reset Chart to Template" operation now allows multiple charts to be
    selected.

  - New chart template: "Line Chart on Separate Axes with Matplotlib".

  - New vector operation: `timedilation` (multiplies time with a constant).

  - Added a "Legend" page to the configuration dialogs of most chart templates.
    This page allows legend labels to be customized in several ways. Legend
    labels can now be specified manually, using a format string that may refer
    to dataframe columns as `$name`, `$title`, `$module`, etc. (content assist
    is available). For automatic legend labels, there is the option to use
    result titles (descriptive names) instead of result names, and module
    display name paths instead of plain module paths, where available. Finally,
    there is a possibility to perform a series of regular expression
    find/replace operations in the automatic or manual legend labels for fine
    tuning.

    Note that since charts in `.anf` files contain copies of their chart templates
    and not references to them, charts in existing `.anf` files need to be reset
    to their templates in order to gain the new Legend page (see context menu
    in the Charts page).

  - Automatic legend labels, axis and plot titles are now generated with a
    better algorithm.

  - Inside chart templates, there was an effort to structure charts scripts so
    that they have the structure of distinct result query, data preparation and
    plotting steps, where all three steps are ideally just one or two lines of
    code. To this end, several functions were factored out from chart scripts
    into `utils.py`: `plot_lines()`, `plot_boxwhiskers()`, `pivot_for_barchart()`,
    `pivot_for_scatterchart()`, `get_confidence_level()`, etc. `plot_bars()`
    was extended to accept a metadata df (for legend label generation), and
    it now expect the data df in transposed form.

  - There were several improvements in the `extract_label_columns()`,
    `make_legend_label()` and `make_chart_title()` functions (`utils.py`), to
    support improved legend label, axis label and plot title generation.

  - A distinct exception class `ChartScriptError` was introduced for errors that
    are to be displayed in the plot area without dumping the stack trace to the
    console.

  - Numerous bug fixes and smaller improvements. A notable bug fix is that of a
    crash due to errors in managing shared memory buffers used for communication
    between the IDE and Python processes of chart scripts. Numerous errors were
    fixed in chart image export (i.e. the Matplotlib emulation of native plotting
    widgets) as well.

Inifile Editor:

  - Config option values that contain expressions are no longer falsely
    flagged as errors.

  - The confusing "Unused entry (does not match any parameters)" warning that
    often appeared falsely for INET simulations due to deficiencies in
    analyzing the network structure has been re-worded to include the
    possibility that it is false, and has also been demoted from "warning"
    to "info".

IDE:

  - Update to Eclipse 4.22, CDT 10.5 and PyDev 9.2. The private JRE bundled with
    the IDE has been updated to Java 17 LTS.

Sample simulations:

  - Fifo: Added a TandemQueues network, and related configurations into omnetpp.ini.

  - Resultfiles: Added the scalar and vector result files from the Fifo1 and
    Fifo2 simulations and the new TandemQueueExperiment.

Tools:

  - `opp_charttool`: Filtering options (-i, -n) were improved to allow multiple
    charts to be selected. The -i option now accept index lists and ranges too,
    not only single indices. The -n option was changed to use substring match
    instead of full match.

  - `opp_charttool`: Added the "templates" command which lists the available
    chart templates.

  - `opp_test`: The set of possible test outcomes has been refined. Possible
    outcomes are now PASS, FAIL, ERROR, SKIP and EXPECTEDFAIL. SKIP means
    that the test was not performed, because e.g. it would test an optional
    feature which is currently disabled; ERROR means that the test was
    not performed, because of an unrecoverable error (i.e. crash or exception).
    It is possible to designate a test case as an "expected failure", by specifying
    `%expected-failure: Description of reason` in the test file. This is useful
    if we know that a certain test-case is correct, but it is not possible to fix
    it for certain reasons.

  - `opp_run -v` now outputs the system architecture OMNeT++ was built for
    (e.g. ARCH_X86_64 or ARCH_AARCH64).

  - On Windows and macOS, the directory names in the `tools` directory have changed
    to `win32.x86_64` and `macos.x86_64` respectively.

Build:

  - The content of the `$PLATFORM` makefile variable has changed. Until know,
    it contained the `platform.architecture` pair (e.g. `win32.x86_64`) which was
    misleading. From now on, `Makefile.inc` provides `$PLATFORM` (e.g. `win32`)
    and `$ARCH` (e.g. `x86_64`) in separate variables. `makefrag` files must be
    updated if `$PLATFORM` variable was used in them.

  - To build OMNeT++ with Akaroa support, `WITH_AKAROA=yes` must be specified
    in the `configure.user` file. The configuration script no longer tries to
    autodetect Akaroa without the user explicitly requesting it.

[Download it here](/download/preview).
