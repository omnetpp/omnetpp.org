#! /usr/bin/env python3

import sys
import csv
import re

fname = sys.argv[1]

fmt = """---
download: true
layout: download-details
title: TODO - {1}
category: models
years-active: TODO
tags: TODO
github-url: {0}
website-url: TODO
---

{2}
"""

def mkdesc(url,desc):
    fname = re.sub(r"^.*/", "", url) + ".md"
    title = re.sub(r"[.\n].*", "", desc)
    print(fname)
    with open(fname,"w") as file:
        file.write(fmt.format(url, title, desc))

with open(fname, newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        url = row[0]
        status = row[1]
        reason = row[2]
        desc = row[3]
        mkdesc(url, desc)


