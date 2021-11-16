---
layout: post
title: OMNeT++ 6.0 Preview 14 Available
category: Software
---
Please welcome the [OMNeT++ 6.0 preview 14 release](/download/preview). Along withe this OMNeT++ preview we are releasing INET 3.8.1, 4.2.8 and 4.3.5. These INET versions are meant to be compatible with OMNeT++ 5.7 and 6.0. Do NOT use earlier versions of INET with these latest versions on OMNeT++.
This prerelease, just about a month after the previous one, comes with two
important improvements in NED, follow-up changes in the simulation library,
and several improvements in Qtenv and the Analysis Tool in the IDE.

<!--more-->

NED:

  - In a complex model framework, there is usually a large number of (module or channel) parameters, and so far it has not been obvious for users which parameters can be meaningfully changed at runtime. For example, if a simple module did not implement `handleParameterChange()` or the method did not cover a particular nonvolatile parameter, then the user could technically change that NED parameter at runtime, but the change did not take effect. This has often caused confusion.

    To remedy the situation, we introduced the `@mutable` property for parameters. If a particular parameter supports changing its value at runtime (i.e. the new value takes effect), then it should be marked with `@mutable`. If `@mutable` is missing, then trying to change the parameter will result in a runtime error ("Cannot change non-mutable parameter".)

    Parameters of `ned.DelayChannel` and `ned.DatarateChannel` are now marked `@mutable`.

    To allow running existing simulation models that have not yet been updated with `@mutable` annotations, we have added the parameter-mutability-check configuration option. Setting `parameter-mutability-check=false` will give back the old behavior.

  - Added the `expr()` operator to NED, with the purpose of allowing models to accept formulas or expressions which it could use e.g. to determine the processing time of a packet based on packet length or other properties, decide whether a packet should be allowed to pass or should be filtered out based on its contents (filter condition), or to derive x and y coordinates of a mobile node in the function of time.

    The argument to `expr()` is a NED expression which will typically contain free variables, (like `x` and `y` in `expr(x+y)`). The `expr()` operator creates an object that encapsulates the expression, so it can be assigned to parameters of the type "object". On the C++ side, the module implementation should query the parameter to get at the expression object (of type `cOwnedDynamicExpression`), and then it may bind the free variables and evaluate the expression as often as it wishes.

  - Object parameters now allow simple values (int, double, bool, string) as well. C++-wise, they are stored in the parameter in `cValueHolder`-wrapped `cValue` objects.

MSG:

  - The `@readonly` property was added.

Core:

  - `cPar`: Implemented `isMutable()` and the mechanism behind the new `@mutable` property.

  - Added the `cOwnedDynamicExpression` class which holds the result of NED `expr()` operators. `cOwnedDynamicExpression` is both `cOwnedObject` and `cDynamicExpression` (multiple inheritance). To make this possible, the `cObject` base class was removed from `cExpression`.

  - Added `cValueHolder` class. It instantiated as wrapper object around `cValue` when a non-object value (double, string, etc) is assigned to a NED parameter of the type "object".

  - Introduced `cValueContainer` as common base class for `cValueHolder`, `cValueArray` and `cValueMap`.

  - `cValueMap`/`cValueArray`: revert `dup()` to behave the same way `cArray`/`cQueue` does, i.e. only those objects that are owned by the cloned container are duplicated. This normally doesn't make much difference, but some NED expressions that relied on the old behavior now need to be adjusted. For example:

        object foo = {};
        object bar = dup([foo,foo]);  // --> error (contents of foo is not
                                      // cloned by cloning the array)
        object baz = [dup(foo), dup(foo)]  // OK

  - `getModuleByPath()` / `findModuleByPath()` moved to `cComponent`, so that they can be called on `cChannels` too.

  - Internal classes, global variables, etc moved into the `omnetpp::internal` namespace.

Qtenv:

  - Log / Messages view: Slight change in the notation used for the source and destination modules of the message, in order to make it unambiguous. Use explicit `"."` and `"^"` to indicate the location of the module. Also, it now uses arrows of uniform lengths everywhere.

  - Added the "Fira Code" font as embedded resource, and set it to be used by default for the log window. The reason is that it provides nice --> arrow ligatures in the Messages view.

  - Fixed a bug where all further `EV_*` logging output was discarded after any module printed something into the log in its constructor.

Analysis Tool:

  - On the Browse Data page, mask values that don't fit into their columns using '####'. This is akin to what MS Excel does.

  - Improved the appearance of Matplotlib-emulated native charts (which are used if a native chart is exported from the IDE or `opp_charttool`): added digit grouping to tick labels, made its appearance more consistent with the actual native plot regarding axis limits, number format for ticks, etc.

  - In the Python API, restored the `omnetpp.scave.plot` module (which was renamed `ideplot` in the last prerelease), in order not to break existing ANF files. Importing it will delegate to ideplot after issuing a "this is deprecated" warning.

  - Numerous bugs were fixed, including a complete IDE crash in rare cases.

[Download it here](/download/preview).
