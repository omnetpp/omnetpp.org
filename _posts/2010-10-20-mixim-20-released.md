---
layout: post
title: MiXiM 2.0 Released, Contains Support for INET Integration
joomla_id: 3676
joomla_url: mixim-20-released
date: 2010-10-20 00:00:00.000000000 +02:00
author: Andras
excerpt: "<p>The MiXiM team has released MiXiM 2.0. The main highlight of this release\r\nis
  MiXiM - INET Framework integration. MiXiM 2.0 contains a \"Mixnet\"\r\nexample simulation
  that demonstrates how one can use MiXiM network interface\r\ncards (NICs) together
  with higher layer protocols (IP, TCP, UDP) of the INET Framework.\r\nMiXiM provides
  the necessary modules to make the two frameworks compatible,\r\nas well as documentation
  and examples how to build simulations using both frameworks.\r\nThe new release
  also fixes some bugs and contains small interface changes.\r\nAn overview of the
  most important changes is given after the break.</p>\r\n\r\n<p>MiXiM is an OMNeT++
  modeling framework created for mobile and fixed wireless\r\nnetworks (wireless sensor
  networks, body area networks, ad hoc networks,\r\nvehicular networks, etc.). It
  offers detailed models of radio wave propagation,\r\ninterference estimation, radio
  transceiver power consumption and wireless\r\nMAC protocols.</p>\r\n\r\n<p>The new
  MiXiM release can be downloaded from\r\n<a href=\"http://sourceforge.net/projects/mixim/files/mixim/MiXiM%202.0/MiXiM-2.0.tar.gz/download\"
  mce_href=\"http://sourceforge.net/projects/mixim/files/mixim/MiXiM%202.0/MiXiM-2.0.tar.gz/download\">sourceforge.net</a>.\r\nIn
  order to use MiXiM together with INET, an INET version without the\r\nwireless-related
  classes is needed, which can be downloaded from\r\n<a href=\"http://github.com/mixim/inet4mixnet\"
  mce_href=\"http://github.com/mixim/inet4mixnet\">here</a>. <br /></p><p></p>"
category: Software
---
<p>The MiXiM team has released MiXiM 2.0. The main highlight of this release
is MiXiM - INET Framework integration. MiXiM 2.0 contains a "Mixnet"
example simulation that demonstrates how one can use MiXiM network interface
cards (NICs) together with higher layer protocols (IP, TCP, UDP) of the INET Framework.
MiXiM provides the necessary modules to make the two frameworks compatible,
as well as documentation and examples how to build simulations using both frameworks.
The new release also fixes some bugs and contains small interface changes.
An overview of the most important changes is given after the break.</p>

<p>MiXiM is an OMNeT++ modeling framework created for mobile and fixed wireless
networks (wireless sensor networks, body area networks, ad hoc networks,
vehicular networks, etc.). It offers detailed models of radio wave propagation,
interference estimation, radio transceiver power consumption and wireless
MAC protocols.</p>

<p>The new MiXiM release can be downloaded from
<a href="http://sourceforge.net/projects/mixim/files/mixim/MiXiM%202.0/MiXiM-2.0.tar.gz/download" mce_href="http://sourceforge.net/projects/mixim/files/mixim/MiXiM%202.0/MiXiM-2.0.tar.gz/download">sourceforge.net</a>.
In order to use MiXiM together with INET, an INET version without the
wireless-related classes is needed, which can be downloaded from
<a href="http://github.com/mixim/inet4mixnet" mce_href="http://github.com/mixim/inet4mixnet">here</a>. <br /></p><p></p>New:<p></p>

<ul>
<li>"Mixnet" project in MiXiM's "inet" folder, containing compatibility modules to
use MiXiM NICs in INET networks.
  <ul>
    <li>contains "MixnetBridge" module which connects MiXiM NIC modules to INET's
    NetworkLayer module
    </li><li>contains several examples of networks using INET and MiXiM together;
    including an example of a router node which uses multiple (yet not
    interfering) NICs from INET and MiXiM
    </li><li>to avoid collisions between similar classes in INET and modules it needs an
    INET version where every wireless related module has been removed; a branch
    of INET which already has been made compatible this way can be found here:
    http://github.com/mixim/inet4mixnet
    </li><li>documentation on how to use Mixnet to combine INET and MiXiM can be found in
    the projects "doc" folder and the Mixnet section of the MiXiM wiki at:
    http://sourceforge.net/apps/trac/mixim/wiki/WikiStart
  </li></ul>
</li></ul>

<p>Important changes that affect developers using MiXiM:</p>

<ul>
<li>divided BaseArps addressing and ARP functionality into two separate
interfaces to become more compatible with real ARPs which do not implement
addressing
  <ul>
    <li>the addressing functionality is defined in the "AddressingInterface" class
    </li><li>the ARP functionality is defined in the "ArpInterface" class
    </li><li>a simplified ARP module like BaseARP whose address resolution depends on a
    certain addressing scheme can still implement both interfaces at once
    </li><li>a real ARP which does not need a certain addressing scheme only needs to
    implement and care about the ARPInterface
  </li></ul>
</li></ul>

<p>Minor changes and bugfixes:</p>

<ul>
  <li>fixed use of wrong ConnectionManager in MAC layer when using multiple
  connection managers; thanks to both "David" and Federico Tramarin from
  the omnetpp list for reporting
  </li><li>fixed a problem with ChannelInfo where it throw away channel information
  although it was still needed to answer a ChannelSenseRequest;
  thanks to Jérôme Rousselot for finding this issue
  </li><li>fixed a rare bug were the CCA timer of CSMAMacLayer was not canceled
  during backoff; thanks to "rfpb" from sourceforge for tracking down this bug
</li></ul>

<p>For a more complete and detailed list of changes please consult the git log messages.</p>
