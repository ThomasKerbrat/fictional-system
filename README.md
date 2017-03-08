# fictional-system
Minimal setup for typescript library dependencies including definitions

``` bash
cd typescript-test
npm run build
cd ../ts-dep
npm install
node index.js
```

VSCode typings are automatically supported and imported by the `node_modules/typescript-test/build/*.d.ts` definition files.
