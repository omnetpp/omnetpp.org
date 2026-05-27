---
id: omnetpp-640aipre2
download: true
layout: download-details-omnetpp
version: 6.4.0aipre2
title: OMNeT++ @VERSION@
date: 2026-05-27
sortkey: "2026-05-27"
category: preview
whatsnew-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-@VERSION@
tabs:
- id: linux
  downloads:
  - arch: x86_64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-linux-x86_64.tgz
    filesize: 430291470
    sha256: 0db4c39aca8499e2fd3e783f3c3c58d59a4617f84a5babefd7599f62de580866
    description: |
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
      Supported: Ubuntu, Debian, Fedora, openSUSE Leap, Arch Linux, AlmaLinux and other similar distros.

- id: macos
  downloads:
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-macos-aarch64.tgz
    filesize: 426961187
    sha256: 81f04a221a4c8cc3103b1e3cee478199768617b4988afc88105cbcc5c49c9847
    description: |
      OMNeT++ requires a properly installed version of Xcode Command Line Tools and Homebrew (https://brew.sh/).
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
---
This technology preview introduces Large Language Model (LLM) integration to OMNeT++.

Key features include an integrated chat interface within **Qtenv** for direct interaction with LLM services, and a dedicated **Model Context Protocol (MCP) server**. The MCP server allows an LLM to query and manipulate active simulations in real time. For configuration details, please refer to the **User Guide**.

The integration includes an optional JIT C++ interpreter, allowing the LLM to generate and execute code on the fly to programmatically inspect the simulation and answer complex queries. To ensure security while dynamic code execution is enabled, the simulation must be run within a sandboxed environment to prevent arbitrary access to the host system.

## Explore the Showcases

Discover the capabilities of this build through these practical examples:

* **[Finding a 3-Way Collision in Aloha](https://omnetpp.org/documentation/ai-demos/aloha/showcase)** – Using AI to identify specific network events.
* **[Diagnosing Clock Sync Anomalies in TSN](https://omnetpp.org/documentation/ai-demos/tsn/showcase)** – Root-cause analysis in Time-Sensitive Networking.

## Important Notes

* **Platform Support:** This snapshot is limited to **Linux (x86_64)** and **macOS (aarch64)**.
* **Dependencies:** This version introduces new requirements. Run the `install.sh` script in the root directory to update your environment.
* **Local Inference:** If you prefer local models over cloud APIs, ensure `ollama` is installed and running.
* **C++ Interpreter:** Interactive C++ functionality is **Linux-only** and requires launching the simulation via the `opp_sandbox` script.

See the [GitHub release page](https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.4.0aipre2) and the discussion on [GitHub Discussions](https://github.com/omnetpp/omnetpp/discussions/1500) for more details.
