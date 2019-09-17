---
layout: post
title: New random number architecture
joomla_id: 3533
joomla_url: "-sp-336207964"
date: 2004-10-31 15:35:47.000000000 +01:00
author: Andras
excerpt: It has been a long standing wish that OMNeT++ supports modern RNGs such as
  Mersenne Twister. This has been finally implemented, and much more. Read on...&nbsp;
category: News
---
It has been a long standing wish that OMNeT++ supports modern RNGs such as Mersenne Twister. This has been finally implemented, and much more. Read on...&nbsp;<P>The new random number architecture, available from 3.0 alpha 9, offers the following improvements:</P>
<OL>
<LI>choice of 3 random number generator (RNG) algorithms, and you can easily plug in more
<LI>number of RNGs (or random streams) is a configuration option, with no upper limit
<LI>RNG mapping: you can make one group of modules use one RNG (or set of RNGs), and another group of modules a different RNG
<LI>object-oriented as well as C-style access to RNGs
<LI>reasonably backward compatible with older OMNeT++ versions</LI></OL>
<P>Let's see how this is achieved.</P>
<P><STRONG>Selecting the&nbsp;RNG algorithm and the number of RNGs</STRONG></P>
<P>Knowing existing OMNeT++&nbsp;plug-in interfaces (omnetpp.ini entries configuration-class=, outputvectormanager-class=,&nbsp;outputscalarmanager-class=, snapshotmanager-class=, scheduler-class=,&nbsp;etc.), you may have guessed that when selecting&nbsp;an RNG algorithm, you really choose a C++ class. </P>
<P>The <STRONG>rng-class=</STRONG> omnetpp.ini entry has to be in the [General] section, and it can currently take the following values: "cMersenneTwister", "cLCG32", and (if <A href="http://nz.cosc.canterbury.ac.nz/research/RG/net_sim/simulation_group/akaroa/about.chtml">Akaroa</A>&nbsp;support is enabled) "cAkaroaRNG".&nbsp;<FONT face="courier new, courier, mono">cMersenneTwister</FONT>, which is also the default, selects the <A href="http://www.math.sci.hiroshima-u.ac.jp/~m-mat/eindex.html">MT19937</A> RNG which has the incredible cycle length of 2^19937-1 (the actual class wraps Rick Wagner's <A href="http://www-personal.engin.umich.edu/~wagnerr/MersenneTwister.html">MersenneTwister.h</A>). <FONT face="courier new, courier, mono">cLCG32</FONT> wraps the original OMNeT++ RNG with the cycle length 2^31-2. </P>
<P>By default, only one RNG is&nbsp;created. To&nbsp;increase&nbsp;number of RNGs, you have&nbsp;to add&nbsp;a <STRONG>num-rngs=</STRONG><EM>n</EM> config entry -- there is no upper limit.&nbsp;The following example makes five <FONT face="courier new, courier, mono">cLCG32</FONT> RNGs (numbered 0 thru 4) available to the simulation.</P>
<P><FONT face="courier new, courier, mono">[General]<BR>rng-class="cLCG32"&nbsp;&nbsp; # default is "cMersenneTwister"<BR>num-rngs=5</FONT></P>
<P>Akaroa has only one RNG, so setting&nbsp;num-rngs &gt;= 2 with <FONT face="courier new, courier, mono">cAkaroaRNG</FONT> will cause an error.</P>
<P>If you want to create a new RNG class, you have to subclass <FONT face="courier new, courier, mono">cRNG</FONT>, and let OMNeT++ know about the new class with the <FONT face="courier new, courier, mono">Register_Class()</FONT> macro. That's all --&nbsp;you can activate&nbsp;it with rng-class="MyRNGClass".</P>
<P><STRONG>Seeding the RNGs</STRONG></P>
<P>Seeding is the procedure of setting the initial states of the RNGs, so that they produce a new (or the same, as we wish) stream of random numbers. It is generally&nbsp;a good idea that streams from different RNGs don't overlap, because that may introduce unwanted correlation into the simulation, and falsify the results.</P>
<P>It is up to the RNG class to implement support for seeding. (On initialization, the RNG class gets access to the full configuration and can read whichever&nbsp;entries it is interested in.) cMersenneTwister reads the seed-0-mt=, seed-1-mt=, etc entries to initialize RNG 0, RNG 1 etc. with 32-bit values. cLCG32 uses seed-0-lcg32=, seed-1-lcg32, etc. The config entry names are different to make it easier to switch between RNGs by&nbsp;allowing "-mt and "-lcg32" entries coexist in the same omnetpp.ini. </P>
<P>Example:</P>
<P><FONT face="courier new, courier, mono">[General]<BR>rng-class="cLCG32"<BR>num-rngs=2<BR>seed-0-lcg32 = 3454326<BR>seed-1-lcg32 = 9764754</FONT></P>
<P>Seed sets can be specified globally (in the [General] section) or per-run. The seedtool program already present in earlier OMNeT++ released can continue to be used for generating seeds for cLCG32. cMersenneTwister has such a long cycle that there's no need for seed generation -- arbitrary seed values will do, because&nbsp;chances are very-very small that any two seeds produce overlapping streams. cAkaroaRNG is fully under Akaroa's control, and it doesn't need to (and cannot) be seeded from OMNeT++.</P>
<P><STRONG>Automatic seeding</STRONG></P>
<P>If you don't explicitly specify seeds in omnetpp.ini, RNGs will get automatic seeds.&nbsp;For cLCG32 OMNeT++ has a table of 256 seeds, spaced&nbsp;about 8 million values apart, covering the full&nbsp;2^31-2 long sequence. There was a bug in earlier OMNeT++ versions that the first network set up in the simulation got the first set of automatic seeds, the second network (or the same network after the first restart) got the second set of automatic seeds, etc. This has changed: the assigned seeds depend on the Run number and the number of RNGs alone, and not how many times the model was restarted. Actually: N = (Run# * num-rngs + rng-index) is computed, and cLCG32 assigns the Nth seed in the table.&nbsp;cMersenneTwister simply uses&nbsp;N as seed.</P>
<P><STRONG>RNG mapping</STRONG></P>
<P>Variance reduction techniques require control over which part (or function) of the simulation model uses which RNG. However, components (simple and compound modules) are usually not written with that kind of flexibility in mind, but just use RNG-0. For example, a NED parameter <FONT face="courier new, courier, mono">packetLength=truncnormal(1000,200)</FONT>&nbsp;uses RNG-0 -- one would have to change it to <FONT face="courier new, courier, mono">truncnormal(1000,200,1)</FONT> to switch it over to RNG-1, but in a large model that's usually just not feasible (too many places to change). This makes it necessary that the simulation framework provides this kind of functionality.</P>
<P>In OMNeT++, using&nbsp;num-rngs=N you create N physical RNGs. Modules refer to RNGs by numbers as well, these numbers are not immediately the "physical" RNG numbers:&nbsp;mapping step has been introduced between the two. You can specify that if a given module refers to e.g. RNG-0, which physical RNG it should map to. The omnetpp.ini syntax is the following:</P>
<P><FONT face="courier new, courier, mono">[General]<BR>num-rngs=4<BR><BR>**.host[*].trafgen.rng-0 = 0<BR>**.host[*].trafgen.rng-1 = 1<BR>**.mac[*].rng-0 = 2<BR>**.noisychan[*].rng-0 = 3</FONT></P>
<P>This way all traffic generators will use RNG 0 and 1, MACs will use RNG 2 (e.g. for exponential backoff), and noisy channel models will use RNG 3 to introduce packet loss and bit errors.</P>
<P><STRONG>Access from C++</STRONG></P>
<P>The old&nbsp;<FONT face="courier new, courier, mono">intrand(r)</FONT>, <FONT face="courier new, courier, mono">dblrand()</FONT>, <FONT face="courier new, courier, mono">genk_intrand(rng,r)</FONT>,&nbsp;<FONT face="courier new, courier, mono">genk_dblrand(rng)</FONT>&nbsp;functions continue&nbsp;to work, only they go through the RNG mapping&nbsp;and use the new RNGs. The random variate functions (<FONT face="courier new, courier, mono">exponential()</FONT>, <FONT face="courier new, courier, mono">normal()</FONT>, etc.) also work. </P>
<P>In addition to this classic C-style API, you can access RNGs also via the new <FONT face="courier new, courier, mono">cRNG</FONT> interface which gives you more details. <FONT face="courier new, courier, mono">cModule</FONT>'s rng(k) function returns a <FONT face="courier new, courier, mono">cRNG*</FONT> pointer to the given RNG. RNG numbers accepted by all the above functions are module-local numbers, so they can be arbitrarily mapped to physical RNGs from omnetpp.ini. By default&nbsp;they use (module-local) RNG 0 which by default maps to physical RNG 0. </P>
<P>The physical RNGs themselves can be accessed -- bypassing the mapping --&nbsp;by <FONT face="courier new, courier, mono">ev.rng(k)</FONT>. <FONT face="courier new, courier, mono">ev.numRNGs()</FONT> returns the number of RNGs as configured in omnetpp.ini.&nbsp;</P>
<P>Functions for explicitly getting/setting seeds (<FONT face="courier new, courier, mono">opp_randseed()</FONT>, etc) have been removed; <FONT face="courier new, courier, mono">intRand()</FONT> (without arguments) has also been removed because different RNG algorithms have different "native" ranges: (0..2^32-1, 1..2^31-2, etc). So if you referred to seeds from the C++ code (which&nbsp;was probably a Bad Thing to do), you'll get undeclared functions during compilation, and you'll&nbsp;need to rethink your code. Luckily I haven't seen this practice in any simulation model so far.</P>
<P><STRONG>What do I need to change in my simulation model?</STRONG></P>
<P>Probably only omnetpp.ini. If you didn't care much about RNGs and seeding at all, you just comment out the obsolete random-seed=, gen0-seed=, gen1-seed= etc entries from your omnetpp.ini -- and that's all.</P>
<P>If your experiments rely on the old RNG and&nbsp;explicit seeds, insert rng-class="cLCG32" (and if needed, num-rngs=N) in omnetpp.ini, and change the random-seed=, gen0-seed=, gen1-seed= etc entries to seed-0-lcg32=, seed-1-lcg32=.</P>
<P>Questions, comments are welcome!</P>
<P>&nbsp;</P>
