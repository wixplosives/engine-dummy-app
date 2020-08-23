import { Feature } from '@wixc3/engine-core';
import GuiFeature from '../gui/gui.feature';

export default new Feature({
    id: 'filtersFeature',
    dependencies: [GuiFeature],
    api: {},
});