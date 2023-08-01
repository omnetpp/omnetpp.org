---
layout: page
title: What's New in OMNeT++/OMNEST 5.3
---
## Qtenv

### Enhanced Histogram Inspectors

Histogram inspector windows now show the lower and upper outliers as extra bins (gray). Setting up the bins while in the precollection phase can be forced from the toolbar.

<img src="images/53-qtenv-histogram.png" width="500">

### Improved Message Printer API

The Message Printer API was enhanced to allow the Message Log window to display info in multiple columns.

<img src="images/53-qtenv-message-printer.png" width="700">

### Message Printer Configuration

Columns in the Message Log window and other options can be turned on/off using a new configuration dialog.

<img src="images/53-qtenv-message-printer-config.png" width="300">

### ANSI Control Sequence Support

Qtenv now supports ANSI control sequences for text styling: foreground/background color, and bold/italic/underline text. Styling is supported in both Message History view and Log view.

<img src="images/53-qtenv-logformatting.png" width="500">

### Inspector Packet Mode

The Object Inspector has a new mode called Packet mode. Packet mode only shows fields that are considered packet content. You can mark fields as packet content by adding the

@packetData

property to the field in the message file.

<img src="images/53-qtenv-packet-mode-inspector.png" width="600">

### Improved Animation

The controller for smooth animation has been rewritten. The new algorithm is now able to scale linearly, as long as the simulation can keep up. The usability of the Animation Parameters dialog has also been improved: now it also displays the current simulation speed. The speed display is colored red if the simulation cannot keep up with the requested animation speed.

<img src="images/53-qtenv-animcontrols.png" width="250">

# What's New in OMNeT++/OMNEST 5.2

## Qtenv

### Enhanced Animation Parameters Dialog

Improved the appearance and usability of the Animation Parameters dialog.

<img src="images/52-qtenv-animcontrols.png" width="600">

## IDE

### Automatic Configuration Switching on Launch

The launcher now switches the project (and optionally all projects it depends on) to the appropriate build configuration if necessary: Run and Profile will perform RELEASE build, Debug will perform DEBUG build.

<img src="images/52-ide-switchconfig.png" width="500">

### Build Before Launch Configuration

A new "Build before launch" section was added to the Launch config dialog, which allows you to control whether to switch build configuration automatically or to ask before the build. The scope of build can also configured; options are: "None", "This project", or "Project + dependencies".

<img src="images/52-ide-buildbeforelaunch.png" width="800">

### Better Progress Reporting

Better progress reporting and cancellation for batch runs in the Progress View: It is now possible to cancel either individual runs or the whole batch.

<img src="images/52-ide-progress.png" width="800">

### Statistics Data in the Analysis Tool

The Histograms tab on the Browse Data page now includes "statistics"- type results as well.  Additional columns on the page: "Kind", "SumWeights", "#Bins", "Hist.Range". "Kind" indicates whether a result item is a "statistic" or a "histogram", and whether it is weighted or unweighted.

<img src="images/52-ide-histograms.png" width="800">

-------------------------------------------------------------

# What's New in OMNeT++/OMNEST 5.1

## Qtenv

### Updated Toolbar

The simulation time display now has digit grouping and units turned on by default for better readability. Settings can be changed in the context menu.

<img src="images/51-qtenv-toolbar.png" width="800">

### Packet Animation Support

Improvements on built-in animations: Messages sent with a nonzero propagation delay are now animated properly (not instantaneously). Packets of nonzero length are now displayed as "strips" when transmitted on a link with a transmission rate and propagation delay. The animation of method call hierarchies now represents the call graph better.

<img src="images/51-qtenv-anim1.png" width="800">

### Smooth Animation API

Added support for smooth custom animations. This means that simulation time is interpolated between events, and the animation can be stopped between events. The updated 'aloha' example highlights the use of the new smooth animation API. The server and all hosts now have fixed positions (still random but deterministic, and not using auto-layouting), so that their individual propagation delays can be computed. Each transmitted packet is visualized with a ring and many concentric circles, illustrating the propagation of the electromagnetic wave. The visualization is faithful, e.g. multiple signals visually overlapping at a receiver actually means a collision.

<img src="images/51-qtenv-anim2.png" width="500">

### Animation Parameters

A new 'Animation Parameters' window has been added where one can view the current animation speed, framerate, and other metrics.

<img src="images/51-qtenv-animcontrols.png" width="800">

### Video Recording Support

Added built-in support to record animation into a high quality video. Press the record button on the toolbar for instructions.

<img src="images/51-qtenv-videorecording.png" width="600">

### Histogram Inspectors

Added graphical inspectors for histograms. They are enabled for any cStatistic-based histogram objects, i.e. they are currently not available for @statistic-based output histograms.

<img src="images/51-qtenv-histograms.png" width="800">

### Vector Inspectors

Added graphical inspectors for output vectors.

<img src="images/51-qtenv-vectors.png" width="800">

## IDE

### IDE Launcher

In the Run/Debug Configurations dialog, the "OMNeT++ Simulation" form page has been revised for usability and to better support simulation campaigns. The launcher (code that schedules and actually runs the simulations and arranges feedback in the Progress view and the Console) has also been improved: The "Runs" form field now accepts a run filter expression that can refer to iteration variables. Batch execution of simulations is now controlled with two new spinner widgets ("Number of CPUs to use", "Runs per process".) The form page now allows specifying time limits for the simulation ("Simulation time limit", "CPU time limit" fields.) User interface selection uses an editable combo instead of radio buttons. Added content assist for Additional Arguments field and finally, the radio buttons have been replaced by tri-state checkboxes (with on/off/grayed states, where the grayed state means "no setting specified, let the inifile setting take effect".) The consequent space saving allowed other options to be added to the form page: "Verbose", "Stop batch on error", "Express mode", "Save stdout", "Record scalar results", "Record vector results","Record eventlog".

<img src="images/51-ide-launcher.png" width="800">

-------------------------------------------------------------

# What's New in OMNeT++/OMNEST 5.0

## Tkenv

### Improved Status Area

The status area has been redesigned. The most prominent feature is the large displays showing the simulation time and event number on the right side of the toolbar. They display the last event when the simulation is not running, and the current event during animation. The status line below the toolbar shows information about the next event. When the simulation is running, this area switches to displaying performance data such as the current event/second value. Additional, more static or less important information has been moved to the bottom status bar.

<img src="images/50-tkenv-status-area.png" width="800">

### Tkenv Canvas Support

Tkenv has gained support for the Canvas API, a new facility that allows one to augment simulations with graphical elements. The screenshot is from the new Canvas example simulation.

<img src="images/50-tkenv-canvas.png" width="800">

## Qtenv

### Qtenv - A New Qt-Based Runtime Environment

Qtenv has been introduced to replace the aging Tcl/Tk-based runtime environment. The Qt toolkit provides better look and feel, a richer set of features, and at the same time delivers superior performance. In 5.0, the default runtime is still Tkenv, but users can optionally start the new runtime with Qtenv. This can be achieved by adding the "-u Qtenv" option on the command line, or by selecting Qtenv in the simulation's Run/Debug configuration in IDE.

<img src="images/50-qtenv-window.png" width="800">

### 3D Visualization Using OpenSceneGraph and osgEarth

Qtenv also allows one to visualize 3D scenes using the OpenSceneGraph and osgEarth libraries, a feature that could not be implemented using Tcl/Tk. One can switch between the 3D visualization and the traditional (2D) graphics using the module inspector's local toolbar. The screenshot shows one of the new example simulations.

<img src="images/50-qtenv-3d.png" width="800">

## IDE

### Updated Eclipse Platform

The IDE is now based on Eclipse 4.4.2 Luna and CDT 8.6.

<img src="images/50-eclipse-platform.png" width="500">

# What's New in OMNeT++/OMNEST 4.6

## Tkenv

### Improved zooming/panning support

Use double click to zoom in around a point, and Shift + double click to zoom out. Use Ctrl + left mouse button to drag out a rectangle to zoom to (a.k.a. marquee zoom); right-click cancels marquee zoom. Use left mouse button for panning.

<img src="images/46-tkenv-marquee-zoom.png" width="500">

## IDE

### Updated Eclipse Platform

The IDE is now based on Eclipse 4.4 Luna and CDT 8.4.

<img src="images/46-eclipse-platform.png" width="500">

# What's New in OMNeT++/OMNEST 4.5

## Tkenv

### Tkenv Usability Improvements

The Tkenv GUI has been redesigned for single-window mode to improve usability and user experience. New inspector windows can still be opened, and they are kept always above the main window.

![Image](images/45-single-window.png)

### New Look and Feel

Tkenv has also received a new, modern look and feel, due to the use of the Ttk widgets and a custom Ttk theme. This makes a huge difference in looks on all platforms, but especially on OS X. See before (left) and after (right) screenshots.

![Image](images/45-newtheme.png)

### Inspector Navigation History

Inspectors are no longer tied to a single object and visited objects are remembered as navigable history (back/forward/up). Local toolbars were added to the upper right corner of the inspectors with navigation and other context aware actions.

![Image](images/45-inspector-nav.png)

### New Message Tracing

Tkenv now stores message sendings and also a clone of corresponding message objects (cMessage), and can show them in the log window. Message printer classes can be contributed to customize the content of the log lines. Switching between the module log and the message trace is possible using the local toolbar in the log inspector window.

![Image](images/45-message-trace.png)

### Optimized Status Area

The status area is more concise now (two rows instead of three), and shows more information at the same time. A part of the status area can be turned off to free up vertical space (Ctrl+D).

![Image](images/45-status-area.png)

### Main Menu Cleanup

We have reorganized the main menu, removed obsolete menu items and added numerous smaller improvements: additional hotkeys (Ctrl+Plus/Minus for Zoom, Ctrl+F5 Run Until, Ctrl+Q Quit); on-demand scrollbars (i.e. they are hidden when not needed); module graphics now remembers zoom level and settings per NED type; etc.

![Image](images/45-menu-cleanup.png)

# What's New in the OMNeT++/OMNEST 4.4 IDE

## Tkenv

### Animation Filtering

This feature makes it possible to suppress animation of messages that you are not interested in (e.g. WLAN ACK frames, ARP exchanges, etc). Just right-click the message (either on the canvas or on the timeline), and choose "Exclude messages like '...' from animation" from the context menu. The filters can also be edited in the Simulation Options dialog.

![Image](images/44-tkenv-anim-filter.png)

### Debug Next Event (Ctrl+F9)

This function causes the simulation program to stop in the debugger just before entering the handleMessage() call. You just need to hit "Step Into" in your debugger to debug that event.

![Image](images/44-tkenv-debug-next-event.png)

## IDE

### Based on Eclipse 4

The IDE is now based on Eclipse 4.3.1 (Kepler) and CDT 8.2.1.

![Image](images/44-eclipse-platform.png)

### Project-Specific Icons

Images from the "images/" folder of the project and its dependencies are automatically used by the NED editor, and added to the Tkenv image path when the simulation is launched. (The per-project image path will be configurable in future versions.)

![Image](images/44-project-images.png)

### Attach external debugger on error

The simulation kernel can invoke an external debugger on an error. The Ini file editor allows you to specify the options related to the just-in-time debugging feature.

![Image](images/44-ini-attach-debugger.png)

# What's New in the OMNeT++/OMNEST 4.3.1 IDE

## More friendly to first-time users

### "First Steps" Dialog

When the IDE is started with an empty workspace (e.g. on first-time launch), it offers the user the following options: (1) Import the OMNeT++ sample simulations into the workspace; and (2) Download and install the INET Framework.

![Image](images/431-first-steps-dialog.png)

### "Install Simulation Models" Dialog

INET installation is also available from the menu. It brings up a dialog with the list of simulation models available for automated installation, and lets the user choose. Currently only the INET Framework is listed there, but it is planned to add further models

![Image](images/431-install-models-dialog.png)

### Intro Pages

When the IDE is started for the first time, it now displays some helpful introductory pages in the editor area: "Getting Started", "At a Glance" , "OMNeT++ Samples", etc. These pages are also available from the Help system (except the last one, which has a dedicated menu item in the Help menu.)

![Image](images/431-intro-pages.png)

## Further IDE improvements

### More Usable Filter Hints

In the Analysis Tool, if you filter for the module, hints for the statistic name filter will only show statistics recorded by that module. (In general, filter hints for a combo are now computed from the result items filtered by the other combos.)

![Image](images/431-ana-filter-hints.png)

### More Accessible "Go to" Actions

In the Output Vector View (Analysis Tool), "Go to" actions are now shown in the context menu instead of the view's pulldown menu.

![Image](images/431-ana-goto-actions.png)

### Launching Improvement

Trying to launch a closed project will now offer opening it.

![Image](images/431-launching.png)

# What's New in the OMNeT++/OMNEST 4.3 IDE

### Computed Scalars

Analysis tool: Added support for computed scalars. Read the updated the User Guide for further details.

![Image](images/43-ana-computed-scalars.png)

### Logarithmic X Axis

Analysis tool: Added the 'Logarithmic X axis' option to scatter charts.

![Image](images/43-ana-log-x-axis.png)

### Full-Screen Mode

Added full-screen mode (Ctrl-Shift-F11).

![Image](images/43-full-screen-mode.png)

### Updated Eclipse Platform

The IDE is now based on Eclipse 3.8.2.

![Image](images/43-eclipse-platform.png)

# What's New in the OMNeT++/OMNEST 4.2 IDE

## Platform

### Updated Eclipse Platform

The IDE is now based on Eclipse 3.7.1 and CDT 8.0.1.

![Image](images/42-version.png)

### Eclipse Marketplace

You can use the Eclipse Marketplace to install additional features into the IDE by selecting

*Help | Eclipse Marketplace...*

![Image](images/42-marketplace.png)

## NED Editor

### Error Markers on Connections

Connections with an error are now annotated with a marker in the graphical editor.

![Image](images/42-ned-connection-errormarker.png)

### Package Names in Graphical Editor

The graphical editor now displays the package name at the top of the canvas.

![Image](images/42-ned-packagename.png)

### Visible Self-connections

Connections that start and end at the same module are now represented by arcs in the top-right corner of the module. Previously, self-connections were represented only by a small arrow head.

![Image](images/42-ned-selfconnection.png)

### Rearranged Context Menu

The context menu in the graphical editor has been rearranged to increase its usability.

![Image](images/42-ned-context-menu.png)

### Changing the Visual Appearance of the Modules

A new Properties dialog has been introduced that lets you change the name, type, vector size and visual appearance of modules and channels. The dialog is accessible from the context menu or by pressing *Ctrl-Enter* after selecting an item or several items together.

![Image](images/42-ned-properties.png)

### Changing Module Type and Vector Index

The 'General' tab in the properties dialog allows you to change the name, vector size and type of a module.

![Image](images/42-ned-properties2.png)

### Enhanced Type Selection Dialog

The Open NED Type dialog now shows you the project name where the opened type is defined. This is especially useful if you are working with multiple open projects.

![Image](images/42-ned-typeselectiondialog.png)

### Excluding NED Packages

The IDE now allows you to exclude specific NED packages from the NED path. NED files in those packages will not generate errors and they cannot be edited in the NED editor. This feature is useful for disabling certain parts of your project.

![Image](images/42-ned-folderexclusion.png)

## C++ Development

### Clean Local Project Only

The new 'Clean Local' action on the project context menu allows you to clean only the selected project without invoking the 'Clean' action on referenced projects. This is useful if your project references a third party project (e.g. the INET Framework) and you want to clean only your own project, but not the third party one.

![Image](images/42-cpp-clean-local.png)

### Partition your Project into Features

The IDE now allows you to partition your projects into smaller parts called 'Features'. Features can depend on each other and can be enabled/disabled independently. The IDE handles the C++ source and NED package exlusion/inclusion automatically, based on your feature selection. Features can also define macros which will be passed to the compiler, so it is possible to write conditional code that depends on the enablement of certain features. This is especially useful for large projects like the INET Framework. See the User Guide for further details.

![Image](images/42-cpp-features.png)

## INI Editor

### Rearranged INI Editor Pages

The pages in the form based INI editor have been rearranged for better usability.

![Image](images/42-ini-rearranged-editor-tree.png)

## Launcher

### Getting the Command Line

The IDE launcher now prints out the command line to the console before starting your simulation. You can use this information to start your simulation from the command prompt.

![Image](images/42-launcher-commandline.png)

### Profiling with Valgrind

On Linux systems, the IDE now allows you to start and profile your program using 'valgrind'. This allows you to detect memory errors and other programming mistakes. This feature is available only on Linux systems where valgrind is installed.

![Image](images/42-launcher-profiling.png)

## Sequence Chart

### Enhanced Navigation

The context menu now contains additional actions to move to a certain simulation event or simulation time.

![Image](images/42-seq-gotoevent.png)

# What's New in the OMNeT++/OMNEST 4.1 IDE

## NED Editor

### New Eclipse Platform

The IDE is now based on Eclipse 3.5.2 and CDT 6.0.2.

![Image](images/41-version.png)

### Manual Palette Filtering

Palette items in NED editor can be filtered with a substring search.

![Image](images/41-ned-palette-filter.png)

### Adaptive Palette Ordering

Submodule types that are related to the currently used compound module and its submodules are displayed first in the NED editor palette. Submodules that are already used in the compound module are placed at the top. The @labels properties on the gates are also used to decide which other submodules can be connected to the current ones.

![Image](images/41-ned-palette-adaptive.png)

### Connection Chooser Enhancements

When two modules are connected with a connection, the editor tries to guess which gates must be connected, based on @labels gate properties.

![Image](images/41-ned-labels1.png)

### Connection Rendering Enhancements

Multiple and conditional connections can now be visually distinguished in the graphical editor.

![Image](images/41-ned-connection-loop.png)

### New Parameter Editor Dialog

A parameter editor dialog has been added for channel and module parameters. It can be accessed using the context menu of the submodule or connection.

![Image](images/41-ned-parameter-dialog.png)

### Content Assist for Connections

Content assist is now supported for connection parameters (delay, datarate etc.).

![Image](images/41-ned-channel-assist.png)

### Content Assist for Icons

Content assist is available for icons by pressing *Ctrl+Space* inside a display string.

![Image](images/41-ned-icon-assist.png)

### Content Assist for Colors

Content assist is available for colors by pressing *Ctrl+Space* inside a display string.

![Image](images/41-ned-color-assist.png)

### Content Assist for Statistics

Content assist is available for statistics by pressing *Ctrl+Space* inside a @statistic property definition.

![Image](images/41-ned-statistic-assist.png)

### Support for @dynamic Property
Modules can be tagged with the @dynamic property. Dynamic modules are handled exactly the same way as normal modules (i.e. content assist, validation and parameter lookup is working correctly), except that the simulation kernel does not instantiate them automatically during network setup. Dynamic modules are displayed as semi-transparent in the NED editor.

![Image](images/41-ned-dynamic-module.png)

## INI Editor

### Enhanced Content Assist in Ini Files

Content assist is now available for ini parameters and configuration options. For parameter values, content assist also offers the list of NED functions.

![Image](images/41-ini-content-assist.png)

### Channel Parameters in Ini Files

Channel parameters can be set in ini files, too, using the `**.channel.parametername =` syntax.

![Image](images/41-ini-channel-assist.png)

### Statistics Configuration from Ini File

Statistics can be configured in an ini file. Content assist is available for statistics-related options.

![Image](images/41-ini-statistic-assist.png)

## Module Hierarchy view

### Statistics and Signals in Module Hierarchy

In addition to parameters, the Module Hierarchy view now also displays the @statistic and @signal properties of the modules.

![Image](images/41-module-view.png)

## Launcher

### Better Error Checking

The simulation launcher now checks for errors in open projects before starting a simulation, and warns if there are any.

![Image](images/41-errors-in-project.png)

## Sequence Chart

### Attach Vectors to Sequence Charts

Attaching vectors to a Sequence Chart is more intuitive now.

![Image](images/41-seq-vector-attach.png)

### Show Related Vectors Only

After choosing a vector file, the IDE only offers the vectors related to the selected module axis.

![Image](images/41-seq-vector-attach2.png)

### Method Calls on Sequence Charts

Direct method calls can be shown in the sequence chart. Method calls are not displayed automatically, but can be turned on on the toolbar or in the sequence chart context menu.

![Image](images/41-seq-methodcalls.png)

## Result Analysis

### New Tree View in Browse Data

An "All" tab has been added to the Browse Data page, showing all simulation results in a tree. The tree can be configured freely to group the data several in different ways. Use the context menu to configure the levels in the tree view.

![Image](images/41-ana-browse-data.png)

### Redesigned Filter

The filter interface on the Browse Data page has been reorganized to provide more space. Fields are also resizable by dragging the separators.

![Image](images/41-ana-filter.png)

### Properties for Dataset Nodes

Property View for nodes on the Dataset page.

![Image](images/41-ana-properties.png)

### Properties for Data Items

Property View for the data items on the Browse Data page

![Image](images/41-ana-properties2.png)

### Chart Sheet Columns

The number of chart columns can be set for a Chart Sheet.

![Image](images/41-ana-sheet-columncount.png)

### Separate Horizontal and Vertical Zoom

Separate horizontal and vertical zoom actions are available on the toolbar and in the context menu. The context menu has been reorganized for better usability.

![Image](images/41-ana-new-zoom.png)

### Charts on Sheet Fill the Window

Charts in a Chart Sheet fill the window horizontally. The minimum chart width is also configurable.

![Image](images/41-ana-fillwindow.png)

### Chart SVG Export 1

Charts can be exported in SVG format from the Dataset page's context menu.

![Image](images/41-ana-export-chart.png)

### Chart SVG Export 2

Charts can be exported in SVG format from the chart context menu.

![Image](images/41-ana-export-chart-from-sheet.png)

### Editable Chart Line Titles

Line titles on charts are editable now.

![Image](images/41-ana-editable-line-titles.png)

## Wizards

### Add Your Own Wizards to the IDE

New wizards can be contributed by open projects. (In the screenshot, the "New Queueing Model" wizard was contributed by the "queueinglib" sample project.)

![Image](images/41-wiz-queueing.png)

### Custom Wizard Pages

Wizards contributed by projects may contain their own custom wizard pages.

![Image](images/41-wiz-queueing2.png)

### Topology Generation using Wizards

The IDE also contributes several generic topology generator wizards.

![Image](images/41-wiz-topology.png)

### Custom Page for each Topology Generator

Each topology generator has its own wizard page for configuration.

![Image](images/41-wiz-topology-page.png)

### Topology Import

Importing a topology from an external file is also possible.

![Image](images/41-wiz-topology-import.png)

### Wizard Wizards

There are several wizards that help creating other wizards. It is possible to create a wizards based on an already existing simulation directory, or based on an other wizard. Example wizards are also provided to help you quickly create your first wizard...

![Image](images/41-wiz-wiz-menu.png)

### New Wizard from an Existing One

New wizards can be created by either copying and modifying an existing similar one or by generating some example code.

![Image](images/41-wiz-wiz-selection.png)

### New Wizards by Specifying their Widgets

New wizards can be created by including some specific widgets as a starting point...

![Image](images/41-wiz-wiz-controls.png)

### New Wizards by Specifying their Variables

New wizards can be created by textually specifying their input variables and the associated widget types.

![Image](images/41-wiz-wiz-variables.png)

### Wizard Cloning

Existing wizards can be cloned and used as a starting point.

![Image](images/41-wiz-wiz-clone.png)

### Wizard Page Editor

The wizard page (XSWT) editor and preview are available by double-clicking on XSWT files.

![Image](images/41-wiz-xswt.png)

### Wizard Template Editor

Template editor with syntax highlight and content assist support is available to help you author new wizard content templates.

![Image](images/41-wiz-ftl.png)

## Extending the IDE

### Automatic Plugin Activation

The IDE now automatically discovers and activates all Eclipse plug-ins in a project's "plugins" folder. This feature allows you to distribute IDE extensions together with your project, and they will be automatically loaded and activated when your users open the project.

![Image](images/41-plugin-running.png)

