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

# Initial setup

In the development machines, we can link the two projects together to speed up the development cycle.
The library `typescript-test` will be linked to its dependent `ts-dep`.

``` bash
cd typescript-test
npm link # Creates a global simlink to this module.
cd ../ts-dep
npm link typescript-test # This is the name of the package, not the directory's.
npm install
npm start
```
