---
layout: page
title:  Simplifying OMNeT++ Model Installations with opp_env
---

> NOTE: For installing `opp_env`, visit [opp_env on GitHub](https://github.com/omnetpp/opp_env/blob/main/INSTALL.md) for instructions.

Do you like using the `pip` command for installing Python packages? Pip makes package installation a breeze. Now imagine if you could install OMNeT++ simulation models and model frameworks just as easily.

## The Problem: Manual Installation Hassles

Installing many OMNeT++ models and model frameworks can be tedious. They often require:

- A specific OMNeT++ version (which might not be the latest one)
- Dependencies like INET, Veins, or Simu5G in correct versions
- Adjusting variables in config files
- Sourcing environment scripts
- Importing projects into the IDE and checking cross-references

Wouldn’t it be great if all of this could be automated?

### Overcoming Compatibility Issues and "Bitrot"

Compiling older models can be challenging due to bitrot. Changes in compilers, system headers, or library versions can disrupt the build process and require time-consuming fixes.

## Enter opp_env

We developed **[opp_env](https://github.com/omnetpp/opp_env)** to solve these problems. It can:

- **Download and install simulation models**, including the appropriate OMNeT++ version.
- Provide a **ready-to-use shell environment** for running simulations.
- Set up a development environment from a remote Git repository (useful for model developers).

With an internal database of over 70 models, opp_env offers a streamlined approach to handle these installations automatically.

### Example Session with opp_env

Here’s a quick demonstration:

1. **List the available models**:

    ```bash
    $ opp_env list
    ...
    simproctc                   2.0.2
    simu5g                      1.2.2  1.2.1  1.1.0  git
    simulte                     1.2.0  1.1.0  0.9.1
    soa4core                    20240124
    ...
    ```

2. **Get information on specific simulation model**:

    ```bash
    $ opp_env info simu5g-latest
    ```

    This shows essential details like download URL and dependencies:

    ```plaintext
    simu5g-1.2.2: 5G NR and LTE/LTE-A user-plane simulation model
    Requires:
    - inet: 4.5.2 / 4.5.1 / 4.5.0
    - omnetpp: 6.1.0 / 6.0.3 / 6.0.2
    ...
    ```

3. **Set up a model and open a shell environment**:

    ```bash
    $ mkdir my_workspace
    $ cd my_workspace
    $ opp_env init
    $ opp_env install simu5g-latest
    $ opp_env shell
    ```

    After the install command, the workspace directory has the following directories:

    ```bash
    omnetpp-6.0.3/      inet-4.5.2/      simu5g-1.2.2/
    ```

    From the active shell, you can start running simulations immediately:

    ```bash
    $ cd simulations/NR/standalone
    $ ./run
    ```

### Streamlined Workflow with One Command

To condense the above steps, use the following all-in-one command:

```bash
$ opp_env shell -w my_workspace --init --install simu5g-latest
```

This creates a working environment with just one command!

### Learn More

After installing `opp_env`, use `-h` (or `--help`) to access general help, or `opp_env <subcommand> -h` for detailed guidance on a specific subcommand (e.g., `opp_env install -h`). The help includes extensive descriptions and practical examples for all available options.

For installation instructions and more detailed information, check out the project’s GitHub page: [opp_env on GitHub](https://github.com/omnetpp/opp_env).
