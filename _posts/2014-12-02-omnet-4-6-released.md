---
layout: post
title: OMNeT++ 4.6 released
joomla_id: 3724
joomla_url: omnet-4-6-released
date: 2014-12-02 14:18:03.000000000 +01:00
author: Andras
excerpt: <p>We are happy to announce the latest version of OMNeT++. Highlights of
  this release: simulation models are now compiled as C++11 sources; we have upgraded
  the Windows toolchain to MSYS2 and the latest MinGW (this will resolve long-standing
  issues with the INET build process on Windows); the debut of the opp_test program;
  and the rewrite of opp_msgc as part of nedtool. There were also numerous bug fixes. Read
  the ChangeLog (after the More link) for details, or <a href="omnetpp">go directly
  to the download page</a>.</p>
category: Software
---
<p>We are happy to announce the latest version of OMNeT++. Highlights of this release: simulation models are now compiled as C++11 sources; we have upgraded the Windows toolchain to MSYS2 and the latest MinGW (this will resolve long-standing issues with the INET build process on Windows); the debut of the opp_test program; and the rewrite of opp_msgc as part of nedtool. There were also numerous bug fixes. Read the ChangeLog (after the More link) for details, or <a href="omnetpp">go directly to the download page</a>.</p>

<p><br />IMPORTANT:</p>
<div>
<ul>
<li>
<p>To install OMNeT++ on OS X, you must install both the Apple Java support package (http://support.apple.com/kb/DL1572) and (Oracle) JDK 1.7 or later (from http://java.com).</p>
</li>
</ul>
<p>Tkenv:</p>
<ul>
<li>
<p>Improved zooming/panning support: use double click to zoom in around a point, and Shift + double click to zoom out; use Ctrl + left mouse button to drag out a rectangle to zoom to (a.k.a. marquee zoom; implementation based on patch from Christoph Sommer), right-click cancels marquee zoom; use left mouse button for panning</p>
</li>
<li>
<p>Further small UI fixes (see ChangeLog)</p>
</li>
</ul>
<p>Core:</p>
<ul>
<li>
<p>The testing tool opp_test has been revised and is now an official part of OMNeT++.</p>
</li>
<li>
<p>The Manual now has a new chapter that covers the testing of simulation models as well as the usage of the opp_test tool.</p>
</li>
<li>
<p>The message compiler opp_msgc was reimplemented as a part of nedtool. opp_msgc still exists as a wrapper script that points to nedtool.</p>
</li>
</ul>
<p>IDE:</p>
<ul>
<li>
<p>The IDE is now based on Eclipse 4.4 Luna, and requires JDK 1.7 or later.</p>
</li>
<li>
<p>The IDE is now a 64-bit application on Mac OS X.</p>
</li>
</ul>
<p>Other:</p>
<ul>
<li>
<p>OMNeT++ is now using C++11 by default (-std=c++11) when models are compiled. The simulator itself does not use any of the C++11 features, so C++11 support may be disabled in configure.user. Update your models to compile properly using the C++11 standard, as later OMNeT++ versions will require C++11 compliance.</p>
</li>
<li>
<p>OMNeT++ can be configured to use the 'omnetpp' namespace by setting USE_NAMESPACE=yes in configure.user</p>
</li>
<li>
<p>Clang compiler support: Clang is used by default on OS X, and can be turned on on Linux. Clang is still not supported on Windows (we are waiting for the MSYS Clang packages to mature).</p>
</li>
<li>
<p>The bundled MSYS/MinGW toolchain was updated to use MSYS2. MSYS2 resolves a number of issues:</p>
<ul>
<li>
<p>No more memory errors during build</p>
</li>
<li>
<p>The make command now properly supports parallel build (-j4, -j8 etc.)</p>
</li>
<li>
<p>The bundled MSYS2 toolchain now contains the pacman package manager, so you can install additional packages if you wish</p>
</li>
<li>
<p>Change in OMNeT++: The msys/ directory has been moved to tools/win32/ while the mingw/ directory that contains the compiler has been moved to tools/win32/mingw32/.</p>
</li>
</ul>
</li>
</ul>
<p>Bugs fixed: <a href="http://tinyurl.com/omnetpp46-fixes">http://tinyurl.com/omnetpp46-fixes</a></p>
</div>
