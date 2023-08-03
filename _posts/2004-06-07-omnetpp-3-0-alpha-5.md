---
layout: post
title: OMNeT++ 3.0 alpha 5
date: 2004-06-07 20:58:00.000000000 +02:00
author: Andras
category: Software
details-url: https://github.com/omnetpp/omnetpp/blob/omnetpp-3.0a5/doc/WhatsNew
---
Plove has been completely rewritten under the skin. It is no longer a wrapper
around grep, awk and gnuplot -- it boasts a powerful internal extensible
data-flow engine (for filtering and processing output vectors before plotting),
and a BLT-based plotting window (which allows a multiple plots via tabbed
window, and these plots are a bit easier to customize than gnuplot-based ones
were -- oh yes and they allow arbitrary zooming on the fly).

The new Plove can also do scatter plot. Calculating histograms and cumulative
distribution functions and various other refinements will come soon.

What else? opp_msgc now generates the pack/unpack operations so parallel
simulation has become a lot more transparent. Plus a couple of bugfixes of
course. The test suite (test/core) is supposed to pass completely, except for
one little known bug in `ev<<` w/ Cmdenv.
