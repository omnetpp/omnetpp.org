---
layout: post
title: OMNeT++ 6.4.0 AI & LLM Technology Preview 2 Available
category: Software
details-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.4.0aipre2
---
This technology preview introduces Large Language Model (LLM) integration to OMNeT++.

Key features include an integrated chat interface within **Qtenv** for direct interaction with LLM services, and a dedicated **Model Context Protocol (MCP) server**. The MCP server allows an LLM to query and manipulate active simulations in real time.

The integration includes an optional JIT C++ interpreter, allowing the LLM to generate and execute code on the fly to programmatically inspect the simulation and answer complex queries. To ensure security while dynamic code execution is enabled, the simulation must be run within a sandboxed environment to prevent arbitrary access to the host system.

This release is limited to **Linux (x86_64)** and **macOS (aarch64)** platforms. Check out the practical showcases like [Finding a 3-Way Collision in Aloha](https://omnetpp.org/documentation/ai-demos/aloha/showcase) and [Diagnosing Clock Sync Anomalies in TSN](https://omnetpp.org/documentation/ai-demos/tsn/showcase) to see these features in action!

Read the [release notes](https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.4.0aipre2) and download the pre-built packages from the [Preview Downloads](/download/preview) page.
