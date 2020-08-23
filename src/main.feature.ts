import { Feature, Environment } from '@wixc3/engine-core';

import Gui from './gui/gui.feature';
import Filters from './filters/filters.feature';

export default new Feature({
    id: 'enginePlayGroundExample',
    dependencies: [Gui, Filters],
    api: {},
});