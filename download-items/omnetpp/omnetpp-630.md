---
id: omnetpp-630
download: true
layout: download-details-omnetpp
version: 6.3.0
title: OMNeT++ @VERSION@
date: 2025-11-12
sortkey: "2025-11-12"
category: omnetpp-current
whatsnew-url: https://github.com/omnetpp/omnetpp/releases/tag/omnetpp-@VERSION@
tabs:
- id: opp_env
  description: |
    We recommend using the `opp_env` package manager to install OMNeT++ and other models and frameworks.

      - On Linux and macOS:
        - Install the [NIX](https://nixos.org/download/) package manager.
        - Install the [opp_env](https://github.com/omnetpp/opp_env/blob/main/INSTALL.md) package manager
          using `pip install opp-env`.
        - Create a workspace directory and initialize it with `opp_env init`.
      - On Windows:
        - Install the [opp_env.wsl](https://github.com/omnetpp/opp_env/releases/download/wsl/opp_env.wsl)
          WSL image. (Make sure you have WSL 2.4.4 or later on your machine.)
        - Start the downloaded image and follow the instructions on the first run.
      - Install OMNeT++ with `opp_env install omnetpp-@VERSION@`

- id: linux
  downloads:
  - opp_env: true
    brief: We recommend using the `opp_env` package manager to install OMNeT++ and other models and frameworks.
  - arch: x86_64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-linux-x86_64.tgz
    filesize: 415252013
    sha256: 86137d49f8fc2be2b14c451c7a7bdd9a727b5f233333b8013084e31ea0e62d88
    description: |
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
      Supported: Ubuntu, Debian, Fedora, openSUSE Leap, Arch Linux, AlmaLinux and other similar distros.
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-linux-aarch64.tgz
    filesize: 414705641
    sha256: 19657ceb16646e3c2e0938981f9ad55fb75a8f1737b00dbc0bf50b710750357a
    description: |
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
      Supported: Ubuntu, Debian, Fedora, openSUSE Leap, Arch Linux, AlmaLinux and other similar distros.

- id: windows
  downloads:
  - arch: opp_env
    description: |
      RECOMMENDED: This is a Windows Subsystem for Linux (WSL2) image containing `opp_env` which lets you easily install
      any version of OMNeT++ and its dependencies (and a lot of other 3rd-party models and frameworks).
      Just download and start the image file. As long as you have WSL 2.4.4 or later on your machine, it will
      automatically install `opp_env`. On the first run, choose 'manual installation' and then install the OMNeT++
      with `opp_env install omnetpp-@VERSION@`.
    download-file-url: https://github.com/omnetpp/opp_env/releases/download/wsl/opp_env.wsl
    filesize: 196000000
  - arch: x86_64
    description: |
      This is a version of OMNeT++ built with MinGW. A snapshot of MinGW64 toolchain is bundled with this archive.
      Because of Msys posix emulation and NTFS filesystem limitations, this version is a LOT slower for development than the
      Linux or macOS versions. You will get much better performance if you use WSL2 (https://github.com/microsoft/WSL) and
      install the Linux version. Or even better, use `opp_env.wsl` to install `opp_env` directly on WSL2.
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-windows-x86_64.7z
    filesize: 1207916788
    sha256: 699657074cdf1d0346f3fd456e2501c39d16ef225b039da6df60d7ceb063c91a

- id: macos
  downloads:
  - opp_env: true
    brief: We recommend using the `opp_env` package manager to install OMNeT++ and other models and frameworks.
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-macos-aarch64.tgz
    filesize: 413486879
    sha256: a01de508ec73a9c4cb8a6646b4c65556acb602f68264b59ad97c11d5ad4fbfab
    description: |
      OMNeT++ requires a properly installed version of Xcode Command Line Tools and Homebrew (https://brew.sh/).
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
  - arch: x86_64
    description: |
      OMNeT++ requires a properly installed version of Xcode Command Line Tools and Homebrew (https://brew.sh/).
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
      (Use this version ONLY if you have an Intel based Mac computer. Do not use this version on an Apple
      Silicon Mac with Rosetta 2.)
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-macos-x86_64.tgz
    filesize: 414675124
    sha256: 2fdc971228b135ec3f760fb9fe0cfc4674107699a743a8dffb831f4d69aa5b70

- id: core
  description: |
    This is the architecture independent source version of OMNeT++. Useful for installing OMNeT++ on a system where no
    IDE or GUI is required. Use the `install.sh` script in the root directory of the archive to install all dependencies
    and build OMNeT++. To install without Qtenv support, use `install.sh --no-gui`.
  downloads:
  - arch: generic
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-core.tgz
    filesize: 79856430
    sha256: 8bfe89e36c0fc1e80853b46e27c01cff670002fdd2abdba989e8148240748fd1

- id: docker
  description: |
    Container images are available at the [GitHub Container Registry](https://github.com/orgs/omnetpp/packages?repo_name=omnetpp).

    To run in distrobox (recommended, GUI supported):
    
    `distrobox assemble create --file  https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-distrobox.ini`


    To run a container with OMNeT++ (core version, no GUI):
    
    `docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" ghcr.io/omnetpp/omnetpp:u24.04-@VERSION@`

---
This release focuses on incremental improvements and refinements rather than
introducing major new features. Key enhancements include Analysis Tool
improvements such as configurable bin setup for "histogram from vectors" charts,
global menu support in Qtenv, enhanced dark theme support throughout the IDE,
and various other usability and stability improvements across the platform.

Issues [fixed](https://github.com/omnetpp/omnetpp/issues?q=is%3Aissue+is%3Aclosed+milestone%3A6.3) in version 6.3.0.
