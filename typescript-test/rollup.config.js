const moduleName = 'typescript-test';

export default {
    entry: '.tmp/a.js',
    format: 'umd',
    moduleName: moduleName,
    dest: `build/${ moduleName }.js`,
}
