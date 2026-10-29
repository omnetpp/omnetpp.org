---
layout: post
title: OMNeT++ 6.5.0 Available
category: Software
details-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.5.0
---
This is primarily a bugfix release. The main new features are clipping
support for canvas figures, reporting of configuration entries that have no
effect (useful e.g. when porting models to a new version of a model library),
and the ability of the NED documentation generator to link to the separately
generated documentation of referenced projects and to produce PNG images. The
main bugfix areas are the correctness of recorded and analyzed results (units
of count scalars, field scalars and dB; warm-up period handling), `WATCH()` and
inspector display, connection drawing in Qtenv, rendering in the graphical NED
editor, and matplotlib and Pandas compatibility in the Analysis Tool and the
Python library.

Issues [fixed](https://github.com/omnetpp/omnetpp/issues?q=is%3Aissue+is%3Aclosed+milestone%3A6.5) in version 6.5.0.

Read the [What's New](https://github.com/omnetpp/omnetpp/blob/omnetpp-6.5.0/WHATSNEW.md) page for more details.
