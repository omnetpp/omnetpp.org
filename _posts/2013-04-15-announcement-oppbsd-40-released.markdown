---
layout: post
title: OppBSD 4.0 released
joomla_id: 3705
joomla_url: announcement-oppbsd-40-released
date: 2013-04-15 13:48:22.000000000 +02:00
author: Administrator
excerpt: "<p>OppBSD integrates essential parts of the real FreeBSD\r\nnetworking stack
  into<span style=\"mso-spacerun:yes\" mce_style=\"mso-spacerun:yes\"> </span>OMNeT++
  as a\r\nsimulation model. Every simulated host (or router) runs its own copy of
  the\r\nFreeBSD kernel's networking stack. Consequently, the simulation model is
  very\r\naccurate, i.e., almost behaving like a real implementation. Release 4.0
  works\r\nwith OMNeT++ v4.3 (alternatively v4.1, v4.2) and provides IPv6 support.\r\nPresently,
  the package covers the full TCP/IP stack including IPv4, IPv6, UDP,\r\nTCP, ICMP,
  ICMPv6, ARP, ND, sockets and Ethernet frames. See the <a target=\"_blank\" mce_href=\"https://svn.tm.kit.edu/trac/OppBSD\"
  href=\"https://svn.tm.kit.edu/trac/OppBSD\">OppBSD\r\nwebsite</a> for download.</p>"
category: Software
---
<p>OppBSD integrates essential parts of the real FreeBSD
networking stack into<span style="mso-spacerun:yes" mce_style="mso-spacerun:yes"> </span>OMNeT++ as a
simulation model. Every simulated host (or router) runs its own copy of the
FreeBSD kernel's networking stack. Consequently, the simulation model is very
accurate, i.e., almost behaving like a real implementation. Release 4.0 works
with OMNeT++ v4.3 (alternatively v4.1, v4.2) and provides IPv6 support.
Presently, the package covers the full TCP/IP stack including IPv4, IPv6, UDP,
TCP, ICMP, ICMPv6, ARP, ND, sockets and Ethernet frames. See the <a target="_blank" mce_href="https://svn.tm.kit.edu/trac/OppBSD" href="https://svn.tm.kit.edu/trac/OppBSD">OppBSD
website</a> for download.</p>



<p>OppBSD integrates essential parts of the real
FreeBSD networking stack into OMNeT++ as
a simulation model. In the model, every simulated host (or router) runs its own
copy of the FreeBSD kernel's networking stack, and every host (or router) has
its own copy of all state variables of the FreeBSD kernel. Consequently, the
simulation model is very accurate, i.e., almost behaving like a real
implementation, e.g., it performs duplicate address detection and neighbor
discovery just as a normal IPv6 stack would. Presently, the package covers the
full TCP/IP stack including IPv4, IPv6, UDP, TCP, ICMP, ICMPv6, ARP, ND,
sockets and Ethernet frames. It also allows one to dump internal kernel
variables of the tcp control block (e.g., windows sizes, ssthresh, etc.) into
an OMNeT++ vector file for later analysis and also provides to dump pcap files
for analysis with standard tools like tcpdump or WireShark (formerly
known as Ethereal).</p>
