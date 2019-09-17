---
layout: post
title: 'Announcement: Energy Framework 0.9'
joomla_id: 3647
joomla_url: energyframework
date: 2009-07-17 08:24:46.000000000 +02:00
author: Andras
excerpt: "The Communication Networks and Systems Lab at SICS is happy to announce
  version 0.9 of the Energy Framework.<br />\r\n<br />\r\nThe Energy Framework is
  a collection of modules that allows flexible and extensible modeling of battery
  consumption of wireless devices. It currently uses OMNET++-3 and mobility-fw2.0p3,but
  is intended to be relatively framework independent. &nbsp;Code is available at<a
  href=\"http://www.sics.se/nets/software\" mce_href=\"http://www.sics.se/nets/software\"
  target=\"_blank\"> http://www.sics.se/nets/<wbr>software</a>.<br />"
category: Software
---
The Communication Networks and Systems Lab at SICS is happy to announce version 0.9 of the Energy Framework.<br />
<br />
The Energy Framework is a collection of modules that allows flexible and extensible modeling of battery consumption of wireless devices. It currently uses OMNET++-3 and mobility-fw2.0p3,but is intended to be relatively framework independent. &nbsp;Code is available at<a href="http://www.sics.se/nets/software" mce_href="http://www.sics.se/nets/software" target="_blank"> http://www.sics.se/nets/<wbr>software</a>.<br />The Energy Framework has some similarities to the Battery Module 2.0(<a href="http://www.inf.unisi.ch/phd/foerster/downloads.html" mce_href="http://www.inf.unisi.ch/phd/foerster/downloads.html" target="_blank">http://www.inf.unisi.ch/phd/<wbr>foerster/downloads.html</a>) that was posted earlier by Anna F"orster but it is structured quite differently. &nbsp;It also provides some additional useful features:<br />
<br />
- support for host failure due to battery depletion<br />
- support for multiple sources and representations of energy consuming operations (e.g. radio, CPU, sensor)<br />
- support for discrete energy consumption (for state transitions or other abstract operations)<br />
- fairly extensive set of validation tests&nbsp; <br /><br />One Battery model, two Battery Statistics modules and two network devices have already been implemented in the Energy Framework:<br />
<br />
- SimpleBattery, a simple linear battery model that provides a common<br />
 &nbsp; interface to all battery-using devices<br />
- BatteryStats for collecting and formatting statistics<br />
- Nic80211Battery which extends the mobility-fw Nic80211 to draw power from the battery and shut down on host failure.<br />
- For compatibility and show its flexibility, the Energy Framework also includes DeviceAF and BatteryStatsAF that operate like the Battery Module 2.0.<br />
<br />
In addition, some simple "test" Devices have also been implemented.<br />
These are also suitable as a basis for modeling e.g. simple sensors.<br />
<br />
More details are in the documentation. &nbsp;Comments are welcome - it would be especially helpful to have assistance with building for Windows/Mac, as I have only tested Unix.<br />
<br />
New battery and device models are most welcome, as is help porting to other frameworks.<br /><br />
