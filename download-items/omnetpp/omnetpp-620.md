---
id: omnetpp-620
download: true
layout: download-details-omnetpp
title: OMNeT++ 6.2.0
date: 2025-07-14
sortkey: "2025-07-14"
category: omnetpp-current
whatsnew-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-6.2.0
opp-env-command: opp_env install omnetpp-6.2.0
tabs:
- id: opp_env
  opp-env-command: opp_env install omnetpp-6.2.0

- id: linux
  description: |
    Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
    Supported: Ubuntu, Debian, Fedora, openSUSE Leap, Arch Linux, AlmaLinux and other similar distros.
  downloads:
  - arch: x86_64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-linux-x86_64.tgz
    filesize: 415465426
    sha256: 75c7c08eb218adac9e6b29212026a8f8019dcf370709b5c435f40cd9abe067f6
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-linux-aarch64.tgz
    filesize: 414775096
    sha256: b9f4fcb443915f76c6961b25397e90908ba81c423f21c1626a592afe56d7edc9

- id: windows
  downloads:
  - arch: opp_env
    description: |
      RECOMMENDED: This is a Windows Subsystem for Linux (WSL2) image containing `opp_env` which lets you easily install
      any version of OMNeT++ and its dependencies (and a lot of other 3rd-party models and frameworks).
      Just download and start the image file. As long as you have WSL 2.4.4 or later on your machine, it will
      automatically install the latest version of OMNeT++ for you.
    download-file-url: https://github.com/omnetpp/opp_env/releases/download/wsl/opp_env.wsl
    filesize: 196000000
    sha256: 340f23080af68c751a4b528f47cca89172e0fc05946752de82fed866f8d9dcc4
  - arch: x86_64
    description: |
      This is a version of OMNeT++ built with MinGW. A snapshot of MinGW64 toolchain is bundled with this archive.
      Because of Msys posix emulation and NTFS filesystem limitations, this version is a LOT slower for development than the
      Linux or macOS versions. You will get much better performance if you use WSL2 (https://github.com/microsoft/WSL) and
      install the Linux version. Or even better, use `opp_env.wsl` to install `opp_env` directly on WSL2.
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-windows-x86_64.zip
    filesize: 1208317137
    sha256: af60add38f208e408521cc1d0b0b6ac565169e8eaba78c54a1c9c9849ef81d5b

- id: macos
  description: |
    OMNeT++ requires a properly installed version of Xcode Command Line Tools and Homebrew (https://brew.sh/).
    Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
  downloads:
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-macos-aarch64.tgz
    filesize: 413392144
    sha256: db8dd6cbb84bf3b9a78578aa61a1d1d1ec9a5e65579a6cd3561266d92cd7b695
  - arch: x86_64
    description: "NOTE: Make sure that the x86_64 version of `homebrew` is properly installed before executing the `install.sh` script."
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-macos-x86_64.tgz
    filesize: 414570246
    sha256: dcc02872814f3204d39e2e6d9b4b15a561438d5fb0b0cba06ca2523b648d6ba5

- id: core
  description: This is the architecture independent source version of OMNeT++. Useful for installing OMNeT++ on a system where no IDE is required.
  downloads:
  - arch: generic
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-6.2.0/omnetpp-6.2.0-core.tgz
    filesize: 79479342
    sha256: 2945d225d964e7cfea9c19ba21411b708d7f5c4eb1c4c8e065e3c2695b0814a7

- id: docker
  download-page-url: https://github.com/omnetpp/omnetpp/pkgs/container/omnetpp
  description: $ docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" ghcr.io/omnetpp/omnetpp:u24.04-6.2.0

---
Highlights of this release are the use of the LLDB debugger inside the IDE, as well as numerous Qtenv improvements: display of documentation brief in module/submodule tooltips, log filtering, and the display of an identicon.

Issues [fixed](https://github.com/omnetpp/omnetpp/issues?q=is%3Aissue+is%3Aclosed+milestone%3A6.2) in version 6.2.0.
