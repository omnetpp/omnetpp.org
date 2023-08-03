---
layout: post
title: OMNeT++ 3.0 alpha 6
joomla_id: 3545
joomla_url: "-sp-1895524918"
date: 2004-07-22 13:35:21.000000000 +02:00
author: Andras
excerpt: <P><STRONG>New features</STRONG> introduced in this release, in nutshell:&nbsp;enhanced
  wildcard resolution in omnetpp.ini;&nbsp;direct support for XML config files via
  the "xml" NED parameter type;&nbsp;Cmdenv now lets you choose which modules' ev
  output you want to print; plugin interface for using configuration data sources
  other than omnetpp.ini. Several improvements in opp_neddoc and opp_makemake (hi
  Daniel!), and some bugfixes. <STRONG>Potential incompatibility:</STRONG> note that
  because&nbsp;the resolution of "*" has changed (it no longer matches "."), you may
  need to revise your existing omnetpp.ini files. [no longer available for download,
  get more recent versions instead]</P>
category: Software
---
<P><STRONG>New features</STRONG> introduced in this release, in nutshell:&nbsp;enhanced wildcard resolution in omnetpp.ini;&nbsp;direct support for XML config files via the "xml" NED parameter type;&nbsp;Cmdenv now lets you choose which modules' ev output you want to print; plugin interface for using configuration data sources other than omnetpp.ini. Several improvements in opp_neddoc and opp_makemake (hi Daniel!), and some bugfixes. <STRONG>Potential incompatibility:</STRONG> note that because&nbsp;the resolution of "*" has changed (it no longer matches "."), you may need to revise your existing omnetpp.ini files. [no longer available for download, get more recent versions instead]</P><P>Wildcard resolution in omnetpp.ini: I implemented the <A href="http://www.omnetpp.org/listarchive/msg02746.php">proposal</A> posted to the mailing list earlier.&nbsp;&nbsp;"*" doesn't match dot "." any more, so oddities like foo[*]&nbsp;matching foo[1].bar[5] will not occur any more. The <STRONG>new&nbsp;wildcard "**"</STRONG> will match anything, so you'd write **.buffersize if you wanted to set the buffersize parameters of all modules at any level of the hierarchy. Support for <STRONG>numeric ranges</STRONG> has been implemented as well: node[5..10], node[5..], node[..10]&nbsp;will match what you think they will, and&nbsp;node_{9..12} will match modules named node_9, node_10, node_11 and node_12.</P>
<P>To alleviate the pain&nbsp;of migration, you can temporarily revert to old omnetpp.ini behaviour by adding the</P>
<P><FONT face="courier new, courier, mono">#% old-wildcards</FONT></P>
<P>line at the top of your old ini files.</P>
<P>Support for XML config files will be described in a separate article, here I'm just giving a brief overview. To have access to an XML config file from a simple module, first you'd add a module parameter in the NED file with the <STRONG>new NED type&nbsp;"xml".</STRONG> Then you'd assign the parameter from omnetpp.ini (though you could also assign it from a NED file, just as with any other parameter type):</P><FONT size=2>
<P><FONT face="courier new, courier, mono">[Parameters]<BR>**.interface[*].config = xmldoc("conf.xml")</FONT></P>
<P>If you wish to refer to an element inside&nbsp;a larger XML document, you can do that using an <A href="http://www.w3.org/TR/xpath">XPath</A>-like notation. The following example finds the third&nbsp;<EM>interface</EM> element within an <EM>interfaces</EM> element whose parent is the root element called <EM>config</EM>.</P><FONT size=2>
<P align=left><FONT face="courier new, courier, mono">[Parameters]<BR>**.interface[*].config = \<BR>&nbsp; &nbsp;xmldoc("all-in-one.xml", "/config/interfaces/interface[2]")</FONT></P>
<P>From&nbsp;the C++ code you'd access&nbsp;that element&nbsp;like this:</P>
<P><FONT face="courier new, courier, mono">cXMLElement *rootelement = par("config").asXML();</FONT></P>
<P>The <STRONG>cXMLElement</STRONG> class&nbsp;provides a&nbsp;<A href="http://www.w3.org/DOM/">DOM</A>-like access to the XML document. You can then navigate the document tree,&nbsp;extract the information you need, and store it in&nbsp;variables or your internal data structure. The document tree is&nbsp;immutable (configuration&nbsp;info need not be modified), and the system takes care that "conf.xml" is read only once no matter how many modules actually refer to it. Validation can be done by the underlying parser (if it's a validating parser of course), based on the (optional) DTD or Schema declaration in the document itself. (There are several excellent tutorials on the web for learning about XML technologies.)</P>
<P>Cmdenv now lets you control&nbsp;which modules' ev output you want see when&nbsp;express-mode=false and module-messages=true. The configuration setting is: <STRONG><EM>module-name</EM>.ev-output=true/false</STRONG>, in the [Cmdenv] omnetpp.ini section (the default is <EM>true</EM> for all modules). The following example prints only output from modules named "tcpdump":</P>
<P><FONT face="courier new, courier, mono">[Cmdenv]<BR>module-messages=true<BR>**.tcpdump.ev-output=true<BR>**.ev-output=false</FONT></P>
<P>This has no effect on output from&nbsp;finish() which is always fully printed.</P>
<P>In previous versions, configuration had to come from ini files. Now a <STRONG>cConfiguration interface</STRONG> (abstract class) has been added which serves as plugin interface, and makes it possible to use different&nbsp;data sources such as database. It works similarly to other plugin interfaces: you implement the class which deals with the database, register it via Register_Class(), then select it from a (boot-time) omnetpp.ini:</P>
<P><FONT face="courier new, courier, mono">[General]<BR>configuration-class="MyDatabaseConfigReader"</FONT></P>
<P><STRONG>opp_neddoc</STRONG> now supports the&nbsp;@author, @date, @see, @todo, @bug,&nbsp;@since, @warning, @version tags in NED comments. Contents of file pages now contains the whole file listing, and adding source code listing to other pages can be turned off from the command line.</P>
<P><STRONG>opp_makemake</STRONG> now supports the "-x" flag which is necessary for linking with object files or libs outside your control: -x turns off requiring a .tstamp file in those directories.</P>
<P>To learn more about the changes in any OMNeT++ component, please check the <STRONG>ChangeLog</STRONG> file in the corresponding source directory.</P></FONT></FONT>
