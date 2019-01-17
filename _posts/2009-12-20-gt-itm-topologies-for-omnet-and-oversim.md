---
layout: post
title: GT-ITM Topologies for OMNeT++ and OverSim
joomla_id: 3654
joomla_url: gt-itm-topologies-for-omnet-and-oversim
date: 2009-12-20 12:13:02.000000000 +01:00
author: Administrator
excerpt: '<span class="Apple-style-span" style="color: rgb(34, 34, 34); font-family:
  Arial, Helvetica, sans-serif; font-size: 13px; line-height: 16px; " mce_style="color:
  #222222; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height:
  16px; "><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34,
  34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica,
  sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span mce_style="font-family:
  Tahoma, Helvetica, Arial, sans-serif; color: #333333; font-size: small; " style="font-family:
  Tahoma, Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: small;
  "><span class="Apple-style-span" mce_style="font-size: 12px; line-height: 15px;"
  style="font-size: 12px; line-height: 15px; &lt;mce:script type=" mce-text="" javascript"=""
  mce_src="plugins/editors/tinymce/jscripts/tiny_mce/themes/advanced/langs/en.js"><a
  href="http://mm.aueb.gr/research/GTITM-OMNeT4/index.html" mce_href="http://mm.aueb.gr/research/GTITM-OMNeT4/index.html"><b>GT-ITM
  Topologies</b></a> is a complete set of tools for the conversion of network topologies
  following the Georgia Tech Internet Topology Model (GT-ITM) to the InetUnderlay
  model used by <a href="http://www.oversim.org" mce_href="http://www.oversim.org">OverSim</a>.
  The provided tarball includes the <a href="http://www.cc.gatech.edu/fac/Ellen.Zegura/graphs.html"
  mce_href="http://www.cc.gatech.edu/fac/Ellen.Zegura/graphs.html">GT-ITM topology
  generator</a>, the <a href="http://www.cs.bu.edu/brite/" mce_href="http://www.cs.bu.edu/brite/">BRITE</a>
  topology tool patched with NED language <a href="http://www.omnetpp.org/omnetpp/doc_details/2161-omnet-export-for-brite-21"
  mce_href="http://www.omnetpp.org/omnetpp/doc_details/2161-omnet-export-for-brite-21">support</a>
  and the necessary updates to the <a href="http://www.omnetpp.org/listarchive/msg10970.php"
  mce_href="http://www.omnetpp.org/listarchive/msg10970.php">ctopology.cc/h files</a>
  of OMNeT++ for the support of weighted shortest paths.</span></span></div><div style="font-family:
  Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height:
  16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size:
  13px; line-height: 16px; "><span mce_style="font-family: Tahoma, Helvetica, Arial,
  sans-serif; color: #333333; font-size: small; " style="font-family: Tahoma, Helvetica,
  Arial, sans-serif; color: rgb(51, 51, 51); font-size: small; "><span class="Apple-style-span"
  mce_style="font-size: 12px; line-height: 15px;" style="font-size: 12px; line-height:
  15px; "><br /></span></span></div><div style="font-family: Arial, Helvetica, sans-serif;
  color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family:
  Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px;
  "><span class="Apple-style-span" mce_style="color: #333333; font-family: Tahoma,
  Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; " style="color:
  rgb(51, 51, 51); font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px;
  line-height: 15px; ">This is a collection of already provided tools further enhanced
  to support the conversion of the topologies into an OverSim interpretable format
  (InetUnderlay). Apart from the topology structure, the created topologies provide
  support for routing policy weights and AS Number support, i.e. the simulation programmer
  can easily distinguish inter-domain from intra-domain paths.</span></div><div style="font-family:
  Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height:
  16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size:
  13px; line-height: 16px; "><span mce_style="font-family: Tahoma, Helvetica, Arial,
  sans-serif; color: #333333; font-size: small; " style="font-family: Tahoma, Helvetica,
  Arial, sans-serif; color: rgb(51, 51, 51); font-size: small; "><span class="Apple-style-span"
  mce_style="font-size: 12px; line-height: 15px;" style="font-size: 12px; line-height:
  15px; "><br /></span></span></div><div style="font-family: Arial, Helvetica, sans-serif;
  color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family:
  Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px;
  "><span class="Apple-style-span" mce_style="color: #333333; font-family: Tahoma,
  Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; " style="color:
  rgb(51, 51, 51); font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px;
  line-height: 15px; ">Contributed by K.Katsaros, G.Nomikos, N.Fotiou and G.Xylomenos,
  Mobile Multimedia Laboratory (MMlab), Athens University of Economics and Business
  (AUEB).</span></div></span>'
category: Software
---
<span class="Apple-style-span" style="color: rgb(34, 34, 34); font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 16px; " mce_style="color: #222222; font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 16px; "><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span mce_style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: #333333; font-size: small; " style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: small; "><span class="Apple-style-span" mce_style="font-size: 12px; line-height: 15px;" style="font-size: 12px; line-height: 15px; &lt;mce:script type=" mce-text="" javascript"="" mce_src="plugins/editors/tinymce/jscripts/tiny_mce/themes/advanced/langs/en.js"><a href="http://mm.aueb.gr/research/GTITM-OMNeT4/index.html" mce_href="http://mm.aueb.gr/research/GTITM-OMNeT4/index.html"><b>GT-ITM Topologies</b></a> is a complete set of tools for the conversion of network topologies following the Georgia Tech Internet Topology Model (GT-ITM) to the InetUnderlay model used by <a href="http://www.oversim.org" mce_href="http://www.oversim.org">OverSim</a>. The provided tarball includes the <a href="http://www.cc.gatech.edu/fac/Ellen.Zegura/graphs.html" mce_href="http://www.cc.gatech.edu/fac/Ellen.Zegura/graphs.html">GT-ITM topology generator</a>, the <a href="http://www.cs.bu.edu/brite/" mce_href="http://www.cs.bu.edu/brite/">BRITE</a> topology tool patched with NED language <a href="http://www.omnetpp.org/omnetpp/doc_details/2161-omnet-export-for-brite-21" mce_href="http://www.omnetpp.org/omnetpp/doc_details/2161-omnet-export-for-brite-21">support</a> and the necessary updates to the <a href="http://www.omnetpp.org/listarchive/msg10970.php" mce_href="http://www.omnetpp.org/listarchive/msg10970.php">ctopology.cc/h files</a> of OMNeT++ for the support of weighted shortest paths.</span></span></div><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span mce_style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: #333333; font-size: small; " style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: small; "><span class="Apple-style-span" mce_style="font-size: 12px; line-height: 15px;" style="font-size: 12px; line-height: 15px; "><br /></span></span></div><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span class="Apple-style-span" mce_style="color: #333333; font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; " style="color: rgb(51, 51, 51); font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; ">This is a collection of already provided tools further enhanced to support the conversion of the topologies into an OverSim interpretable format (InetUnderlay). Apart from the topology structure, the created topologies provide support for routing policy weights and AS Number support, i.e. the simulation programmer can easily distinguish inter-domain from intra-domain paths.</span></div><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span mce_style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: #333333; font-size: small; " style="font-family: Tahoma, Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: small; "><span class="Apple-style-span" mce_style="font-size: 12px; line-height: 15px;" style="font-size: 12px; line-height: 15px; "><br /></span></span></div><div style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34); font-size: 13px; line-height: 16px; " mce_style="font-family: Arial, Helvetica, sans-serif; color: #222222; font-size: 13px; line-height: 16px; "><span class="Apple-style-span" mce_style="color: #333333; font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; " style="color: rgb(51, 51, 51); font-family: Tahoma, Helvetica, Arial, sans-serif; font-size: 12px; line-height: 15px; ">Contributed by K.Katsaros, G.Nomikos, N.Fotiou and G.Xylomenos, Mobile Multimedia Laboratory (MMlab), Athens University of Economics and Business (AUEB).</span></div></span>
