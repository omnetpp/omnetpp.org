---
layout: post
title: OMNeT++ 6.0 Preview 10 Available
category: Software
---
We are very happy to announce that [OMNeT++ 6.0 preview 10 has been released](/download/preview) (along with some compatibility updates in INET). Please use INET 3.6.9 or INET 4.2.2 if you are working with preview 10 or later.

This prerelease contains many small changes and improvements. Additionally, due to improvements in the toolchain and the build process, Windows users may see the linking time of large models like INET Framework to drop dramatically (1-2 orders magnitude, e.g. from several minutes to several seconds).

<!--more-->

The summary of changes since 6.0pre9:

Core:
- Refactoring: Some classes, methods and variables related to ownership management were renamed: cDefaultOwner -> cSoftOwner; defaultOwner -> owningContext, etc.
- Slight change to the operation of preDelete() introduced in the previous prerelease: it is now called via callPreDelete() which does the recursion part, so preDelete() itself doesn't recurse any more. Also, we switch the context to the module for the duration of the preDelete() call.
- Two utility functions were added to cObject: getClassAndFullPath() and getClassAndFullName(). They are mostly useful in logging and error messages.
- Canvas API: Added text alignment support to text and label figures: cFigure::Alignment enum, getAlignment()/setAlignment() in cAbstractTextFigure.
- Canvas API: cFigure::RGBA: added toAlpha() method, and a constructor taking Color.
- Fingerprints: Due a bugfix in cHasher::add(const char *), fingerprints that involve hashing strings changed their values.
- Fingerprints: Changed the way fingerprints are computed from figures. Most importantly, fingerprints are now affected by all visual properties, not just geometry information. This change only affects fingerprints that contain the 'f' (=figures) ingredient.
- Changed the configuration options that control the operation of the "Fake GUI" Cmdenv feature, which is useful for computing fingerprints from simulations with custom animation. See config options starting with "cmdenv-fakegui-".
- Removed the support for OMNeT++ 4.x fingerprints (USE_OMNETPP4x_FINGERPRINTS).
- Changed the NED package exclusion mechanism that was introduced in an earlier 6.0 prerelease. Exclusions are now specified in terms of package names instead of folders. To this end, the "-x" command-line option changed meaning (takes package list instead of folder list), and also, the ned-exclusion-path config option was renamed to ned-package-exclusions, and the OMNETPP_NED_EXCLUSION_PATH environment variable to OMNETPP_NED_PACKAGE_EXCLUSIONS.
- Source code modernization: use in-class member initializers wherever possible.

Qtenv:
- Turn off animating method calls by default. The rationale is that method call animations usually expose low-level (C++ implementation level) details on the GUI, which is rarely of interest to a casual user.
- Added the possibility to disable method calls locally (per module type) via the context menu, even when the global switch in the Preferences dialog is turned on.
- Changed the factory default of "Allow backward arrows for hops" to false.
- Fix osgEarth viewpoints ignoring SRS (PR #851).

IDE:
- Analysis Tool: Numerous bug fixes
- Launcher: Pass NED exclusions to the simulation program as -x options. NED exclusions typically come from disabled project features, e.g. in INET.

Build:
- Allow using the LLD linker by default (if present on the system). LLD is potentially much faster than the standard GNU linker. For example, the use of LLD, together with other changes that were part done in INET, reduced INET linking time on Windows from 380s (!) to 2s (!!!) in DEBUG mode, and from 90s to 5s in RELEASE mode on one of our dev boxes.
- When building DLL files (shared libraries) on Windows, the build process now generates <name>.def and <name>.dll.a files in addition to the resulting <name>.dll file. The <name>.ddl.a file is a static import library that can be used by other dependent projects to link with the model in the shared library. The <name>.def file can be used to check what methods were actually exported from the model.

Misc:
- Install Guide updated.

[Download it here](/download/preview).
