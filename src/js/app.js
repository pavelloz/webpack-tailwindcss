import '../css/app.css';

import('./dynamic_import').then(module => module.default());

console.log('hello world');