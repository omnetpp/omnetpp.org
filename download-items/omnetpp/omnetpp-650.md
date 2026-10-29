---
id: omnetpp-650
download: true
layout: download-details-omnetpp
version: 6.5.0
title: OMNeT++ @VERSION@
date: 2026-10-29
sortkey: "2026-10-29"
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
    filesize: 432544122
    sha256: d4f40a1c8bc17a0d9a95a52b57f4c0476bd11effc2850edeb279d0608b0d5cbd
    description: |
      Use the `install.sh` script in the root directory of the archive to install dependencies and build OMNeT++.
      Supported: Ubuntu, Debian, Fedora, openSUSE Leap, Arch Linux, AlmaLinux and other similar distros.
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-linux-aarch64.tgz
    filesize: 431588901
    sha256: f4622862b47b470eab70305ada26eea12294689613c181aae7b64a903261b3a9
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
    filesize: 1218469545
    sha256: b43232b417cef0bb40f08dbcf850666879638aed6e1dc02aadc1cdd1047d505c

- id: macos
  downloads:
  - opp_env: true
    brief: We recommend using the `opp_env` package manager to install OMNeT++ and other models and frameworks.
  - arch: aarch64
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-macos-aarch64.tgz
    filesize: 428995161
    sha256: da36009b159d10dbc943151e1f97b186539e1e0f17d4d68c7312c2707c5f9de5
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
    filesize: 430354156
    sha256: e6673b60855440dd240aba628401a84f76bb68156793ac479abe44f65367d0a3

- id: core
  description: |
    This is the architecture independent source version of OMNeT++. Useful for installing OMNeT++ on a system where no
    IDE or GUI is required. Use the `install.sh` script in the root directory of the archive to install all dependencies
    and build OMNeT++. To install without Qtenv support, use `install.sh --no-gui`.
  downloads:
  - arch: generic
    download-file-url: https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-core.tgz
    filesize: 84219793
    sha256: 2e7dcea63abe235716e3a63ffce17a294775e99a8bd313172c367b932f18972f

- id: docker
  description: |
    Container images are available at the [GitHub Container Registry](https://github.com/orgs/omnetpp/packages?repo_name=omnetpp).

    To run in distrobox (recommended, GUI supported):
    
    `distrobox assemble create --file  https://github.com/omnetpp/omnetpp/releases/download/omnetpp-@VERSION@/omnetpp-@VERSION@-distrobox.ini`


    To run a container with OMNeT++ (core version, no GUI):
    
    `docker run --rm -it -v "$(pwd):/root/models" -u "$(id -u):$(id -g)" ghcr.io/omnetpp/omnetpp:u26.04-@VERSION@`

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
