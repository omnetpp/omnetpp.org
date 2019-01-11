---
download: true
layout: download-details
title: Antnet
years-active: 2003-2005
category: models
tags: model omnetpp3
keywords: adhoc ant routing antnet
download-file-url: https://ipfs.omnetpp.org/models/antnet-4.0-src.zip
---

The model implements an Ant-based routing algorithms (AntNet-CL and AntNet-CO)
proposed by G. Di Caro and M. Dorigo. This model version works with omnetpp 3.0a3 and up.

AntNet was proposed by Gianni Di Caro & Marco Dorigo in [1] . In AntNet the
network state is monitored through two ant agents: Forward_Ant and
Backward_Ant. A Forward_Ant agent is launched at regular intervals from a
source to a certain destination. It uses the same queues as data packets to
monitor the real traffic situation. Forward_Ant agent is equipped with a
stack memory on which the address and entrance time of each node on its
path are pushed. Once the Forward_Ant agent reaches its destination it
creates a Backward_Ant agent and transfers all information to it.
Backward_Ant visits the same nodes as Forward_Ant in reverse order and
modifies the entries in the routing tables based on the trip time from the
nodes to the destination. At each node the average trip time, the best trip
time and the variance of the trip times for each destination are
maintained. The trip time values are calculated by taking the difference of
entrance times of two subsequent nodes pushed onto the stack. Backward_Ant
agent uses the system priority queues so that it disseminates the
information to the nodes as soon as possible.

However, the authors later on renamed AntNet as AntNet-CL and proposed
another version of it in [2] namely AntNet-CO. AntNet-CO uses the concepts
of flying ants in which forward moving Forward_Ant agent does not have to
wait in the normal queues to determine the queuing delay rather they use an
estimation model described in [2] to estimate the delay. Consequently, the
routing information quickly spreads in the network.

In this implementation of AntNet one could get the behavior of both
algorithms through a simple #define. The implementation has been tested and
works with Windows XP and MSVC6.0 and Omnetpp3.0a3.

The steps are following:

1. Open protocolParameters.h file
2. Go to line 38 that has #define _FLYINGANTSbg
3. If you are interested in compiling AntNet-CL, then comment this line
4. If you are interested in compiling AntNet-CO, then simply remove the
  // from the beginning of this line.
5. Rest everything remains the same
6. Please ensure that Omnet++ is installed and all of its
  libararies and bin are in the path.
7. type 'opp_nmakemake -u Cmdenv' in the directory where you unzipped the antNet4.0.zip
8. type 'nmake -f Makefile.vc depend'
9. type 'nmake -f Makefile.vc'
10. Congratulations:) you have compiled the program.

In this implementation the most important files that are of interest are

1. AntNest.cc
2. Router.cc

In AntNest.cc, the handling forward and backward ants is implemented. I
have tried to have implemented the concepts in this regard as discussed in
[1]. The parameters that are of interest could be given via omnet.ini file.
In Router.cc, i have just catered for the service time due to queues.

Enjoy working with AntNet and thanks to Gianni and Dorigo for the wonderful
routing algrithm.

In case of any problems please contact Muddassar Farooq muddassar.farooq@cs.uni-dortmund.de

[1] G. Di Caro and M. Dorigo. AntNet: Distributed Stigmergetic Control
for Communications Networks. Journal of Artificial Intelligence Research, 9:317--365, 1998

[2] G. Di Caro and M. Dorigo. Two ant colony algorithms for best-effort routing in datagram networks.
In Y. Pan, S. G. Akl, and K. Li, editors, Proceedings of the Tenth IASTED International Conference on
Parallel and Distributed Computing and Systems (PDCS'98), pages 541--546. IASTED/ACTA Press, Anheim, 1998.
