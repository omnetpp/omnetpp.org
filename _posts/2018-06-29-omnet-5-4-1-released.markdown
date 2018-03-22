---
layout: post
title: OMNeT++ 5.4.1 Released
category: Software
---
We are happy to announce the release of OMNeT++ 5.4.1. This release contains 
last-minute features and improvements, mostly motivated by the upcoming INET 4 
release. Highlights are the typename and exists() operators in NED; nan and inf 
keywords in NED; support for logarithmic units like dB, dBW, dBm, dBV, dBmV. 
Qtenv has also gained much more powerful just-in-time debugging capabilities 
than before.

<!--more-->

Details follow:

NED:

- Allow 'typename' in expressions. Motivation: we want to be able to write:
  foo: <> like IFoo if typename!=""
- Added the "exists" operator. Syntax: exists(\<submodulename>)
- Introduced "nan" and "inf" as keywords for numeric constants

Core:

- SimTime now has a new method named ustr() that prints the time in an
  appropriate unit. It is now used in cClassDescriptor for displaying
  simtime_t fields and at a few other places.
- SimTime: more precise computation for integer-SimTime division.
- Measurement units are now available as NED functions as well. They
  accept dimensionless numbers and quantities with a compatible unit.
  E.g. the expressions mW(2*100) and mW(0.2W) both result in 200mW.
- New measurement units: K, Ohm, mOhm, kOhm, MOhm, uW, nW, pW, fW,
  THz, kmps, binary and decimal multiples of bit (Kib, Mib, Gib,
  Tib, kb, Mb); deg, rad; pct (percent), ratio.
- Support for logarithmic units: dBW, dBm, dBV, dBmV, dBA, dBmA, dB.
  Conversion between logarithmic and corresponding linear units (W vs. dBW)
  is supported. Conversion between bit and byte (and multiples) is
  also supported.
- cPacket: refined str() method
- Several smaller improvements.

Qtenv:

- Debug-on-error functionality can now be turned on interactively, via the
  Simulate -> Debug on Errors menu item.
- When an error occurs and debug-on-error is enabled, Qtenv now offers to
  launch and attach an external debugger unless the simulation program is
  already being debugged. The same applies to the Debug Next Event
  functionality. External debuggers can be configured with the
  debugger-attach-command configuration key, and can also be overridden
  with the OMNETPP_DEBUGGER_COMMAND environment variable.
- Workaround for a crash with Qt 5.11.

IDE:

- Launcher: fix: The IDE sometimes started build in the UI thread,
  locking up the UI for the time of the build, potentially for several
  minutes.
- Fixed "unknown" image as module background in the graphical NED editor.
- Fix: do not report "undefined parameter" for typename assignments in NED
- Fix: inifile analysis: typename deep assignments in NED were ignored
