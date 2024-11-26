let chokidar = require('chokidar');

const watcher = chokidar.watch('/var/run', {
  persistent: true,
  ignorePermissionErrors: true,
  log: true,
});

watcher.on('all', console.log);

