---
download: true
layout: download-details
title: DCTrafficGen (DCTG) - Data Center Traffic Generator Library
years-active: 2018
category: models
tags: model framework omnetpp5
keywords: datacenter, cloud, traffic
github-url: https://github.com/Mellanox/DCTrafficGen
opp-env-command: opp_env install dctrafficgen-latest
---

Data Center Network (DCN) research is gaining further momentum as the Cloud
computing model proves scalable and efficient. As the economic efficiency of
Cloud Computers improves with their size, Hyperclouds are now designed to
contain 10,000 to 100,000 hosts. This extreme scale poses a challenge to DCN
researchers, since building an experimental DCN of reasonable size is
prohibitively expensive. Consequently, the research community greatly depends on
the availability of formally defined traffic patterns, which describe the
characteristics of Hyperscale DCN traffic. Even though several papers describing
particular-cloud traffic were released over the years, no formal model was ever
published or accepted as standard.

The DCTrafficGen package by Mellanox (https://www.mellanox.com/) provides a
solution to this challenge by introducing a free to use, standard way of
publishing traffic characteristics measured on hyperscale clusters. The package,
is based on OMNeT++ event driven simulation technology that is free for academic
use. DCTG generates traffic according to statistical profiles of flow duration,
total size, packet size, message size, and destination locality. It also
supports the definition of multiple application types in terms of the different
roles of each Traffic Generator (TG) comprising the application, each with its
own statistical or deterministic traffic injection characteristics. Then, it
allows for describing the placement of multiple occurrences of these
applications on specific network hosts. Each said host may contain a different
number of TGs of each role representing the application occurrence.

The authors write: "DCTrafficGen is inspired by the detailed traffic
characteristics provided in [1] and the simulator code of [2] that was
generously made available to us. We hope our contribution will start a process
of open source development and contributions of common traffic benchmarks, that
will advance DCN research. We call for more groups to contribute application
types, with new traffic statistics as well as code to improve our current
implementation."

[1] A. Roy, et al., "Inside the Social Network's (Datacenter) Network," in Proceedings of the 2015 SIGCOMM'15, pp. 123–137.

[2] B. Montazeri, et al., "Homa: A Receiver-Driven Low-Latency Transport Protocol Using Network Priorities," in Proceedings of the 2018 SIGCOMM'18, pp. 221–235.