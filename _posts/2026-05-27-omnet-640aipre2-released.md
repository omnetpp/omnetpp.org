---
layout: post
title: OMNeT++ 6.4.0 AI & LLM Technology Preview 2 Available
category: Software
details-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.4.0aipre2
---
Ever wished you could just ask your simulation why a packet was dropped, or let an AI co-pilot diagnose a network anomaly for you?

We are excited to share the **OMNeT++ 6.4.0 AI & LLM Technology Preview 2**, bringing the power of Large Language Models directly into your simulation workflow!

We need your help to test these experimental features and shape the future of AI-assisted simulation. Here is what you can do with this new preview:

## What’s Inside?

* **Chat directly with Qtenv:** A new integrated chat interface in Qtenv lets you interact with LLM services (both cloud-based and local models like Ollama) without leaving the simulation window.
* **AI-Controlled Simulations:** Built on the standard Model Context Protocol (MCP), the simulation hosts an MCP server. This allows LLMs to query and programmatically manipulate your active simulations in real time.
* **On-the-Fly C++ Execution (Linux-only):** The LLM can generate and run custom C++ snippets using a JIT interpreter to inspect complex data structures and answer highly specific queries. (Launched safely via the `opp_sandbox` utility).

## See It in Action

We have prepared two practical, hands-on showcases to demonstrate these features:

* **[Finding a 3-Way Collision in Aloha](https://omnetpp.org/documentation/ai-demos/aloha/showcase)** – Watch an AI agent pinpoint a rare collision event.
* **[Diagnosing Clock Sync Anomalies in TSN](https://omnetpp.org/documentation/ai-demos/tsn/showcase)** – Witness an AI co-pilot perform root-cause analysis on a Time-Sensitive Network.

## How to Try It & Give Feedback

This preview is available for **Linux (x86_64)** and **macOS (aarch64)**.

1. Head over to the **[Preview Downloads](/download/preview)** page to download the pre-built packages.
2. Read the **[Release Notes](https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.4.0aipre2)** for detailed setup instructions.
3. Share your thoughts, bugs, and feature ideas with us on **[GitHub Discussions](https://github.com/omnetpp/omnetpp/discussions/1500)**!

Your feedback is welcome! Please download it, try the showcases, run it against your own models, and let us know what you think!
