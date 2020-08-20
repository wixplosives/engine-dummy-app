import { Feature } from '@wixc3/engine-core';
import Dummy from './dummy/dummy.feature';

export default new Feature({
    id: 'enginePlayGroundExample',
    dependencies: [Dummy],
    api: {},
});