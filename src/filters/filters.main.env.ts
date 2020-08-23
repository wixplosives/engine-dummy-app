import FiltersFeature from './filters.feature';
import { MAIN } from '../gui/gui.feature';
import {FiltersService, FILTERS} from './filters-service';

FiltersFeature.setup(MAIN, ({}, {guiFeature: {filterListSlot, activeFiltersSlot}}) => {
    const service = new FiltersService(activeFiltersSlot);
    filterListSlot.register({
        filterId: FILTERS.BLUR,
        perform: () => {
            service.applyFilter(FILTERS.BLUR);
        }
    })
    filterListSlot.register({
        filterId: FILTERS.BNW,
        perform: () => {
            service.applyFilter(FILTERS.BNW);
        }
    })
});