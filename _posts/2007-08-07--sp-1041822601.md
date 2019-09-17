---
layout: post
title: DYMO model for INET updated
joomla_id: 3472
joomla_url: "-sp-1041822601"
date: 2007-08-07 05:31:32.000000000 +02:00
author: Andras
excerpt: "<FONT size=2>\r<P>Christoph Sommer has recently released a new version of
  the DYMO (Dynamic MANET On Demand) routing protocol for the INET Framework. The
  model can be downloaded (along with </FONT>several INET patches) from&nbsp;<A href=\"http://www7.informatik.uni-erlangen.de/~sommer/omnet/\">http://www7.informatik.uni-erlangen.de/~sommer/omnet/</A>.</P>"
category: Software
---
<FONT size=2>
<P>Christoph Sommer has recently released a new version of the DYMO (Dynamic MANET On Demand) routing protocol for the INET Framework. The model can be downloaded (along with </FONT>several INET patches) from&nbsp;<A href="http://www7.informatik.uni-erlangen.de/~sommer/omnet/">http://www7.informatik.uni-erlangen.de/~sommer/omnet/</A>.</P><P>The most important changes are:</P>
<UL>
<LI>Updated to draft-ietf-manet-dymo-10 (the last version was based on draft-ietf-manet-dymo-06)
<LI>Changed routing message dissemination to use multicast groups instead of broadcasts
<LI>Adapted RM and RERR messages to PacketBB-like message structure
<LI>Integrated DYMO Routing Table into DYMO module, reducing clutter in the NED file a bit.
<LI>Added NED parameter to selectively assign network interfaces to DYMO instead of always assigning all.
<LI>Added NED parameter that allows specifying the DYMO subnet for IP auto-configuration.
<LI>Implemented RREQ expanding ring search
<LI>Implemented Token-Bucket-like RREQ rate limitation
<LI>Implemented packet buffer size limitations</LI></UL>
<P>Christoph also wrote: "Please note that, compared to the draft06-based implementation of DYMO, considerably less testing went into the draft10-based implementation. It does perform a lot better than the older version, though. If you try out the new version, don't hesitate to contact me about any issue you come across."</P>
