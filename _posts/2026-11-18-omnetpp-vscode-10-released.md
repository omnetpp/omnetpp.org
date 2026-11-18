---
layout: post
title: OMNeT++ Development Environment for VS Code 1.0
category: Software
details-url: https://marketplace.visualstudio.com/items?itemName=opensim.omnetpp-vscode
excerpt: |
    We are happy to announce the first stable release of the OMNeT++ Development
    Environment, a Visual Studio Code extension for the NED, MSG and INI languages.
    It contains a complete language server built on tree-sitter grammars, and works
    without an OMNeT++ installation: the built-in NED types and the configuration
    option registry are bundled. The current version is 1.0.2, available from the
    VS Code Marketplace, the Open VSX Registry, and the GitHub releases page.
---
We are happy to announce the first stable release of the OMNeT++ Development
Environment, a Visual Studio Code extension for the NED, MSG and INI languages.
It contains a complete language server built on tree-sitter grammars, and works
without an OMNeT++ installation: the built-in NED types and the configuration
option registry are bundled. The current version is 1.0.2, available from the
[VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=opensim.omnetpp-vscode),
the [Open VSX Registry](https://open-vsx.org/extension/opensim/omnetpp-vscode), and as a
`.vsix` file from the [GitHub releases page](https://github.com/omnetpp/omnetpp-vscode/releases/latest).

Highlights:

* **Editing support** for NED, MSG and INI files: syntax highlighting, context-aware
  content assist, formatting, snippets, and diagnostics with quick fixes, including
  full validation of INI configuration options.
* **Cross-language navigation and refactoring** (NED, MSG, INI): go-to-definition,
  find references, rename, and type hierarchy. INI keys are resolved against the
  module tree of the selected network, and dead keys and type conflicts are flagged.
* **Impact analysis**: a "Used By" view, reference counts, and "Show Impact" to see
  what breaks if you change a type.
* **Graphical NED preview** with the same icons, display strings and auto-layout as
  the Eclipse-based IDE, with SVG/PNG export.
* **Sequence Chart and Event Log** for `.elog` files, ported from the Eclipse-based
  IDE. They handle multi-gigabyte event logs and can follow a running simulation.
* **NED documentation generation** in HTML, Markdown or reStructuredText format.
* **Command-line tools**: `opp_lint` (linter for CI and pre-commit hooks), `opp_docgen`
  (documentation generator), `opp_lsp` (the language server, for Neovim, Helix, Emacs
  and other LSP editors), and `opp_ide_mcp` (MCP server). Install them from the
  extension, or with `npm install -g @omnetpp/opp-tools`.
* **AI agent support**: MCP tools that let an AI agent query and safely refactor your
  model, and an "OMNeT++: Set Up AI Agents…" command that installs OMNeT++ skills and
  the MCP server into Claude Code, Codex and Devin. GitHub Copilot in VS Code gets them
  with no setup.

The extension is free for noncommercial use, on the same conditions as the OMNeT++
simulation kernel's Academic Public License. Commercial use requires an
[OMNEST](https://omnest.com) license.

Read the [User Guide](https://github.com/omnetpp/omnetpp-vscode/blob/main/docs/USER_GUIDE.md)
for details on every feature.
