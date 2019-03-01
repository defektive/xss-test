---
title: Test script-src wildcard subdomain
description: Test page for CSP script-src wildcard subdomain
csp_script_src: "*.github.io"
---
This is a simple subdomain whitelist so both scripts should load.

{% include csp_test_page.html %}
