---
layout: post
title: MiXiM 1.2 Released
joomla_id: 3669
joomla_url: mixim-12-released
date: 2010-07-08 21:34:40.000000000 +02:00
author: Andras
excerpt: "<b>The MiXiM team is happy to announce the release of MiXiM 1.2 that uses
  OMNeT++ 4.1.</b> MiXiM is an OMNeT++ modeling framework created for mobile and fixed\r\nwireless
  networks (wireless sensor networks, body area networks, ad-hoc\r\nnetworks, vehicular
  networks, etc.). It offers detailed models of radio wave\r\npropagation, interference
  estimation, radio transceiver power consumption\r\nand wireless MAC protocols.\r\n\r\n<p>\r\nThe
  new release contains the IEEE 802.15.4 models developed by Jérôme\r\nRousselot;
  IDE wizards to create basic MiXiM networks and your own analogue models; extensive
  documentation update and additions; and many bug fixes and enhancements. An overview
  of the most\r\nimportant changes is given after the <i>Read more</i> link. Developers
  should pay special attention\r\nto some API changes outlined below! For a complete
  list of changes, please\r\nconsult the git log messages. The new MiXiM release can
  be downloaded from the project's site at SourceForge:\r\n\r\n</p><p><a target=\"_blank\"
  mce_href=\"http://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2\" href=\"http://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2\">\r\nhttp://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2</a>
  <br /></p>"
category: Software
---
<b>The MiXiM team is happy to announce the release of MiXiM 1.2 that uses OMNeT++ 4.1.</b> MiXiM is an OMNeT++ modeling framework created for mobile and fixed
wireless networks (wireless sensor networks, body area networks, ad-hoc
networks, vehicular networks, etc.). It offers detailed models of radio wave
propagation, interference estimation, radio transceiver power consumption
and wireless MAC protocols.

<p>
The new release contains the IEEE 802.15.4 models developed by Jérôme
Rousselot; IDE wizards to create basic MiXiM networks and your own analogue models; extensive documentation update and additions; and many bug fixes and enhancements. An overview of the most
important changes is given after the <i>Read more</i> link. Developers should pay special attention
to some API changes outlined below! For a complete list of changes, please
consult the git log messages. The new MiXiM release can be downloaded from the project's site at SourceForge:

</p><p><a target="_blank" mce_href="http://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2" href="http://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2">
http://sourceforge.net/projects/mixim/files/mixim/MiXiM%201.2</a> <br /></p><br /><h3>What's new</h3>

<ul>
  <li> Included 802.15.4 models:
    <ul>
      <li> A model of the IEEE 802.15.4 non-beacon-enabled mode (CSMA): validated
      with measurements on a wireless sensor networking platform using the TI CC
      2420 transceiver (ported from mf2o4)
      </li><li> An enhanced narrow-band PHY layer: Detailed radio models of the Texas
      Instruments CC1100 and CC2420 (power consumption and timings) and an
      accumulative signal to noise plus interference ratio (SNIR) interference model
      (ported from mf2o4)
      </li><li> A high-precision pulse-level ultra-wideband impulse radio PHY layer,
      implementing the IEEE 802.15.4A UWB PHY with Burst Position Modulation (merged
      from mixim-uwb)
  </li></ul>
  </li><li> Added global blackboard to <tt>BaseWorldUtility</tt>, providing global blackboard functionality (equivalent to the blackboard functionality of <tt>BaseUtility</tt> for the host level)
  </li><li> Introduced a <tt>"csma"</tt> module which implements a generic CSMA mac protocol and will replace <tt>CSMAMacLayer</tt> in the future
  </li><li> Added wizards to create a basic MiXiM network and own analogue models; can be found in the OMNeT++ IDE under <i>File -&gt; New -&gt; OMNeT++ Project...</i>
  </li><li> Extensive documentation update and additions
</li></ul>


<h3>Important changes that affect developers using MiXiM</h3>

<ul>
  <li> For users of <tt>HostMove</tt>: made members of <tt>Move</tt> protected, added functions for member access:
    <ul>
      <li> <tt>setDirectionByVector()</tt> replaces the direct access to the member <tt>direction</tt>
      </li><li> <tt>setDirectionByTarget()</tt> replaces the method <tt>setDirection()</tt>
    </li></ul>
  </li><li> For developers of the MAC and network layer: divided <tt>MacControlInfo</tt> into <tt>MacToNetwControlInfo</tt> and <tt>NetwToMacControlInfo</tt>
  </li><li> For developers of <tt>AnalogueModel</tt> and <tt>Decider</tt>: added possibility to define discontinuities in mappings.
       Discontinuities are modeled using two key entries with a "distance" of epsilon
       (where epsilon corresponds to one int64-step in the time domain by default).
       This is especially important for simplified signals that use, for example, a rectangular
       function as transmit power. The simple signal's transmit power (as returned by <tt>BaseMacLayer</tt>'s
       <tt>createSignal()</tt> method) now uses these discontinuities to define a rectangular function.
       The rectangular function is zero at start and end of the signal. From one int64-step
       after the start until one int64-step before the end the mapping maps to the actual
       transmit power. For details, please take a look at the API. The implications for
       decider implementations can be best seen in the <tt>SNRThresholdDecider</tt>.
  </li><li> Changed <tt>BaseDecider</tt>'s handling of <tt>ChannelSenseRequests</tt> for better support
       of RSSI-based idle/busy state. These changes are:
    <ul>
      <li> Renamed <tt>handleSenseRequestTimeout()</tt> to <tt>handleSenseRequestEnd()</tt>.
           Note: this method indicates now that the <tt>ChannelSenseRequest</tt> can be answered
      </li><li> Instead of returning <i>if</i> a <tt>ChannelSenseRequest</tt> can be answered,
           <tt>canAnswerCSR()</tt> now returns the simtime <i>when</i> a <tt>ChannelSenseRequest</tt> can be answered
    </li></ul>
  </li><li> Removed <tt>ModuleAccess</tt> and <tt>BaseArpAccess</tt> and replaced calls to them by using class <tt>FindModule</tt>
  </li><li> <tt>SNRThresholdDecider</tt> now evaluates the currently received energy level
       to decide whether the channel is busy or idle. This model is a more intuitive
       (and more common) definition of the channel's idle state; thanks to Leonardo
       for calling our attention to this on the omnetpp mailing list
</li></ul>



<h3>Minor changes and bugfixes</h3>

<ul>
  <li> Added depth dependent scaled display of hosts when GUI and 3-D is used
  </li><li> <tt>BaseMobility</tt>'s host coordinates can be set to random values independently now
  </li><li> Gave networks of examples more meaningful and consistent names (same as the example)
  </li><li> Renamed executables for examples from <tt>"MiXiM"</tt> to <tt>"&lt;exampleName&gt;"</tt>
  </li><li> Increased scheduling priority of <tt>AirFrames</tt> to ensure channel consistency
  </li><li> Added the method <tt>unregisterNic()</tt> to <tt>BaseConnectionManager</tt>
       to unregister a NIC; thanks to Christoph Sommer for supplying the implementation of this method
  </li><li> Fixed memory leak when propagation delay is simulated; thanks to "ruhoo" for reporting this bug on the omnetpp mailing list
  </li><li> Fixed a bug in the calculated receiving power of a signal which caused it to be greater zero before and after its signal in certain cases; thanks to Ralf Zenker for reporting this bug
  </li><li> Fixed wrong calculation of position on <tt>WRAP</tt> border handling in <tt>BaseMobility</tt>; thanks to Gulsah Bulut for reporting this bug
  </li><li> Fixed missing connections when the cells from <tt>ConnectionManager</tt> do not cover the playground size exactly
  </li><li> Fixed increasing heap memory usage while hosts sending <tt>AirFrames</tt> but weren't receiving any. This was caused by RSAM tracking every radio state although there weren't any signals on the channel to attenuate; thanks to Patrick Wenz for reporting this problem
  </li><li> Fixed a bug in the <tt>unsubscribe()</tt> method of the <tt>Blackboard</tt>; thanks to "rfpb" from sourceforge for reporting this bug
</li></ul>

<br />The MiXiM Team
