---
layout: post
title: OMNeT++ 3.3 released
joomla_id: 3488
joomla_url: "-sp-1905844365"
date: 2006-10-25 22:11:14.000000000 +02:00
author: Andras
excerpt: We are happy to announce OMNeT++ version 3.3. This release brings GUI
  enhancements in Tkenv, and several bugfixes. Thanks to everyone providing feedback
  and suggestions! [<A href="/download/old">Download</A>]
category: Software
---

We are happy to announce OMNeT++ version 3.3. This release brings GUI enhancements in Tkenv, and several bugfixes. Thanks to everyone providing feedback and suggestions! [<A href="/download/old">Download</A>]

Tkenv:

 - display string enhancement: connections with zero thickness set ("o=,0")
   now do not appear in the network graphics.

 - added object icons to inspector listboxes

 - added Run/Fast/Express buttons to every module inspector window, as well as
   a "Find/inspect messages, queues, etc within this module" button. These
   functions are all available via hotkeys too (F5,F6,F7,Ctrl+S).

 - added "Copy to clipboard" and "Save window contents" toolbar icons to all
   text windows. (Copy has already been available with Ctrl+C.)

 - main window position gets saved and restored

Bugfixes:

 - fix: gamma_d() was bogus for the alpha<1 case [reported by Patrick McDonnell]

 - fix: worked around a fiber-related Visual C++ problem that caused certain
   activity()-based modules crash when the simulation was restarted.

 - fixed a bug which sometimes caused Tkenv to crash when inspecting an
   internally refcounted message.

 - fixed a bug in Tkenv's setObjectListResult() [crash reported by Rodolfo
   Ribeiro Gomes and others]

 - fix: on some Linux systems, Tkenv used unreadably small font size in some
   dialogs

 - opp_msgc improvements: don't accept reserved words as identifiers; added
   OMNeT++ version check into generated code

 - fix: the simulation can now be in a directory whose path name contains spaces
   (e.g. "Program Files"); opp_nmakemake also fixed to accept include paths
   with spaces.

 - many other minor fixes and improvements; see the ChangeLogs of the
   corresponding source directories for more details.



