import GuiFeature, {MAIN} from './gui.feature';
import type { FILTERS } from 'src/filters/filters-service';

//import './style.css';
GuiFeature.setup(MAIN, ({ filterListSlot, activeFiltersSlot, run }) => {
    const availableFiltersList = document.createElement('ul');
    const activeFilterList = document.createElement('ol');
    activeFiltersSlot.subscribe(renderActiveFilters(activeFilterList));

    run(async () => {
        for (const filter of filterListSlot) {
            const item = document.createElement('li');
            item.addEventListener('click', filter.perform);
            item.innerHTML = filter.filterId;
            availableFiltersList.appendChild(item);
        }
        
    })

    document.body.appendChild(availableFiltersList)
    document.body.appendChild(activeFilterList)
});

function renderActiveFilters(container:HTMLOListElement): (activeFilters:Array<FILTERS>) => void {
    return (activeFilters:Array<FILTERS>): void => {
        container.innerHTML = '';
        for (const filter of activeFilters) {
            const item = document.createElement('li');
            item.innerHTML = filter;
            container.appendChild(item)
        }
    }
}