---
layout: post
title: OMNeT++ 6.0 Preview 9 Available
category: Software
---
We are very happy to announce that [OMNeT++ 6.0 preview 9 has been released](/download/preview) (along with some compatibility updates in INET). Please use INET 3.6.8 or INET 4.2.1 if you are working with preview 9 or later.

A long time, six months have passed since the last prerelease, and, as a consequence, we have accumulated a lot of changes. Arguably the most important change is an update to the OMNeT++ programming model: the introduction of the possibility to update ongoing packet transmissions, that is, the ability to abort, shorten, or extend a packet (usually an L2 frame) while it is being transmitted. Significant amount of work has been put into improving the looks and functionality of Qtenv, and into refining the Python-based Analysis Tool in the IDE. 

{: .captioned_image}
*Qtenv in dark mode with new monochrome toolbar icons, running the wiredphy example that demonstrates the new packet progress API. Note that it is now also possible to set relative time display in the packet traffic log by right clicking on a specific line to set as a reference:* ![](/images/screenshots/qtenv-dark.png){:width="75%" .materialboxed} 

{: .captioned_image}
*The new Python based analysis tool in the IDE:* ![](/images/screenshots/ide-python.png){:width="75%" .materialboxed} 

<!--more-->

Transmission updates in the simulation kernel:

  - A description of the new "transmission updates" functionality follows. We start with an overview, then go into API details and related changes.

  - The initial send() is interpreted as: "packet transmission begins now, packet content and duration are, as things are now, going to be this".

    Following that, an "update" (or any number of updates) can be sent. An update is a packet with the updated ("actual") content, and with a "remaining transmission duration" attached. Updates may only be sent while transmission is still ongoing.

    As an example, aborting a transmission is done by sending a packet with a truncated content and a remaining duration of zero.

    Transmission updates are paired with the original packet they modify using a transmissionId. The transmissionId is normally chosen to be the packet ID of the original transmission. Channels should understand updates and handle them accordingly.

    Receivers that receive the packet at the end of the reception, which is the default operating mode, will only receive the final update. The original packet and intermediate updates are absorbed by the simulation kernel.

    Receivers that receive the packet at the start of the reception (see cGate::setDeliverImmediately(), ex setDeliverOnReceptionStart()) should be prepared to receive all of the original packet and the updates, and handle them appropriately. Tx updates can be recognized from cPacket::isUpdate() returning true. cPacket::getRemainingDuration() returns the remaining transmission duration, and cPacket::getDuration() the total transmission duration.

    As a safeguard against unprepared modules accidentally processing tx updates as normal full-blown packets, the module is only given tx updates if it explicitly declares that it is able to handle them properly. The latter is done by the module calling setTxUpdateSupport(true) e.g. in initialize().

    Non-transmission channels don't handle updates any different from other messages and packets.

    Details and related changes follow.

  - send() and sendDirect() now accept a SendOptions struct where optional parameters such as delay can be passed in. sendDelayed() and other send()/sendDirect() variants now convert their extra args to a SendOptions, and delegate to the "standard" send()/sendDirect() versions. SendOptions was introduced as a means to handle combinatorial explosion of send() variants.

  - cDatarateChannel now allows overriding the duration (which is normally computed from the packet length and the channel datarate) from the send() call.

  - cDatarateChannel: non-packet messages now pass through without interfering with packets.

  - cDatarateChannel: disabled channels now let transmission updates through, so that it is possible for the transmitter module to abort the ongoing packet transmission.

  - Note: tx updates (without duration/remainingDuration) are allowed on paths without transmission channels.

  - Signature change in methods that participate in the send()/sendDirect() protocol: SendOptions was added to the arg list. This affects: cGate::deliver(), cModule::arrived(), cChannel::processMessage()

  - In cChannel::processMessage(), result_t was renamed cChannel::Result, and it is now a proper return value (not an output parameter)

  - remainingDuration was added to cChannel::Result.

  - cDatarateChannel's datarate is now optional: set it to 0 or nan to leave it unspecified. This change was necessary to support transmitting frames with per-frame data rate selection.

  - cDatarateChannel now optionally allows multiple concurrent transmissions, with or without any bookkeeping and associated checks. This is useful for modeling a channel with contention-based access and collisions, such as classic Ethernet. The operating mode has to be selected programmatically, with the channel's setMode() method. Possible modes are SINGLE, MULTI and UNCHECKED.

  - The forceTransmissionFinishTime() method of channels has been deprecated. It was always meant as a temporary device to allow implementing aborting frame transmissions, and now with the arrival of the new transmission update API there is no reason to use it any more. Simulations using it should be migrated to the new API.

  - Rename: setDeliverOnReceptionStart() -> setDeliverImmediately()

  - Added cSimpleModule::supportsTxUpdates() flag

  - cPacket now carries a remainingDuration field

  - cPacket: eliminated FL_ISRECEPTIONSTART; isReceptionStart() now uses remainingDuration as input; added a similar isReceptionEnd() method.

  - cPacket::str() overhaul to reflect new fields and uses

  - In the APIs, sendDelay and propagationDelay (which were sort of combined into a single value) are now distinct, and handled separately.

  - Eventlog format changes: BeginSendEntry: added sendDelay and transmissionId; SendHopEntry, SendDirectEntry: added remainingDuration

Simulation kernel, other changes:

  - cSimpleModule: added scheduleAfter(), rescheduleAt(), rescheduleAfter() methods. This is mainly for convenience, but using rescheduleAt() instead of a cancelEvent() followed by a scheduleAt() will eventually allow for a more efficient implementation.

  - getModuleByPath() adjustment: It will now never return nullptr, even for the empty string given as path. Instead it will throw an exception if the module was not found. This change makes this method consistent with other getter methods in the simulation library, and allows nullptr checks to be removed from model code that uses it.

  - cComponent: added preDelete(). This a virtual method that the user can override to add tasks to be done before the module (or channel) is deleted. When deleteModule() is called on a compound module, it first invokes preDelete() recursively on the submodule tree, and only starts deleting modules after that. preDelete() can help simplify network or module deletion in a complex simulation that involves model change listeners.

  - Added opp_component_ptr<T>. It implements a smart pointer that points to a cComponent (i.e. a module or channel), and automatically becomes nullptr when the referenced object is deleted. It is a non-owning ("weak") pointer, i.e. the pointer going out of scope has no effect on the referenced object. opp_component_ptr<T> can be useful in implementing modules that hold pointers to other modules and want to be prepared for those modules getting deleted. It can also be useful for simplifying safe destruction of compound modules containing such modules.

  - A new method, findModuleByPath() was added for cases when an optionally existing module needs to be found.

  - cIListener's destructor now unsubscribes from all places it was subscribed to. This change was necessitated by the following deleteModule() change.

  - deleteModule(): Module destruction sequence was changed so that when deleting a compound module, the compound module's local listeners are notified about the deletion of the submodules.

  - deleteModule() internals refactored. The motivation was to avoid doing things like firing pre-model-change notifications from a halfway-deleted module. Now we do every potentially risky thing (such as deleting submodules and disconnecting gates) from doDeleteModule(), and only delete the module object when it is already barebones (no submodules, gates, listeners, etc). With this change, the deletion sequence is now pretty much the reverse of the setup sequence.

  - Now it is allowed for modules to be deleted (including self-deletion) and created at will during initialization.
  - cMessage: allow isMessage() to be called from subclasses.
  - Added the autoWarmupFilter statistic attribute that allows one to disable auto-adding the warmup filter to a statistic. Example:

      `@statistic[foo](record=vector;autoWarmupFilter=false);`

    This will cause all values from the foo signal to be recorded, even values emitted during the warm-up period (if one is set).

    However, the real motivation behind this feature is to allow the user to add the warm-up filter at a non-default location in the filter chain. By default, the warm-up filter is added at the start of the filter chain (right before the first filter), but this is not always what is needed.

    For example, "@statistic[foo](source=min;record=vector)" is equivalent to "@statistic[foo](source=min(warmup(foo));autoWarmupFilter=false;record=vector)", and records (as vector) the minimum of the values which were emitted after the warmup period is over. In contrast, if we replace "min(warmup(foo))" with "warmup(min(foo))", it will compute the minimum of ALL values, but only starts recording the result after the warmup period has expired.

    This is a crucial difference sometimes. For example, a statistic might record queue length computed as the difference of the number of messages that entered the queue and those that left it:

      `@statistic[queueLen](source=count(pkIn)-count(pkOut);record=vector); //INCORRECT`

    In this case, if a warmup period is set, the result may even go negative because the pkIn and pkOut signals that arrive during the warmup period are ignored, and if pkOut arrives after that, we are at -1. The correct solution is to add the warmup filter after the difference between arrivals and departures have been computed:

      `@statistic[queueLen](source=warmup(count(pkIn)-count(pkOut));autoWarmupFilter=false;record=vector); //OK`

    The autoWarmupFilter option exists because either location for the warmup filter (beginning or end of the chain, or even mid-chain) may make sense for certain statistics. The model author needs to decide per-statistic which one is correct.

  - Added DemuxFilter, which allows splitting the stream of values arriving from a signal to multiple streams. For example, if values from the foo signal are tagged with the labels "first", "second" and "third", then the following statistics:

      `@statistic[foo](record=count(demux(foo)));`

    will produce three scalars: "foo:count(demux):first", "foo:count(demux):second", and "foo:count(demux):third".

    The labels are taken from the (full) name of the details object specified in the emit() call. This filter is especially useful if you intend to save multiple instances of the same statistics from the same module (e.g. per-connection TCP statistics).
  - Added the "parsim-num-partitions" config option, which makes it possible to explicitly declare the number of partitions to be used with parallel simulation. (Before, it was explicitly taken by OMNeT++ from MPI or the respective communication layer.)

Samples:

  - Added the "wiredphy" sample simulation to demonstrate transmission updates.

General:

  - Updated Eclipse to version 4.17 and CDT to version 10.0.
  - Updated toolchains and binary dependencies on Windows and macOS.
  - On Windows, binary dependencies used by simulations, such as Qt, OSG, osgEarth, etc., are now separated from the rest of the toolchain binaries (compiler, etc.). You can find them in the "tools/win64/opt" directory. This is useful when creating a standalone binary distribution of a simulation.
  - On Windows, the build system now generates a proper import library when creating a shared library (with the name "targetname.dll.a"). External projects must link against that library instead of linking directly with the "targetname.dll" file. (Note that the linker automatically uses the ".dll.a" files if they are present in the library path and falls back to use the pure ".dll" file only if the import library is not present. It means that you don't have to do anything extra to use these files apart from making them available along your ".dll" files.)
  - The Windows toolchain now contains the (much faster) LLD linker. However, it is disabled by default because of certain issues with generating incorrect import libraries. You can enable it by adding the "-fuse-ld=lld" option to the "LDFLAGS" variable in "Makefile.inc", or invoking make as "make LDFLAGS_EXTRA=-fuse-ld=lld". On Linux, the LLD linker is used by default if it is detected during the configuration process.
  - For Qtenv, raised the minimum required Qt version to 5.6.
  - Install Guide: Added instructions to install OMNeT++ on WSL (Windows Subsystem for Linux) on Windows 10. We found that running OMNeT++ on WSL is considerably faster than using it with the native Windows toolchain!
  - Better debugging experience by fine tuning the compiler options
    (especially with the clang compiler).
  - You can force Qtenv to use Visual Studio Code as your external debugger by setting the following environment variable:

      `export OMNETPP_DEBUGGER_COMMAND="code --open-url \"vscode://vadimcn.vscode-lldb/launch/config?{request:'attach', pid:'%u'}\""`

    Alternatively, you can specify the same value ("code --open-url ...") to the "debugger-attach-command" configuration option in omnetpp.ini.

  - Added LLDB pretty printers for various OMNeT++ types. They can be useful if you use LLDB-based external debuggers like XCode or VS Code. You should manually import them from the LLDB debugger console with the

      `command script import <OMNETPP_ROOT>/python/omnetpp/lldb/formatters/omnetpp.py`

    LLDB command.

Envir:

  - Made the -q option more permissive: if -c is missing, assume "General"
  - Added the -e option (print value of the given configuration option)

Qtenv:

  - Modernized look: Material-style SVG-based icons, HIDPI support, dark theme support.
  - New actions on the main toolbar: "Debug next event", "Debug on errors", "Show animation parameters". ("Load NED file" was removed from the toolbar as it was rarely needed, but it's still available from the menu.)
  - In the message/packet traffic view of the log inspector ("messages view"), simulation time is now formatted with digit grouping on.
  - The "Set Sending Time as Reference" option was added to the messages view context menu. This option makes it possible to set a reference time, and display all other times as a delta compared to it.
  - The "Allow Backward Arrows for Hops" option was added to the messages view context menu. This option turns on the use of backward arrows to ensure a consistent relative ordering of modules in the log. For example, if two modules A and B exchange messages, this option will cause the window to display them as "A-->B" and "A<--B", as opposed to the default "A-->B" and "B-->A". This sometimes makes the log easier to follow.
  - The view mode (grouped/flat/inheritance/children) in the object inspector used to be tied to the type (class) of the object displayed in the inspector. Since that resulted in too much mode switching while the user navigated the object tree, and the switching logic was not easily discoverable by the user, we removed the feature of per-type remembering of view modes. The view mode now only changes when the user explicitly switches in on the UI.
  - A lot of effort was made to refine packet animation, also with regard to the new "transmission updates" API. For example, the animation filter now affects deliveries as well, and transmissions on ideal channels are now shown as a full-length line. Transmission updates are drawn as "notches" on the message line.
  - Add error reporting to .qtenvrc accesses.
  - Countless small improvements and bug fixes.

Analysis Tool:

  - Chart improvements, such as adding error bars to the Matplotlib-based bar chart, and adding confidence interval drawing to the Matplotlib-based scatter chart.
  - UI refinements, such as rearranging the menu items on the Browse Data page.
  - Improved how selection works in the table widget (Browse Data page).
  - Content assist improvements, mainly for the "Input" pages of chart dialogs.
  - Performance improvements, such as enabling vector data caching when pickling results, and memoizing the results of query methods.
  - Countless small improvements and bug fixes.


[Download it here](/download/preview).
