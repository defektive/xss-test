console.log('csp test script loaded');
setTimeout(function () {
  var node = document.querySelector('script[src="/csp/csp-test.js"]');
  var log = document.createElement('pre');
  node.parentNode.insertBefore(log, node);

  if (window.xssTest) {
    log.appendChild(document.createTextNode(Object.keys(window.xssTest).join('\n')));
  } else {
    log.appendChild(document.createTextNode('Nothing Loaded'));
  }
}, 500)
