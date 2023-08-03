---
layout: post
title: Mobility Framework 1.0 alpha 3
joomla_id: 3535
joomla_url: "-sp-1975020187"
date: 2004-10-19 23:26:00.000000000 +02:00
author: Andras
excerpt: <P>Mobility-fw1.0a3 just have been uploaded. This is a new alpha release
  with some major changes and&nbsp;some bug fixes:<BR>&nbsp; - fixed windows make
  system<BR>&nbsp; - changed debugging system<BR>&nbsp; - added support for multiple
  types of hosts within one network<BR>For more details, please refer to the ChangeLog.
  This release <STRONG>requires omnetpp3.0a8</STRONG> or higher. [<A href="http://sourceforge.net/project/showfiles.php?group_id=109505">Download</A>]</P>
category: Software
---
<P>Mobility-fw1.0a3 just have been uploaded. This is a new alpha release with some major changes and&nbsp;some bug fixes:<BR>&nbsp; - fixed windows make system<BR>&nbsp; - changed debugging system<BR>&nbsp; - added support for multiple types of hosts within one network<BR>For more details, please refer to the ChangeLog. This release <STRONG>requires omnetpp3.0a8</STRONG> or higher. [<A href="http://sourceforge.net/project/showfiles.php?group_id=109505">Download</A>]</P><BR>Please do not make ANY changes to the basic modules in the core folder. If you need different / extended behavior, please derive your own module from the basic module you intend to reimplement. Even if it is only one line of code! <BR><BR>The reason is that the core MF provides some kind of an interface and makes your code easy to share with other people. If we don't follow this policy, the MF will soon become something similar to ns/2, which is not really maintainable anymore. And I guess we all want to avoid that. <BR><BR>ChangeLog:<BR>- fixed the windows make system; should do what it is supposed to do now ;-)<BR>- updated README to reflect the changes<BR>- added sendDelayedDown and sendDelayedUp (suggested by Horacio Sanson)<BR>- changed debuging / logging sytem<BR>- no need to recompile anymore :-)<BR>- use EV
