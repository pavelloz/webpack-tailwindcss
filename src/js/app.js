import(/* webpackChunkName: "deferred-module" */ './deferred-module').then((module) => module.default());

import(/* webpackChunkName: "prefetched-and-delayed-module", webpackPrefetch: true */ './prefetched-module').then(
  (module) => {
    setTimeout(() => {
      module.default(`Executed: Prefetched module, delayed by 2 seconds`);
    }, 2000);
  }
);

import(/* webpackChunkName: "prefetched-module", webpackPrefetch: true */ './prefetched-module').then((module) => {
  module.default();
});

console.log('Executed: app.js');
