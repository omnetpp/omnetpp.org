---
id: omnetpp-603
download: true
layout: download-details
title: OMNeT++ 6.0.3
date: 2024-02-28
sortkey: "2024-02-28"
category: omnetpp-current
whatsnew-url: https://github.com/omnetpp/omnetpp/blob/omnetpp-6.0.3/WHATSNEW
tabs:
- id: linux
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-linux-x86_64.tgz
  filesize: 395352294
  md5: 5fa3e47ebcf33e1bcff5bedb584559e1

- id: windows
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-windows-x86_64.zip
  filesize: 887262955
  md5: 67027c1cc8f5938386ec4c78de01a8f7

- id: macos
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-macos-x86_64.tgz
  filesize: 539838317
  md5: 1bf14ed2e740b6c95cd73e0abc3c7259

- id: core
  download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-core.tgz
  filesize: 77965733
  md5: ce2353476450c27fefc4a35b22ff6834

- id: opp_env
  opp-env-command: opp_env install omnetpp-6.0.3

---
This is a maintenance release, with several performance improvements
in the simulation kernel and further adjustments.

IDE:

  - Updated to Eclipse 4.30, CDT 11.4, Pydev 11.0
  - Model installation dialogs: If the IDE was installed from opp_env,
    tell the user to install the model with opp_env, too.

Experimental AARCH64 based versions are available for
[Linux](https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-linux-aarch64.tgz)
and [macOS](https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.0.3/omnetpp-6.0.3-macos-aarch64.tgz).

Issues [fixed](https://github.com/omnetpp/omnetpp/milestone/48?closed=1) in version 6.0.3.
