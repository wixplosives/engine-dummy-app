import { Feature, Slot, Environment } from '@wixc3/engine-core';
import type { FILTERS } from 'src/filters/filters-service';
export const MAIN = new Environment('main', 'window', 'single');

export interface FilterHook  {
    filterId: string,
    perform(): void
}

export default new Feature({
    id: 'guiFeature',
    dependencies: [],
    api: {
        filterListSlot: Slot.withType<FilterHook>().defineEntity(MAIN),
        activeFiltersSlot: Slot.withType<Array<FILTERS>>().defineEntity(MAIN)
    },
});