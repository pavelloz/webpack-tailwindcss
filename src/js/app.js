import log from './log';
import(/* webpackChunkName: "deferred" */ './deferred').then((module) => module.default());

import(/* webpackChunkName: "prefetched", webpackPrefetch: true */ './prefetched').then(({ default: run }) => {
  run();
});

import(/* webpackChunkName: "prefetched-delayed", webpackPrefetch: true */ './prefetched-delayed').then(
  ({ default: run }) => {
    setTimeout(() => {
      run();
    }, 2000);
  }
);

log('Executed: app.js');
