import { Feature, Environment, Service, COM } from '@wixc3/engine-core';
import GuiFeature from '../gui/gui.feature';
import type {FiltersService} from './filters-service';
 

export const processingEnv = new Environment('processing', 'worker', 'single');


export default new Feature({
    id: 'filtersFeature',
    dependencies: [COM, GuiFeature],
    api: {
        filterService: Service.withType<FiltersService>().defineEntity(processingEnv).allowRemoteAccess()
    },
});