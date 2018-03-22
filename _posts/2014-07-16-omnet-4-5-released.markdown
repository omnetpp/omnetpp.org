---
layout: post
title: OMNeT++ 4.5 released
joomla_id: 3722
joomla_url: omnet-4-5-released
date: 2014-07-16 12:18:45.000000000 +02:00
author: Super User
excerpt: <p>We are happy to announce that OMNeT++ 4.5 is now available for download.
  The focus of version 4.5 was to improve the usability of the Graphical Runtime Environment
  (Tkenv). The Tkenv GUI has been redesigned for single-window mode to improve usability
  and user experience. A new message logging mode was added in the log window that
  shows the message exchanges in the selected module only. Tkenv has also received
  a new, modern look and feel, due to the use of the Ttk widgets and a custom Ttk
  theme. Read the ChangeLog (after the More link) for details, or <a href="omnetpp">go
  directly to the download page</a>.</p>
category: Software
---
<p>We are happy to announce that OMNeT++ 4.5 is now available for download. The focus of version 4.5 was to improve the usability of the Graphical Runtime Environment (Tkenv). The Tkenv GUI has been redesigned for single-window mode to improve usability and user experience. A new message logging mode was added in the log window that shows the message exchanges in the selected module only. Tkenv has also received a new, modern look and feel, due to the use of the Ttk widgets and a custom Ttk theme. Read the ChangeLog (after the More link) for details, or <a href="omnetpp">go directly to the download page</a>.</p>

<div>
<div>
<ul>
<li>
<p>single-window mode, with object navigator + 3 built-in inspectors that interact in a meaningful way (new inspector windows can still be opened)</p>
</li>
<li>
<p>keep inpector windows on top of the main window at all times</p>
</li>
<li>
<p>use Ttk widgets everywhere, with custom theme - this makes a huge difference in looks on all platforms but esp. on OS X</p>
</li>
<li>
<p>BLT no longer needed (we use Ttk instead)</p>
</li>
<li>
<p>inspectors are no longer tied to a single object; visited objects are remembered as navigable history (back/forward)</p>
</li>
<li>
<p>module graphics now remembers zoom level and settings per NED type</p>
</li>
<li>
<p>for each log line, the context module is now stored, and is shown as a line prefix where it makes sense (differs from event’s module)</p>
</li>
<li>
<p>Tkenv now stores message sendings and also a clone of corresponding message objects (cMessage), and can show them in the log window</p>
</li>
<li>
<p>message printer classes can be contributed to customize the messages view of log windows</p>
</li>
<li>
<p>more concise status area that shows more information at the same time</p>
</li>
<li>
<p>part of the status area can be turned off to free up vertical space</p>
</li>
<li>
<p>timeline drawing now adapts to font size</p>
</li>
<li>
<p>on-demand scrollbars (i.e. they are hidden when not needed)</p>
</li>
<li>
<p>main menu cleanup (reorganized, removed obsolete items)</p>
</li>
<li>
<p>dialogs where it makes sense now remember size and location</p>
</li>
<li>
<p>additional hotkeys: Ctrl+Plus/Minus for Zoom, Ctrl+F5 Run Until, Ctrl+Q Quit, etc.</p>
</li>
<li>
<p>OS X: use Command key for hotkeys instead of Ctrl</p>
</li>
<li>
<p>countless other, smaller improvements</p>
</li>
</ul>
<ul>
<li>
<p>In the Windows bundle, the debugger have been upgraded to gdb-7.7; Tcl/Tk has been upgraded to version 8.6.0.</p>
</li>
<li>
<p>New configure.user option to prefer clang over gcc if both are installed</p>
</li>
<li>
<p>New configure.user option to enable/disable C++ 11 compilance (-std=c++11) Note that this is NOT supported on Windows because of issues with the bundled MinGW 4.7 compiler.</p>
</li>
<li>
<p>Tcl/Tk version 8.5 is required, 8.6 is preferred; BLT is no longer in use</p>
</li>
</ul>
</div>
<div>
<p>Bugs fixed: <a href="http://tinyurl.com/omnetpp441-fixes">http://tinyurl.com/omnetpp441-fixes</a></p>
</div>
</div>
