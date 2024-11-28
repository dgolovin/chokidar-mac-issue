This simple example is to replicate error on macOS when watching `/var/run` folder for using `chokidar@4` package.
The same code works fine after inatalling chokidar@3.6 usign `npm install chokidar@3.6`.

To replicate:

1. npm install
2. node .


```
$node .
addDir /var/run Stats {
  dev: 16777233,
  mode: 16893,
  nlink: 40,
  uid: 0,
  gid: 1,
  rdev: 0,
  blksize: 4096,
  ino: 109869984,
  size: 1280,
  blocks: 0,
  atimeMs: 1732660322970.0527,
  mtimeMs: 1732659552609.9443,
  ctimeMs: 1732659552609.9443,
  birthtimeMs: 1729583360000
}
node:internal/fs/watchers:247
    const error = new UVException({
                  ^

Error: UNKNOWN: unknown error, watch '/var/run/.sim_diagnosticd_socket'
    at FSWatcher.<computed> (node:internal/fs/watchers:247:19)
    at watch (node:fs:2468:36)
    at createFsWatchInstance (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:130:31)
    at setFsWatchListener (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:175:19)
    at NodeFsHandler._watchWithNodeFs (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:329:22)
    at NodeFsHandler._handleFile (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:395:29)
    at NodeFsHandler._addToNodeFs (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:619:31)
Emitted 'error' event on FSWatcher instance at:
    at FSWatcher._handleError (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/index.js:538:18)
    at NodeFsHandler._addToNodeFs (/Users/eskimo/Sources/chokidar-mac-issue/node_modules/.pnpm/chokidar@4.0.1/node_modules/chokidar/handler.js:627:26) {
  errno: -102,
  syscall: 'watch',
  code: 'UNKNOWN',
  path: '/var/run/.sim_diagnosticd_socket',
  filename: '/var/run/.sim_diagnosticd_socket'
}

Node.js v22.7.0
```
