---
title: Test disown opener
description: Test page for CSP disown opener
csp_disown_opener: 1
---

<h2><a href="/csp/">CSP Testing</a> / {{ page.title }}</h2>

This page will test disown opener.
{{ page.description }}


<a href="https://defektive.github.io/xss/popup" target="_blank">Test</a>
<pre id="asd"></pre>
<script>
window.addEventListener("message", function (e) {
  console.log(e)
  let el = document.createTextNode(JSON.stringify(e.data) + '\n');
  document.getElementById('asd').appendChild(el);
}, false);

setInterval(function (){
  window.postMessage('hello from xss-test', 'https://pwnhub.pw/')
}, 5000)
</script>
