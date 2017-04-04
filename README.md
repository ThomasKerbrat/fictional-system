# fictional-system

Functional setup for TypeScript library dependencies including definitions.

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
In the `ts-app`'s `node_modules` directory, a simlink to `ts-lib` will be created.
The developer will have to run a build in the library directory for it to be accessible to the application.

``` bash
cd ts-lib
npm link # Creates a global simlink to this module.
cd ../ts-app
npm link ts-lib # This is the name of the package, not the directory.
```

# Tests

The library has a test suite than can be ran with Mocha.
It uses Chai as its assertion library.

For the normal build, the `tsconfig.json` file excludes the spec files.
This is not the case for the test build, obviously.

See [https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6]().
