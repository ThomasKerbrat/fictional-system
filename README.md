# fictional-system

Minimal setup for typescript library dependencies including definitions

``` bash
cd ts-lib
npm run build
cd ../ts-app
npm install
node index.js
```

VSCode typings are automatically supported and imported by the `node_modules/ts-lib/build/*.d.ts` definition files.

# Initial setup

In the development machines, we can link the two projects together to speed up the development cycle.
The library `ts-lib` will be linked to its dependent `ts-app`.

``` bash
cd ts-lib
npm link # Creates a global simlink to this module.
cd ../ts-app
npm link ts-lib # This is the name of the package, not the directory's.
npm install
npm start
```
