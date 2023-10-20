import(/* webpackChunkName: "defered-module" */ './defered-module').then((module) => module.default());

import(/* webpackChunkName: "prefetched-module", webpackPrefetch: true */ './prefetched-module').then((module) => {
  setTimeout(() => {
    module.default();
  }, 2000);
});

console.log('Hello from app.js');
