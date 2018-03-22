---
layout: page
title: How to ask for help on the mailing list
---
**Before sending off your post:**

* **Make sure the solution is not already on the web.** This is your own interest, because if it\\'s already there you don't have to wait for the reply. Where to look: README, INSTALL and other doc in the package in queston; the manual; the Installation issues page on the web; mailing list archives, etc.
* **Be specific**. Nobody will be able to help if you just write _"it doesn't work"_.

**If ./configure fails or can't find installed component**

Before writing to the mailing list, try to experiment with settings in configure.user.

If you decide to post, please include:

* your OS and OMNeT++ version ("uname -a" output is also useful)
* your configure.user file
* ./configure\\'s output (try "./configure > out.txt", or copy/paste from the console)
* config.log (created by ./configure)
* value of your env vars: PATH, LD_LIBRARY_PATH, TCL_LIBRARY etc.

If OMNeT++ did not recognize your setup but you think it should have, please post your OS, configure.user settings you needed etc on the mailing list, so that the configure script can be improved.

**If source won't compile**

Please provide the detailed error messages, possibly a few lines in the source where they point

**Other problems**

Please try to be specific about the problem. Try to include

* the operating system, compiler, OMNeT++ and model framework version
* the exact error message if you receive one
* stack trace (bt command in gdb) if you have a crash
* whatever other info you think may be useful for others to figure out what\\'s wrong