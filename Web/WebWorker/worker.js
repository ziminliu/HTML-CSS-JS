// worker 的处理文件
self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);