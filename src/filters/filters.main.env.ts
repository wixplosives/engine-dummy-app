import FiltersFeature, { processingEnv } from './filters.feature';
import { MAIN } from '../gui/gui.feature';
import {FILTERS} from './filters-service';
import {workerInitializer} from '@wixc3/engine-core'

const availableFilters:Array<FILTERS> = [FILTERS.BLUR, FILTERS.BNW]

FiltersFeature.setup(MAIN, ({filterService}, {COM: {startEnvironment},guiFeature: {filterListSlot, activeFiltersSlot}}) => {
    startEnvironment(processingEnv, workerInitializer());
    availableFilters.forEach((filter:FILTERS) => {
        filterListSlot.register({
            filterId: filter,
            perform: async () => {
                activeFiltersSlot.register(await filterService.applyFilter(filter))
            }
        })
    })
});