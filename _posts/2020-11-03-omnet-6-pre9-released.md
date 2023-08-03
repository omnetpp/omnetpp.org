---
layout: post
title: OMNeT++ 6.0 Preview 9 Available
category: Software
details-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.0pre9
---
We are very happy to announce that OMNeT++ 6.0 preview 9 has been released
(along with some compatibility updates in INET). Please use INET 3.6.8 or INET
4.2.1 if you are working with preview 9 or later.

A long time, six months have passed since the last prerelease, and, as a
consequence, we have accumulated a lot of changes. Arguably the most important
change is an update to the OMNeT++ programming model: the introduction of the
possibility to update ongoing packet transmissions, that is, the ability to
abort, shorten, or extend a packet (usually an L2 frame) while it is being
transmitted. Significant amount of work has been put into improving the looks
and functionality of Qtenv, and into refining the Python-based Analysis Tool in
the IDE.


{: .captioned_image}
*Qtenv in dark mode with new monochrome toolbar icons, running the wiredphy example that demonstrates the new packet progress API. Note that it is now also possible to set relative time display in the packet traffic log by right clicking on a specific line to set as a reference:* ![](/images/screenshots/qtenv-dark.png){:width="75%" .materialboxed}

{: .captioned_image}
*The new Python based analysis tool in the IDE:* ![](/images/screenshots/ide-python.png){:width="75%" .materialboxed}
