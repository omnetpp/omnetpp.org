---
layout: page
title: Simulation with OMNeT++
---

Here's a quick overview how you would use OMNeT++:

1. An OMNeT++ model is built from components (modules) which communicate by exchanging messages. Modules can be nested, that is, several modules can be grouped together to form a compound module. When creating the model, you need to map your system into a hierarchy of communicating modules.

2. Define the model structure in the NED language. You can edit NED in a text editor or in the graphical editor of the Eclipse-based OMNeT++ Simulation IDE.

3. The active components of the model (simple modules) have to be programmed in C++, using the simulation kernel and class library.

4. Provide a suitable omnetpp.ini to hold OMNeT++ configuration and parameters to your model. A config file can describe several simulation runs with different parameters.

5. Build the simulation program and run it. You'll link the code with the OMNeT++ simulation kernel and one of the user interfaces OMNeT++ provides. There are command line (batch) and interactive, graphical user interfaces.

6. Simulation results are written into output vector and output scalar files. You can use the Analysis Tool in the Simulation IDE to visualize them. Result files are text-based, so you can also process them with R, Matlab or other tools.
