const {
    FuseBox,
    HTMLPlugin,
    Sparky
} = require('fuse-box');
const TypeHelper = require('fuse-box-typechecker').TypeHelper;

Sparky.task("test-not-working", () => {
    return new Promise((resolve, reject) => {
        const dir = './app/components/';
        const testWatch = TypeHelper({
            tsConfig: 'tsconfig.json',
            basePath: dir,
            name: 'Watch Async test-not-working'
        });
        testWatch.runWatch(dir);
    });
});

Sparky.task("test-working", () => {
    return new Promise((resolve, reject) => {
        process.chdir('app/components');
        const dir = './';
        const testWatch = TypeHelper({
            tsConfig: dir + 'tsconfig.json',
            name: 'Watch Async test-working'
        });
        testWatch.runWatch(dir);
    });
});