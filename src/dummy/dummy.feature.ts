import { Feature, Environment } from '@wixc3/engine-core';

export const MAIN = new Environment('main', 'window', 'single');

export default new Feature({
    id: 'dummyApp',
    dependencies: [],
    api: {},
});
